<template>
  <div class="font-24 mt-32 mb-16 flex flex-ai-center">
    <span class="font-bold">Network Summary</span>

    <div class="ex-link font-14 flex flex-ai-center ml-10 pointer" @click="openPage(currentNetwork === 'Mainnet' ? ELINK.MAINNETEXPLORER:ELINK.PROXIMAEXPLORER)">
      View in exolorer

      <svg class="ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Wallet Address</p>
        <p class="font-20 color">{{ replaceFormat(statsData.value.total_addresses) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Transactions</p>
        <p class="font-20 color">{{ replaceFormat(statsData.value.total_transactions) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Transactions (7 Days)</p>
        <p class="font-20 color">{{ replaceFormat(statsData.value.transactions_today * 7) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total Blocks</p>
        <p class="font-20 color">{{ replaceFormat(statsData.value.total_blocks) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Gas Used (7 Days)</p>
        <p class="font-20 color">{{ replaceFormat(statsData.value.gas_used_today * 7) }}</p>
      </div>
    </el-col>
    <!-- <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">ETH Price</p>
        <p class="font-20 color"></p>
      </div>
    </el-col> -->
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Market Cap</p>
        <p class="font-20 color">{{ statsData.value.market_cap !== '0' ? replaceFormat(statsData.value.market_cap) : 'Not Available' }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total accounts</p>
        <p class="font-20 color">{{ replaceFormat(statsData.stats_counters.total_accounts) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Gas tracker</p>
        <p class="font-20 color">{{ statsData.value.gas_prices?.average ?? '-' }} Gwei</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Average block time</p>
        <p class="font-20 color">{{ millisecondsToHMS(statsData.value.average_block_time) }}</p>
      </div>
    </el-col>
  </el-row>

  
  <div class="font-24 mt-32 mb-16 flex flex-ai-center">
    <span class="font-bold">Provider Summary</span>

    <div class="ex-link font-14 flex flex-ai-center ml-10 pointer" @click="openPage('https://orchestrator.swanchain.io/provider-status')">
      View in exolorer

      <svg class="ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Fog Computing Provider</p>
        <p class="font-20 color" v-if="currentNetwork === 'Proxima'">{{ replaceFormat(statsData.overViewArchiveData.total_online_computers) }}</p>
        <p class="font-20 color" v-else>{{ replaceFormat(statsData.overViewData.total_online_computers) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16" v-if="currentNetwork === 'Proxima'">
      <div class="grid-content">
        <p class="font-16">Edge Computing Provider</p>
        <p class="font-20 color">{{ replaceFormat(statsData.ECPData.providers.count) }}</p>
      </div>
    </el-col>
    <!-- <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Marketing Provider</p>
        <p class="font-20 color"></p>
      </div>
    </el-col> -->
    <!-- <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">TVL</p>
        <p class="font-20 color"></p>
      </div>
    </el-col> -->
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Locations</p>
        <p class="font-20 color" v-if="currentNetwork === 'Proxima'">{{ replaceFormat(statsData.overViewData.total_cp_locations + (statsData.ECPData.location.total || 0)) }}</p>
        <p class="font-20 color" v-else>{{ replaceFormat(statsData.overViewData.total_cp_locations) }}</p>
      </div>
    </el-col>
    <!-- <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Task (7 Days)</p>
        <p class="font-20 color"></p>
      </div>
    </el-col> -->
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16">
      <div class="grid-content">
        <p class="font-16">Total tasks</p>
        <p class="font-20 color">{{ replaceFormat(statsData.generalData.total_task) }}</p>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mt-16" v-if="currentNetwork === 'Proxima'">
      <div class="grid-content">
        <p class="font-16">Total reward</p>
        <p class="font-20 color">{{ replaceFormat(statsData.ECPData.rewards.total) }} SWAN</p>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { getExplorerStats, getExplorerCounters, getGeneralFCP, getOverViewFCP, getOverViewArchivedFCP, getOverViewECP, getStatsCounters } from '@/api/stats';
import { ELINK } from '@/constant/envLink';
import { openPage } from '@/hooks/router';
import { millisecondsToHMS, replaceFormat } from '@/utils/common';
import { currentNetwork } from '@/utils/storage'

const statsData = reactive({
  value: {},
  generalData: {},
  overViewData: {},
  overViewArchiveData: {},
  ECPData: {
    cp: {},
    location: {},
    rewards: {},
    providers: {}
  },
  counters: {},
  stats_counters: {
    total_accounts: '0'
  }
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

async function getOverViewArchivedData() {
  try {
    const statsRes = await getOverViewArchivedFCP()
    statsData.overViewArchiveData = statsRes?.data
  } catch { 
    console.error
  }
}

async function getECPData() {
  try {
    const statsRes = await getOverViewECP()
    statsData.ECPData = statsRes?.data
  } catch { 
    console.error
  }
}

async function getStatsData() {
  try {
    const statsRes = await getExplorerStats()
    statsData.value = statsRes
  } catch { 
    console.error
  }
}

async function getCountersData() {
  try {
    const statsRes = await getExplorerCounters()
    statsData.counters = statsRes
  } catch { 
    console.error
  }
}

async function getStatsCountersData() {
  try {
    const statsRes = await getStatsCounters()
    if (statsRes?.counters) {
      statsRes.counters.forEach(element => {
        if(element.id === "totalAccounts") statsData.stats_counters.total_accounts = element?.value ?? '0'
      });
    }
  } catch { 
    console.error
  }
}

onMounted(async () => {
  getStatsData()
  getCountersData()
  getGeneralData()
  getOverViewData()
  getStatsCountersData()
  if (currentNetwork.value === 'Proxima') {
    getOverViewArchivedData()
    getECPData()
  }
})

watch(() => currentNetwork.value, () => {
  getStatsData()
  getCountersData()
  getGeneralData()
  getOverViewData()
  getStatsCountersData()
  if (currentNetwork.value === 'Proxima') {
    getOverViewArchivedData()
    getECPData()
  }
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
      }
    }
  }
}
</style>