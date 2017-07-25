<template lang="pug">
  .app
    h1 HomePage
    ul
      li(v-for="item in stuff")
        mbutton(v-bind:item="item")

</template>

  <script>
  import mbutton from '../components/mbutton.vue'
  export default {
    data(){
      return{
          stuff:[
            {name:"Github",link:"https://github.com/akshayupadhya"},
            {name:"LinkedIn",link:"https://www.linkedin.com/in/akshay-upadhya-68548156/"},
            {name:"Instagram",link:"https://www.instagram.com/akshayupadhya/"},
            {name:"twitter",link:"https://twitter.com/AKSHAYUPADHYA"},
          ]
      }
    },components:{
      "mbutton":mbutton
    }
  }
  </script>
  


<style lang="scss" >
ul{
  border: 1px solid black; 
  display: flex;
  justify-content: space-around
}
li{
  border: 1px solid whitesmoke; 
  list-style: none;
  //width: 50%
}
</style>
