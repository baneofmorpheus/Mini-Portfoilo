<template>
  <div class="container">
    <div class="row justify-content-center align-content-center pt-3">
      <div class=" col-md-8 col-12 text-center">
        <div
          v-if="showAlert"
          class="alert d-fixed alert-warning alert-dismissible fade show"
          role="alert"
        >
          You are not authorized to login to this site
          <button
            @click="showAlert = false"
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <h4 class="text-white ">Sign in to the Admin section</h4>
        <div id="firebaseui-auth-container"></div>
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase/app";
  import { firebaseAuth } from "@/main";

  import * as firebaseui from "firebaseui";

  export default {
    name: "Login",
    props: {
      msg: String,
    },
    data: function() {
      return {
        showAlert: false,
        loading: true,
      };
    },
    methods: {
      test() {
        console.log("test wporking");
      },
      navigate(id) {
        let url = this.portfoilo_data[id]["url"];
        window.open(url, "_blank");
      },
    },
    mounted() {
      const ui = new firebaseui.auth.AuthUI(firebaseAuth);
      ui.start("#firebaseui-auth-container", {
        callbacks: {
          signInSuccessWithAuthResult: (authResult) => {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log(authResult);
            if (authResult.user.email != "epicgenii18@gmail.com") {
              this.showAlert = true;
              return false;
            }

            return true;
          },
          uiShown: () => {
            // The widget is rendered.
            // Hide the loader.
            this.loading = false;
            // document.getElementById('loader').style.display = 'none';
          },
        },
        signInSuccessUrl: "/admin",
        signInOptions: [
          // List of OAuth providers supported.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Other config options...
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
