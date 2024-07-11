<template>
  <div class="plr-64 pb-128 lax-landing">
    <el-row :gutter="64" class="affix-container">
      <el-col :span="6" :xs="0">
        <ZKEngine-anchor></ZKEngine-anchor>
      </el-col>
      <el-col :span="18" :xs="24">
        <ZKEngine-anchor v-if="windowSize === EWindowSize.XS" style="margin-left: 0"></ZKEngine-anchor>
        <ZKEngine-content></ZKEngine-content>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import ZKEngineContent from './ZKEngine-content.vue'
import ZKEngineAnchor from './ZKEngine-anchor.vue'
import { anchor } from './config'
import { useAnchor } from '@/hooks/use-anchor'
const route = useRoute()

useAnchor(anchor, "module-container");
</script>

<style scoped lang="less"></style>
