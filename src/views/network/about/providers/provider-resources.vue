<template>
  <el-row :gutter="12" class="w-100 plr-16 resources-container" v-loading="resourcesLoad">
    <template v-for="(value, key) in resourcesList" :key="key">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" class="flex flex-ai-baseline">
        <div class="grid-content small-spacing text-center font-24">
          <p class="font-20 text-center">{{ value.name }}</p>
          <el-progress type="circle" stroke-linecap="butt" :style="{'color': value.color}" :percentage="value.percentage" :width="windowSize === EWindowSize.SM ? 140 : windowSize === EWindowSize.XS ? 100 : 186" :stroke-width="windowSize === EWindowSize.SM ? 31 : windowSize === EWindowSize.XS ? 22 : 37" :color="value.color" />
          <p class="font-16 text-center desc" v-if="key === 'memory' || key === 'storage'">
            <span :style="{'color': value.color}">{{ sizeChange(value.used, '') }}</span> Used 
            <br />
            {{ sizeChange(value.total - value.used, '') }} Free
          </p>
          <p class="font-16 text-center desc" v-else>
            <span :style="{'color': value.color}">{{ replaceFormat(value.used) }}</span> Used 
            <br />
            {{ replaceFormat(value.total - value.used) }} Free
          </p>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
import { replaceFormat, sizeChange } from '@/utils/common';
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'

defineProps<{
  resourcesList?: Object
  resourcesLoad?: boolean
}>()
</script>

<style scoped lang="less">
.resources-container{
  background-color: #1E2026;
  border-radius: 0.08rem;
  :deep(.el-col){
    .small-spacing {
      width: calc(100% - 0.1rem);
      padding: 0.32rem 0.05rem;
      .el-progress {
        margin: 0.1rem auto 0.16rem;
        .el-progress__circle,
        .el-progress-circle__track {
          border-radius: 0 !important;
        }
        .el-progress-circle__track {
          stroke: #424754;
        }
        .el-progress__text {
          font-family: var(--font-bold);
          font-size: inherit !important;
          font-weight: bold;
          color: inherit;
        }
      }
      .desc {
        color: #D7DDE3;
      }
    }
  }
}
</style>