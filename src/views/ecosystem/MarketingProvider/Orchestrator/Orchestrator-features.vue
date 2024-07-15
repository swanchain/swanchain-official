<template>
  <el-row :gutter="16" class="w-100 features-container">
    <template v-for="item in featuresList" :key="item.title">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb-16">
        <div class="grid-content w-100 font-16 flex flex-ai-center">
          <div class="title pr-24">
            <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '60px' : '1.28rem'" :height="windowSize === EWindowSize.XS ? '60px' : '1.28rem'"></xy-icon>
          </div>
          <div class="text">
            <div class="font-24 font-bold mb-10">{{ item.title }}</div>
            <div class="font-16">{{ item.desc }}</div>
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
    label: EIcon.Decentralization,
    title: 'Decentralization',
    desc: 'The platform is decentralized, meaning that there is no central authority or intermediary controlling the transactions. This eliminates the need for intermediaries and reduces the risk of fraud.'
  },
  {
    label: EIcon.Transparency,
    title: 'Transparency',
    desc: 'Transactions on the platform are transparent and recorded on a distributed ledger, making it difficult to tamper with or manipulate the data.'
  },
  {
    label: EIcon.Security,
    title: 'Security',
    desc: 'Smart contracts are used to automate the bidding and payment process, ensuring that both parties are protected from fraud or default.'
  },
  {
    label: EIcon.LowerTransaction,
    title: 'Lower transaction fees',
    desc: 'Since there are no intermediaries involved, the transaction fees on a Web3 computing and storage bid market are typically lower than those of traditional marketplaces.'
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