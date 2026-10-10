/*
<!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js"></script>

<!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
<script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics-compat.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore-compat.js"></script> 

*/

var firebaseAnalytics = null;
var firebaseConfig = null;

var analyticsWebPlugin = {
    init: function (firebaseConfigJson) {
        if (firebaseConfig == null) {
            firebaseConfig = JSON.parse(firebaseConfigJson);
            firebase.initializeApp(firebaseConfig);
            firebaseAnalytics = firebase.analytics();
        }
    },

    gaInit: function (firebaseConfigJson) {
        this.init(firebaseConfigJson);
    },

    gaOptOut: function () {
        window["ga-disable-" + firebaseConfig.measurementId] = true;
    },

    gaLogEvent: function (eventMapJson) {
        var eventMap = JSON.parse(eventMapJson);
        gtag("event", eventMap.Name, eventMap.Parameters);
    },

    gaSetUserId: function (userId) {
        gtag("config", firebaseConfig.measurementId, { user_id: userId });
    },

    gaSetValueForKey: function (value, key) {
        gtag("event", key, { value: value });
    },

    gaSetCustomDimension: function (key, value) {
        gtag("event", key, { value: value });
    },

    // firebase
    firebaseInit: function (firebaseConfigJson) {
        this.init(firebaseConfigJson);
    },

    firebaseOptOut: function () {
        firebaseAnalytics.setAnalyticsCollectionEnabled(false);
    },

    firebaseLogEvent: function (eventMapJson) {
        var eventMap = JSON.parse(eventMapJson);
        firebaseAnalytics.logEvent(eventMap.Name, eventMap.Attributes);
    },

    firebaseSetUserId: function (userId) {
        firebaseAnalytics.setUserId(userId);
    },

    firebaseSetValueForKey: function (value, key) {
        firebaseAnalytics.logEvent(key, { value: value });
    },

    firebaseSetCustomDimension: function (key, value) {
        firebaseAnalytics.logEvent(key, { value: value });
    }
};
