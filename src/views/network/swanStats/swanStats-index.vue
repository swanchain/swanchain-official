<template>
  <div class="plr-64 pb-128 lax-landing">
    <swanStats-content></swanStats-content>
  </div>
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import swanStatsContent from './swanStats-content.vue'
</script>

<style scoped lang="less"></style>
