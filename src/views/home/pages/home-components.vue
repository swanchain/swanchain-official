<template>
  <div class="carousel-container page-body w-100 pt-32 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Components of AI computing</div>
    <el-row :gutter="64" justify="center">
      <template v-for="item in thrivingData" :key="item.title">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" class="mb-16">
          <div class="grid-content text-center">
            <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '64px' : '1.28rem'" :height="windowSize === EWindowSize.XS ? '64px' : '1.28rem'" pointer></xy-icon>
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
    label: EIcon.EdgeComputingProvider,
    title: 'Edge Computing Provider',
    content: 'Edge Computing Provider specializes in processing data at the source of data generation, using minimal latency setups ideal for real-time applications.'
  },
  {
    label: EIcon.FogComputingProvider,
    title: 'Fog Computing Provider',
    content: 'Offers a layered network that extends cloud capabilities to the edge of the network, providing services such as AI model training and deployment.'
  },
  {
    label: EIcon.MarketProvider,
    title: 'Market Provider',
    content: 'A platform that facilitates the allocation of computing jobs to providers, utilizing an auction engine for job distribution and a payment engine for financial transactions.'
  }
])
</script>

<style lang="less" scoped>
.el-row {
  .el-col {
    .grid-content {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: content-box;
      .icon{
        margin: auto;
      }
    }
  }
}
</style>
