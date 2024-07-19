<template>
  <div v-for="item in anchorProvider" :key="item.title" class="an-content" :id="item.targetId">
    <div v-if="item.mainTitleText" class="font-30 mt-32 mb-16 flex flex-ai-center">
      <span class="font-bold">{{ item.mainTitleText }}</span>
      <div v-if="item.externalLink.name" class="ex-link font-14 flex flex-ai-center ml-10 pointer" @click="openPage(item.externalLink.link)">
        {{ item.externalLink.name }}

        <svg class="ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
    <div v-else-if="item.title" class="font-24 mt-32 mb-16 flex flex-ai-center">
      <span class="font-bold">{{ item.title }}</span>

      <div v-if="item.externalLink.name" class="ex-link font-14 flex flex-ai-center ml-10 pointer" @click="openPage(item.externalLink.link)">
        {{ item.externalLink.name }}

        <svg class="ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
    
    <provider-resources :resourcesLoad="resourcesLoad" :resourcesList="resourcesList" v-if="item.targetId === 'Resources'"></provider-resources>
    <provider-world :resourcesLoad="resourcesLoad" :dataArrFCP="dataArr.fcp" :dataArrECP="dataArr.ecp" v-if="item.targetId === 'Providers-location'"></provider-world>
    <provider-guidance v-if="item.targetId === 'Provider-Guidance'"></provider-guidance>

    <img v-if="item.image" :src="item.image" class="w-100" />
    <p v-for="(it, i) in item.content" :key="i" class="font-14" v-html="it"></p>
  </div>
</template>

<script setup lang="ts">
import { openPage } from '@/hooks/router'
import { anchorProvider } from '../config'
import ProviderWorld from './provider-world-echarts.vue'
import ProviderResources from './provider-resources.vue'
import ProviderGuidance from './provider-guidance.vue'


import { getOverViewFCP, getOverViewECP } from '@/api/stats';

const resourcesList = reactive({
  gpu: {
    id: 0,
    name: 'GPU Usage',
    total: 0,
    used: 0,
    percentage: 0,
    color: '#93C603'
  },
  cpu: {
    id: 1,
    name: 'CPU Usage',
    total: 0,
    used: 0,
    percentage: 0,
    color: '#699BFF'
  },
  memory: {
    id: 2,
    name: 'Memory Usage',
    total: 0,
    used: 0,
    percentage: 0,
    color: '#52CE7C'
  },
  storage: {
    id: 3,
    name: 'Storage Usage',
    total: 0,
    used: 0,
    percentage: 0,
    color: '#81C4F5'
  }
})
const resourcesLoad = ref(false)
const dataArr = reactive({
  fcp: [],
  ecp: []
})

async function getOverviewFcpData() {
  resourcesLoad.value = true
  try {
    const statsRes = await getOverViewFCP()
    dataArr.fcp = statsRes?.data?.map_info ?? []
    resourcesList.gpu.total = statsRes?.data?.total_gpu ?? 0
    resourcesList.gpu.used = statsRes?.data?.total_used_gpu ?? 0
    resourcesList.cpu.total = statsRes?.data?.total_cpu ?? 0
    resourcesList.cpu.used = statsRes?.data?.total_used_cpu ?? 0
    resourcesList.memory.total = statsRes?.data?.total_memory ?? 0
    resourcesList.memory.used = statsRes?.data?.total_used_memory ?? 0
    resourcesList.storage.total = statsRes?.data?.total_storage ?? 0
    resourcesList.storage.used = statsRes?.data?.total_used_storage ?? 0
    getOverviewEcpData()
  } catch { 
    console.error
    resourcesLoad.value = false
  }
}

async function getOverviewEcpData() {
  try {
    const statsRes = await getOverViewECP()
    const provider = statsRes?.data?.providers
    if (provider) {
      dataArr.ecp = statsRes?.data?.location?.data ?? []
      resourcesList.gpu.total += provider.gpu?.total ?? 0
      resourcesList.gpu.used += ((provider.gpu?.total ?? 0) - (provider.gpu?.free ?? 0))
      resourcesList.gpu.percentage = resourcesList.gpu?.total ? Number(((resourcesList.gpu?.used ?? 0) / resourcesList.gpu.total * 100).toFixed(1)) : 0
      resourcesList.cpu.total += provider?.cpu?.total ?? 0
      resourcesList.cpu.used += ((provider?.cpu?.total ?? 0) - (provider?.cpu?.free ?? 0))
      resourcesList.cpu.percentage = resourcesList.cpu?.total ? Number(((resourcesList.cpu?.used ?? 0) / resourcesList.cpu.total * 100).toFixed(1)) : 0
      resourcesList.memory.total += provider.memory?.total ?? 0
      resourcesList.memory.used += ((provider.memory?.total ?? 0) - (provider.memory?.free ?? 0))
      resourcesList.memory.percentage = resourcesList.memory?.total ? Number(((resourcesList.memory?.used ?? 0) / resourcesList.memory.total * 100).toFixed(1)) : 0
      resourcesList.storage.total += provider.storage?.total ?? 0
      resourcesList.storage.used += ((provider.storage?.total ?? 0) - (provider.storage?.free ?? 0))
      resourcesList.storage.percentage = resourcesList.storage?.total ? Number(((resourcesList.storage?.used ?? 0) / resourcesList.storage.total * 100).toFixed(1)) : 0
    }
    resourcesLoad.value = false
  } catch { 
    console.error
    resourcesLoad.value = false
  }
}

onMounted(async () => {
  getOverviewFcpData()
})
</script>

<style scoped lang="less">
.an-content{
  img{
    border-radius: 0.1rem;
  }
  p {
    line-height: 1.6;
  }
}
</style>
