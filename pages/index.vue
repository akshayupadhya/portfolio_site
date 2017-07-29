<template lang="pug">
  .app
    .main-box
      .image
        img(src="/images/image.jpg")
      .text
        h2.name Akshay Upadhya
        .caption
            h6 full Stack JavaScript developer
    ul
      li(v-for="item in stuff")
        mbutton(v-bind:item="item")
</template>

<style lang="scss" >
.app{
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center!important;
  .main-box{
    display: flex;
    flex-direction: row;
    //border: 1px solid wheat;
      .image{
        margin-top: 2%;
        width: 40%;
       img{
          border-radius: 50%;
          width: 100%;
        }
      }
      .text{
        display: flex;
        flex-direction: column;
        .name{
          padding:2% 5% ;
          color: whitesmoke;
          margin: 0 3%;
        }
          .caption{
            padding:2% 5%;
            margin: 0 3%;
            h6{
              color: whitesmoke;
              box-shadow: 3px 3px 1px 0 #fff
            }
          }

      }
    }
  }

ul{
  //border: 1px solid wheat;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
    li{
      margin: 2% 5% ;
      list-style: none;     
    }
  }
</style>

  <script>
  import mbutton from '../components/mbutton.vue'
  export default {
    data(){
      return{
          stuff:[
            {name:"linkedin",link:"https://www.linkedin.com/in/akshay-upadhya-68548156/"},
            {name:"github",link:"https://github.com/akshayupadhya"},
            {name:"twitter",link:"https://twitter.com/AKSHAYUPADHYA"},
            {name:"instagram",link:"https://www.instagram.com/akshayupadhya/"},
          ]
      }
    },components:{
      "mbutton":mbutton
    }
  }
  </script>