import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebaseui/dist/firebaseui.css";
import "bootstrap/scss/bootstrap.scss";
import UUID from "vue-uuid";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyA5TFb1nVUBm_r3irBnSfbqkYhzOLpvXlI",
  authDomain: "mini-portfoilo.firebaseapp.com",
  projectId: "mini-portfoilo",
  storageBucket: "mini-portfoilo.appspot.com",
  messagingSenderId: "584845224793",
  appId: "1:584845224793:web:21a7a3995fad602e6e3a48",
  measurementId: "G-P1Y620YGLX",
};
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();
Vue.use(UUID);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
