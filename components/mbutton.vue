<template lang="pug">
.button
    a(target="_blank" v-bind:href="item.link") 
          v-btn( dark) {{item.name}}

</template>

<script>
export default {
 props:['item'],
  data(){
      return{
      }
  }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
</style>

