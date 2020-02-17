<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="2">
        <div class="d-flex justify-content-center">
          <img class="img-fluid rounded-circle bg-white " src="@/assets/img/1.png" alt="">
        </div>
        

      </b-col>
      <b-col cols="12" class="text-center mt-3">
        <h5 class="font-weight-bolder text-color"> Leon Chux</h5>

        <p class="mt-3 mb-0 text-color">Fullstack Developer</p>
        <p class="m-0 text-color" >Some of the projects i've worked on are shown below </p>
      </b-col>
      <b-col cols="12" class="text-center">
        <div class="mt-4">
            <div>
              <span class=""><i class="fas fa-phone-alt text-color"></i> <span class="contact text-color">(+234)8101209762</span></span>
              <span class="ml-3"><i class="fas fa-envelope text-color"></i> <span class="contact text-color">epicgenii18@gmail.com</span></span>
            </div>
            <div class="mt-2">
              <span><a href="#"> <i class="fab fa-linkedin-in"></i> </a></span>
              <span class="ml-3"><a href="#"> <i class="fab fa-github"></i> </a></span>
            </div>
        </div>
        

      </b-col>
      <b-col cols="6" class="mt-3 text-center">
        <div class="rounded-pill bg-dark pt-2 pb-2" >
            <a href="#">Arquilax Group</a> <br>
            <a href="#"><small>Company profile site with logistics tracking system</small></a>
          </div>

      </b-col>
     
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  data:function(){
    return{
      portfoilo_data:{
        one:{
          id:1,
          url:"http://www.arquilaxgroup.com/",
          name:"Arquilax Group",
          description:"Company profile site with logistics tracking system/"
        },
        two:{
          id:2,
          url:"https://luxxeplace.com/",
          name:"The Luxxe Place",
          description:"E-commerce app with payment integration "
        },
         three:{
          id:3,
          url:"http://cqcxradio.co/",
          name:"CQCX Radio ",
          description:"Music streaming app with E-commerce functionality"
        },
         four:{
          id:4,
          url:"http://cqcxradio.co/",
          name:"CQCX Radio ",
          description:"Music streaming app with E-commerce functionality"
        },
         five:{
          id:5,
          url:"https://faitlynbrand.com/",
          name:"Fait",
          description:"E-commerce app with payment integration"
        },
         six:{
          id:6,
          url:"https://loop.rbshop.com.ng/",
          name:"Loop Aba",
          description:"E-commerce app with payment integration"
        },
         seven:{
          id:7,
          url:"http://grimebusters.enapstargroup.com/",
          name:"Grimebusters",
          description:"Company profile"
        },
         eight:{
          id:8,
          url:"https://bdzofficial.com/",
          name:"Bdz official",
          description:"E-commerce app with payment integration"
        },
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-color{
  color: #DCC1C2;
}


</style>
