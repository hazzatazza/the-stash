window.YaGames = {
  init: function() {
    return Promise.resolve({
      adv: {
        showFullscreenAdv: function(obj) {
          if (obj && obj.callbacks && obj.callbacks.onClose) obj.callbacks.onClose();
        },
        showRewardedVideo: function(obj) {
          if (obj && obj.callbacks && obj.callbacks.onRewarded) obj.callbacks.onRewarded();
          if (obj && obj.callbacks && obj.callbacks.onClose) obj.callbacks.onClose();
        }
      },
      getPlayer: function() {
        return Promise.resolve({
          setStats: function() {},
          getStats: function() {
            return Promise.resolve({});
          }
        });
      },
      features: {
        LoadingAPI: {
          ready: function() {}
        }
      },
      environment: {
        i18n: {
          lang: "en"
        }
      },
      isAvailableMethod: function() {
        return false;
      },
      getLeaderboards: function() {
        return Promise.resolve({
          setLeaderboardScore: function() {}
        });
      }
    });
  }
};
window.sdk = true;
