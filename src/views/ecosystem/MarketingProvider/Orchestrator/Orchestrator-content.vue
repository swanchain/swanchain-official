<template>
  <div v-for="item in anchor" :key="item.title" class="an-content" :id="item.targetId">
    <div v-if="item.mainTitleText" class="font-40 font-bold2 mt-32">{{ item.mainTitleText }}</div>
    <div v-else-if="item.title" class="font-28 font-bold2 mt-32 mb-16">{{ item.title }}</div>
    <img v-if="item.image" :src="item.image" class="w-100 mt-16 mb-16" />
    <p v-for="(it, i) in item.content" :key="i" class="font-16" v-html="it"></p>

    <figures v-if="item.targetId === 'Engine-Status'"></figures>
    <features v-if="item.targetId === 'Features'"></features>
  </div>
</template>

<script setup lang="ts">
import { anchor } from './config'
import figures from './Orchestrator-figures.vue'
import features from './Orchestrator-features.vue'
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
