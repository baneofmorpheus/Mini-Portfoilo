<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="4" md="2">
        <div class="d-flex justify-content-center">
          <img
            class="img-fluid rounded-circle bg-white "
            src="@/assets/img/huey.png"
            alt=""
          />
        </div>
      </b-col>
      <b-col cols="12" class="text-center mt-3">
        <h5 class="font-weight-bolder text-color">Leon Chux</h5>

        <p class="mt-3 mb-0 text-color">Fullstack Developer</p>
        <p class="m-0 text-color">
          Some of the projects i've worked on are shown below
        </p>
      </b-col>
      <b-col cols="12" class="text-center">
        <b-row class="mt-2 justify-content-center">
          <b-col cols="12" class="text-center">
            <span class=""
              ><i class="fas fa-phone-alt text-color"></i>
              <span class="contact text-color">(+234)8101209762</span></span
            >
          </b-col>

          <b-col cols="12" class="mt-2">
            <span class=""
              ><a href="https://www.linkedin.com/in/leon-chux/" target="_blank">
                <i class="fab portfoilo-nav-icons   fa-linkedin-in"></i> </a
            ></span>
            <span class="ml-3 "
              ><a href="https://www.github.com/baneofmorpheus" target="_blank">
                <i class="fab portfoilo-nav-icons   fa-github"></i> </a
            ></span>
            <span class="ml-3 "
              ><a href="mailto:epicgenii18@gmail.com">
                <i class="fas portfoilo-nav-icons   fa-envelope"></i> </a
            ></span>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="8" lg="6" class="mt-3 text-center">
        <div
          :key="value.id"
          @click="navigate(value.id)"
          v-for="value in portfoilo_data"
          class="rounded-pill bg-dark pt-2 pb-2 portfoilo-pill mb-2 portfoilo-shadow"
        >
          <p class="text-white m-0">{{ value.name }}</p>
          <p class="text-white m-0">
            <small>{{ value.description }}</small>
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 mb-5">
      <b-col cols="12" class="mt-2">
        <div class=" text-center">
          <span class="bg-light p-3   rounded-pill portfoilo-shadow">
            <router-link
              class=" p-3 portfoilo-nav text-decoration-none "
              to="/ui-designs"
              >See UI Designs</router-link
            >
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "LandingPage",
    props: {
      msg: String,
    },
    data: function() {
      return {
        navigation: null,
        portfoilo_data: {
          two: {
            id: "two",
            url: "https://luxxeplace.com/",
            name: "The Luxxe Place",
            description: "E-commerce app with payment integration ",
          },
          two: {
            id: "sixteen",
            url: "https://digitalcarsolutions.com/",
            name: "Digital Carsolutions",
            description: "Company Site and Workshop Management Application",
          },

          one: {
            id: "one",
            url: "https://www.valdezartsworld.com/",
            name: "Valdez World",
            description: "An art display site ",
          },

          eleven: {
            id: "eleven",
            url: "https://clutchcitycontrolroom.com/",
            name: "Clutch City Control Room",
            description: "Sports Blog/Podcast site ",
          },
          //  three:{
          //   id:"three",
          //   url:"http://cqcxradio.co/",
          //   name:"CQCX Radio ",
          //   description:"Music streaming app with E-commerce functionality"
          // },

          // five: {
          //   id: "five",
          //   url: "https://faitlynbrand.com/",
          //   name: "Fait",
          //   description: "E-commerce app with payment integration",
          // },
          six: {
            id: "six",
            url: "https://loop.rbshop.com.ng/",
            name: "Loop Aba",
            description: "E-commerce app with payment integration",
          },
          seven: {
            id: "seven",
            url: "https://spronet.ng/",
            name: "Spronet",
            description: "A B2b web app solution",
          },

          nine: {
            id: "nine",
            url: "https://d2n.ng/",
            name: "D2N",
            description: "Mini Business Site",
          },
          ten: {
            id: "ten",
            url: "https://auxanet.kaytar.ng/",
            name: "Auxanet Nigeria Limited",
            description: "Company profile site",
          },
          three: {
            id: "three",
            url: "https://cryptocret.com/",
            name: "Cryptocret",
            description: " Crypto Blogging Platform",
          },

          //   twelve:{
          //   id:"twelve",
          //   url:"http://www.arquilaxgroup.com/",
          //   name:"Arquilax Group",
          //   description:"Company profile site with logistics tracking system"
          // },
        },
      };
    },
    methods: {
      navigate(id) {
        let url = this.portfoilo_data[id]["url"];
        window.open(url, "_blank");
        console.log(url);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-color {
    color: #dcc1c2;
  }
  .portfoilo-pill {
    cursor: pointer;
  }
  .portfoilo-pill:hover > p {
    color: black !important;
  }
  .portfoilo-pill:hover {
    background-color: white !important;
  }

  .portfoilo-shadow {
    -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4) !important;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4) !important;
  }

  i {
    font-size: 1.3rem;
  }
  .portfoilo-nav-icons {
    animation: shakeX; /* referring directly to the animation's @keyframe declaration */
    color: black;
    animation-duration: 4s; /* don't forget to set a duration! */
    animation-iteration-count: 1;
  }

  .portfoilo-nav {
    /* color:#0056B3; */
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>
