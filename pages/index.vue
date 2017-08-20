<template lang="pug">
  .app
    .main-box
      .image
        img(src="/images/image.jpg")
      .text
        h2.name Akshay Upadhya
        mcaption
            
    ul
      li(v-for="item in $store.state.comp.linklist")
        mbutton(v-bind:item="item")
</template>

<style lang="scss" >
.app{
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  .main-box{
    display: flex;
    flex-direction: row;
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
  import mcaption from '../components/caption.vue'
  export default {
   components:{
      mbutton,
      mcaption
    }
  }
  </script>