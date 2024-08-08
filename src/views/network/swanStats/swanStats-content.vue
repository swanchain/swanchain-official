<template>
  <div class="an-content">
    <div class="font-30 flex flex-ai-center mt-32">
      <div class="font-bold">Swan Network Stats</div>
      <div class="flex flex-ai-center font-14 mt-4">
        <span class="ml-10 mr-10">Network:</span>
        <el-select v-model="currentRef.value" placeholder="Select" popper-class="network-select" class="network-select" size="small" @change="currentMethod">
          <el-option v-for="item in currentRef.options" :key="item.value" :label="item.value" :value="item.value">
            <div class="font-14">{{item.value}}</div>
          </el-option>
        </el-select>
      </div>
    </div>
    
    <swanStats-figures></swanStats-figures>
  </div>
</template>

<script setup lang="ts">
import swanStatsFigures from './swanStats-figures.vue'
import { currentNetwork } from '@/utils/storage'

const currentRef = reactive({
  value: currentNetwork.value || 'Mainnet',
  options: [
    {
      value: 'Mainnet'
    },
    {
      value: 'Proxima'
    }]
})

async function currentMethod (key:string) {
  currentNetwork.value = key
}
</script>

<style scoped lang="less">
.an-content{
  img{
    display: block;
    border-radius: 0.1rem;
  }
  p {
    line-height: 1.6;
  }
  :deep(.el-select) {
    width: auto;
    .el-select__wrapper {
      width: 115px;
      height: auto !important;
      padding: 0.06rem 0.1rem 0.06rem 0.2rem;
      background-color: transparent !important;
      font-size: inherit !important;
      border: 0.02rem solid;
      border-radius: 0.5rem;
      box-shadow: none !important;
      .el-select__placeholder,
      .el-select__suffix .el-select__icon, svg, path {
        color: var(--color-light) !important;
      }
    }
  }
}
</style>

<style lang="less">
.network-select{
  .el-select-dropdown__item{
    height: auto;
    *{
      line-height: 2;
    }
  }
}
</style>