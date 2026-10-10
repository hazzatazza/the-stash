const GOOGLE_ADS_API_GAMEOBJECT = 'GoogleAdsManager'

let isAdConfigReady = false;
let showRewardedAdFn = null;
let gameCanvas = null;

// Ad Config
function setAdConfig(sound, preloadAdBreaks) {
    adConfig({
        sound: sound,
        preloadAdBreaks: preloadAdBreaks,
        onReady: function() {
            isAdConfigReady = true;
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnAdConfigReady');
        },
    });
}

// Interstitial
function showInterstitialAd() {
    adBreak({
        type: 'start', // The type of this placement
        name: 'interstitial after game', // A descriptive name for this placement     
        beforeAd: () => { // Prepare for the ad. Mute and pause the game flow
            console.log("DEBUG TEST BEFORE AD")
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnBeforeInterstitialAd');
        },
        afterAd: () => { // Resume the game and re-enable sound
            console.log("DEBUG TEST AFTER AD")
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnAfterInterstitialAd');
        },
        adBreakDone: (placementInfo) => { // Always called (if provided) even if an ad didn't show
            console.log("DEBUG TEST IS AD SUCCESSFUL", placementInfo);
            setCanvasFocus();
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnInterstitialAdDone', JSON.stringify(placementInfo));
        },
    });
}

function showNextLevelInterstitialAd() {
    adBreak({
        type: 'next', // The type of this placement
        name: 'interstitial before next game', // A descriptive name for this placement     
        beforeAd: () => { // Prepare for the ad. Mute and pause the game flow
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnBeforeInterstitialAd');
        },
        afterAd: () => { // Resume the game and re-enable sound
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnAfterInterstitialAd');
        },
        adBreakDone: (placementInfo) => { // Always called (if provided) even if an ad didn't show
            console.log(placementInfo);
            setCanvasFocus();
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnInterstitialAdDone', JSON.stringify(placementInfo));
        },
    });
}

// Rewarded
function isRewardedAdAvailable() {
    return showRewardedAdFn != null;
}

function showRewardedAd() {
    if (isRewardedAdAvailable()) {
        showRewardedAdFn();
    }
    else{
        unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnRewardedAdNotAvailable');
    }
}

function loadRewardedAd() {
    adBreak({
        type: 'reward', // The type of this placement
        name: 'rewarded for revive and level complete', // A descriptive name for this placement
        beforeAd: () => { // Prepare for the ad. Mute and pause the game flow
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnBeforeRewardedAd');
        },
        afterAd: () => { // Resume the game and re-enable sound
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnAfterRewardedAd');
        },
        beforeReward: (showAdFn) => { // Show reward prompt (call showAdFn() if clicked)
            showRewardedAdFn = showAdFn;
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnRewardedAdAvailable');
        },
        adDismissed: () => { // Player dismissed the ad before it finished.
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnRewardedAdDismissed');
        },
        adViewed: () => { // Player watched the ad–give them the reward.
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnRewardedAdViewed');
        },
        adBreakDone: (placementInfo) => { // Always called (if provided) even if an ad didn’t show
            console.log("DEBUG TEST IS REWARDED AD DONE", placementInfo);
            showRewardedAdFn = null;
            setCanvasFocus();
            unityInstance.SendMessage(GOOGLE_ADS_API_GAMEOBJECT, 'OnRewardedAdDone', JSON.stringify(placementInfo));
        },
    });
}

// Banner
function hideBannerAd() {
    document.getElementById('stackybird-io_728x90').style.zIndex = '-5';
}

function showBannerAd() {
    document.getElementById('stackybird-io_728x90').style.zIndex = '1';
}

// Helper
function setCanvasFocus() {
    console.log("DEBUG TEST CANVAS FOCUSED AFTER AD")
    if (gameCanvas == null) {
        gameCanvas = document.getElementById('#canvas');
    }
    gameCanvas.setAttribute('tabindex','0');
    gameCanvas.focus();
    
     
}