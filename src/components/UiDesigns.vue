<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="4" md="2">
        <div class="d-flex justify-content-center">
          <img class="img-fluid rounded-circle bg-white " src="@/assets/img/huey.png" alt="">
        </div>
        

      </b-col>
      <b-col cols="12" class="text-center mt-3">
        <h5 class="font-weight-bolder text-color"> Leon Chux</h5>

        <p class="mt-3 mb-0 text-color">Fullstack Developer</p>
        <p class="m-0 text-color" >Some of the projects i've worked on are shown below </p>
      </b-col>
      <b-col cols="12" class="text-center">

        <b-row class="mt-2 justify-content-center">
          <b-col cols="12" class="text-center">
                  <span class=""><i class="fas fa-phone-alt text-color"></i> <span class="contact text-color">(+234)8101209762</span></span>


          </b-col>
         
          <b-col cols="12" class="mt-2">
             <span><a href="https://www.linkedin.com/in/leon-chux/" target="_blank"> <i class="fab portfoilo-nav-icon fa-linkedin-in"></i> </a></span>
             <span class="ml-3"><a href="https://www.github.com/baneofmorpheus" target="_blank"> <i class="fab portfoilo-nav-icon fa-github"></i> </a></span>
             <span class="ml-3"><a href="mailto:epicgenii18@gmail.com"> <i class="fas portfoilo-nav-icon fa-envelope"></i> </a></span>
             

          </b-col>
       
         
           
        </b-row>
        

      </b-col>
      <b-col cols="12" md="8" lg ="6"  class="mt-3 text-center">
        <div :key="value.id" @click="navigate(value.id)" v-for='(value) in portfoilo_data' class="rounded-pill bg-dark pt-2 pb-2 portfoilo-pill mb-2 portfoilo-shadow" >
            <p class="text-white m-0">{{value.name}}</p>
            <p class="text-white m-0"><small>{{value.description}}</small></p>
          </div>

      </b-col>
    

     
    </b-row>
    <b-row class="mt-4 mb-5">
         <b-col cols="12" class="mt-2">
            <div class=" text-center" >
              <span class="bg-light p-3  portfoilo-shadow rounded-pill">

                <router-link class="portfoilo-nav text-decoration-none p-3" to="/">See Sites and Applications</router-link>
              </span>
            </div>
         

       </b-col>
     </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'UiDesigns',
  props: {
    msg: String
  },
  data:function(){
    return{
    navigation:null,
      portfoilo_data:{
        one:{
          id:"one",
          url:"https://www.figma.com/file/4ejaSXSxVo2HFG4HycaI7i/dcl-Copy?node-id=0%3A1",
          name:"Digital Carsolutions Limited",
          description:"Frontend site UI for the private Workshop Application "
        },
      
        two:{
          id:"two",
          url:"https://www.figma.com/file/QT6f7P8RsE07jPLmw4Dh9m/Clutch-City?node-id=0%3A1",
          name:"Clutch City Control Room",
          description:"Basketball Blog UI for Clutch City"
        },
         three:{
          id:"three",
          url:"https://www.figma.com/file/ZSOiaq0JtqMZbMmBclsGlu/Uptonville-school?node-id=0%3A1",
          name:"Uptonville Nigeria Limited ",
          description:"Company plus Training Institute UI for Uptonville"
        },
         four:{
          id:"four",
          url:"https://www.figma.com/file/3xf2G453w1Xop1omy1HgyK/Uptonville?node-id=0%3A1",
          name:"Uptonville Nigeria Limited ",
          description:"Alternative UI for Uptonville"
        },
        
      }
    }
  },
  methods:{
    navigate(id){
      let url = this.portfoilo_data[id]['url']
      window.open(url, '_blank');
      console.log(url)


    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-color{
  color: #DCC1C2;
}
.portfoilo-pill{
  cursor: pointer;
}
.portfoilo-pill:hover >p{
  color:black !important;
 
}
.portfoilo-pill:hover {
  background-color: white !important;
 
}

.portfoilo-shadow {
    -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4) !important;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4) !important;
}

i{
  font-size:1.3rem;
}

.portfoilo-nav{
  /* color:#0056B3; */
  color:black;
  font-weight:bold;
  font-size:.8rem;
}
.portfoilo-nav-icon{
  color:black;
     animation: shakeX; /* referring directly to the animation's @keyframe declaration */
   /* animation-delay: 2s; */
  animation-duration: 4s; /* don't forget to set a duration! */
   animation-iteration-count: 1;

}

</style>
