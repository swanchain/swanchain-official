<template>
  <div class="carousel-container page-body w-100 pt-32 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Advantages of Swan Chain's AI computing network</div>
    <el-row :gutter="24">
      <template v-for="item in thrivingData" :key="item.title">
        <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mb-32">
          <div class="grid-content">
            <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '28px' : '0.56rem'" :height="windowSize === EWindowSize.XS ? '28px' : '0.56rem'" pointer></xy-icon>
            <p class="font-16 font-bold mt-16 mb-8 capitalize">{{ item.title }}</p>
            <p class="font-14 color-subtitle">{{ item.content }}</p>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { EIcon } from '@/constant/icon';
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import XyIcon from '@/base-ui/xy-icon.vue'

const thrivingData = ref([
  {
    label: EIcon.CostEfficient,
    title: 'Cost-Efficient',
    content: 'Reduce AI computing costs by up to 70% through our decentralized marketplace.'
  },
  {
    label: EIcon.GlobalReach,
    title: 'Global Reach',
    content: 'Access AI computing resources in over 100 locations worldwide.'
  },
  {
    label: EIcon.InstantDeployment,
    title: 'Instant Deployment',
    content: 'Launch your AI workloads within minutes using our user-friendly interface.'
  },
  {
    label: EIcon.ZKPowerhouse,
    title: 'ZK Powerhouse',
    content: 'Leverage our global zero-knowledge(ZK) Market for privacy-preserving AI model training'
  },
  {
    label: EIcon.FairIncentives,
    title: 'Fair Incentives',
    content: 'Benefit from our UBI-based node incentive mechanism for a balanced token economy.'
  },
])
</script>

<style lang="less" scoped>
.el-row {
  .el-col {
    max-width: 20%;
    flex: 0 0 20%;
    @media screen and (max-width: 992px) {
      max-width: 33.33%;
      flex: 0 0 33.33%;
    }
    @media screen and (max-width: 540px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
    .grid-content {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: content-box;
    }
  }
}
</style>
