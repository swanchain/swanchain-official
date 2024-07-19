<template>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Network Providers</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.overViewData.total_computer_providers) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Active Applications</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_running_jobs) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Deployments</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_task) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Jobs</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_jobs) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Running Jobs</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_running_jobs) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Leading Jobs</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_leading_jobs) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Leading Job Duration</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(timeFormat(statsData.generalData.total_leading_job_duration)) }} <small class="font-16">Hours</small>
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total GPU Deployed Jobs</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(statsData.generalData.total_gpu_deployed_jobs) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total GPU Hours</p>
        <p class="font-20 color font-bold">
          {{ replaceFormat(timeFormat(statsData.generalData.total_gpu_hours)) }}
          <span :class="`compare font-16 color-danger`">+1.73%</span>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { replaceFormat, timeFormat } from '@/utils/common';
import { getGeneralFCP, getOverViewFCP } from '@/api/stats';

const statsData = reactive({
  generalData: {},
  overViewData: {}
})
async function getGeneralData() {
  try {
    const statsRes = await getGeneralFCP()
    statsData.generalData = statsRes?.data
  } catch { 
    console.error
  }
}
async function getOverViewData() {
  try {
    const statsRes = await getOverViewFCP()
    statsData.overViewData = statsRes?.data
  } catch { 
    console.error
  }
}

onMounted(async () => {
  getGeneralData()
  getOverViewData()
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