<template>
  <div id="particles-js" class="h-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4" md="2">
          <div class="d-flex justify-content-center">
            <img
              class="img-fluid rounded-circle bg-white "
              src="@/assets/img/huey.png"
              alt=""
            />
          </div>
        </div>
        <div class="text-center col-12 mt-3">
          <h5 class="font-weight-bolder text-color">Leon Chux</h5>

          <p class="mt-3 mb-0 text-color">Fullstack Developer</p>
          <p class="m-0 text-color">
            Some of the projects i've worked on are shown below
          </p>
        </div>
        <div class="text-center col-12">
          <div class="mt-2 justify-content-center">
            <div class="text-center col-12">
              <span class=""
                ><i class="fas fa-phone-alt text-color"></i>
                <span class="contact text-color">(+234)8101209762</span></span
              >
            </div>

            <div class="mt-2 col-12">
              <span
                ><a
                  href="https://www.linkedin.com/in/leon-chux/"
                  target="_blank"
                >
                  <i class="fab portfoilo-nav-icon fa-linkedin-in"></i> </a
              ></span>
              <span class="ml-3"
                ><a
                  href="https://www.github.com/baneofmorpheus"
                  target="_blank"
                >
                  <i class="fab portfoilo-nav-icon fa-github"></i> </a
              ></span>
              <span class="ml-3"
                ><a href="mailto:epicgenii18@gmail.com">
                  <i class="fas portfoilo-nav-icon fa-envelope"></i> </a
              ></span>
            </div>
          </div>
        </div>
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="mt-3 col-md-8 col-lg-6 col-12 text-center">
          <div
            @click="navigate(value.id)"
            v-for="(value, index) in tableData"
            :key="index"
            class="rounded-pill bg-dark pt-2 pb-2 pl-1 pr-1 mb-2 portfoilo-pill  portfoilo-shadow"
          >
            <p class="text-white m-0">{{ value.title }}</p>
            <p class="text-white m-0">
              <small>{{ value.description }}</small>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-5">
        <div class="mt-2 col-12">
          <div class=" text-center">
            <button
              type="button"
              @click="switchMode"
              class="btn btn-sm ps-3 pe-3 bg-light rounded-pill text-dark portfoilo-shadow "
              data-bs-dismiss="modal"
            >
              {{ mode == "app" ? "See UI's " : "See Sites/Appplications" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from "@/main";
  import "particles.js";

  export default {
    name: "LandingPage",
    props: {
      msg: String,
    },
    data: function() {
      return {
        navigation: null,
        loading: true,
        mode: "app",
        originalLinks: [],
        tableData: [],
      };
    },
    watch: {
      mode: function(newValue) {
        switch (newValue) {
          case "app":
            this.tableData = this.appLinks;
            break;
          case "ui":
            this.tableData = this.uiLinks;
            break;

          default:
            break;
        }
      },
    },
    computed: {
      appLinks: function() {
        console.log("app changed");
        return this.originalLinks.filter((portfoiloLink) => {
          return portfoiloLink.type === "app";
        });
      },
      uiLinks: function() {
        return this.originalLinks.filter((portfoiloLink) => {
          return portfoiloLink.type === "ui";
        });
      },
    },
    methods: {
      initParticles() {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 12,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      },
      switchMode() {
        this.mode == "app" ? (this.mode = "ui") : (this.mode = "app");
      },
      navigate(id) {
        const link = this.originalLinks.find((portfoilo) => {
          return portfoilo.id === id;
        });
        window.open(link.link, "_blank");
      },
      getApps() {
        this.tableData = [];
        this.originalLinks = [];
        db.collection("apps")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.originalLinks.push({ id: doc.id, ...doc.data() });
            });
            this.tableData = this.appLinks;
            this.loading = false;
          });
      },
    },
    mounted() {
      this.initParticles();
      this.getApps();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list-inline-item,
  .details-header {
    font-size: 0.8rem;
  }
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

  .portfoilo-nav {
    /* color:#0056B3; */
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
  }
  .portfoilo-nav-icon {
    color: black;
    animation: shakeX; /* referring directly to the animation's @keyframe declaration */
    /* animation-delay: 2s; */
    animation-duration: 4s; /* don't forget to set a duration! */
    animation-iteration-count: 1;
  }
</style>
