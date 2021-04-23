import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
// import firebase from "firebase";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "animate.css";
Vue.config.productionTip = false;

// Vue.use(router);

// const firebaseConfig = {
//   apiKey: "AIzaSyA5TFb1nVUBm_r3irBnSfbqkYhzOLpvXlI",
//   authDomain: "mini-portfoilo.firebaseapp.com",
//   projectId: "mini-portfoilo",
//   storageBucket: "mini-portfoilo.appspot.com",
//   messagingSenderId: "584845224793",
//   appId: "1:584845224793:web:21a7a3995fad602e6e3a48",
//   measurementId: "G-P1Y620YGLX",
// };
// firebase.initializeApp(firebaseConfig);
Vue.use(BootstrapVue);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
