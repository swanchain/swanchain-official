<template>
  <el-row :gutter="16" class="w-100 guidance-container">
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="both">
        <template v-for="item in guidanceList" :key="item.title">
          <div class="grid-content w-100 small-spacing text-center font-16">
            <ul class="flex flex-ai-center flex-jc-left">
              <li class="pt-8 pb-8 text-left">
                <div class="title">{{ item.title }}</div>
                <div class="list flex flex-ai-center flex-wrap" v-if="item.list">
                  <template v-for="it in item.list" :key="it">
                    <p class="mr-8 mt-8">{{ it }}</p>
                  </template>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </el-col>

    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="both">
          <div class="grid-content w-100 small-spacing text-center font-16">
            <ul class="flex flex-ai-center flex-jc-left flex-wrap">
              <template v-for="item in guidanceListRight" :key="item">
                <li class="pt-8 pb-8 mr-8 text-left">
                  <div class="title">{{ item }}</div>
                </li>
              </template>
            </ul>
          </div>
      </div>
    </el-col>

    <template v-for="item in hardwareList" :key="item.title">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="both">
          <div class="grid-content w-100 small-spacing text-left font-16">
            <div class="ls-title font-24 font-bold mb-16">{{ item.title }}</div>
            <ul class="both-hardware">
              <template v-for="it in item.list" :key="it">
                <li class="text-left">
                  <p class="mr-8 mt-8">{{ it }}</p>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
const guidanceList = ref([
  {
    title: '1. Prerequisties',
    list: [
      'Map service port',
      'Run script',
      'Download parameters'
    ]
  },
  {
    title: '2. Install ECP and Init CP Account',
    list: [
      'Download computing-provider',
      'Initialize ECP repo',
      'Wallet address',
      'Initialize ECP Account'
    ]
  },
  {
    title: '3. Start ECP service',
    list: [
      'Run script'
    ]
  }
])

const guidanceListRight = ref([
  '1. Prerequisties',
  '2. Install and confiq Nginx',
  '3. Install Hardware resource-exporter',
  '4. Install Redis service',
  '5. Build and config Computing Provider',
  '6. Install AI Inference Dependency',
  '7. Config and Receive UBI Tasks',
  '8. Start the Computing Provider',
  '9. Connect to Orchestrator'
])

const hardwareList = ref([
  {
    title: 'ECP hardware requirements:',
    list: [
      'Possess a public IP',
      'Have a least one GPU',
      'At least 4 vCPUs',
      'Minimum 300GB HDD storage',
      'Minimum 32GB memory',
      'Minimum 20MB bandwidth'
    ]
  },
  {
    title: 'FCP hardware requirements:',
    list: [
      'Possess a public IP',
      'Have a domain name (*.example.com)',
      'Have an SSL certificate',
      'Have at least one GPU',
      'At least 8 vCPUs',
      'Minimum 100GB SSD storage',
      'Minimum 64GB memory',
      'Minimum 50MB bandwidth'
    ]
  }
])
</script>

<style scoped lang="less">
.guidance-container{
  :deep(.el-col){
    margin-bottom: 0.16rem;
    .both{
      height: calc(100% - 0.32rem);
      padding: 0.16rem 0;
      background-color: #1E2026;
      border-radius: 0.08rem;
      box-sizing: content-box;
      .grid-content{
        padding: 0 0.16rem;
        ul{
          padding: 0;
          list-style: none;
          &.both-hardware{
            padding-left: 0.24rem;
            list-style: disc;
          }
          li{
            line-height: 1.1;
            .title{
              display: inline-block;
              padding: 0.08rem 0.1rem;
              background-color: var(--color-primary);
              color: var(--color-light);
              border: 1px solid var(--color-primary);
              border-radius: 0.08rem;
            }
            .list{
              p{
                padding: 0.08rem 0.1rem;
                color: var(--color-light);
                border: 1px solid var(--color-light);
                border-radius: 0.08rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>