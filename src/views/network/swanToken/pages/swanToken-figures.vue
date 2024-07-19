<template>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Circulating Supply</p>
        <p class="font-24 color">{{ replaceFormat(null) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Supply</p>
        <p class="font-24 color">{{ replaceFormat(null) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Maximum Supply</p>
        <p class="font-24 color">{{ replaceFormat(null) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Price</p>
        <p class="font-24 color">${{ replaceFormat(null) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Market Cap</p>
        <p class="font-24 color">${{ replaceFormat(null) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">24h Trading Volume</p>
        <p class="font-24 color">${{ replaceFormat(null) }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { replaceFormat } from '@/utils/common';

</script>

<style scoped lang="less">
.el-row {
  .el-col {
    .grid-content {
      width: calc(100% - 0.32rem);
      height: calc(100% - 0.32rem);
      padding: 0.16rem;
      background-color: var(--color-dark-black);
      border-radius: 0.08rem;
      box-sizing: content-box;
      p {
        &.color {
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>