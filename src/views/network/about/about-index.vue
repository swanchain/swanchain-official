<template>
  <div class="plr-64 pb-128 lax-landing">
    <el-row :gutter="64" class="affix-container">
      <el-col :span="6" :xs="0">
        <about-anchor></about-anchor>
      </el-col>
      <el-col :span="18" :xs="24">
        <about-anchor v-if="windowSize === EWindowSize.XS" style="margin-left: 0"></about-anchor>
        <about-content v-if="route.params.type === 'General-Information'"></about-content>
        <about-providers v-else></about-providers>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import aboutContent from './about-content.vue'
import aboutProviders from './about-providers.vue'
import aboutAnchor from './about-anchor.vue'
import { anchor, anchorProvider } from './config'
import { useAnchor } from '@/hooks/use-anchor'
const route = useRoute()

useAnchor(anchor, "module-container");
useAnchor(anchorProvider, "module-container");
</script>

<style scoped lang="less"></style>
