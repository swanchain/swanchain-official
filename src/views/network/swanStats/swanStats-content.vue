<template>
  <div class="an-content">
    <div class="font-40 font-bold2 mt-32">SWAN Network Stats</div>
    
    <swanStats-figures></swanStats-figures>
  </div>
</template>

<script setup lang="ts">
import swanStatsFigures from './swanStats-figures.vue'
</script>

<style scoped lang="less">
.an-content{
  img{
    display: block;
    border-radius: 0.1rem;
  }
  p {
    line-height: 1.6;
  }
}
</style>
