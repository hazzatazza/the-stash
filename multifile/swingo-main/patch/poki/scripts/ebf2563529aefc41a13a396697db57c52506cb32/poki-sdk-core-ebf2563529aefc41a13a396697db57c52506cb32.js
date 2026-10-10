ClonerLog || (ClonerLog= console.log);


PokiSDK= new function() {
    this.init= async function() {
        ClonerLog("PokiSDK.init", arguments);
        return new Promise((resolve, reject)=> {
            resolve && resolve();
        });
    }

    this.setDebug= function() {
        ClonerLog("PokiSDK.setDebug", arguments);
    }

    this.happyTime = function() {
        ClonerLog("PokiSDK.happyTime", arguments);
        return Promise.resolve();
    };

    this.gameplayStart= function() {
        ClonerLog("PokiSDK.gameplayStart", arguments);
    }

    this.gameplayStop= function() {
        ClonerLog("PokiSDK.gameplayStop", arguments);
    }

    this.loadingStart= function() {
        ClonerLog("PokiSDK.loadingStart", arguments);
    }

    this.loadingFinished= function() {
        ClonerLog("PokiSDK.loadingFinished", arguments);
    }

    this.gameLoadingStart= function() {
        ClonerLog("PokiSDK.gameLoadingStart", arguments);
    }

    this.gameLoadingProgress= function() {
        ClonerLog("PokiSDK.gameLoadingProgress", arguments);
    }

    this.gameLoadingFinished= function() {
        ClonerLog("PokiSDK.gameLoadingFinished", arguments);
    }

    this.commercialBreak= async function() {
        ClonerLog("PokiSDK.commercialBreak", arguments);
        return ClonerAd();
    }

    this.rewardedBreak= async function() {
        ClonerLog("PokiSDK.rewardedBreak", arguments);
        return ClonerAdReward();
    }
}


window.initPokiBridge = function(targetObjectName) {
    window.pokiBridgeTarget = targetObjectName;

    window.PokiBridge = {
        commercialBreak: async function() {
            await PokiSDK.commercialBreak();
            unityInstance.SendMessage(targetObjectName, "PokiBridge.OnCommercialBreakComplete");
        },

        rewardedBreak: async function() {
            const result = await PokiSDK.rewardedBreak();
            unityInstance.SendMessage(targetObjectName, "PokiBridge.OnRewardedBreakComplete", result ? "true" : "false");
        }
    };
};
