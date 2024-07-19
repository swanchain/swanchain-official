<template>
  <el-row :gutter="16" class="w-100 features-container">
    <template v-for="item in featuresList" :key="item.title">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb-16">
        <div class="grid-content w-100 font-14 flex flex-ai-start">
          <div class="title pr-24">
            <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '60px' : '1.28rem'" :height="windowSize === EWindowSize.XS ? '60px' : '1.28rem'"></xy-icon>
          </div>
          <div class="text">
            <div class="font-20 font-bold mb-10">{{ item.title }}</div>
            <div class="font-14">{{ item.desc }}</div>
          </div>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
import XyIcon from '@/base-ui/xy-icon.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { EIcon } from '@/constant/icon'

const featuresList = ref([
  {
    label: EIcon.LoadProviderPool,
    title: 'Load Provider Pool',
    desc: 'The auction engine initially loads all active computing providers into a pool. These providers are potential bidders for tasks.'
  },
  {
    label: EIcon.SelectBidders,
    title: 'Select Bidders',
    desc: 'The auction engine selects bidders based on certain criteria. For example, it might select the bidders with the highest collateral.'
  },
  {
    label: EIcon.LoadTasksfromRedis,
    title: 'Load Tasks from Redis',
    desc: "The auction engine fetches all tasks from Redis that are in a state where they can accept bids. It also handles state transitions for tasks, such as moving a task from the 'accepting_bids' state to the 'bidding_closed' state when the bidding period ends."
  },
  {
    label: EIcon.PlaceBid,
    title: 'Place Bid',
    desc: "When a task is open for bidding, the auction engine allows a computing provider (bidder) to place a bid on the task. The bid is only successful if the task is currently accepting bids, the bidder has not already placed a bid, and the bidder's collateral is sufficient."
  },
  {
    label: EIcon.RunBiddingProcess,
    title: 'Run Bidding Process',
    desc: 'For each task that is open for bidding, the auction engine runs the bidding process. It allows the selected bidders to place their bids on the task.'
  },
  {
    label: EIcon.ListTasksAvailable,
    title: 'List Tasks Available for Bidding',
    desc: 'The auction engine can provide a list of all tasks that are currently open for bidding.'
  }
])
</script>

<style scoped lang="less">
.features-container{
  :deep(.el-col){
    .grid-content{
      height: 100%;
      padding: 0.24rem;
      background-color: var(--color-dark-black);
    }
  }
}
</style>