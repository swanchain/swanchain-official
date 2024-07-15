<template>
  <el-container>
    <el-main class="module-container" id="module-container" ref="mainRef">
      <div class="landing">
        <header-index></header-index>
        <router-view></router-view>
        <footer-index></footer-index>
      </div>
      <el-backtop :right="30" target=".module-container" :bottom="30" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import HeaderIndex from '@/components/header/header-index.vue'
import FooterIndex from '@/components/footer/footer-index.vue'
import { mainRef } from '@/hooks/layout';
</script>

<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  .el-main {
    background: none;
    padding: 0;
    position: relative;
    .landing{
      position: relative;
      // max-width: 2664px;
      margin: auto;
    }
  }
}
</style>
