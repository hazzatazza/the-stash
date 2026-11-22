var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(global){'use strict';var tizen=global.tizen;var localStorage=global.localStorage;var gse=global.gse;var sharedEngine=null;var gameDesignWidth=0;var gameDesignHeight=0;var gameCanvas=null;var gameHasLaunched=false;var gameIsPaused=false;var isFullScreen=false;var installationId=null;var pseudoDeviceId=null;var launchGame=null;function hash(inputString){return global.MD5(inputString);}
function randomInteger(n){return Math.floor(Math.random()*n);}
function pickRandomCharacter(characters){var index=randomInteger(characters.length);return characters.charAt(index);}
function generateRandomHexString(length){var s='';var hexCharacters='0123456789abcdef';for(var i=0;i<length;i++){s+=pickRandomCharacter(hexCharacters);}
return s;}
function generateUUID(){var s='';s+=generateRandomHexString(8);s+='-';s+=generateRandomHexString(4);s+='-4';s+=generateRandomHexString(3);s+='-'+ pickRandomCharacter('89ab');s+=generateRandomHexString(3);s+='-';s+=generateRandomHexString(12);return s;}
function pauseGame(){sharedEngine.pause();gameIsPaused=true;}
function unpauseGame(){sharedEngine.unpause();gameIsPaused=false;}
function suspendGame(){sharedEngine.suspend();pauseGame();}
function activateGame(){if(!gameHasLaunched){launchGame();}
else if(gameIsPaused){unpauseGame();}}
function unsuspendGame(){activateGame();sharedEngine.unsuspend();}
function onDocumentHidden(){if(gameHasLaunched){suspendGame();}}
function onDocumentVisible(){if(gameHasLaunched){unsuspendGame();}}
function onDocumentVisibilityChange(event){var visibilityState=document.webkitVisibilityState;if(visibilityState==='hidden'){onDocumentHidden();}
else if(visibilityState==='visible'){onDocumentVisible();}}
function onHardwareKey(event){if(event.keyName==='back'){var observerCount=gse.postEvent('keyDown','back');if(observerCount<1){tizen.application.getCurrentApplication().exit();}
else{setTimeout(function(){gse.postEvent('keyUp','back');},100);}}}
function readOption(key){var value=null;if(typeof widget!=="undefined"&&typeof widget.preferences[key]!=="undefined"){value=widget.preferences.getItem(key);}
return value;}
function readOptionOrDefault(key,defaultValue){var value=readOption(key);if(value===null||value===''||value===key){value=defaultValue;}
return value;}
function getSystemCountry(){return'';}
function getSystemLocale(){var locale=navigator.language;var match=/^(\w+)-(\w+)/.exec(locale);if(match){return{language:locale,country:match[2]};}
else{return{language:locale,country:getSystemCountry()};}}
function getSystemPlatform(){return tizen.systeminfo.getCapabilities().platformName;}
function getSystemVersion(){var userAgent=navigator.userAgent;var match=/Tizen\s*([.\d]+)/.exec(userAgent);return match?match[1]:'';}
function getDeviceID(){return tizen.systeminfo.getCapabilities().duid;}
function loadPersistentData(){var storageKey='system/analytics/InstallationID';installationId=localStorage.getItem(storageKey);if(!installationId||installationId===''){installationId=generateUUID();localStorage.setItem(storageKey,installationId);}}
launchGame=function(){gse.ready(function(engine){sharedEngine=engine;engine.platform=engine.tizen;var game=readOptionOrDefault('game','default');var gamePath='game/'+ game;loadPersistentData();var preloading=document.getElementById('gse-preloading');var loading=document.getElementById('gse-loading');var isPreloading=true;var isLoading=false;var loadingTimeout=250;engine.appendDelegate({onLoadingBegin:function(){if(isPreloading){return;}
isLoading=true;setTimeout(function(){if(isLoading){loading.classList.remove('gse-hidden');}},loadingTimeout);},onLoadingEnd:function(){if(isPreloading){preloading.classList.add('gse-hidden');isPreloading=false;}
else{loading.classList.add('gse-hidden');}
isLoading=false;}});engine.appendDelegate({onBrowserOpen:function(url){var appControl=new tizen.ApplicationControl("https://web.archive.org/web/20170508080154/http://tizen.org/appcontrol/operation/view",url);tizen.application.launchAppControl(appControl);}});var analyticsKeyMap={APP_UNIQUE_ID:'analytics/GSAppID',APP_DEVELOPER_ID:'analytics/GSUserID',APP_CREATOR_VERSION:'analytics/GSCVersion',APP_LICENSE_TYPE:'analytics/GSLicenseType',APP_RELEASE_ID:'analytics/GSReleaseID',APP_DEVELOPER_USERNAME:'analytics/GSUsername'};engine.appendDelegate({onExternalReadSync:function(key){var segments=key.split('/');if(segments[0]!=='analytics'){return;}
key=segments[1];if(key==='UPLOAD_URLS'){var uploadUrls=[];var analyticsUrl1=readOptionOrDefault('analytics/UploadURL1',null);var analyticsUrl2=readOptionOrDefault('analytics/UploadURL2',null);if(analyticsUrl1){uploadUrls.push(analyticsUrl1);}
if(analyticsUrl2){uploadUrls.push(analyticsUrl2);}
return uploadUrls;}
else if(key in analyticsKeyMap){var resourceKey=analyticsKeyMap[key];return readOptionOrDefault(resourceKey,null);}
else{switch(key){case'APP_DISPLAY_NAME':return tizen.application.getCurrentApplication().appInfo.name;case'APP_VERSION':return tizen.application.getCurrentApplication().appInfo.version;case'APP_INSTALL_ID':return installationId;case'DEVICE_PLATFORM':return getSystemPlatform();case'DEVICE_OS_VERSION':return getSystemVersion();case'DEVICE_COUNTRY':return getSystemLocale().country;case'DEVICE_LOCALE_LANGUAGE':return getSystemLocale().language;case'DEVICE_LOCALE_COUNTRY':return getSystemLocale().country;case'DEVICE_UNIQUE_ID':return getDeviceID();case'DEVICE_UNIQUE_ID_HASH':return hash(getDeviceID());}}}});engine.options.renderer=readOptionOrDefault('renderer','detect');engine.options.audio=readOptionOrDefault('audio','detect');engine.options.targetRate=parseFloat(readOptionOrDefault('target-rate','0'));engine.options.drawFactor=parseFloat(readOptionOrDefault('draw-factor','1'));engine.options.maxFrameDeltaMS=parseFloat(readOptionOrDefault('max-frame-delta-ms','33'));engine.options.maxFrameDebtMS=parseFloat(readOptionOrDefault('max-frame-debt-ms','16'));engine.options.hitchFrameMS=parseFloat(readOptionOrDefault('hitch-frame-ms','66'));engine.options.hitchWindowMS=parseFloat(readOptionOrDefault('hitch-window-ms','3000'));engine.options.viewportReference=readOptionOrDefault('viewport-reference','frame');engine.options.viewportFit=readOptionOrDefault('viewport-fit','letterbox');engine.options.viewportFactor=parseFloat(readOptionOrDefault('viewport-factor','1'));engine.options.viewportScale=readOptionOrDefault('viewport-scale','quality');engine.setRenderFrame('gse-player');engine.play(gamePath);gameHasLaunched=true;});};function main(){document.addEventListener('webkitvisibilitychange',onDocumentVisibilityChange,false);document.addEventListener('tizenhwkey',onHardwareKey,false);launchGame();}
main();}(this));
}

/*
     FILE ARCHIVED ON 08:01:54 May 08, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:03:25 Nov 13, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.351
  load_resource: 233.236
  PetaboxLoader3.resolve: 46.83
  PetaboxLoader3.datanode: 185.579
*/
