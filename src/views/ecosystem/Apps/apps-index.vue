<template>
  <div class="w-100">
    <apps-header></apps-header>
    <div class="body lax-landing">
      <apps-list></apps-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import appsHeader from './apps-header.vue'
import appsList from './apps-list.vue'
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
