<template>
  <div v-for="item in anchor" :key="item.title" class="an-content" :id="item.targetId">
    <div v-if="item.mainTitleText" class="font-30 font-bold mt-32">{{ item.mainTitleText }}</div>
    <div v-else-if="item.title" class="font-24 font-bold mt-32 mb-16">{{ item.title }}</div>
    <p v-for="(it, i) in item.content" :key="i" class="font-14" v-html="it"></p>
    <img v-if="item.image" :src="item.image" class="w-100 mt-16" />

    <!-- <figures v-if="item.targetId === 'Token-Figures'"></figures>
    <buying v-if="item.targetId === 'Buying-SWANETH'"></buying> -->
  </div>
</template>

<script setup lang="ts">
import { anchor } from '../config'
// import figures from './swanToken-figures.vue'
// import buying from './swanToken-buying.vue'
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
