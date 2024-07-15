<template>
  <div class="plr-64 pb-128 lax-landing">
    <el-row :gutter="64" class="affix-container">
      <el-col :span="6" :xs="0">
        <Orchestrator-anchor></Orchestrator-anchor>
      </el-col>
      <el-col :span="18" :xs="24">
        <Orchestrator-anchor v-if="windowSize === EWindowSize.XS" style="margin-left: 0"></Orchestrator-anchor>
        <Orchestrator-content></Orchestrator-content>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import OrchestratorContent from './Orchestrator-content.vue'
import OrchestratorAnchor from './Orchestrator-anchor.vue'
import { anchor } from './config'
import { useAnchor } from '@/hooks/use-anchor'
const route = useRoute()

useAnchor(anchor, "module-container");
</script>

<style scoped lang="less"></style>
