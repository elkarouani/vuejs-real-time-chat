import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyB3MmyUjbPZ53cFfKHeAAS_ff4DGe25Rjs",
    authDomain: "real-time-chat-database-6000e.firebaseapp.com",
    databaseURL: "https://real-time-chat-database-6000e.firebaseio.com",
    projectId: "real-time-chat-database-6000e",
    storageBucket: "real-time-chat-database-6000e.appspot.com",
    messagingSenderId: "209234053567"
  };
firebase.initializeApp(config);

var db = firebase.firestore();

window.db = db;

db.settings({
	timestampsInSnapshots: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
