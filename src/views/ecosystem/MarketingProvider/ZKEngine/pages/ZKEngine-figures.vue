<template>
  <el-row :gutter="16" v-loading="statsLoad">
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">CP Numbers Of ZK Task</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.providers.count) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total ZK Tasks</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.tasks.sent.count) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">GPU ZK Tasks</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.tasks.sent.count_gpu) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">CPU ZK Tasks</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.tasks.sent.count_cpu) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">24h Average ZK Reward</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.rewards.avg_24h) }} SWAN/CP
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">7d Average ZK Reward</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.rewards.avg_7d) }} SWAN/CP
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">30d Average ZK Reward</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.rewards.avg_30d) }} SWAN/CP
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">1y Average ZK Reward</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.rewards.avg_1y) }} SWAN/CP
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total ZK Reward</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.ECPData.rewards.total) }} SWAN/CP
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { getOverViewECP } from '@/api/stats';
import { replaceFormat } from '@/utils/common';

const statsData = reactive({
  ECPData: {
    providers: {},
    rewards: {},
    tasks: {
      sent: {}
    }
  }
})
const statsLoad = ref(false)
async function getECPData() {
  statsLoad.value = true
  try {
    const statsRes = await getOverViewECP()
    statsData.ECPData = statsRes?.data
  } catch { 
    console.error
  }
  statsLoad.value = false
}
onMounted(async () => {
  getECPData()
})
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
        text-transform: capitalize;
        &.color {
          color: var(--color-primary);
        }
        .compare {
          position: relative;
          padding-right: 0.24rem;
          &.color-success, &.color-danger {
            display: none;
            &::before {
              position: absolute;
              content: '';
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 0;
              height: 0;
              border-left: 0.08rem solid transparent;
              border-right: 0.08rem solid transparent;
            }
          }
          &.color-success {
            &::before {
              border-bottom: 0.12rem solid var(--color-success);
            }
          }
          &.color-danger {
            &::before {
              border-top: 0.12rem solid var(--color-danger);
            }
          }
        }
      }
    }
  }
}
</style>