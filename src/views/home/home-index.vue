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
import HomeHeader from './pages/home-header.vue'
import HomeComponents from './pages/home-components.vue'
import HomeAdvantages from './pages/home-advantages.vue'
import HomeFunders from './pages/home-funders.vue'
import HomeThriving from './pages/home-thriving.vue'
import HomeShowcase from './pages/home-showcase.vue'
import HomeUserstory from './pages/home-userstory.vue'
import HomeEcosystem from './pages/home-ecosystem.vue'
import HomePartnet from './pages/home-partnet.vue'
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
