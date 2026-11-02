(() => {
  const boot = window.__WIX_UNITY_BOOT__ || {};
  const loaderOverlay = document.getElementById("unity-loader-overlay");
  const progressBar = document.getElementById("unity-loader-progress-bar");
  const progressLabel = document.getElementById("unity-loader-progress-label");
  const phaseLabel = document.getElementById("unity-loader-phase");
  const currentAssetLabel = document.getElementById("unity-loader-current-asset");
  const downloadDetailLabel = document.getElementById("unity-loader-download-detail");
  const bundleDetailLabel = document.getElementById("unity-loader-bundle-detail");
  const statusLabel = document.getElementById("unity-loader-status");
  const canvas = document.getElementById("unity-canvas");
  const stageWrap = canvas?.closest(".unity-stage-wrap");
  const loaderPanel = document.querySelector(".unity-loader-panel");
  const kickerLabel = document.querySelector(".unity-loader-kicker");
  let loaderVideo = null;
  let resumeLoaderVideo = null;
  let introScreen = null;
  let introCoverImage = null;
  let introPlayButton = null;
  let splashQueue = [];
  let currentSplashIndex = -1;
  let activeUnityInstance = null;
  let unityAdsBootstrapStarted = false;

  const trackedResources = boot.trackedResources || {};
  const activeResources = new Map();
  const performanceTrackedBytes = new Map();
  let unityProgress = 0;
  let loaderReady = false;
  let gameReady = false;
  let overlayHidden = false;
  let splashSequenceFinished = false;
  let splashSequenceStarted = false;
  let userStartedExperience = false;
  let audioGateActive = true;
  let activeHighscoresSignature = "";
  const managedAudioContexts = new Set();
  const pendingAudioResumes = new Set();
  const gatedMediaElements = new Map();
  const urlParams = new URLSearchParams(window.location.search);
  const unityAdsConfig = {
    configured: Boolean(boot.ads?.configured),
    client: String(boot.ads?.client || "").trim(),
    channel: String(boot.ads?.channel || "").trim(),
    frequencyHint: String(boot.ads?.frequencyHint || "30s").trim() || "30s",
    testMode: Boolean(boot.ads?.testMode),
    admobInterstitialSlot: String(boot.ads?.admobInterstitialSlot || "").trim(),
    admobRewardedSlot: String(boot.ads?.admobRewardedSlot || "").trim()
  };
  let unityAdsApiReady = false;
  let unityAdsReadyState = unityAdsConfig.configured ? "loading-script" : "not-configured";
  let unityAdsSoundState = "on";
  let unityAdsRequestCounter = 0;
  let unityAdsLastError = "";
  let unityAdsScriptLoaded = false;
  let unityAdsScriptErrored = false;
  let unityAdsReadyTimeoutId = 0;
  const unityAdsDebugHistory = [];
  const DEBUG_STORAGE_KEY = "wixgames_ads_reload_debug";
  const AD_RATE_LIMIT_STORAGE_KEY = "wixgames_ad_rate_limits_v1";
  const INITIAL_AD_DELAY_MS = 5 * 60 * 1000;
  const playerContextId = String(urlParams.get("wg_player_context_id") || "").trim();
  const queryAdSessionStartedAt = String(urlParams.get("wg_ad_session_started_at") || "").trim();
  const queryAdsEnabled = String(urlParams.get("wg_ads_enabled") || "").trim();
  const queryAdsenseChannel = String(urlParams.get("wg_adsense_channel") || "").trim();
  const queryGoogleAdRateLimit = String(urlParams.get("wg_google_ad_rate_limit") || "").trim();
  const queryFallbackAdRateLimit = String(urlParams.get("wg_fallback_ad_rate_limit") || "").trim();
  const queryIncludeStreamingInitialLoad = String(urlParams.get("wg_include_streaming_initial_load") || "").trim();
  let unityAdRateLimitCache = null;
  function getParentPlayerContextById() {
    try {
      if (!playerContextId || !window.parent || window.parent === window) {
        return null;
      }

      const contexts = window.parent.__WIX_PLAYER_CONTEXTS__;
      return contexts && typeof contexts === "object" ? contexts[playerContextId] || null : null;
    } catch {
      return null;
    }
  }
  const queryFallbackAds = (() => {
    const raw = urlParams.get("wg_fallback_ads");
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed)
        ? parsed
          .map((entry) => ({
            id: String(entry?.id || "").trim(),
            videoUrl: String(entry?.videoUrl || "").trim(),
            videoSources: Array.isArray(entry?.videoSources)
              ? entry.videoSources
                .map((source) => ({
                  url: String(source?.url || "").trim(),
                  width: Number(source?.width) || 0,
                  height: Number(source?.height) || 0,
                  label: String(source?.label || "").trim()
                }))
                .filter((source) => source.url)
              : [],
            promotedGame: entry?.promotedGame && typeof entry.promotedGame === "object"
              ? {
                  id: String(entry.promotedGame.id || "").trim(),
                  slug: String(entry.promotedGame.slug || "").trim(),
                  title: String(entry.promotedGame.title || "").trim(),
                  coverImage: String(entry.promotedGame.coverImage || "").trim(),
                  platformLinks: {
                    Web: String(entry.promotedGame.platformLinks?.Web || "").trim(),
                    PC: String(entry.promotedGame.platformLinks?.PC || "").trim(),
                    Mobile: String(entry.promotedGame.platformLinks?.Mobile || "").trim(),
                    Console: String(entry.promotedGame.platformLinks?.Console || "").trim()
                  },
                  storeLinks: {
                    steam: String(entry.promotedGame.storeLinks?.steam || "").trim(),
                    appStore: String(entry.promotedGame.storeLinks?.appStore || "").trim(),
                    googlePlay: String(entry.promotedGame.storeLinks?.googlePlay || "").trim(),
                    xbox: String(entry.promotedGame.storeLinks?.xbox || "").trim(),
                    switch: String(entry.promotedGame.storeLinks?.switch || "").trim()
                  }
                }
              : null
          }))
          .filter((entry) => entry.videoUrl)
        : [];
    } catch {
      return [];
    }
  })();
  const queryFallbackVideos = (() => {
    const raw = urlParams.get("wg_fallback_videos");
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.map((value) => String(value || "").trim()).filter(Boolean) : [];
    } catch {
      return [];
    }
  })();
  function getParentPlayerContext() {
    const byId = getParentPlayerContextById();
    if (byId) {
      return byId;
    }

    try {
      return window.parent && window.parent !== window
        ? window.parent.__WIX_CURRENT_PLAYER_CONTEXT__ || null
        : null;
    } catch {
      return null;
    }
  }

  function getResolvedFallbackAds() {
    const parentPlayerContext = getParentPlayerContext();
    if (queryFallbackAds.length) {
      return queryFallbackAds;
    }

    if (Array.isArray(parentPlayerContext?.fallbackAds)) {
      return parentPlayerContext.fallbackAds.filter((entry) => entry && entry.videoUrl);
    }

    return [];
  }

  function getResolvedFallbackVideos() {
    const fallbackAds = getResolvedFallbackAds();
    if (fallbackAds.length) {
      return fallbackAds.map((entry) => entry.videoUrl).filter(Boolean);
    }

    if (queryFallbackVideos.length) {
      return queryFallbackVideos;
    }

    const parentPlayerContext = getParentPlayerContext();
    if (Array.isArray(parentPlayerContext?.fallbackAdVideos)) {
      return parentPlayerContext.fallbackAdVideos.filter(Boolean);
    }

    return [];
  }

  function getResolvedAdsenseChannelId() {
    const parentPlayerContext = getParentPlayerContext();
    return String(parentPlayerContext?.adsenseChannelId || queryAdsenseChannel || unityAdsConfig.channel || "").trim();
  }

  function normalizeAdsEnabled(value, fallback = true) {
    if (typeof value === "boolean") {
      return value;
    }

    if (value === null || value === undefined || value === "") {
      return Boolean(fallback);
    }

    const normalized = String(value).trim().toLowerCase();
    if (["true", "1", "yes", "on"].includes(normalized)) {
      return true;
    }

    if (["false", "0", "no", "off"].includes(normalized)) {
      return false;
    }

    return Boolean(fallback);
  }

  function normalizeAdRateLimitMinutes(value) {
    const parsed = Number(value);
    return [2, 3, 4, 5, 6].includes(parsed) ? parsed : 0;
  }

  function getResolvedAdSettings() {
    const parentPlayerContext = getParentPlayerContext();
    return {
      enabled: normalizeAdsEnabled(parentPlayerContext?.adSettings?.enabled ?? queryAdsEnabled, true),
      googleRateLimitMinutes: normalizeAdRateLimitMinutes(parentPlayerContext?.adSettings?.googleRateLimitMinutes ?? queryGoogleAdRateLimit),
      fallbackRateLimitMinutes: normalizeAdRateLimitMinutes(parentPlayerContext?.adSettings?.fallbackRateLimitMinutes ?? queryFallbackAdRateLimit)
    };
  }

  function getAdSessionStartedAtMs() {
    const parentPlayerContext = getParentPlayerContext();
    const rawValue = String(parentPlayerContext?.adSessionStartedAt || queryAdSessionStartedAt || "").trim();
    const parsed = Date.parse(rawValue);
    return Number.isFinite(parsed) ? parsed : Date.now();
  }

  function isInitialAdDelayEnabled() {
    const adSettings = getResolvedAdSettings();
    return Number(adSettings.googleRateLimitMinutes) > 0 || Number(adSettings.fallbackRateLimitMinutes) > 0;
  }

  function getInitialAdDelayState() {
    if (!isInitialAdDelayEnabled()) {
      const startedAtMs = getAdSessionStartedAtMs();
      return {
        active: false,
        enabled: false,
        remainingMs: 0,
        startedAt: new Date(startedAtMs).toISOString(),
        delayMs: INITIAL_AD_DELAY_MS
      };
    }

    const startedAtMs = getAdSessionStartedAtMs();
    const remainingMs = Math.max(0, (startedAtMs + INITIAL_AD_DELAY_MS) - Date.now());
    return {
      active: remainingMs > 0,
      enabled: true,
      remainingMs,
      startedAt: new Date(startedAtMs).toISOString(),
      delayMs: INITIAL_AD_DELAY_MS
    };
  }

  function getResolvedLoaderSettings() {
    const parentPlayerContext = getParentPlayerContext();
    return {
      includeStreamingAssetsInInitialLoad: normalizeAdsEnabled(
        parentPlayerContext?.loaderSettings?.includeStreamingAssetsInInitialLoad ?? queryIncludeStreamingInitialLoad,
        true
      )
    };
  }

  function getAdRateLimitScopeKey(provider) {
    const hostGameId = String(getFallbackHostGame().id || "").trim();
    const hostSlug = String(getFallbackHostGame().slug || "").trim();
    const gameKey = hostGameId || hostSlug;
    if (!gameKey) {
      return "";
    }

    return `${gameKey}:${provider}`;
  }

  function readAdRateLimitStore() {
    try {
      const raw = window.localStorage?.getItem(AD_RATE_LIMIT_STORAGE_KEY) || "";
      const parsed = raw ? JSON.parse(raw) : {};
      unityAdRateLimitCache = parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      unityAdRateLimitCache = unityAdRateLimitCache && typeof unityAdRateLimitCache === "object" ? unityAdRateLimitCache : {};
    }

    return { ...unityAdRateLimitCache };
  }

  function writeAdRateLimitStore(nextStore) {
    unityAdRateLimitCache = nextStore && typeof nextStore === "object" ? { ...nextStore } : {};
    try {
      window.localStorage?.setItem(AD_RATE_LIMIT_STORAGE_KEY, JSON.stringify(unityAdRateLimitCache));
    } catch {}
  }

  function getAdRateLimitState(provider) {
    const adSettings = getResolvedAdSettings();
    const minutes = provider === "fallback" ? adSettings.fallbackRateLimitMinutes : adSettings.googleRateLimitMinutes;
    const scopeKey = getAdRateLimitScopeKey(provider);
    if (!scopeKey || minutes <= 0) {
      return {
        limited: false,
        minutes,
        remainingMs: 0,
        lastShownAt: ""
      };
    }

    const store = readAdRateLimitStore();
    const lastShownAtMs = Number(store[scopeKey] || 0);
    if (!Number.isFinite(lastShownAtMs) || lastShownAtMs <= 0) {
      return {
        limited: false,
        minutes,
        remainingMs: 0,
        lastShownAt: ""
      };
    }

    const remainingMs = Math.max(0, lastShownAtMs + (minutes * 60 * 1000) - Date.now());
    return {
      limited: remainingMs > 0,
      minutes,
      remainingMs,
      lastShownAt: new Date(lastShownAtMs).toISOString()
    };
  }

  function rememberShownAd(provider) {
    const rateLimitState = getAdRateLimitState(provider);
    if (rateLimitState.minutes <= 0) {
      return;
    }

    const scopeKey = getAdRateLimitScopeKey(provider);
    if (!scopeKey) {
      return;
    }

    const store = readAdRateLimitStore();
    store[scopeKey] = Date.now();
    writeAdRateLimitStore(store);
  }

  function getFallbackDebugState() {
    const parentPlayerContextById = getParentPlayerContextById();
    const parentPlayerContext = getParentPlayerContext();
    const fallbackAds = getResolvedFallbackAds();
    const fallbackVideos = getResolvedFallbackVideos();
    const adSettings = getResolvedAdSettings();
    return {
      readyState: fallbackVideos.length ? "unity-loader-fallback-ready" : "unity-loader-unconfigured",
      playerContextId,
      hasParentPlayerContextById: Boolean(parentPlayerContextById),
      hasQueryFallbackAds: queryFallbackAds.length > 0,
      hasQueryFallbackVideos: queryFallbackVideos.length > 0,
      hasParentPlayerContext: Boolean(parentPlayerContext),
      parentGameId: String(parentPlayerContext?.gameId || urlParams.get("wg_player_game_id") || ""),
      parentSlug: String(parentPlayerContext?.slug || urlParams.get("wg_player_slug") || ""),
      adSettings,
      fallbackAds,
      fallbackVideoCount: fallbackVideos.length,
      fallbackVideos
    };
  }

  function recordUnityAdsDebug(level, message, detail) {
    const entry = {
      at: new Date().toISOString(),
      scope: "unity-loader",
      level: String(level || "log"),
      message: String(message || "").trim(),
      detail: detail && typeof detail === "object" ? detail : detail ?? null
    };
    unityAdsDebugHistory.push(entry);
    if (unityAdsDebugHistory.length > 150) {
      unityAdsDebugHistory.splice(0, unityAdsDebugHistory.length - 150);
    }

    const logArgs = [`[WixGamesAdsUnity] ${entry.message}`];
    if (entry.detail !== null) {
      logArgs.push(entry.detail);
    }

    if (entry.level === "error") {
      console.error(...logArgs);
    } else if (entry.level === "warn") {
      console.warn(...logArgs);
    } else {
      console.log(...logArgs);
    }

    try {
      const existing = JSON.parse(sessionStorage.getItem(DEBUG_STORAGE_KEY) || "[]");
      const entries = Array.isArray(existing) ? existing : [];
      entries.push(entry);
      if (entries.length > 250) {
        entries.splice(0, entries.length - 250);
      }
      sessionStorage.setItem(DEBUG_STORAGE_KEY, JSON.stringify(entries));
    } catch {}
  }

  try {
    const restoredRaw = sessionStorage.getItem(DEBUG_STORAGE_KEY);
    if (restoredRaw) {
      const restoredEntries = JSON.parse(restoredRaw);
      if (Array.isArray(restoredEntries) && restoredEntries.length) {
        console.groupCollapsed("[WixGamesAdsUnity] Restored persisted ad/page logs");
        for (const entry of restoredEntries) {
          const prefix = "[" + String(entry?.scope || "unknown") + "] " + String(entry?.at || "");
          if (entry?.detail !== null && entry?.detail !== undefined) {
            console.log(prefix + " " + String(entry?.message || ""), entry.detail);
          } else {
            console.log(prefix + " " + String(entry?.message || ""));
          }
        }
        console.groupEnd();
      }
      sessionStorage.removeItem(DEBUG_STORAGE_KEY);
    }
  } catch {}

  window.addEventListener("pageshow", (event) => {
    recordUnityAdsDebug("log", "Unity loader pageshow fired.", {
      persisted: Boolean(event && event.persisted),
      href: String(window.location.href || "")
    });
  });
  window.addEventListener("pagehide", (event) => {
    recordUnityAdsDebug("warn", "Unity loader pagehide fired.", {
      persisted: Boolean(event && event.persisted),
      href: String(window.location.href || "")
    });
  });
  window.addEventListener("beforeunload", () => {
    recordUnityAdsDebug("warn", "Unity loader beforeunload fired.", {
      href: String(window.location.href || "")
    });
  });
  window.addEventListener("hashchange", () => {
    if (String(window.location.hash || "") === GOOGLE_FULLSCREEN_AD_HASH) {
      safariGoogleAdHashSeen = true;
    }
    recordUnityAdsDebug("warn", "Unity loader hashchange fired.", {
      href: String(window.location.href || ""),
      hash: String(window.location.hash || "")
    });
  });
  window.addEventListener("popstate", () => {
    if (String(window.location.hash || "") === GOOGLE_FULLSCREEN_AD_HASH) {
      safariGoogleAdHashSeen = true;
    }
    recordUnityAdsDebug("warn", "Unity loader popstate fired.", {
      href: String(window.location.href || ""),
      hash: String(window.location.hash || "")
    });
  });
  document.addEventListener("visibilitychange", () => {
    recordUnityAdsDebug("log", "Unity loader visibility changed.", {
      state: String(document.visibilityState || "")
    });
  });

  function emitUnityAdsEvent(name, detail) {
    try {
      window.dispatchEvent(new CustomEvent(`wixgames:ads:${name}`, { detail }));
    } catch {}
  }

  function updateUnityAdsReadyState(nextState, errorMessage = "") {
    unityAdsReadyState = String(nextState || "").trim() || unityAdsReadyState;
    if (errorMessage) {
      unityAdsLastError = String(errorMessage);
    }
    recordUnityAdsDebug("log", `Ready state -> ${unityAdsReadyState}`, errorMessage ? { error: unityAdsLastError } : null);
  }

  function buildUnityAdsDebugState() {
    const fallbackDebug = getFallbackDebugState();
    return {
      ...fallbackDebug,
      configured: unityAdsConfig.configured,
      ready: unityAdsConfig.configured && unityAdsApiReady,
      readyState: unityAdsReadyState,
      scriptLoaded: unityAdsScriptLoaded,
      scriptErrored: unityAdsScriptErrored,
      lastError: unityAdsLastError,
      client: unityAdsConfig.client,
      testMode: unityAdsConfig.testMode,
      initialDelay: getInitialAdDelayState(),
      admobInterstitialSlot: unityAdsConfig.admobInterstitialSlot,
      admobRewardedSlot: unityAdsConfig.admobRewardedSlot,
      likelyBlockedByClient: unityAdsReadyState === "script-error" || unityAdsReadyState === "timed-out-before-load",
      isBrave: Boolean(navigator.brave),
      userAgent: String(navigator.userAgent || ""),
      recentLogs: unityAdsDebugHistory.slice(-40)
    };
  }

  const ANALYTICS_VISITOR_COOKIE = "wixgames_vid";
  const ANALYTICS_VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
  const GOOGLE_FULLSCREEN_AD_HASH = "#goog_fullscreen_ad";
  let safariGoogleAdActive = false;
  let safariGoogleAdHashSeen = false;

  function isLikelySafariBrowser() {
    const userAgent = String(navigator.userAgent || "");
    const vendor = String(navigator.vendor || "");
    return /Safari/i.test(userAgent)
      && /Apple/i.test(vendor || userAgent)
      && !/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\/|FxiOS|Firefox|OPiOS|OPR|DuckDuckGo/i.test(userAgent);
  }

  function shouldForceSafariFallbackAds() {
    return isLikelySafariBrowser() && getResolvedFallbackVideos().length > 0;
  }

  function clearSafariGoogleAdHash(reason = "") {
    if (!isLikelySafariBrowser()) {
      return false;
    }

    if (String(window.location.hash || "") !== GOOGLE_FULLSCREEN_AD_HASH) {
      return false;
    }

    try {
      const nextUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(window.history.state, "", nextUrl);
      recordUnityAdsDebug("warn", "Removed Safari Google fullscreen ad hash from Unity loader URL.", {
        reason,
        href: String(window.location.href || ""),
        hash: String(window.location.hash || "")
      });
      safariGoogleAdHashSeen = false;
      return true;
    } catch (error) {
      recordUnityAdsDebug("error", "Failed to remove Safari Google fullscreen ad hash.", {
        reason,
        error: String(error?.message || error || ""),
        href: String(window.location.href || "")
      });
      return false;
    }
  }

  function scheduleSafariGoogleAdHashCleanup(reason = "") {
    if (!isLikelySafariBrowser()) {
      return;
    }

    const attempt = (delay) => {
      window.setTimeout(() => {
        clearSafariGoogleAdHash(`${reason}:${delay}`);
      }, delay);
    };

    attempt(0);
    attempt(32);
    attempt(96);
  }

  function getCookieValue(name) {
    const encodedName = encodeURIComponent(String(name || ""));
    const cookies = String(document.cookie || "").split(";");
    for (const cookie of cookies) {
      const trimmed = cookie.trim();
      if (trimmed.startsWith(encodedName + "=")) {
        return trimmed.slice(encodedName.length + 1);
      }
    }
    return "";
  }

  function setClientCookie(name, value, maxAgeSeconds) {
    document.cookie = [
      `${encodeURIComponent(String(name || ""))}=${encodeURIComponent(String(value || ""))}`,
      "path=/",
      `max-age=${Math.max(0, Number(maxAgeSeconds) || 0)}`,
      window.location.protocol === "https:" ? "secure" : "",
      "samesite=lax"
    ].filter(Boolean).join("; ");
  }

  function ensureVisitorId() {
    const existing = decodeURIComponent(getCookieValue(ANALYTICS_VISITOR_COOKIE));
    if (existing) {
      return existing;
    }

    const generated = typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
    setClientCookie(ANALYTICS_VISITOR_COOKIE, generated, ANALYTICS_VISITOR_COOKIE_MAX_AGE);
    return generated;
  }

  function createAnalyticsId(prefix) {
    const suffix = typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    return `${String(prefix || "wg")}_${suffix}`;
  }

  function getFallbackHostGame() {
    const parentPlayerContext = getParentPlayerContext();
    return {
      id: String(parentPlayerContext?.gameId || urlParams.get("wg_player_game_id") || "").trim(),
      slug: String(parentPlayerContext?.slug || urlParams.get("wg_player_slug") || "").trim()
    };
  }

  function getFallbackAnalyticsRoute() {
    try {
      if (window.parent && window.parent !== window && window.parent.location?.pathname) {
        return String(window.parent.location.pathname + (window.parent.location.search || ""));
      }
    } catch {}

    return String(window.location.pathname + (window.location.search || ""));
  }

  function sendFallbackAnalytics(url, payload, options = {}) {
    const body = JSON.stringify(payload || {});
    if (options.beacon && navigator.sendBeacon) {
      const sent = navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
      if (sent) {
        return;
      }
    }

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      keepalive: options.beacon === true,
      body
    }).catch(() => {});
  }

  function normalizeStoreKey(value) {
    const raw = String(value || "").trim().toLowerCase();
    switch (raw) {
      case "steam":
        return "steam";
      case "ios":
      case "appstore":
      case "app_store":
        return "appStore";
      case "android":
      case "googleplay":
      case "google_play":
        return "googlePlay";
      case "xbox":
        return "xbox";
      case "switch":
      case "nintendo":
      case "nintendoswitch":
        return "switch";
      default:
        return raw;
    }
  }

  function trackUnityAdRequestStart(requestId, type, name) {
    if (!requestId) {
      return;
    }

    const hostGame = getFallbackHostGame();
    sendFallbackAnalytics("/api/analytics/ads/start", {
      id: String(requestId),
      gameId: hostGame.id,
      gameSlug: hostGame.slug,
      visitorId: ensureVisitorId(),
      requestedAt: new Date().toISOString(),
      route: getFallbackAnalyticsRoute(),
      placementType: String(type || "").trim(),
      placementName: String(name || "").trim(),
      playerKind: "unity-loader"
    });
  }

  function trackUnityAdRequestFinish(result) {
    if (!result?.requestId) {
      return;
    }

    const hostGame = getFallbackHostGame();
    const provider = String(result.status || "").trim() === "fallbackShown" ? "fallback" : "google";
    sendFallbackAnalytics("/api/analytics/ads/finish", {
      requestId: String(result.requestId).trim(),
      gameId: hostGame.id,
      gameSlug: hostGame.slug,
      visitorId: ensureVisitorId(),
      requestedAt: "",
      completedAt: new Date().toISOString(),
      route: getFallbackAnalyticsRoute(),
      placementType: String(result.type || "").trim(),
      placementName: String(result.name || "").trim(),
      playerKind: "unity-loader",
      provider,
      format: String(result.format || "").trim(),
      status: String(result.status || "").trim(),
      shown: result.shown === true,
      fallbackUsed: provider === "fallback"
    }, { beacon: true });
  }

  function createFallbackTrackingState(request, fallbackEntry, mediaKind, resolvedFallbackUrl) {
    const promotedGame = fallbackEntry?.promotedGame || null;
    const hostGame = getFallbackHostGame();
    const state = {
      impressionId: createAnalyticsId("wgfallback"),
      adId: String(fallbackEntry?.id || "").trim(),
      hostGameId: hostGame.id,
      hostGameSlug: hostGame.slug,
      promotedGameId: String(promotedGame?.id || "").trim(),
      promotedGameSlug: String(promotedGame?.slug || "").trim(),
      promotedGameTitle: String(promotedGame?.title || "").trim(),
      visitorId: ensureVisitorId(),
      route: getFallbackAnalyticsRoute(),
      playerKind: "unity-loader",
      placementType: String(request?.type || "").trim(),
      placementName: String(request?.name || "").trim(),
      originalStatus: String(request?.originalStatus || "").trim(),
      fallbackUrl: String(resolvedFallbackUrl || fallbackEntry?.videoUrl || "").trim(),
      mediaKind: String(mediaKind || "").trim(),
      finished: false
    };

    sendFallbackAnalytics("/api/analytics/fallback/start", {
      id: state.impressionId,
      adId: state.adId,
      hostGameId: state.hostGameId,
      hostGameSlug: state.hostGameSlug,
      promotedGameId: state.promotedGameId,
      promotedGameSlug: state.promotedGameSlug,
      promotedGameTitle: state.promotedGameTitle,
      visitorId: state.visitorId,
      startedAt: new Date().toISOString(),
      route: state.route,
      placementType: state.placementType,
      placementName: state.placementName,
      originalStatus: state.originalStatus,
      fallbackUrl: state.fallbackUrl,
      playerKind: state.playerKind,
      mediaKind: state.mediaKind
    });

    return state;
  }

  function finishFallbackTracking(state, watchTimeMs) {
    if (!state?.impressionId || state.finished) {
      return;
    }

    state.finished = true;
    sendFallbackAnalytics("/api/analytics/fallback/finish", {
      impressionId: state.impressionId,
      endedAt: new Date().toISOString(),
      watchTimeMs: Math.max(0, Math.round(Number(watchTimeMs) || 0))
    }, { beacon: true });
  }

  function trackFallbackStoreClick(state, action) {
    if (!state?.impressionId || !action?.href) {
      return;
    }

    sendFallbackAnalytics("/api/analytics/fallback/click", {
      id: createAnalyticsId("wgfallbackclick"),
      impressionId: state.impressionId,
      adId: state.adId,
      hostGameId: state.hostGameId,
      hostGameSlug: state.hostGameSlug,
      promotedGameId: state.promotedGameId,
      promotedGameSlug: state.promotedGameSlug,
      promotedGameTitle: state.promotedGameTitle,
      visitorId: state.visitorId,
      clickedAt: new Date().toISOString(),
      route: getFallbackAnalyticsRoute(),
      storeKey: normalizeStoreKey(action.storeKey || action.label),
      storeLabel: String(action.label || "").trim(),
      storeUrl: String(action.href || "").trim(),
      playerKind: state.playerKind
    });
  }

  function extractYoutubeId(rawUrl) {
    try {
      const parsed = new URL(String(rawUrl || ""), window.location.href);
      const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();

      if (host === "youtu.be") {
        return parsed.pathname.replace(/^\//, "").trim();
      }

      if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
        if (parsed.pathname === "/watch") {
          return parsed.searchParams.get("v") || "";
        }

        const pathMatch = parsed.pathname.match(/^\/(embed|shorts|live)\/([^/?#]+)/i);
        if (pathMatch) {
          return pathMatch[2];
        }
      }
    } catch {}

    return "";
  }

  function chooseFallbackVideoUrl(fallbackEntry, options = {}) {
    const directUrl = String(fallbackEntry?.videoUrl || "").trim();
    const sources = Array.isArray(fallbackEntry?.videoSources) ? fallbackEntry.videoSources.filter((entry) => entry && entry.url) : [];
    if (!sources.length) {
      return directUrl;
    }

    const devicePixelRatio = Math.max(1, Number(window.devicePixelRatio) || 1);
    const viewportWidth = Math.max(
      Number(window.innerWidth) || 0,
      Number(window.visualViewport?.width) || 0,
      0
    );
    const preferredWidth = Math.max(0, Number(options.preferredWidth) || 0);
    const basisWidth = preferredWidth > 0 ? preferredWidth : viewportWidth;
    const targetWidth = Math.max(720, Math.round(basisWidth * devicePixelRatio));
    const sortedSources = sources.slice().sort((left, right) => Number(left.width || 0) - Number(right.width || 0));
    const matchingSource = sortedSources.find((entry) => Number(entry.width || 0) >= targetWidth);
    return String((matchingSource || sortedSources[sortedSources.length - 1] || {}).url || directUrl).trim();
  }

  function buildFallbackMediaFromUrl(resolvedUrl) {
    const youtubeId = extractYoutubeId(resolvedUrl);
    if (youtubeId) {
      const origin = encodeURIComponent(window.location.origin || "");
      return {
        kind: "youtube",
        src: "https://www.youtube.com/embed/" + encodeURIComponent(youtubeId)
          + "?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1&controls=1&enablejsapi=1&origin=" + origin
      };
    }

    return {
      kind: "video",
      src: resolvedUrl
    };
  }

  function buildFallbackMedia(fallbackEntry) {
    return buildFallbackMediaFromUrl(chooseFallbackVideoUrl(fallbackEntry));
  }

  let preparedFallbackAd = null;
  let preparedFallbackAdPromise = null;
  let fallbackAdActive = false;

  function releasePreparedFallbackAd(prepared) {
    if (!prepared?.objectUrl) {
      return;
    }
    try {
      URL.revokeObjectURL(prepared.objectUrl);
    } catch {}
  }

  function chooseFallbackAdEntry() {
    const fallbackAds = getResolvedFallbackAds();
    if (fallbackAds.length) {
      return fallbackAds[Math.floor(Math.random() * fallbackAds.length)] || null;
    }

    const fallbackVideos = getResolvedFallbackVideos();
    if (!fallbackVideos.length) {
      return null;
    }

    return {
      id: "",
      videoUrl: fallbackVideos[Math.floor(Math.random() * fallbackVideos.length)] || "",
      videoSources: [],
      promotedGame: null
    };
  }

  async function prepareFallbackAdEntry(fallbackEntry) {
    if (!fallbackEntry) {
      return null;
    }

    const fallbackUrl = chooseFallbackVideoUrl(fallbackEntry);
    if (!fallbackUrl) {
      return null;
    }

    const media = buildFallbackMediaFromUrl(fallbackUrl);
    const prepared = {
      entry: fallbackEntry,
      fallbackUrl,
      media,
      objectUrl: "",
      preloaded: false
    };

    if (media.kind !== "video") {
      return prepared;
    }

    try {
      const response = await window.fetch(fallbackUrl, {
        credentials: "same-origin"
      });
      if (!response.ok) {
        throw new Error(`Fallback preload failed (${response.status})`);
      }
      const blob = await response.blob();
      if (blob && blob.size > 0) {
        prepared.objectUrl = URL.createObjectURL(blob);
        prepared.media = {
          kind: "video",
          src: prepared.objectUrl
        };
        prepared.preloaded = true;
      }
    } catch {}

    return prepared;
  }

  function ensurePreparedFallbackAd() {
    if (preparedFallbackAd) {
      return Promise.resolve(preparedFallbackAd);
    }
    if (preparedFallbackAdPromise) {
      return preparedFallbackAdPromise;
    }

    const fallbackEntry = chooseFallbackAdEntry();
    if (!fallbackEntry) {
      return Promise.resolve(null);
    }

    preparedFallbackAdPromise = prepareFallbackAdEntry(fallbackEntry)
      .then((prepared) => {
        if (preparedFallbackAd && preparedFallbackAd !== prepared) {
          releasePreparedFallbackAd(preparedFallbackAd);
        }
        preparedFallbackAd = prepared;
        return preparedFallbackAd;
      })
      .finally(() => {
        preparedFallbackAdPromise = null;
      });

    return preparedFallbackAdPromise;
  }

  async function consumePreparedFallbackAd() {
    const prepared = preparedFallbackAd || await ensurePreparedFallbackAd();
    preparedFallbackAd = null;
    return prepared;
  }

  function buildFallbackBusyResult(request = {}) {
    return {
      requestId: String(request.requestId || "").trim(),
      type: String(request.type || "next"),
      name: String(request.name || "unity_fallback"),
      format: String(request.type || "next") === "reward" ? "reward" : "interstitial",
      status: "fallbackBusy",
      shown: false,
      configured: request.configured === true,
      ready: request.ready === true
    };
  }

  let youtubeIframeApiPromise = null;

  function loadYouTubeIframeApi() {
    if (window.YT && typeof window.YT.Player === "function") {
      return Promise.resolve(window.YT);
    }

    if (youtubeIframeApiPromise) {
      return youtubeIframeApiPromise;
    }

    youtubeIframeApiPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      const previousReady = window.onYouTubeIframeAPIReady;
      let settled = false;

      function finish(error) {
        if (settled) {
          return;
        }
        settled = true;
        if (error) {
          youtubeIframeApiPromise = null;
          reject(error);
          return;
        }
        resolve(window.YT);
      }

      window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReadyWrapped() {
        try {
          if (typeof previousReady === "function") {
            previousReady();
          }
        } catch {}
        finish();
      };

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onerror = () => finish(new Error("YouTube iframe API failed to load."));
        document.head.appendChild(script);
      }

      window.setTimeout(() => {
        if (window.YT && typeof window.YT.Player === "function") {
          finish();
        }
      }, 0);
    });

    return youtubeIframeApiPromise;
  }

  function getPromoActionIconSvg(label) {
    switch (String(label || "").toLowerCase()) {
      case "steam":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 5.8a5.8 5.8 0 0 0-5.7 6.9l-3.3 2a3.9 3.9 0 1 0 1.2 2l2.9-1.8a5.8 5.8 0 1 0 4.9-9.1Zm-11.3 13a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm11.3-3.1a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1Zm0-6.3a2.3 2.3 0 1 0 0 4.5 2.3 2.3 0 0 0 0-4.5Z"/></svg>';
      case "ios":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.8 12.6c0-2.1 1.7-3.2 1.8-3.3-1-.5-2.6-.6-3.6-.1-.9.4-1.8.4-2.6 0-1.1-.5-2.8-.4-3.9.4-1.5 1-2.4 2.9-2 5.2.3 1.7 1 3.4 2.1 4.8.8 1 1.7 2 2.9 2 .6 0 1-.2 1.5-.4.6-.2 1.2-.2 1.8 0 .5.2.9.4 1.6.4 1.2 0 2-1.1 2.8-2.1.6-.8 1.1-1.7 1.4-2.6-1.7-.7-2.8-2.2-2.8-4.3ZM14.7 3.5c-.8.1-1.8.6-2.4 1.3-.6.6-1.1 1.6-.9 2.5.9.1 1.9-.4 2.5-1 .6-.7 1.1-1.6.8-2.8Z"/></svg>';
      case "android":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 8.2 5.8 5.8l1-.6 1.5 2.5a9.4 9.4 0 0 1 7.4 0l1.5-2.5 1 .6-1.4 2.4a6.2 6.2 0 0 1 2.9 5v4.8h-1.8v2.2a1.2 1.2 0 1 1-2.4 0V18H9.5v2.2a1.2 1.2 0 1 1-2.4 0V18H5.3v-4.8a6.2 6.2 0 0 1 1.9-5Zm2.6 3.1a.8.8 0 1 0 0 1.7.8.8 0 0 0 0-1.7Zm4.4 0a.8.8 0 1 0 0 1.7.8.8 0 0 0 0-1.7Z"/></svg>';
      case "xbox":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 12 2.5Zm5.3 14.2a7.6 7.6 0 0 1-10.6 0c1.2-1.5 2.8-3.1 5.3-5 2.4 1.9 4 3.5 5.3 5Zm.9-1.3c-1.5-1.7-3.2-3.2-5.7-5.1 1.8-1.1 3.3-2 4.8-2.8a7.5 7.5 0 0 1 .9 7.9ZM6.7 7.5c1.5.8 3 1.7 4.8 2.8-2.5 1.9-4.2 3.4-5.7 5.1a7.5 7.5 0 0 1 .9-7.9Z"/></svg>';
      case "switch":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.7 3H7.2A3.2 3.2 0 0 0 4 6.2v11.6A3.2 3.2 0 0 0 7.2 21h3.5V3Zm-2 6.3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.6-6.3V21h3.5a3.2 3.2 0 0 0 3.2-3.2V6.2A3.2 3.2 0 0 0 16.8 3h-3.5Zm2.6 8.8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>';
      default:
        return "";
    }
  }

  function ensureFallbackAdStyles() {
    if (document.getElementById("wixgames-unity-fallback-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "wixgames-unity-fallback-styles";
    style.textContent = `
      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap");

      .wixgames-unity-fallback-overlay {
        position: fixed;
        inset: 0;
        z-index: 2147483646;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(5, 7, 16, 0.88);
        backdrop-filter: blur(14px);
      }
      .wixgames-unity-fallback-shell {
        position: relative;
        width: min(960px, 100%);
        max-width: min(960px, calc(100vw - 32px));
        max-height: calc(100vh - 32px);
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 16px;
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(16, 20, 36, 0.96), rgba(10, 13, 24, 0.98));
        box-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
        border: 1px solid rgba(255, 255, 255, 0.1);
        font-family: "Space Grotesk", "Segoe UI", sans-serif;
        transform-origin: center center;
        overflow: auto;
        overscroll-behavior: contain;
      }
      .wixgames-unity-fallback-title {
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #ffb26b;
      }
      .wixgames-unity-fallback-title-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
        min-height: 72px;
        flex: 0 0 280px;
      }
      .wixgames-unity-fallback-note {
        font-size: 13px;
        color: rgba(246, 240, 227, 0.72);
      }
      .wixgames-unity-fallback-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
      .wixgames-unity-fallback-promo {
        flex: 1 1 0;
        width: auto;
        max-width: 100%;
        display: grid;
        grid-template-columns: minmax(0, 1fr) 124px;
        gap: 12px;
        align-items: center;
      }
      .wixgames-unity-fallback-promo-cover {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      .wixgames-unity-fallback-promo-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .wixgames-unity-fallback-promo-copy {
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: flex-end;
        text-align: right;
      }
      .wixgames-unity-fallback-promo-game-title {
        margin: 0;
        color: #f6f0e3;
        font-size: 22px;
        line-height: 1.05;
        font-weight: 700;
      }
      .wixgames-unity-fallback-promo-actions {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        justify-content: flex-end;
        align-items: center;
      }
      .wixgames-unity-fallback-promo-link {
        appearance: none;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 999px;
        padding: 10px 14px;
        color: #f6f0e3;
        background: rgba(255, 255, 255, 0.08);
        font: 700 13px/1 "Space Grotesk", "Segoe UI", sans-serif;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .wixgames-unity-fallback-promo-link svg {
        width: 14px;
        height: 14px;
        fill: currentColor;
        flex: 0 0 auto;
      }
      .wixgames-unity-fallback-media {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 100%;
        margin-inline: auto;
        aspect-ratio: 16 / 9;
        border-radius: 18px;
        overflow: hidden;
        background: #000;
      }
      .wixgames-unity-fallback-media iframe,
      .wixgames-unity-fallback-media video {
        width: 100%;
        height: 100%;
        display: block;
        border: 0;
        background: #000;
      }
      .wixgames-unity-fallback-progress {
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.12);
      }
      .wixgames-unity-fallback-progress-bar {
        width: 0%;
        height: 100%;
        background: linear-gradient(90deg, #ff7d5f 0%, #f03da2 55%, #ffbe6f 100%);
      }
      .wixgames-unity-fallback-actions {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 3;
        pointer-events: auto;
      }
      .wixgames-unity-fallback-skip {
        appearance: none;
        border: 0;
        border-radius: 999px;
        padding: 12px 18px;
        min-width: 136px;
        font: 600 14px/1 "Space Grotesk", "Segoe UI", sans-serif;
        color: #f6f0e3;
        background: linear-gradient(90deg, #ff7d5f 0%, #f03da2 55%, #ffbe6f 100%);
        cursor: pointer;
        pointer-events: auto;
        touch-action: manipulation;
      }
      .wixgames-unity-fallback-skip[disabled] {
        cursor: not-allowed;
        opacity: 0.55;
      }
      @media (max-width: 720px) {
        .wixgames-unity-fallback-header {
          flex-direction: column;
        }
        .wixgames-unity-fallback-title-wrap {
          flex-basis: auto;
        }
        .wixgames-unity-fallback-promo {
          width: 100%;
          flex-basis: auto;
          grid-template-columns: minmax(0, 1fr) 108px;
        }
        .wixgames-unity-fallback-promo-game-title {
          font-size: 18px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function showFallbackAd(request = {}) {
    return new Promise(async (resolve, reject) => {
      if (fallbackAdActive) {
        recordUnityAdsDebug("log", "Fallback ad ignored because another fallback overlay is already active.", {
          type: String(request.type || "").trim(),
          name: String(request.name || "").trim(),
          originalStatus: String(request.originalStatus || "").trim(),
          requestId: String(request.requestId || "").trim()
        });
        resolve(buildFallbackBusyResult(request));
        return;
      }

      fallbackAdActive = true;
      const releaseFallbackAd = () => {
        fallbackAdActive = false;
      };

      recordUnityAdsDebug("log", "Opening fallback ad.", {
        type: String(request.type || "").trim(),
        name: String(request.name || "").trim(),
        originalStatus: String(request.originalStatus || "").trim(),
        requestId: String(request.requestId || "").trim()
      });
      const fallbackAds = getResolvedFallbackAds();
      const fallbackAdVideos = getResolvedFallbackVideos();
      if (!fallbackAdVideos.length) {
        releaseFallbackAd();
        recordUnityAdsDebug("warn", "Fallback ad rejected because no fallback videos are configured.");
        reject(new Error("Fallback ad unavailable: no fallback videos are configured for this game."));
        return;
      }

      ensureFallbackAdStyles();
      const preparedFallback = await consumePreparedFallbackAd();
      const fallbackEntry = preparedFallback?.entry || null;
      let fallbackUrl = String(preparedFallback?.fallbackUrl || "").trim();
      if (!fallbackEntry || !fallbackUrl) {
        releaseFallbackAd();
        recordUnityAdsDebug("warn", "Fallback ad rejected because the chosen fallback URL was empty.");
        reject(new Error("Fallback ad unavailable: no usable fallback video URL was found."));
        return;
      }

      let media = preparedFallback?.media || buildFallbackMediaFromUrl(fallbackUrl);
      const promotedGame = fallbackEntry?.promotedGame || null;
      const overlay = document.createElement("div");
      overlay.className = "wixgames-unity-fallback-overlay";

      const shell = document.createElement("div");
      shell.className = "wixgames-unity-fallback-shell";

      const header = document.createElement("div");
      header.className = "wixgames-unity-fallback-header";

      const titleWrap = document.createElement("div");
      titleWrap.className = "wixgames-unity-fallback-title-wrap";
      const title = document.createElement("div");
      title.className = "wixgames-unity-fallback-title";
      title.textContent = "Sponsored Break";

      const note = document.createElement("div");
      note.className = "wixgames-unity-fallback-note";
      note.textContent = "Thanks for supporting Wix Games.";
      titleWrap.appendChild(title);
      titleWrap.appendChild(note);
      header.appendChild(titleWrap);

      if (promotedGame) {
        const promo = document.createElement("div");
        promo.className = "wixgames-unity-fallback-promo";
        if (promotedGame.coverImage) {
          const promoCover = document.createElement("div");
          promoCover.className = "wixgames-unity-fallback-promo-cover";
          const promoImage = document.createElement("img");
          promoImage.src = promotedGame.coverImage;
          promoImage.alt = promotedGame.title ? promotedGame.title + " cover art" : "";
          promoCover.appendChild(promoImage);
          promo.appendChild(promoCover);
        }
        const promoCopy = document.createElement("div");
        promoCopy.className = "wixgames-unity-fallback-promo-copy";
        if (promotedGame.title) {
          const promoTitle = document.createElement("h3");
          promoTitle.className = "wixgames-unity-fallback-promo-game-title";
          promoTitle.textContent = promotedGame.title;
          promoCopy.appendChild(promoTitle);
        }
        const storeActions = [
          {
            storeKey: "steam",
            label: "Steam",
            href: promotedGame.storeLinks?.steam || (/store\.steampowered\.com/i.test(String(promotedGame.platformLinks?.PC || "")) ? promotedGame.platformLinks.PC : "")
          },
          { storeKey: "appStore", label: "iOS", href: promotedGame.storeLinks?.appStore || "" },
          { storeKey: "googlePlay", label: "Android", href: promotedGame.storeLinks?.googlePlay || "" },
          { storeKey: "xbox", label: "Xbox", href: promotedGame.storeLinks?.xbox || "" },
          { storeKey: "switch", label: "Switch", href: promotedGame.storeLinks?.switch || "" }
        ].filter((entry) => entry.href);
        if (storeActions.length) {
          const promoActions = document.createElement("div");
          promoActions.className = "wixgames-unity-fallback-promo-actions";
          for (const action of storeActions) {
            const link = document.createElement("a");
            link.className = "wixgames-unity-fallback-promo-link";
            link.href = action.href;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.addEventListener("click", () => {
              trackFallbackStoreClick(trackingState, action);
            });
            const iconMarkup = getPromoActionIconSvg(action.label);
            if (iconMarkup) {
              link.insertAdjacentHTML("beforeend", iconMarkup);
            }
            const labelNode = document.createElement("span");
            labelNode.textContent = action.label;
            link.appendChild(labelNode);
            promoActions.appendChild(link);
          }
          promoCopy.appendChild(promoActions);
        }
        promo.appendChild(promoCopy);
        if (promotedGame.coverImage) {
          const promoCover = promo.querySelector(".wixgames-unity-fallback-promo-cover");
          if (promoCover) {
            promo.appendChild(promoCover);
          }
        }
        header.appendChild(promo);
      }

      const mediaWrap = document.createElement("div");
      mediaWrap.className = "wixgames-unity-fallback-media";
      let directVideoElement = null;

      if (media.kind === "youtube") {
        const iframe = document.createElement("iframe");
        iframe.src = media.src;
        iframe.allow = "autoplay; encrypted-media; picture-in-picture";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        mediaWrap.appendChild(iframe);
      } else {
        const video = document.createElement("video");
        video.src = media.src;
        video.autoplay = true;
        video.muted = false;
        video.defaultMuted = false;
        video.volume = 1;
        video.playsInline = true;
        video.controls = false;
        video.disablePictureInPicture = true;
        video.controlsList = "nodownload noplaybackrate noremoteplayback nofullscreen";
        video.tabIndex = -1;
        ["pointerdown", "click", "contextmenu"].forEach((eventName) => {
          video.addEventListener(eventName, (event) => {
            event.preventDefault();
          });
        });
        mediaWrap.appendChild(video);
        directVideoElement = video;
      }

      const progressTrack = document.createElement("div");
      progressTrack.className = "wixgames-unity-fallback-progress";
      const progressBar = document.createElement("div");
      progressBar.className = "wixgames-unity-fallback-progress-bar";
      progressTrack.appendChild(progressBar);

      const actions = document.createElement("div");
      actions.className = "wixgames-unity-fallback-actions";
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.className = "wixgames-unity-fallback-skip";
      skipButton.disabled = true;
      actions.appendChild(skipButton);

      shell.appendChild(header);
      shell.appendChild(mediaWrap);
      shell.appendChild(progressTrack);
      shell.appendChild(actions);
      overlay.appendChild(shell);
      document.body.appendChild(overlay);

      const syncShellScale = () => {
        const viewportWidth = Number(window.visualViewport?.width) || window.innerWidth || 0;
        const viewportHeight = Number(window.visualViewport?.height) || window.innerHeight || 0;
        const overlayStyle = window.getComputedStyle(overlay);
        const shellStyle = window.getComputedStyle(shell);
        const horizontalPadding = (parseFloat(overlayStyle.paddingLeft) || 0) + (parseFloat(overlayStyle.paddingRight) || 0);
        const verticalPadding = (parseFloat(overlayStyle.paddingTop) || 0) + (parseFloat(overlayStyle.paddingBottom) || 0);
        shell.style.transform = "";
        mediaWrap.style.width = "";
        const shellRect = shell.getBoundingClientRect();
        const mediaRect = mediaWrap.getBoundingClientRect();
        const availableHeight = Math.max(0, viewportHeight - verticalPadding);
        const shellContentWidth = Math.max(
          0,
          shell.clientWidth - (parseFloat(shellStyle.paddingLeft) || 0) - (parseFloat(shellStyle.paddingRight) || 0)
        );
        const nonMediaHeight = Math.max(0, shellRect.height - mediaRect.height);
        const maxMediaHeight = Math.max(0, availableHeight - nonMediaHeight);
        const targetMediaWidth = Math.min(shellContentWidth, maxMediaHeight * (16 / 9));
        if (targetMediaWidth > 0 && targetMediaWidth < shellContentWidth - 1) {
          mediaWrap.style.width = `${targetMediaWidth.toFixed(2)}px`;
        }
      };

      const handleViewportFit = () => {
        window.requestAnimationFrame(syncShellScale);
      };

      window.addEventListener("resize", handleViewportFit);
      window.visualViewport?.addEventListener("resize", handleViewportFit);
      handleViewportFit();

      if (directVideoElement) {
        const fittedFallbackUrl = chooseFallbackVideoUrl(fallbackEntry, {
          preferredWidth: mediaWrap.getBoundingClientRect().width || mediaWrap.clientWidth || 0
        });
        if (fittedFallbackUrl) {
          fallbackUrl = fittedFallbackUrl;
          const canUsePreparedVideo = Boolean(
            preparedFallback?.objectUrl
            && String(preparedFallback?.fallbackUrl || "").trim() === fittedFallbackUrl
          );
          const resolvedVideoSrc = canUsePreparedVideo ? preparedFallback.objectUrl : fittedFallbackUrl;
          directVideoElement.src = resolvedVideoSrc;
          media = {
            kind: "video",
            src: resolvedVideoSrc
          };
        }
      }
      const trackingState = createFallbackTrackingState(request, fallbackEntry, media.kind, fallbackUrl);
      try {
        request.beforeAd?.({
          requestId: "",
          type: String(request.type || "next"),
          name: String(request.name || "unity_fallback")
        });
      } catch {}

      const unlockAfterMs = 15000;
      const startedAt = Date.now();
      let intervalId = 0;
      let finished = false;
      let youtubePlayer = null;
      let playbackStartedAt = 0;
      let accumulatedWatchTimeMs = 0;

      function beginPlaybackWindow() {
        if (playbackStartedAt) {
          return;
        }
        playbackStartedAt = Date.now();
      }

      function pausePlaybackWindow() {
        if (!playbackStartedAt) {
          return;
        }
        accumulatedWatchTimeMs += Math.max(0, Date.now() - playbackStartedAt);
        playbackStartedAt = 0;
      }

      function getWatchTimeMs() {
        return accumulatedWatchTimeMs + (playbackStartedAt ? Math.max(0, Date.now() - playbackStartedAt) : 0);
      }

      function updateUi() {
        const elapsed = Math.max(0, Date.now() - startedAt);
        const progress = Math.min(1, elapsed / unlockAfterMs);
        progressBar.style.width = (progress * 100).toFixed(1) + "%";
        if (progress >= 1) {
          skipButton.disabled = false;
          skipButton.textContent = "Skip promo";
        } else {
          skipButton.disabled = true;
          skipButton.textContent = "Skip in " + Math.ceil((unlockAfterMs - elapsed) / 1000) + "s";
        }
      }

      function finish() {
        if (finished) {
          return;
        }
        finished = true;
        if (intervalId) {
          window.clearInterval(intervalId);
        }
        pausePlaybackWindow();
        finishFallbackTracking(trackingState, getWatchTimeMs());
        window.removeEventListener("resize", handleViewportFit);
        window.visualViewport?.removeEventListener("resize", handleViewportFit);
        try {
          youtubePlayer?.destroy?.();
        } catch {}
        overlay.remove();
        releasePreparedFallbackAd(preparedFallback);
        ensurePreparedFallbackAd();
        releaseFallbackAd();
        const result = {
          requestId: String(request.requestId || "").trim(),
          type: String(request.type || "next"),
          name: String(request.name || "unity_fallback"),
          format: "fallback-video",
          status: "fallbackShown",
          shown: true,
          configured: request.configured === true,
          ready: request.ready === true,
          fallbackUrl,
          promotedGame
        };
        recordUnityAdsDebug("log", "Fallback ad finished.", result);
        try {
          request.afterAd?.(result);
        } catch {}
        request.adBreakDone?.(result);
        resolve(result);
      }

      const activateSkip = (event) => {
        if (skipButton.disabled) {
          return;
        }

        event?.preventDefault?.();
        finish();
      };

      skipButton.addEventListener("click", activateSkip);
      skipButton.addEventListener("pointerup", activateSkip);
      const mediaElement = directVideoElement;
      if (mediaElement) {
        const resumeVideoPlayback = () => {
          if (finished) {
            return;
          }
          const remaining = Number.isFinite(mediaElement.duration)
            ? Math.max(0, mediaElement.duration - mediaElement.currentTime)
            : Infinity;
          if (remaining <= 0.2) {
            return;
          }
          mediaElement.play?.().catch(() => {});
        };
        mediaElement.addEventListener("play", beginPlaybackWindow);
        mediaElement.addEventListener("playing", beginPlaybackWindow);
        mediaElement.addEventListener("pause", pausePlaybackWindow);
        mediaElement.addEventListener("pause", resumeVideoPlayback);
        mediaElement.addEventListener("waiting", pausePlaybackWindow);
        mediaElement.addEventListener("seeking", pausePlaybackWindow);
        mediaElement.addEventListener("emptied", pausePlaybackWindow);
        mediaElement.addEventListener("ended", finish, { once: true });
        const playPromise = mediaElement.play?.();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            try {
              mediaElement.muted = true;
              mediaElement.defaultMuted = true;
            } catch {}
            mediaElement.play?.().catch(() => {});
          });
        }
        if (!mediaElement.paused) {
          beginPlaybackWindow();
        }
      } else if (media.kind === "youtube") {
        const iframeElement = mediaWrap.querySelector("iframe");
        if (iframeElement) {
          loadYouTubeIframeApi()
            .then((YT) => {
              if (finished || !iframeElement.isConnected || !YT || typeof YT.Player !== "function") {
                return;
              }

              youtubePlayer = new YT.Player(iframeElement, {
                events: {
                  onReady() {
                    try {
                      youtubePlayer.unMute?.();
                      youtubePlayer.setVolume?.(100);
                      youtubePlayer.playVideo?.();
                    } catch {}
                  },
                  onStateChange(event) {
                    if (event?.data === YT.PlayerState?.PLAYING) {
                      beginPlaybackWindow();
                    } else if (event?.data === YT.PlayerState?.PAUSED || event?.data === YT.PlayerState?.BUFFERING) {
                      pausePlaybackWindow();
                    }
                    if (event?.data === YT.PlayerState?.ENDED) {
                      finish();
                    }
                  }
                }
              });
            })
            .catch(() => {});
        }
      }
      updateUi();
      intervalId = window.setInterval(updateUi, 125);
    });
  }

  function startUnityAdsBootstrap() {
    if (unityAdsBootstrapStarted) {
      return;
    }
    unityAdsBootstrapStarted = true;
    ensurePreparedFallbackAd();
    recordUnityAdsDebug("log", "Unity ads bridge booted.", {
      configured: unityAdsConfig.configured,
      client: unityAdsConfig.client,
      testMode: unityAdsConfig.testMode,
      hasFallbackVideos: getResolvedFallbackVideos().length > 0
    });
    ensureUnityAdsBootstrap();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeUnityAds, { once: true });
    } else {
      initializeUnityAds();
    }
  }

  function ensureUnityAdsBootstrap() {
    if (!unityAdsConfig.configured || !unityAdsConfig.client) {
      recordUnityAdsDebug("warn", "Unity ads bootstrap skipped because Adsense is not configured.");
      return;
    }

    window.adsbygoogle = window.adsbygoogle || [];
    window.adBreak = window.adBreak || function adBreakShim(config) {
      window.adsbygoogle.push(config);
    };
    window.adConfig = window.adConfig || function adConfigShim(config) {
      window.adsbygoogle.push(config);
    };

    window.__wixGamesAdsScriptLoaded = () => {
      unityAdsScriptLoaded = true;
      unityAdsScriptErrored = false;
      if (unityAdsReadyState === "loading-script") {
        updateUnityAdsReadyState("script-loaded");
      }
      recordUnityAdsDebug("log", "Google ads script loaded.", {
        adConfigType: typeof window.adConfig,
        adBreakType: typeof window.adBreak,
        adConfigIsShim: typeof window.adConfig === "function" && String(window.adConfig).includes("adsbygoogle.push"),
        adBreakIsShim: typeof window.adBreak === "function" && String(window.adBreak).includes("adsbygoogle.push")
      });
      if (!unityAdsApiReady) {
        window.setTimeout(() => {
          recordUnityAdsDebug("log", "Re-running Unity ads initialization after script load.");
          initializeUnityAds();
        }, 0);
      }
      emitUnityAdsEvent("script-loaded", buildUnityAdsDebugState());
    };

    window.__wixGamesAdsScriptError = () => {
      unityAdsScriptLoaded = false;
      unityAdsScriptErrored = true;
      unityAdsApiReady = false;
      updateUnityAdsReadyState(
        "script-error",
        "The Google ads script failed to load. This is usually caused by a browser ad blocker, shield, privacy extension, or DNS-level filter."
      );
      recordUnityAdsDebug("error", "Google ads script failed to load.", {
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${unityAdsConfig.client}`,
        likelyBlockedByClient: true,
        isBrave: Boolean(navigator.brave),
        userAgent: String(navigator.userAgent || "")
      });
      emitUnityAdsEvent("script-error", buildUnityAdsDebugState());
    };

    const existingScript = document.querySelector('#wixgames-unity-ads-script')
      || document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
    if (existingScript) {
      if (unityAdsConfig.client && !existingScript.getAttribute("data-ad-client")) {
        existingScript.setAttribute("data-ad-client", unityAdsConfig.client);
      }
      if (unityAdsConfig.frequencyHint) {
        existingScript.setAttribute("data-ad-frequency-hint", unityAdsConfig.frequencyHint);
      }
      recordUnityAdsDebug("log", "Google ads script already present in Unity loader.", {
        src: existingScript.getAttribute("src") || ""
      });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.id = "wixgames-unity-ads-script";
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.setAttribute("data-ad-client", unityAdsConfig.client);
    script.setAttribute("data-ad-frequency-hint", unityAdsConfig.frequencyHint);
    const adsenseChannelId = getResolvedAdsenseChannelId();
    if (adsenseChannelId) {
      script.setAttribute("data-ad-channel", adsenseChannelId);
    }
    script.setAttribute("crossorigin", "anonymous");
    if (unityAdsConfig.testMode) {
      script.setAttribute("data-adbreak-test", "on");
    }
    if (unityAdsConfig.admobInterstitialSlot) {
      script.setAttribute("data-admob-interstitial-slot", unityAdsConfig.admobInterstitialSlot);
    }
    if (unityAdsConfig.admobRewardedSlot) {
      script.setAttribute("data-admob-rewarded-slot", unityAdsConfig.admobRewardedSlot);
    }
    script.addEventListener("load", () => {
      window.__wixGamesAdsScriptLoaded?.();
    });
    script.addEventListener("error", () => {
      window.__wixGamesAdsScriptError?.();
    });
    recordUnityAdsDebug("log", "Injecting Google ads script into Unity loader.", {
      client: unityAdsConfig.client,
      src: script.src,
      testMode: unityAdsConfig.testMode,
      admobInterstitialSlot: unityAdsConfig.admobInterstitialSlot,
      admobRewardedSlot: unityAdsConfig.admobRewardedSlot
    });
    document.head.appendChild(script);
  }

  function parseUnityAdsRequestArguments(defaultType, arg1, arg2) {
    let options = {};
    let callback = null;

    if (typeof arg1 === "string") {
      options = { name: arg1 };
      callback = typeof arg2 === "function" ? arg2 : null;
    } else if (typeof arg1 === "function") {
      callback = arg1;
    } else if (arg1 && typeof arg1 === "object") {
      options = arg1;
      callback = typeof arg2 === "function" ? arg2 : (typeof arg1.onDone === "function" ? arg1.onDone : null);
    }

    return {
      options,
      callback,
      type: normalizeUnityAdsType(options.type || defaultType)
    };
  }

  function normalizeUnityAdsType(value) {
    const raw = String(value || "").trim().toLowerCase();
    if (raw === "interstitial") {
      return "next";
    }
    if (raw === "rewarded") {
      return "reward";
    }
    if (["preroll", "start", "pause", "next", "browse", "reward"].includes(raw)) {
      return raw;
    }
    return "next";
  }

  function normalizeUnityAdsName(value, fallbackType) {
    const raw = String(value || "").trim();
    if (raw) {
      return raw.slice(0, 80);
    }
    return `wixgames_${fallbackType}_placement`;
  }

  function safeUnityAdsCall(fn, ...args) {
    if (typeof fn !== "function") {
      return undefined;
    }

    try {
      return fn(...args);
    } catch (error) {
      recordUnityAdsDebug("error", "Unity ads callback threw an error.", {
        error: String(error?.message || error || "")
      });
      return undefined;
    }
  }

  function buildUnityPlacementResult(placementInfo, requestId, fallbackType, fallbackName) {
    const type = normalizeUnityAdsType(placementInfo?.breakType || fallbackType);
    const name = normalizeUnityAdsName(placementInfo?.breakName || fallbackName, type);
    const status = String(placementInfo?.breakStatus || "other");
    const format = String(placementInfo?.breakFormat || (type === "reward" ? "reward" : "interstitial"));
    const nonShowingStatuses = new Set([
      "notConfigured",
      "notReady",
      "timeout",
      "invalid",
      "error",
      "initialDelayActive",
      "adsDisabled",
      "googleRateLimited",
      "fallbackRateLimited",
      "noAdPreloaded",
      "frequencyCapped",
      "ignored",
      "other"
    ]);

    return {
      requestId,
      type,
      name,
      format,
      status,
      shown: !nonShowingStatuses.has(status),
      configured: unityAdsConfig.configured,
      ready: unityAdsApiReady
    };
  }

  function finishUnityAdsRequest(resolve, callback, result) {
    if (result?.shown === true) {
      rememberShownAd(String(result.status || "").trim() === "fallbackShown" ? "fallback" : "google");
    }
    trackUnityAdRequestFinish(result);
    recordUnityAdsDebug("log", "Ad request finished.", result);
    emitUnityAdsEvent("done", result);
    safeUnityAdsCall(callback, result);
    resolve(result);
  }

  function shouldUseFallbackForUnityAdStatus(status) {
    const normalized = String(status || "").trim();
    if (!normalized) {
      return true;
    }

    return !["frequencyCapped"].includes(normalized);
  }

  function tryUnityFallbackPlacement(resolve, callback, requestId, type, name, originalStatus, options = {}) {
    if (!getResolvedFallbackVideos().length) {
      recordUnityAdsDebug("warn", "Fallback ad unavailable for Unity ad request.", {
        requestId,
        type,
        name,
        originalStatus
      });
      return false;
    }

    const fallbackRateLimit = getAdRateLimitState("fallback");
    if (fallbackRateLimit.limited) {
      recordUnityAdsDebug("log", "Fallback ad skipped because the game fallback cooldown is still active.", {
        requestId,
        type,
        name,
        originalStatus,
        remainingMs: fallbackRateLimit.remainingMs,
        minutes: fallbackRateLimit.minutes
      });
      finishUnityAdsRequest(resolve, callback, {
        requestId,
        type,
        name,
        format: type === "reward" ? "reward" : "interstitial",
        status: "fallbackRateLimited",
        shown: false,
        configured: unityAdsConfig.configured,
        ready: unityAdsApiReady
      });
      return true;
    }

    recordUnityAdsDebug("log", "Switching Unity ad request to fallback ad.", {
      requestId,
      type,
      name,
      originalStatus
    });
    showFallbackAd({
      ...options,
      requestId,
      type,
      name,
      originalStatus,
      configured: unityAdsConfig.configured,
      ready: unityAdsApiReady
    }).then((fallbackResult) => {
      safeUnityAdsCall(options.adBreakDone, fallbackResult);
      finishUnityAdsRequest(resolve, callback, fallbackResult);
    }).catch((error) => {
      finishUnityAdsRequest(resolve, callback, {
        requestId,
        type,
        name,
        format: type === "reward" ? "reward" : "interstitial",
        status: "fallbackError",
        shown: false,
        configured: unityAdsConfig.configured,
        ready: unityAdsApiReady,
        error: String(error?.message || error || "")
      });
    });
    return true;
  }

  function requestUnityPlacement(defaultType, arg1, arg2) {
    const parsed = parseUnityAdsRequestArguments(defaultType, arg1, arg2);
    const requestId = `wgunityads_${Date.now()}_${++unityAdsRequestCounter}`;
    const name = normalizeUnityAdsName(parsed.options.name || parsed.options.placement || parsed.options.breakName, parsed.type);
    const allowFallback = parsed.options.disableFallback !== true;
    const forceSafariFallback = shouldForceSafariFallbackAds() && parsed.options.allowSafariGoogleAds !== true;
    const adSettings = getResolvedAdSettings();
    const meta = {
      requestId,
      type: parsed.type,
      name,
      configured: unityAdsConfig.configured,
      ready: unityAdsApiReady,
      allowFallback,
      forceSafariFallback,
      adSettings
    };

    recordUnityAdsDebug("log", "Ad request started.", {
      ...meta,
      options: parsed.options
    });
    emitUnityAdsEvent("request", meta);
    trackUnityAdRequestStart(requestId, parsed.type, name);

    return new Promise((resolve) => {
      const initialDelayState = getInitialAdDelayState();
      const bypassesInitialDelay = parsed.type === "preroll" || parsed.type === "start";
      if (initialDelayState.active && !bypassesInitialDelay) {
        recordUnityAdsDebug("log", "Ad request rejected because the initial ad delay is still active.", {
          ...meta,
          remainingMs: initialDelayState.remainingMs,
          startedAt: initialDelayState.startedAt,
          delayMs: initialDelayState.delayMs
        });
        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "initialDelayActive",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: unityAdsApiReady
        });
        return;
      }

      if (!adSettings.enabled) {
        recordUnityAdsDebug("log", "Ad request rejected because ads are disabled for this game.", meta);
        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "adsDisabled",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: unityAdsApiReady
        });
        return;
      }

      if (forceSafariFallback) {
        recordUnityAdsDebug("warn", "Safari detected in Unity loader. Using fallback ad instead of Google ad.", meta);
        if (allowFallback && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, "safariForcedFallback", parsed.options)) {
          return;
        }
      }

      if (parsed.options.forceFallback === true) {
        if (allowFallback && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, "forcedFallback", parsed.options)) {
          return;
        }

        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "fallbackUnavailable",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: unityAdsApiReady
        });
        return;
      }

      const googleRateLimit = getAdRateLimitState("google");
      if (googleRateLimit.limited) {
        recordUnityAdsDebug("log", "Google ad skipped because the game Google cooldown is still active.", {
          ...meta,
          remainingMs: googleRateLimit.remainingMs,
          minutes: googleRateLimit.minutes
        });
        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "googleRateLimited",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: unityAdsApiReady
        });
        return;
      }

      if (!unityAdsConfig.configured || typeof window.adBreak !== "function") {
        recordUnityAdsDebug("warn", "Unity ad request cannot use Google ads because the bridge is not configured.", meta);
        if (allowFallback && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, "notConfigured", parsed.options)) {
          return;
        }

        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "notConfigured",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: false,
          error: unityAdsLastError
        });
        return;
      }

      if (!unityAdsApiReady) {
        recordUnityAdsDebug("warn", "Unity ad request attempted before Google ads became ready.", buildUnityAdsDebugState());
        if (allowFallback && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, "notReady", parsed.options)) {
          return;
        }

        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "notReady",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: false,
          error: unityAdsLastError
        });
        return;
      }

      const placement = {
        type: parsed.type,
        name,
        beforeAd: () => {
          safariGoogleAdActive = true;
          recordUnityAdsDebug("log", "Google ad beforeAd fired.", meta);
          emitUnityAdsEvent("before", meta);
          safeUnityAdsCall(parsed.options.beforeAd, meta);
        },
        adBreakDone: (placementInfo) => {
          safariGoogleAdActive = false;
          recordUnityAdsDebug("log", "Google ad adBreakDone fired.", {
            ...meta,
            placementInfo
          });
          if (safariGoogleAdHashSeen || String(window.location.hash || "") === GOOGLE_FULLSCREEN_AD_HASH) {
            scheduleSafariGoogleAdHashCleanup("adBreakDone");
          }
          const result = buildUnityPlacementResult(placementInfo, requestId, parsed.type, name);
          if (
            !result.shown
            && allowFallback
            && shouldUseFallbackForUnityAdStatus(result.status)
            && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, result.status, parsed.options)
          ) {
            return;
          }

          safeUnityAdsCall(parsed.options.adBreakDone, result);
          finishUnityAdsRequest(resolve, parsed.callback, result);
        }
      };

      if (parsed.type !== "preroll" && parsed.type !== "start") {
        placement.afterAd = () => {
          safariGoogleAdActive = false;
          recordUnityAdsDebug("log", "Google ad afterAd fired.", meta);
          if (safariGoogleAdHashSeen || String(window.location.hash || "") === GOOGLE_FULLSCREEN_AD_HASH) {
            scheduleSafariGoogleAdHashCleanup("afterAd");
          }
          emitUnityAdsEvent("after", meta);
          safeUnityAdsCall(parsed.options.afterAd, meta);
        };
      }

      if (parsed.type === "reward") {
        placement.beforeReward = (showAdFn) => {
          recordUnityAdsDebug("log", "Reward ad is available and waiting for showAdFn().", meta);
          const wrappedShowAd = () => {
            recordUnityAdsDebug("log", "Reward ad showAdFn() called.", meta);
            emitUnityAdsEvent("reward-show", meta);
            showAdFn();
          };

          emitUnityAdsEvent("reward-available", meta);
          if (typeof parsed.options.beforeReward === "function") {
            safeUnityAdsCall(parsed.options.beforeReward, wrappedShowAd, meta);
          } else {
            wrappedShowAd();
          }
        };

        placement.adViewed = () => {
          recordUnityAdsDebug("log", "Reward ad viewed.", meta);
          emitUnityAdsEvent("reward-viewed", meta);
          safeUnityAdsCall(parsed.options.adViewed, meta);
        };

        placement.adDismissed = () => {
          safariGoogleAdActive = false;
          recordUnityAdsDebug("log", "Reward ad dismissed.", meta);
          if (safariGoogleAdHashSeen || String(window.location.hash || "") === GOOGLE_FULLSCREEN_AD_HASH) {
            scheduleSafariGoogleAdHashCleanup("adDismissed");
          }
          emitUnityAdsEvent("reward-dismissed", meta);
          safeUnityAdsCall(parsed.options.adDismissed, meta);
        };
      }

      try {
        recordUnityAdsDebug("log", "Calling window.adBreak from Unity loader.", {
          ...meta,
          placement
        });
        window.adBreak(placement);
      } catch (error) {
        const message = String(error?.message || error || "Unknown Google ad error");
        recordUnityAdsDebug("error", "window.adBreak threw from Unity loader.", {
          ...meta,
          error: message
        });
        if (allowFallback && tryUnityFallbackPlacement(resolve, parsed.callback, requestId, parsed.type, name, "error", parsed.options)) {
          return;
        }

        finishUnityAdsRequest(resolve, parsed.callback, {
          requestId,
          type: parsed.type,
          name,
          format: parsed.type === "reward" ? "reward" : "interstitial",
          status: "error",
          shown: false,
          configured: unityAdsConfig.configured,
          ready: unityAdsApiReady,
          error: message
        });
      }
    });
  }

  const unityAdsBridge = window.WixGamesAds = window.WixGamesAds || {};
  unityAdsBridge.config = unityAdsConfig;
  unityAdsBridge.isConfigured = () => unityAdsConfig.configured;
  unityAdsBridge.isReady = () => unityAdsConfig.configured && unityAdsApiReady;
  unityAdsBridge.getDebugState = () => buildUnityAdsDebugState();
  unityAdsBridge.setSoundEnabled = (enabled) => {
    unityAdsSoundState = enabled === false || enabled === "off" ? "off" : "on";
    recordUnityAdsDebug("log", "Unity ads sound state changed.", { sound: unityAdsSoundState });
    if (unityAdsConfig.configured && typeof window.adConfig === "function") {
      window.adConfig({ sound: unityAdsSoundState });
    }
    return unityAdsSoundState;
  };
  unityAdsBridge.request = (arg1, arg2) => {
    const defaultType = arg1 && typeof arg1 === "object" ? arg1.type : "next";
    return requestUnityPlacement(defaultType, arg1, arg2);
  };
  unityAdsBridge.showInterstitial = (arg1, arg2) => requestUnityPlacement("next", arg1, arg2);
  unityAdsBridge.showRewarded = (arg1, arg2) => requestUnityPlacement("reward", arg1, arg2);
  unityAdsBridge.showPreroll = (arg1, arg2) => requestUnityPlacement("preroll", arg1, arg2);
  unityAdsBridge.showGoogleInterstitial = (arg1, arg2) => {
    const options = arg1 && typeof arg1 === "object" ? { ...arg1, disableFallback: true } : { disableFallback: true };
    return requestUnityPlacement("next", options, arg2);
  };

  function initializeUnityAds() {
    if (!unityAdsConfig.configured || typeof window.adConfig !== "function") {
      updateUnityAdsReadyState(unityAdsConfig.configured ? "api-missing" : "not-configured");
      emitUnityAdsEvent("ready", {
        configured: unityAdsConfig.configured,
        ready: false
      });
      return;
    }

    try {
      updateUnityAdsReadyState(unityAdsScriptLoaded ? "initializing" : "waiting-for-ready");
      if (unityAdsReadyTimeoutId) {
        window.clearTimeout(unityAdsReadyTimeoutId);
      }
      unityAdsReadyTimeoutId = window.setTimeout(() => {
        if (!unityAdsApiReady) {
          const canAttemptBestEffortSafariReady = (
            unityAdsScriptLoaded
            && isLikelySafariBrowser()
            && typeof window.adBreak === "function"
            && typeof window.adConfig === "function"
          );

          if (canAttemptBestEffortSafariReady) {
            unityAdsApiReady = true;
            updateUnityAdsReadyState(
              "best-effort-ready",
              "Safari did not fire Ad Placement onReady after script load, so Wix Games is attempting ad requests in best-effort mode."
            );
            recordUnityAdsDebug("warn", "Safari never fired Google Ad Placement onReady. Enabling best-effort ad requests after timeout.", {
              adConfigType: typeof window.adConfig,
              adBreakType: typeof window.adBreak,
              scriptLoaded: unityAdsScriptLoaded,
              userAgent: String(navigator.userAgent || "")
            });
            emitUnityAdsEvent("ready-timeout", buildUnityAdsDebugState());
            emitUnityAdsEvent("ready", {
              configured: true,
              ready: true,
              bestEffort: true
            });
            return;
          }

          updateUnityAdsReadyState(
            unityAdsScriptLoaded ? "timed-out-after-load" : "timed-out-before-load",
            unityAdsScriptLoaded
              ? "Google ads loaded, but Ad Placement API never became ready."
              : "Google ads script has not finished loading yet."
          );
          emitUnityAdsEvent("ready-timeout", buildUnityAdsDebugState());
        }
      }, 8000);

      recordUnityAdsDebug("log", "Calling window.adConfig from Unity loader.", {
        preloadAdBreaks: "on",
        sound: unityAdsSoundState,
        scriptLoaded: unityAdsScriptLoaded,
        scriptErrored: unityAdsScriptErrored,
        adConfigType: typeof window.adConfig,
        adConfigIsShim: typeof window.adConfig === "function" && String(window.adConfig).includes("adsbygoogle.push"),
        adsbygoogleQueueLength: Array.isArray(window.adsbygoogle) ? window.adsbygoogle.length : -1
      });
      window.adConfig({
        preloadAdBreaks: "on",
        sound: unityAdsSoundState,
        onReady: () => {
          if (unityAdsReadyTimeoutId) {
            window.clearTimeout(unityAdsReadyTimeoutId);
            unityAdsReadyTimeoutId = 0;
          }
          unityAdsApiReady = true;
          updateUnityAdsReadyState("ready");
          recordUnityAdsDebug("log", "Google Ad Placement API reported ready in Unity loader.");
          emitUnityAdsEvent("ready", {
            configured: true,
            ready: true
          });
        }
      });
    } catch (error) {
      if (unityAdsReadyTimeoutId) {
        window.clearTimeout(unityAdsReadyTimeoutId);
        unityAdsReadyTimeoutId = 0;
      }
      unityAdsApiReady = false;
      updateUnityAdsReadyState("init-error", String(error?.message || error || ""));
      recordUnityAdsDebug("error", "Unable to initialize Ad Placement API in Unity loader.", {
        error: String(error?.message || error || "")
      });
      emitUnityAdsEvent("ready", {
        configured: true,
        ready: false,
        error: String(error?.message || error || "")
      });
    }
  }

  if (isLikelySafariBrowser()) {
    recordUnityAdsDebug("log", "Deferring Unity ads bootstrap until after Unity starts on Safari.");
  } else {
    startUnityAdsBootstrap();
  }

  const wixGamesAdsSupport = {
    receiverName: "",

    getBridge() {
      if (typeof window === "undefined") {
        return null;
      }

      try {
        const localBridge = window.WixGamesAds || null;
        const localConfigured = typeof localBridge?.isConfigured === "function"
          ? Boolean(localBridge.isConfigured())
          : false;
        const localReady = typeof localBridge?.isReady === "function"
          ? Boolean(localBridge.isReady())
          : localConfigured;

        if (localBridge && (localConfigured || localReady || typeof localBridge.showInterstitial === "function")) {
          return localBridge;
        }

        const parentBridge = window.parent && window.parent !== window
          ? window.parent.WixGamesAds
          : null;
        const parentConfigured = typeof parentBridge?.isConfigured === "function"
          ? Boolean(parentBridge.isConfigured())
          : false;
        const parentReady = typeof parentBridge?.isReady === "function"
          ? Boolean(parentBridge.isReady())
          : parentConfigured;

        if (parentBridge && parentConfigured && parentReady) {
          return parentBridge;
        }
      } catch {}

      return window.WixGamesAds || null;
    },

    readString(ptr) {
      if (!ptr) {
        return "";
      }

      try {
        if (typeof UTF8ToString === "function") {
          return UTF8ToString(ptr);
        }
      } catch {}

      try {
        const heap =
          (activeUnityInstance && activeUnityInstance.Module && activeUnityInstance.Module.HEAPU8)
          || (window.unityInstance && window.unityInstance.Module && window.unityInstance.Module.HEAPU8)
          || (typeof Module !== "undefined" && Module && Module.HEAPU8)
          || (typeof HEAPU8 !== "undefined" ? HEAPU8 : null);

        if (heap && Number.isFinite(Number(ptr))) {
          const start = Number(ptr) >>> 0;
          let end = start;
          while (end < heap.length && heap[end] !== 0) {
            end += 1;
          }

          if (end > start) {
            if (typeof TextDecoder === "function") {
              return new TextDecoder("utf-8").decode(heap.subarray(start, end));
            }

            let value = "";
            for (let index = start; index < end; index += 1) {
              value += String.fromCharCode(heap[index]);
            }
            return value;
          }
        }
      } catch {}

      return typeof ptr === "string" ? ptr : String(ptr);
    },

    sendResult(callbackMethod, result) {
      if (!wixGamesAdsSupport.receiverName || !callbackMethod) {
        return;
      }

      const sendMessageFn =
        (activeUnityInstance && typeof activeUnityInstance.SendMessage === "function"
          ? activeUnityInstance.SendMessage.bind(activeUnityInstance)
          : null)
        || (window.unityInstance && typeof window.unityInstance.SendMessage === "function"
          ? window.unityInstance.SendMessage.bind(window.unityInstance)
          : null)
        || (typeof SendMessage === "function" ? SendMessage : null);

      if (!sendMessageFn) {
        console.warn("[WixGamesAdsUnity] No Unity SendMessage bridge is available for callback.", {
          receiverName: wixGamesAdsSupport.receiverName,
          callbackMethod,
          hasActiveUnityInstance: Boolean(activeUnityInstance),
          hasWindowUnityInstance: Boolean(window.unityInstance)
        });
        return;
      }

      try {
        sendMessageFn(wixGamesAdsSupport.receiverName, callbackMethod, JSON.stringify(result || {}));
      } catch (error) {
        console.error("[WixGamesAdsUnity] Failed to send result back to Unity.", error);
      }
    },

    makeFallbackResult(type, placementName, status, extra) {
      const result = {
        requestId: "",
        type,
        name: placementName || "",
        format: type === "reward" ? "reward" : "interstitial",
        status,
        shown: false,
        configured: false,
        ready: false
      };

      if (extra && typeof extra === "object") {
        Object.assign(result, extra);
      }

      return result;
    },

    invokePlacement(methodName, fallbackType, placementPtr, callbackPtr) {
      const placementName = wixGamesAdsSupport.readString(placementPtr);
      const callbackMethod = wixGamesAdsSupport.readString(callbackPtr);
      const bridge = wixGamesAdsSupport.getBridge();

      if (!bridge || typeof bridge[methodName] !== "function") {
        wixGamesAdsSupport.sendResult(
          callbackMethod,
          wixGamesAdsSupport.makeFallbackResult(fallbackType, placementName, "bridgeUnavailable")
        );
        return;
      }

      try {
        bridge[methodName]({ name: placementName })
          .then((result) => {
            wixGamesAdsSupport.sendResult(callbackMethod, result);
          })
          .catch((error) => {
            wixGamesAdsSupport.sendResult(
              callbackMethod,
              wixGamesAdsSupport.makeFallbackResult(fallbackType, placementName, "error", {
                error: String(error?.message || error || "")
              })
            );
          });
      } catch (error) {
        wixGamesAdsSupport.sendResult(
          callbackMethod,
          wixGamesAdsSupport.makeFallbackResult(fallbackType, placementName, "error", {
            error: String(error?.message || error || "")
          })
        );
      }
    }
  };

  window.WixGamesAdsSupport = wixGamesAdsSupport;
  if (typeof globalThis !== "undefined") {
    globalThis.WixGamesAdsSupport = wixGamesAdsSupport;
  }

  function getCloudSyncGameId() {
    const parentPlayerContext = getParentPlayerContext();
    return String(parentPlayerContext?.gameId || urlParams.get("wg_player_game_id") || "").trim();
  }

  function getPlayerBuildMode() {
    const parentPlayerContext = getParentPlayerContext();
    const rawMode = String(parentPlayerContext?.mode || urlParams.get("wg_player_mode") || "").trim().toLowerCase();
    return rawMode === "test" ? "test" : "live";
  }

  function postCloudSyncSummaryToParent(gameId, summary) {
    try {
      if (!gameId || !summary?.updatedAt || !window.parent || window.parent === window) {
        return;
      }

      window.parent.postMessage(
        {
          type: "wix-cloud-sync-updated",
          gameId,
          summary
        },
        window.location.origin
      );
    } catch {}
  }

  function postHighscoresEventToParent(type, payload = {}) {
    try {
      if (!window.parent || window.parent === window) {
        return false;
      }

      window.parent.postMessage(
        {
          type,
          gameId: getCloudSyncGameId(),
          ...payload
        },
        window.location.origin
      );
      return true;
    } catch {
      return false;
    }
  }

  function createCloudSyncResult(overrides = {}) {
    return {
      success: false,
      available: Boolean(getCloudSyncGameId()),
      authenticated: true,
      hasSave: false,
      gameId: getCloudSyncGameId(),
      format: "text",
      data: "",
      updatedAt: "",
      bytes: 0,
      error: "",
      code: "",
      ...overrides
    };
  }

  const CLOUD_SYNC_LOCAL_STORAGE_PREFIX = "wixgames.cloudSync.local.v1";

  function getCloudSyncLocalStorageKey(gameId = getCloudSyncGameId(), mode = getPlayerBuildMode()) {
    const normalizedGameId = String(gameId || "").trim();
    if (!normalizedGameId) {
      return "";
    }

    const normalizedMode = String(mode || "").trim().toLowerCase() === "test" ? "test" : "live";
    return `${CLOUD_SYNC_LOCAL_STORAGE_PREFIX}:${normalizedMode}:${normalizedGameId}`;
  }

  function getCloudSyncByteLength(value) {
    const text = String(value ?? "");
    try {
      return new Blob([text]).size;
    } catch {
      return text.length;
    }
  }

  function readLocalCloudSyncEntry() {
    const gameId = getCloudSyncGameId();
    const storageKey = getCloudSyncLocalStorageKey(gameId);
    if (!storageKey) {
      return null;
    }

    try {
      const rawEntry = window.localStorage?.getItem(storageKey);
      if (!rawEntry) {
        return null;
      }

      const parsedEntry = JSON.parse(rawEntry);
      if (!parsedEntry || typeof parsedEntry !== "object") {
        return null;
      }

      const data = String(parsedEntry.data ?? "");
      if (!data) {
        return null;
      }

      return {
        gameId,
        format: String(parsedEntry.format || "text").trim() || "text",
        data,
        updatedAt: String(parsedEntry.updatedAt || "").trim(),
        bytes: Number(parsedEntry.bytes ?? getCloudSyncByteLength(data)) || 0
      };
    } catch {
      return null;
    }
  }

  function createLocalCloudSyncLoadResult(options = {}) {
    const { includeData = true, error = "" } = options;
    const entry = readLocalCloudSyncEntry();
    if (!entry) {
      return createCloudSyncResult({
        success: false,
        authenticated: false,
        error: String(error || "Sign in required."),
        code: "notAuthenticated"
      });
    }

    return createCloudSyncResult({
      success: true,
      authenticated: false,
      hasSave: true,
      gameId: entry.gameId,
      format: entry.format,
      data: includeData ? entry.data : "",
      updatedAt: entry.updatedAt,
      bytes: entry.bytes,
      code: "localFallback"
    });
  }

  function saveLocalCloudSyncData(data, format) {
    const gameId = getCloudSyncGameId();
    const storageKey = getCloudSyncLocalStorageKey(gameId);
    if (!storageKey) {
      return createCloudSyncResult({
        available: false,
        authenticated: false,
        error: "Cloud sync is unavailable because this player has no game context.",
        code: "unavailable"
      });
    }

    const normalizedData = String(data ?? "");
    const normalizedFormat = String(format || "text").trim() || "text";
    if (!normalizedData) {
      return createCloudSyncResult({
        authenticated: false,
        error: "Save data is required.",
        code: "emptySaveIgnored"
      });
    }

    const updatedAt = new Date().toISOString();
    const bytes = getCloudSyncByteLength(normalizedData);

    try {
      window.localStorage?.setItem(storageKey, JSON.stringify({
        gameId,
        mode: getPlayerBuildMode(),
        format: normalizedFormat,
        data: normalizedData,
        updatedAt,
        bytes
      }));
    } catch (error) {
      return createCloudSyncResult({
        authenticated: false,
        error: String(error?.message || error || "Could not store local cloud save fallback."),
        code: "localFallbackFailed"
      });
    }

    return createCloudSyncResult({
      success: true,
      authenticated: false,
      hasSave: true,
      gameId,
      format: normalizedFormat,
      data: normalizedData,
      updatedAt,
      bytes,
      code: "localFallback"
    });
  }

  function normalizeCloudSyncResult(result, options = {}) {
    const { includeData = true } = options;
    if (!result || typeof result !== "object") {
      return null;
    }

    return createCloudSyncResult({
      success: result.success === true,
      available: result.available !== false,
      authenticated: result.authenticated !== false,
      hasSave: Boolean(result.hasSave),
      gameId: String(result.gameId || getCloudSyncGameId() || "").trim(),
      format: String(result.format || "text").trim() || "text",
      data: includeData ? String(result.data ?? "") : "",
      updatedAt: String(result.updatedAt ?? "").trim(),
      bytes: Number(result.bytes ?? 0) || 0,
      error: String(result.error ?? "").trim(),
      code: String(result.code ?? "").trim()
    });
  }

  async function parseCloudSyncResponse(response) {
    try {
      return await response.json();
    } catch {
      return {};
    }
  }

  let cachedCloudSyncResult = null;
  let knownAccountSessionAuthenticated = null;
  let pendingAccountSessionProbe = null;

  function waitForCloudSyncCallbackWindow() {
    return new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve();
        return;
      }

      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(resolve);
        });
        return;
      }

      window.setTimeout(resolve, 34);
    });
  }

  function setCachedCloudSyncResult(result) {
    cachedCloudSyncResult = normalizeCloudSyncResult(result);
    if (typeof cachedCloudSyncResult?.authenticated === "boolean") {
      knownAccountSessionAuthenticated = cachedCloudSyncResult.authenticated;
    }
    return cachedCloudSyncResult;
  }

  function getCachedCloudSyncResult(options = {}) {
    const { includeData = true } = options;
    const currentGameId = getCloudSyncGameId();
    if (!cachedCloudSyncResult) {
      return null;
    }

    if (currentGameId && cachedCloudSyncResult.gameId && cachedCloudSyncResult.gameId !== currentGameId) {
      cachedCloudSyncResult = null;
      return null;
    }

    return normalizeCloudSyncResult(cachedCloudSyncResult, { includeData });
  }

  async function resolveKnownAccountSessionAuthenticated() {
    if (typeof knownAccountSessionAuthenticated === "boolean") {
      return knownAccountSessionAuthenticated;
    }

    if (pendingAccountSessionProbe) {
      return pendingAccountSessionProbe;
    }

    pendingAccountSessionProbe = (async () => {
      try {
        const response = await window.fetch("/api/account/session", {
          method: "GET",
          credentials: "same-origin",
          cache: "no-store",
          headers: {
            accept: "application/json"
          }
        });
        const body = await parseCloudSyncResponse(response);
        knownAccountSessionAuthenticated = Boolean(body?.authenticated && body?.user);
      } catch {
        knownAccountSessionAuthenticated = null;
      } finally {
        pendingAccountSessionProbe = null;
      }

      return knownAccountSessionAuthenticated;
    })();

    return pendingAccountSessionProbe;
  }

  async function loadCloudSyncData(options = {}) {
    const { includeData = true } = options;
    await waitForCloudSyncCallbackWindow();
    const gameId = getCloudSyncGameId();
    if (!gameId) {
      return createCloudSyncResult({
        available: false,
        authenticated: false,
        error: "Cloud sync is unavailable because this player has no game context.",
        code: "unavailable"
      });
    }

    const cachedResult = getCachedCloudSyncResult({ includeData });
    if (cachedResult) {
      return cachedResult;
    }

    const authenticated = await resolveKnownAccountSessionAuthenticated();
    if (authenticated === false) {
      cachedCloudSyncResult = null;
      return createLocalCloudSyncLoadResult({ includeData });
    }

    let response;
    try {
      response = await fetch(`/api/account/cloud-sync?gameId=${encodeURIComponent(gameId)}&mode=${encodeURIComponent(getPlayerBuildMode())}`, {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
        headers: {
          accept: "application/json"
        }
      });
    } catch (error) {
      return createCloudSyncResult({
        error: String(error?.message || error || "Could not reach cloud sync."),
        code: "networkError"
      });
    }

    const body = await parseCloudSyncResponse(response);
    if (response.status === 401) {
      knownAccountSessionAuthenticated = false;
      cachedCloudSyncResult = null;
      return createLocalCloudSyncLoadResult({
        includeData,
        error: String(body.error || "Sign in required.")
      });
    }

    if (!response.ok) {
      return createCloudSyncResult({
        error: String(body.error || "Could not load cloud save data."),
        code: "loadFailed"
      });
    }

    const summary = body.summary && typeof body.summary === "object" ? body.summary : null;
    const result = createCloudSyncResult({
      success: true,
      authenticated: true,
      hasSave: Boolean(body.hasSave),
      gameId: String(body.gameId || gameId).trim() || gameId,
      format: String(summary?.format || "text").trim() || "text",
      data: includeData ? String(body.data ?? "") : "",
      updatedAt: String(summary?.updatedAt ?? "").trim(),
      bytes: Number(summary?.bytes ?? 0) || 0,
      code: "ok"
    });
    knownAccountSessionAuthenticated = true;
    setCachedCloudSyncResult(result);

    if (summary?.updatedAt) {
      postCloudSyncSummaryToParent(result.gameId, summary);
    }

    return result;
  }

  async function saveCloudSyncData(inputData, options = {}) {
    await waitForCloudSyncCallbackWindow();
    const gameId = getCloudSyncGameId();
    if (!gameId) {
      return createCloudSyncResult({
        available: false,
        authenticated: false,
        error: "Cloud sync is unavailable because this player has no game context.",
        code: "unavailable"
      });
    }

    let data = "";
    let format = String(options?.format || "").trim();
    if (typeof inputData === "string") {
      data = inputData;
      if (!format) {
        format = "text";
      }
    } else {
      try {
        data = JSON.stringify(inputData ?? "");
      } catch (error) {
        return createCloudSyncResult({
          error: String(error?.message || error || "Save data could not be serialized."),
          code: "serializeFailed"
        });
      }

      if (!format) {
        format = "json";
      }
    }

    const authenticated = await resolveKnownAccountSessionAuthenticated();
    if (authenticated === false) {
      cachedCloudSyncResult = null;
      return saveLocalCloudSyncData(data, format);
    }

    let response;
    try {
      response = await fetch("/api/account/cloud-sync", {
        method: "PUT",
        credentials: "same-origin",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          gameId,
          mode: getPlayerBuildMode(),
          data,
          format
        })
      });
    } catch (error) {
      return createCloudSyncResult({
        error: String(error?.message || error || "Could not reach cloud sync."),
        code: "networkError"
      });
    }

    const body = await parseCloudSyncResponse(response);
    if (response.status === 401) {
      knownAccountSessionAuthenticated = false;
      cachedCloudSyncResult = null;
      return saveLocalCloudSyncData(data, format);
    }

    if (!response.ok) {
      return createCloudSyncResult({
        error: String(body.error || "Could not save cloud data."),
        code: response.status === 413 ? "tooLarge" : "saveFailed"
      });
    }

    const summary = body.summary && typeof body.summary === "object" ? body.summary : null;
    const result = createCloudSyncResult({
      success: true,
      authenticated: true,
      hasSave: true,
      gameId: String(body.gameId || gameId).trim() || gameId,
      format: String(summary?.format || format || "text").trim() || "text",
      data,
      updatedAt: String(summary?.updatedAt ?? "").trim(),
      bytes: Number(summary?.bytes ?? 0) || 0,
      code: "ok"
    });
    knownAccountSessionAuthenticated = true;
    setCachedCloudSyncResult(result);

    if (summary?.updatedAt) {
      postCloudSyncSummaryToParent(result.gameId, summary);
    }

    return result;
  }

  const wixCloudSync = {
    isAvailable: () => Boolean(getCloudSyncGameId()),
    getGameId: () => getCloudSyncGameId(),
    getStatus: async () => loadCloudSyncData({ includeData: false }),
    load: async () => loadCloudSyncData({ includeData: true }),
    save: async (data, options = {}) => saveCloudSyncData(data, options)
  };

  window.WixCloudSync = wixCloudSync;
  window.CloudSync = {
    IsAvailable: wixCloudSync.isAvailable,
    GameId: wixCloudSync.getGameId,
    Status: wixCloudSync.getStatus,
    Load: wixCloudSync.load,
    Save: wixCloudSync.save
  };
  if (typeof globalThis !== "undefined") {
    globalThis.WixCloudSync = wixCloudSync;
    globalThis.CloudSync = window.CloudSync;
  }

  function cloneAchievementPacket(packet) {
    if (typeof packet === "string") {
      return packet;
    }

    try {
      return JSON.parse(JSON.stringify(packet ?? {}));
    } catch {
      return packet ?? {};
    }
  }

  function createAchievementsResult(overrides = {}) {
    return {
      success: false,
      available: Boolean(getCloudSyncGameId()),
      authenticated: true,
      gameId: getCloudSyncGameId(),
      syncedCount: 0,
      newlyUnlocked: [],
      error: "",
      code: "",
      ...overrides
    };
  }

  function postAchievementsUpdateToParent(user, result) {
    try {
      if (!user || !window.parent || window.parent === window) {
        return;
      }

      window.parent.postMessage(
        {
          type: "wix-achievements-updated",
          user,
          gameId: String(result?.gameId || getCloudSyncGameId() || "").trim(),
          newlyUnlocked: Array.isArray(result?.newlyUnlocked) ? result.newlyUnlocked : []
        },
        window.location.origin
      );
    } catch {}
  }

  async function syncAchievementsPacket(packet) {
    const gameId = getCloudSyncGameId();
    if (!gameId) {
      return createAchievementsResult({
        available: false,
        authenticated: false,
        error: "Achievements are unavailable because this player has no game context.",
        code: "missingGameId"
      });
    }

    const authenticated = await resolveKnownAccountSessionAuthenticated();
    if (authenticated === false) {
      return createAchievementsResult({
        authenticated: false,
        error: "Sign in required.",
        code: "notAuthenticated"
      });
    }

    const safePacket = cloneAchievementPacket(packet);
    let response;
    try {
      response = await window.fetch("/api/account/achievements", {
        method: "PUT",
        credentials: "same-origin",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          gameId,
          mode: getPlayerBuildMode(),
          packet: safePacket
        })
      });
    } catch (error) {
      return createAchievementsResult({
        error: String(error?.message || error || "Could not reach achievements sync."),
        code: "networkError"
      });
    }

    const body = await parseCloudSyncResponse(response);
    if (response.status === 401) {
      knownAccountSessionAuthenticated = false;
      return createAchievementsResult({
        authenticated: false,
        error: String(body.error || "Sign in required."),
        code: "notAuthenticated"
      });
    }

    if (!response.ok) {
      return createAchievementsResult({
        error: String(body.error || "Could not sync achievements."),
        code: response.status === 403 ? "notConfigured" : "syncFailed"
      });
    }

    if (body.user && typeof body.user === "object") {
      postAchievementsUpdateToParent(body.user, body);
    }
    knownAccountSessionAuthenticated = true;

    return createAchievementsResult({
      success: true,
      authenticated: true,
      gameId: String(body.gameId || gameId).trim() || gameId,
      syncedCount: Number(body.syncedCount ?? 0) || 0,
      newlyUnlocked: Array.isArray(body.newlyUnlocked) ? body.newlyUnlocked : [],
      code: "ok"
    });
  }

  const wixAchievements = {
    isAvailable: () => Boolean(getCloudSyncGameId()),
    sync: async (packet) => syncAchievementsPacket(packet)
  };

  window.WixAchievements = wixAchievements;
  window.WebAchievements = {
    IsAvailable: wixAchievements.isAvailable,
    Sync: wixAchievements.sync
  };
  if (typeof globalThis !== "undefined") {
    globalThis.WixAchievements = wixAchievements;
    globalThis.WebAchievements = window.WebAchievements;
  }

  const wixHighscores = {
    isAvailable: () => Boolean(getCloudSyncGameId()),
    show: (boardId, score) => {
      const normalizedBoardId = String(boardId || "").trim();
      const numericScore = Number(score);
      if (!normalizedBoardId || !Number.isFinite(numericScore)) {
        return false;
      }

      const normalizedScore = Math.max(0, Math.floor(numericScore));
      const signature = `${normalizedBoardId}::${normalizedScore}`;
      if (signature === activeHighscoresSignature) {
        return true;
      }

      const posted = postHighscoresEventToParent("wix-highscores-show", {
        boardId: normalizedBoardId,
        score: normalizedScore
      });
      if (posted) {
        activeHighscoresSignature = signature;
      }
      return posted;
    },
    close: () => {
      activeHighscoresSignature = "";
      return postHighscoresEventToParent("wix-highscores-close");
    },
    closeIntrusive: () => {
      activeHighscoresSignature = "";
      return postHighscoresEventToParent("wix-highscores-close-intrusive");
    }
  };

  window.WixHighscores = wixHighscores;
  window.WebHighscores = {
    IsAvailable: wixHighscores.isAvailable,
    Show: wixHighscores.show,
    Close: wixHighscores.close,
    CloseIntrusive: wixHighscores.closeIntrusive
  };
  if (typeof globalThis !== "undefined") {
    globalThis.WixHighscores = wixHighscores;
    globalThis.WebHighscores = window.WebHighscores;
  }

  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      return;
    }

    const payload = event.data && typeof event.data === "object" ? event.data : null;
    if (!payload) {
      return;
    }

    if (payload.type === "wix-cloud-sync-preload") {
      if (payload.result && typeof payload.result === "object") {
        if (payload.result.authenticated === false && payload.result.code === "notAuthenticated") {
          cachedCloudSyncResult = null;
          knownAccountSessionAuthenticated = false;
          return;
        }
        setCachedCloudSyncResult(payload.result);
      } else {
        cachedCloudSyncResult = null;
      }
      return;
    }

    if (payload.type !== "wix-account-session-updated") {
      return;
    }

    knownAccountSessionAuthenticated = typeof payload.authenticated === "boolean"
      ? payload.authenticated
      : knownAccountSessionAuthenticated;
    if (knownAccountSessionAuthenticated === false) {
      cachedCloudSyncResult = null;
      return;
    }

    cachedCloudSyncResult = null;
  });

  function trackAudioContext(context) {
    if (!context) {
      return context;
    }

    managedAudioContexts.add(context);
    if (audioGateActive) {
      context.suspend?.().catch(() => {});
    }
    return context;
  }

  function patchAudioContextConstructor(name) {
    const NativeAudioContext = window[name];
    if (typeof NativeAudioContext !== "function") {
      return;
    }

    const originalResume = NativeAudioContext.prototype?.resume;
    const originalSuspend = NativeAudioContext.prototype?.suspend;
    if (typeof originalResume === "function" && !NativeAudioContext.prototype.__wixAudioGatePatched) {
      NativeAudioContext.prototype.resume = function gatedResume(...args) {
        managedAudioContexts.add(this);
        if (audioGateActive) {
          pendingAudioResumes.add(this);
          originalSuspend?.call(this).catch(() => {});
          return Promise.resolve();
        }

        pendingAudioResumes.delete(this);
        return originalResume.apply(this, args);
      };
      NativeAudioContext.prototype.__wixAudioGatePatched = true;
    }

    function WrappedAudioContext(...args) {
      return trackAudioContext(Reflect.construct(NativeAudioContext, args, new.target || NativeAudioContext));
    }

    WrappedAudioContext.prototype = NativeAudioContext.prototype;
    Object.setPrototypeOf(WrappedAudioContext, NativeAudioContext);
    window[name] = WrappedAudioContext;
  }

  function syncMediaElementAudioGate() {
    const mediaElements = document.querySelectorAll("audio,video");
    for (const media of mediaElements) {
      if (!(media instanceof HTMLMediaElement) || media === loaderVideo) {
        continue;
      }

      if (audioGateActive) {
        if (!gatedMediaElements.has(media)) {
          gatedMediaElements.set(media, {
            muted: media.muted,
            volume: media.volume
          });
        }
        media.muted = true;
        media.volume = 0;
      } else if (gatedMediaElements.has(media)) {
        const original = gatedMediaElements.get(media);
        media.muted = original?.muted ?? media.muted;
        media.volume = original?.volume ?? media.volume;
        gatedMediaElements.delete(media);
      }
    }
  }

  function setAudioGateActive(active) {
    audioGateActive = Boolean(active);
    syncMediaElementAudioGate();

    for (const context of managedAudioContexts) {
      if (audioGateActive) {
        pendingAudioResumes.add(context);
        context.suspend?.().catch(() => {});
      } else {
        context.resume?.().catch(() => {});
      }
    }

    if (!audioGateActive) {
      pendingAudioResumes.clear();
    }
  }

  function installAudioGate() {
    patchAudioContextConstructor("AudioContext");
    patchAudioContextConstructor("webkitAudioContext");

    if (typeof window.MutationObserver === "function") {
      const observer = new MutationObserver(() => {
        syncMediaElementAudioGate();
      });
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }

    syncMediaElementAudioGate();
  }

  function formatBytes(bytes) {
    const value = Number(bytes);
    if (!Number.isFinite(value) || value <= 0) {
      return "0 B";
    }

    const units = ["B", "KB", "MB", "GB"];
    let size = value;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex += 1;
    }

    return `${size >= 10 || unitIndex === 0 ? size.toFixed(unitIndex === 0 ? 0 : 1) : size.toFixed(2)} ${units[unitIndex]}`;
  }

  function normalizeTrackedPath(input) {
    try {
      const url = new URL(String(input), window.location.href);
      return decodeURIComponent(url.pathname);
    } catch {
      return String(input || "");
    }
  }

  function getLegacyApiBridgeUrl(input) {
    try {
      const rawUrl = typeof input === "string" || input instanceof URL
        ? String(input)
        : String(input?.url || "");
      if (!rawUrl) {
        return "";
      }

      const parsedUrl = new URL(rawUrl, window.location.href);
      const hostname = parsedUrl.hostname.toLowerCase();
      const legacyApiPath = parsedUrl.pathname;
      const isLegacyApiHost = hostname === "games.wixgames.co.uk" || hostname === "www.wixgames.co.uk" || hostname === "wixgames.co.uk";
      const isSupportedLegacyApiPath = legacyApiPath === "/Jumphobia.php" || legacyApiPath === "/jrdeletelevel.asp" || legacyApiPath === "/jrmessage.asp";
      if (!isLegacyApiHost || !isSupportedLegacyApiPath) {
        return "";
      }

      return `/api/legacy-api?url=${encodeURIComponent(parsedUrl.toString())}`;
    } catch {
      return "";
    }
  }

  function rewriteLegacyApiRequestResource(resource) {
    const bridgedUrl = getLegacyApiBridgeUrl(resource);
    if (!bridgedUrl) {
      const originalUrl = typeof resource === "string" || resource instanceof URL
        ? String(resource)
        : String(resource?.url || "");
      return {
        resource,
        url: originalUrl
      };
    }

    if (typeof Request === "function" && resource instanceof Request) {
      return {
        resource: new Request(bridgedUrl, resource),
        url: bridgedUrl
      };
    }

    return {
      resource: bridgedUrl,
      url: bridgedUrl
    };
  }

  function getTrackedMeta(resourcePath) {
    const pathname = normalizeTrackedPath(resourcePath);
    const directKey = pathname.replace(window.location.pathname.replace(/\/index\.html$/, ""), "");
    const direct = trackedResources[directKey];
    if (direct) {
      return {
        ...direct,
        key: directKey,
        kind: inferResourceKind(pathname, direct)
      };
    }

    const relativePath = pathname.replace(/^.*\/uploads\/unity\/[^/]+\//, "");
    const relative = trackedResources[relativePath];
    if (!relative) {
      return null;
    }

    return {
      ...relative,
      key: relativePath,
      kind: inferResourceKind(relativePath, relative)
    };
  }

  function inferResourceKind(resourcePath, trackedMeta = null) {
    if (trackedMeta?.kind === "streaming" || trackedMeta?.kind === "build") {
      return trackedMeta.kind;
    }

    const normalizedPath = normalizeTrackedPath(resourcePath).toLowerCase();
    const label = String(trackedMeta?.label || "").toLowerCase();
    if (normalizedPath.includes("/streamingassets/") || normalizedPath.startsWith("streamingassets/") || label.includes("streaming asset")) {
      return "streaming";
    }

    return "build";
  }

  function getTrackedEntries() {
    return Object.entries(trackedResources).map(([key, meta]) => {
      const normalizedMeta = typeof meta === "object" && meta ? meta : {};
      return {
        key,
        bytes: Math.max(0, Number(normalizedMeta.bytes) || 0),
        label: normalizedMeta.label || "Game Asset",
        kind: inferResourceKind(key, normalizedMeta)
      };
    });
  }

  function shouldIncludeResourceInInitialLoad(resource) {
    if (!resource) {
      return false;
    }

    const loaderSettings = getResolvedLoaderSettings();
    if (loaderSettings.includeStreamingAssetsInInitialLoad) {
      return true;
    }

    return resource.kind !== "streaming";
  }

  function buildInitialLoadBundleDetail() {
    const includedResources = getTrackedEntries().filter((resource) => shouldIncludeResourceInInitialLoad(resource));
    const buildCount = includedResources.filter((resource) => resource.kind === "build").length;
    const streamingCount = includedResources.filter((resource) => resource.kind === "streaming").length;
    const totalBytes = includedResources.reduce((sum, resource) => sum + (Number(resource.bytes) || 0), 0);

    if (!includedResources.length) {
      return String(boot.stats?.bundleDetail || "");
    }

    return `${buildCount} build files${streamingCount ? ` • ${streamingCount} streaming files` : ""} • ${formatBytes(totalBytes)}`;
  }

  function getAggregateDownload(includeResource = () => true) {
    const resources = new Map();
    let current = "";

    for (const resource of getTrackedEntries()) {
      if (!includeResource(resource)) {
        continue;
      }

      resources.set(resource.key, {
        loaded: 0,
        total: resource.bytes,
        done: false,
        label: resource.label
      });
    }

    for (const resource of activeResources.values()) {
      if (!includeResource(resource)) {
        continue;
      }

      const resourceKey = resource.catalogKey || resource.requestPath || resource.label || "Game Asset";
      const existing = resources.get(resourceKey) || {
        loaded: 0,
        total: 0,
        done: false,
        label: resource.label || "Game Asset"
      };
      const effectiveTotal = Math.max(existing.total, Math.max(0, Number(resource.total) || 0));
      const effectiveLoaded = Math.min(
        Math.max(0, Number(resource.loaded) || 0),
        effectiveTotal || Math.max(0, Number(resource.loaded) || 0)
      );
      const isComplete = (resource.done && (!effectiveTotal || effectiveLoaded >= effectiveTotal))
        || (effectiveTotal > 0 && effectiveLoaded >= effectiveTotal);

      resources.set(resourceKey, {
        loaded: effectiveLoaded,
        total: effectiveTotal,
        done: isComplete,
        label: resource.label || existing.label || "Game Asset"
      });

      if (!isComplete && resource.label) {
        current = resource.label;
      }
    }

    let loaded = 0;
    let total = 0;
    let completed = 0;
    let inFlightCount = 0;
    for (const resource of resources.values()) {
      loaded += resource.loaded;
      total += resource.total;
      if (resource.done) {
        completed += 1;
      }
      if (!resource.done && resource.total > 0 && resource.loaded < resource.total) {
        inFlightCount += 1;
      }
    }

    return { loaded, total, completed, current, inFlightCount };
  }

  function getDownloadSummary(aggregate) {
    if (!(aggregate.total > 0)) {
      return "Waiting for game files…";
    }

    return `${formatBytes(aggregate.loaded)} / ${formatBytes(aggregate.total)}`;
  }

  function describeDownloadActivity(label) {
    const normalized = String(label || "").trim().toLowerCase();
    if (!normalized) {
      return "Downloading game assets";
    }
    if (normalized.includes("loader")) {
      return "Downloading game loader";
    }
    if (normalized.includes("framework")) {
      return "Downloading framework files";
    }
    if (normalized.includes("engine code")) {
      return "Downloading game engine";
    }
    if (normalized.includes("game data")) {
      return "Downloading game data";
    }
    if (normalized.includes("streaming")) {
      return "Downloading game assets";
    }

    return `Downloading ${String(label).toLowerCase()}`;
  }

  function setLoaderPanelVisible(visible) {
    if (!loaderPanel) {
      return;
    }
    loaderPanel.classList.toggle("is-standby", !visible);
  }

  function setIntroVisible(visible) {
    if (!introScreen) {
      return;
    }
    introScreen.classList.toggle("is-hidden", !visible);
  }

  function shouldShowLoaderPanel() {
    return userStartedExperience && !gameReady;
  }

  function maybeRevealGame() {
    if (!userStartedExperience) {
      return;
    }

    if (gameReady && splashSequenceFinished) {
      hideOverlaySoon();
      return;
    }

    setLoaderPanelVisible(shouldShowLoaderPanel());
  }

  function updateLoaderUi(statusMessage = "") {
    const aggregate = getAggregateDownload(shouldIncludeResourceInInitialLoad);
    const derivedProgress = aggregate.total > 0 ? aggregate.loaded / aggregate.total : 0;
    const progress = aggregate.total > 0 && aggregate.loaded < aggregate.total
      ? derivedProgress
      : Math.max(unityProgress, derivedProgress);
    const percent = Math.max(0, Math.min(100, Math.round(progress * 100)));
    const downloadSummary = getDownloadSummary(aggregate);

    progressBar.style.width = `${percent}%`;
    progressLabel.textContent = `${percent}%`;
    if (currentAssetLabel) {
      currentAssetLabel.textContent = aggregate.current
        || (loaderReady && aggregate.loaded < aggregate.total ? "Unity Runtime" : "Preparing launcher");
    }
    if (phaseLabel) {
      phaseLabel.textContent = downloadSummary;
    }
    if (downloadDetailLabel) {
      downloadDetailLabel.textContent = downloadSummary;
    }

    if (bundleDetailLabel) {
      bundleDetailLabel.textContent = buildInitialLoadBundleDetail();
    }

    if (statusMessage) {
      if (statusLabel) {
        statusLabel.textContent = statusMessage;
      }
      return;
    }

    if (!loaderReady) {
      if (statusLabel) {
        statusLabel.textContent = "Loading the Wix Games launcher";
      }
    } else if (gameReady) {
      if (statusLabel) {
        statusLabel.textContent = "Everything is ready. Jumping into the game…";
      }
    } else if (aggregate.inFlightCount > 0) {
      if (statusLabel) {
        statusLabel.textContent = describeDownloadActivity(aggregate.current);
      }
    } else if (aggregate.total > 0 && aggregate.loaded < aggregate.total) {
      if (statusLabel) {
        statusLabel.textContent = "Preparing the next stage of the Unity runtime";
      }
    } else if (unityProgress > 0) {
      if (statusLabel) {
        statusLabel.textContent = "Preparing the final game runtime";
      }
    } else {
      if (statusLabel) {
        statusLabel.textContent = "Preparing Unity runtime";
      }
    }

    maybeRevealGame();
  }

  async function resolveIntroMetadata() {
    const explicitCover = String(boot.coverImage || "").trim();
    const explicitShowMadSplash = Boolean(boot.showMadSplash);

    try {
      const response = await fetch("/api/games", { credentials: "same-origin" });
      if (!response.ok) {
        return {
          coverImage: explicitCover,
          showMadSplash: explicitShowMadSplash
        };
      }
      const payload = await response.json();
      const games = Array.isArray(payload) ? payload : Array.isArray(payload?.games) ? payload.games : [];
      const currentPath = window.location.pathname;
      const match = games.find((game) => {
        const playerUrl = String(game?.unityWebgl?.playerUrl || "").trim();
        if (!playerUrl) {
          return false;
        }
        try {
          return new URL(playerUrl, window.location.origin).pathname === currentPath;
        } catch {
          return playerUrl === currentPath;
        }
      });
      return {
        coverImage: String(match?.coverImage || explicitCover).trim(),
        showMadSplash: Boolean(match?.showMadSplash ?? explicitShowMadSplash)
      };
    } catch {
      return {
        coverImage: explicitCover,
        showMadSplash: explicitShowMadSplash
      };
    }
  }

  function buildIntroScreen() {
    if (introScreen || !loaderOverlay) {
      return;
    }

    const intro = document.createElement("section");
    intro.className = "unity-intro-screen";
    intro.innerHTML = `
      <div class="unity-intro-card">
        <div class="unity-intro-cover" id="unity-intro-cover" aria-hidden="true">
          <img class="unity-intro-cover-logo" src="/NewLogo.png" alt="" />
        </div>
        <div class="unity-intro-body">
          <p class="unity-intro-kicker">Play Game</p>
          <h3>${document.title.replace(/\s*\|\s*Wix Games\s*$/, "")}</h3>
          <button id="unity-intro-play" class="unity-intro-play" type="button">Play</button>
        </div>
      </div>
    `;

    loaderOverlay.insertBefore(intro, loaderPanel || loaderOverlay.firstChild);
    introScreen = intro;
    introCoverImage = intro.querySelector("#unity-intro-cover");
    introPlayButton = intro.querySelector("#unity-intro-play");
  }

  function stopLoaderVideoPlayback({ resetSource = false } = {}) {
    if (resumeLoaderVideo) {
      window.removeEventListener("pointerdown", resumeLoaderVideo);
      window.removeEventListener("keydown", resumeLoaderVideo);
      resumeLoaderVideo = null;
    }

    if (!loaderVideo) {
      return;
    }

    try {
      loaderVideo.pause();
    } catch {}

    try {
      loaderVideo.muted = true;
      loaderVideo.defaultMuted = true;
      loaderVideo.volume = 0;
    } catch {}

    try {
      loaderVideo.currentTime = 0;
    } catch {}

    if (resetSource) {
      try {
        loaderVideo.removeAttribute("src");
        loaderVideo.load();
      } catch {}
    }
  }

  function playCurrentSplash() {
    if (!loaderVideo || currentSplashIndex < 0 || currentSplashIndex >= splashQueue.length) {
      splashSequenceFinished = true;
      maybeRevealGame();
      return;
    }

    loaderVideo.currentTime = 0;
    loaderVideo.src = splashQueue[currentSplashIndex];
    loaderVideo.load();
    loaderVideo.classList.remove("is-hidden");
    loaderVideo.muted = false;
    loaderVideo.volume = 1;

    const playWithSound = () => {
      loaderVideo?.play().catch(() => {});
    };
    resumeLoaderVideo = () => {
      playWithSound();
      window.removeEventListener("pointerdown", resumeLoaderVideo);
      window.removeEventListener("keydown", resumeLoaderVideo);
    };

    playWithSound();
    window.addEventListener("pointerdown", resumeLoaderVideo, { once: true });
    window.addEventListener("keydown", resumeLoaderVideo, { once: true });
  }

  function advanceSplashSequence() {
    currentSplashIndex += 1;
    if (currentSplashIndex >= splashQueue.length) {
      stopLoaderVideoPlayback();
      splashSequenceFinished = true;
      maybeRevealGame();
      return;
    }

    playCurrentSplash();
  }

  function startSplashVideo() {
    if (!loaderVideo || splashSequenceStarted) {
      return;
    }

    splashSequenceStarted = true;
    splashSequenceFinished = false;
    currentSplashIndex = -1;
    advanceSplashSequence();
  }

  function attachSplashVideoLifecycle(video) {
    video.addEventListener("ended", () => {
      advanceSplashSequence();
    });
    video.addEventListener("error", () => {
      advanceSplashSequence();
    });
  }

  function handleIntroPlay() {
    userStartedExperience = true;
    setIntroVisible(false);
    startSplashVideo();
    setLoaderPanelVisible(shouldShowLoaderPanel());
    maybeRevealGame();
  }

  async function setupLoaderScene() {
    if (kickerLabel) {
      kickerLabel.textContent = "Now Loading";
    }

    buildIntroScreen();
    setLoaderPanelVisible(false);
    setIntroVisible(true);
    setAudioGateActive(true);
    splashQueue = [new URL("/WixSplash.mp4", window.location.origin).toString()];

    if (!stageWrap) {
      return;
    }

    stageWrap.classList.add("is-gated");

    const existingVideo = document.getElementById("unity-loader-video");
    if (existingVideo instanceof HTMLVideoElement) {
      loaderVideo = existingVideo;
      loaderVideo.muted = false;
      loaderVideo.volume = 1;
      loaderVideo.classList.add("is-hidden");
      attachSplashVideoLifecycle(loaderVideo);
    } else {
      const video = document.createElement("video");
      video.id = "unity-loader-video";
      video.className = "unity-loader-video is-hidden";
      video.muted = false;
      video.autoplay = false;
      video.playsInline = true;
      video.preload = "auto";
      video.disablePictureInPicture = true;
      video.controls = false;
      video.volume = 1;
      video.loop = false;
      video.setAttribute("aria-hidden", "true");
      video.setAttribute("playsinline", "");
      attachSplashVideoLifecycle(video);

      stageWrap.insertBefore(video, canvas || stageWrap.firstChild);
      loaderVideo = video;
    }

    if (introPlayButton) {
      introPlayButton.addEventListener("click", handleIntroPlay, { once: true });
    }

    const { coverImage, showMadSplash } = await resolveIntroMetadata();
    if (showMadSplash && !splashQueue.includes(new URL("/MadSplash.mp4", window.location.origin).toString())) {
      splashQueue.push(new URL("/MadSplash.mp4", window.location.origin).toString());
    }

    if (introCoverImage && coverImage) {
      introCoverImage.style.backgroundImage = `url("${coverImage.replace(/"/g, "%22")}")`;
      introCoverImage.classList.add("has-image");
    }
  }

  function beginTracking(url, totalOverride = 0) {
    const pathname = normalizeTrackedPath(url);
    const trackedMeta = getTrackedMeta(pathname);
    const key = pathname;
    const current = activeResources.get(key) || {
      loaded: 0,
      total: 0,
      label: trackedMeta?.label || pathname.split("/").pop() || "Game Asset",
      catalogKey: trackedMeta?.key || pathname,
      requestPath: pathname,
      kind: inferResourceKind(pathname, trackedMeta),
      done: false
    };
    current.total = totalOverride || current.total || Number(trackedMeta?.bytes || 0);
    current.catalogKey = trackedMeta?.key || current.catalogKey || pathname;
    current.requestPath = pathname;
    current.kind = inferResourceKind(pathname, trackedMeta || current);
    current.done = false;
    activeResources.set(key, current);
    updateLoaderUi();
    return key;
  }

  function updateTracking(key, loaded, total = 0, done = false) {
    const current = activeResources.get(key);
    if (!current) {
      return;
    }

    current.loaded = Math.max(current.loaded, Number(loaded) || 0);
    current.total = Math.max(current.total, Number(total) || 0);
    current.done = done;
    activeResources.set(key, current);
    updateLoaderUi();
  }

  function trackReadableResponse(url, response) {
    const key = beginTracking(url, Number(response.headers.get("content-length")) || 0);
    if (!response.body || typeof response.body.getReader !== "function") {
      updateTracking(key, activeResources.get(key)?.total || 0, activeResources.get(key)?.total || 0, true);
      return response;
    }

    const reader = response.body.getReader();
    let loaded = 0;
    const stream = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        if (done) {
          updateTracking(key, loaded, activeResources.get(key)?.total || loaded, true);
          controller.close();
          return;
        }

        loaded += value.byteLength;
        updateTracking(key, loaded, activeResources.get(key)?.total || 0, false);
        controller.enqueue(value);
      },
      cancel(reason) {
        reader.cancel(reason).catch(() => {});
      }
    });

    return new Response(stream, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }

  function applyPerformanceResourceEntry(entry) {
    const pathname = normalizeTrackedPath(entry?.name);
    if (!pathname.includes("/uploads/unity/")) {
      return;
    }

    const trackedMeta = getTrackedMeta(pathname);
    if (!trackedMeta) {
      return;
    }

    const knownTotal = Math.max(0, Number(trackedMeta.bytes) || 0);
    const entryBytes = Math.max(
      0,
      Number(entry?.encodedBodySize)
      || Number(entry?.decodedBodySize)
      || Number(entry?.transferSize)
      || 0
    );

    if (!entryBytes && !knownTotal) {
      return;
    }

    const accumulated = Math.min(
      knownTotal || entryBytes,
      (performanceTrackedBytes.get(trackedMeta.key) || 0) + entryBytes
    );
    performanceTrackedBytes.set(trackedMeta.key, accumulated);

    const key = beginTracking(pathname, knownTotal || entryBytes);
    updateTracking(key, accumulated, knownTotal || entryBytes, knownTotal > 0 && accumulated >= knownTotal);
  }

  function syncResourceTimingEntries() {
    if (!window.performance?.getEntriesByType) {
      return;
    }

    const resourceEntries = window.performance.getEntriesByType("resource") || [];
    for (const entry of resourceEntries) {
      applyPerformanceResourceEntry(entry);
    }
  }

  function observeResourceTiming() {
    syncResourceTimingEntries();

    if (typeof window.PerformanceObserver !== "function") {
      return;
    }

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          applyPerformanceResourceEntry(entry);
        }
      });
      observer.observe({ type: "resource", buffered: true });
    } catch {
      // Ignore unsupported browsers and keep the fetch/XHR tracking path.
    }
  }

  const nativeFetch = window.fetch.bind(window);
  window.fetch = async (resource, init) => {
    const rewrittenRequest = rewriteLegacyApiRequestResource(resource);
    const response = await nativeFetch(rewrittenRequest.resource, init);
    const url = rewrittenRequest.url;
    const pathname = normalizeTrackedPath(url);
    if (!pathname.includes("/uploads/unity/")) {
      return response;
    }
    return trackReadableResponse(url, response);
  };

  const NativeXmlHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = function WixTrackedXmlHttpRequest() {
    const xhr = new NativeXmlHttpRequest();
    let trackedUrl = "";
    let trackedKey = "";

    const nativeOpen = xhr.open;
    xhr.open = function trackedOpen(method, url, ...rest) {
      const bridgedUrl = getLegacyApiBridgeUrl(url);
      trackedUrl = bridgedUrl || (typeof url === "string" || url instanceof URL ? String(url) : "");
      return nativeOpen.call(this, method, bridgedUrl || url, ...rest);
    };

    xhr.addEventListener("loadstart", () => {
      if (normalizeTrackedPath(trackedUrl).includes("/uploads/unity/")) {
        trackedKey = beginTracking(trackedUrl, Number(xhr.getResponseHeader("content-length")) || 0);
      }
    });

    xhr.addEventListener("progress", (event) => {
      if (!trackedKey) {
        return;
      }
      updateTracking(trackedKey, event.loaded, event.lengthComputable ? event.total : 0, false);
    });

    xhr.addEventListener("load", () => {
      if (!trackedKey) {
        return;
      }
      const total = Number(xhr.getResponseHeader("content-length")) || activeResources.get(trackedKey)?.total || 0;
      updateTracking(trackedKey, total, total, true);
    });

    return xhr;
  };
  window.XMLHttpRequest.prototype = NativeXmlHttpRequest.prototype;

  function hideOverlaySoon() {
    if (overlayHidden) {
      return;
    }
    overlayHidden = true;
    stopLoaderVideoPlayback();
    window.setTimeout(() => {
      setAudioGateActive(false);
      stageWrap?.classList.remove("is-gated");
      loaderVideo?.classList.add("is-hidden");
      loaderOverlay?.classList.add("is-hidden");
    }, 350);
  }

  function showOverlay() {
    overlayHidden = false;
    loaderVideo?.classList.remove("is-hidden");
    loaderOverlay?.classList.remove("is-hidden");
  }

  function bootUnity() {
    if (!canvas || !boot.loaderUrl || !boot.unityConfig) {
      updateLoaderUi("Unity loader configuration is missing.");
      return;
    }

    updateLoaderUi("Loading the Wix Games launcher…");
    const script = document.createElement("script");
    script.src = boot.loaderUrl;
    script.async = true;
    script.onload = async () => {
      loaderReady = true;
      updateLoaderUi("Unity launcher ready. Starting the game engine…");

      if (typeof window.createUnityInstance !== "function") {
        updateLoaderUi("Unity loader started, but createUnityInstance is unavailable.");
        return;
      }

      try {
        const unityInstance = await window.createUnityInstance(canvas, boot.unityConfig, (progress) => {
          unityProgress = Number(progress) || 0;
          updateLoaderUi();
        });
        activeUnityInstance = unityInstance;
        window.unityInstance = unityInstance;

        gameReady = true;
        updateLoaderUi();
      } catch (error) {
        showOverlay();
        updateLoaderUi(error?.message || "Unity failed to start.");
      }
    };
    script.onerror = () => {
      showOverlay();
      updateLoaderUi("The Wix Games launcher could not be loaded.");
    };

    document.head.appendChild(script);
  }

  updateLoaderUi();
  installAudioGate();
  setupLoaderScene();
  observeResourceTiming();
  bootUnity();
})();
