<template lang="pug">
.button
    a(target="_blank" v-bind:href="item.link") 
          v-icon.button(small  dark)
                i.fa( v-bind:class="computeName(item.name)" aria-hidden="true")
</template>

<script>
export default {
 props:['item'],
  data(){
      return{
      }
  },
  methods:{
      computeName(name){
            return "fa-"+name;
      }
  }

}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}


</style>

