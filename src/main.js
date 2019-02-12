import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyCy3IwLp7tPoRjiZi3B5UxfQu_YJWBwwRs",
    authDomain: "real-time-chat-database.firebaseapp.com",
    databaseURL: "https://real-time-chat-database.firebaseio.com",
    projectId: "real-time-chat-database",
    storageBucket: "real-time-chat-database.appspot.com",
    messagingSenderId: "545291923833"
 };
 firebase.initializeApp(config);

var db = firebase.firestore();

window.db = db;

db.settings({
	timestampsInSnapshots: true;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
