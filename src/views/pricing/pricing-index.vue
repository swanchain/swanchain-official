<template>
  <div class="w-100 pb-64">
    <pricing-header></pricing-header>
    <div class="body lax-landing">
      <pricing-list></pricing-list>
      <pricing-gpu></pricing-gpu>
    </div>
  </div>
</template>

<script setup lang="ts">
import pricingHeader from './pages/pricing-header.vue'
import pricingList from './pages/pricing-list.vue'
import pricingGpu from './pages/pricing-gpu.vue'
</script>

<style lang="less" scoped>
.body {
  padding: 0 1.28rem;
  position: relative;
  @media screen and (max-width: 992px) {
    padding: 0 0.9rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0.6rem;
  }
}
</style>
