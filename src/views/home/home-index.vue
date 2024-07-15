<template>
  <div class="w-100 home">
    <home-header></home-header>
    <home-background></home-background>
    <div class="body lax-landing">
      <home-showcase></home-showcase>
      <home-powered></home-powered>
      <!-- <home-userstory></home-userstory> -->
      <home-partnet></home-partnet>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from './home-header.vue'
import HomeBackground from './home-background.vue'
import HomePowered from './home-powered.vue'
import HomePartnet from './home-partnet.vue'
import HomeShowcase from './home-showcase.vue'
import HomeUserstory from './home-userstory.vue'
import { toPage } from '@/hooks/router'
</script>

<style lang="less" scoped>
.home{
  position: relative;
  overflow: hidden;
  .body {
    position: relative;
    z-index: 3;
  }
}
</style>
