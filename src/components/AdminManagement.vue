<template>
  <div class="container">
    <div class="row justify-content-center align-content-center pt-3">
      <div class=" col-md-8 col-12 text-center">
        <h4 class="text-white ">Admin Section</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminManagement",
    props: {
      msg: String,
    },
    data: function() {
      return {
        showAlert: true,
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
    mounted() {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
