<template>
  <div class="page-body pb-128 lax-landing">
    <el-row :gutter="64" class="affix-container">
      <el-col :span="6" :xs="0">
        <swanToken-anchor></swanToken-anchor>
      </el-col>
      <el-col :span="18" :xs="24">
        <swanToken-anchor v-if="windowSize === EWindowSize.XS" style="margin-left: 0"></swanToken-anchor>
        <swanToken-content></swanToken-content>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import swanTokenContent from './pages/swanToken-content.vue'
import swanTokenAnchor from './pages/swanToken-anchor.vue'
import { anchor } from './config'
import { useAnchor } from '@/hooks/use-anchor'
const route = useRoute()

useAnchor(anchor, "module-container");
</script>

<style scoped lang="less"></style>
