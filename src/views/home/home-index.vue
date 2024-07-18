<template>
  <div class="w-100 home">
    <home-header></home-header>
    <div class="body lax-landing">
      <home-components></home-components>
      <home-advantages></home-advantages>
      <home-funders></home-funders>
      <home-thriving></home-thriving>
      <home-showcase></home-showcase>
      <home-userstory></home-userstory>
      <home-ecosystem></home-ecosystem>
      <home-partnet></home-partnet>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from './home-header.vue'
import HomeComponents from './home-components.vue'
import HomeAdvantages from './home-advantages.vue'
import HomeFunders from './home-funders.vue'
import HomeThriving from './home-thriving.vue'
import HomeShowcase from './home-showcase.vue'
import HomeUserstory from './home-userstory.vue'
import HomeEcosystem from './home-ecosystem.vue'
import HomePartnet from './home-partnet.vue'
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
