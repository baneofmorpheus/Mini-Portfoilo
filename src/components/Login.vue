<template>
  <div class="container">
    <div class="row">
      <div class=" col">
        <form action=""></form>
      </div>
    </div>
  </div>
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
            url: "http://apollohou.com/",
            name: "Apollo Hou",
            description: "Houston based Sports Blog and Podcast site.",
          },
          sixteen: {
            id: "sixteen",
            url: "https://digitalcarsolutions.com/",
            name: "Digital Carsolutions",
            description: "Company Site and Workshop Management Application",
          },
          three: {
            id: "three",
            url: "https://fuspay.com.ng",
            name: "Fuspay",
            description:
              "Worked with the backend team for Fuspay (A Payment Solution)",
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
            description: "Landing Page for D2N",
          },

          nineteen: {
            id: "nineteen",
            url: "http://havilahglobalresources.com/",
            name: "Havilah Global",
            description: "Logistics/Shipping site",
          },

          twenty: {
            id: "twenty",
            url: "https://lightbearersclub.com/",
            name: "Lightbearers Club",
            description: "Lifestyle Blog",
          },
          twenty_one: {
            id: "twenty_one",
            url: "https://onedisk.app",
            name: "Onedisk Oauth",
            description:
              "Oauth application(Worked on API and dashboard for users and merchants)",
          },
        },
      };
    },
    methods: {
      navigate(id) {
        let url = this.portfoilo_data[id]["url"];
        window.open(url, "_blank");
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
