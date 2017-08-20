<template lang="pug">
.caption
    .dummy {{ computeMessage }}
    .box(v-for="(flag,$index) in rotateFlag")
        transition(name="fade" v-if="flag")
          h6() {{ captions($index) }}
</template>

<script>
export default {
  data(){
      return{

        message:"full Stack JavaScript developer",
        rotateFlag:[1,0,0,0]
      }
  },methods:{
    captions(i) { return this.$store.state.comp.captions[i]  },
  },
  computed:{
      computeMessage(){

          this.intervalid1 = setInterval(()=>{
            let temp = this.rotateFlag.shift();
            this.rotateFlag.push(temp);
          }, 2500);
      }
  },
  components:{

  }
}
</script>

<style lang="scss">
.caption {
    padding: 2% 5%;
    margin: 0 3%;
    h6 {
        color: whitesmoke;
        min-height:3rem;
    }
}
.box{
  height: 0.9rem;

}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0
}

</style>
