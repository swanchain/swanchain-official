<template>
  <div class="w-100 home">
    <aboutUs-header></aboutUs-header>
    <div class="body lax-landing">
      <aboutUs-swan></aboutUs-swan>
      <aboutUs-fundedby></aboutUs-fundedby>
      <aboutUs-join></aboutUs-join>
    </div>
  </div>
</template>

<script setup lang="ts">
import aboutUsHeader from './pages/aboutUs-header.vue'
import aboutUsJoin from './pages/aboutUs-join.vue'
import aboutUsFundedby from './pages/aboutUs-fundedby.vue'
import aboutUsSwan from './pages/aboutUs-swan.vue'
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
