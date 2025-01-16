<template>
  <div class="pricing-card w-100">
    <div class="font-24 font-bold">Calculate your ideal price on Swan Chain</div>
    <div class="font-16 mtb-16">Swan Chain offers a diverse range of hardware resources, allowing you to select the configuration that perfectly aligns with your needs. Instance types are named based on their family, generation, processor family, additional capabilities, and size.</div>

    <div v-loading="gpuLoad">
      <el-row :gutter="24" class="font-16 font-medium">
        <el-col :xs="24" :md="8">
          <div class="label mb-4">GPU:</div>
          <el-select v-model="gpuList.value" placeholder="Select" size="small" @change="gpuChangeMethod">
            <template #prefix>
              <div class="flex flex-ai-center font-16">
                <i class="icon icon-gpuIcon"></i>
                {{gpuList.value}}
              </div>
            </template>
            <el-option v-for="item in gpuList.options" :key="item" :label="item" :value="item">
              <div class="flex flex-ai-center font-16">
                <i class="icon icon-gpuIcon"></i>
                {{item}}
              </div>
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="24" :md="16">
          <div class="label font-16 font-medium mb-4">Instance Type:</div>
          <el-select v-model="instanceList.value" value-key="instance_type" placeholder="Select" size="small" @change="instanceChangeMethod">
            <template #prefix>
              <div class="flex flex-ai-center font-16" v-if="instanceList.value">
                <!-- <span class="mlr-16 line"></span> -->
                {{ `${instanceList.value?.instance_type} | CPU: ${instanceList.value?.vcpu} | Memory: ${instanceList.value?.memory}GB` }}
              </div>
            </template>
            <el-option v-for="item in instanceList.options" :key="item.instance_type" :label="item.instance_type" :value="item">
              <div class="flex flex-ai-center font-16">
                <i class="icon icon-gpuIcon"></i>
                {{ `${item.instance_type} | CPU: ${item.vcpu} | Memory: ${item.memory}GB` }}
              </div>
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <div class="configuration flex flex-ai-center flex-jc-around ptb-16 mtb-16 font-28">
        <div class="flex flex-ai-center ptb-10 ml-32">
          <xy-icon class="icon" :name="EIcon.CPCPU" :width="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :height="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :margin="'0 0.08rem 0 0'"></xy-icon>
          <span class="ml-8 mr-16">CPU:</span>
          {{instanceList.value?.vcpu ?? '-'}}
        </div>
        <div class="flex flex-ai-center ptb-10 ml-32">
          <xy-icon class="icon" :name="EIcon.CPMEMORY" :width="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :height="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :margin="'0 0.08rem 0 0'"></xy-icon>
          <span class="ml-8 mr-16">Memory(GB):</span>
          {{instanceList.value?.memory ?? '-'}}GB
        </div>
        <div class="flex flex-ai-center ptb-10 ml-32">
          <xy-icon class="icon" :name="EIcon.CPSTORAGE" :width="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :height="windowSize === EWindowSize.XS ? '22px' : '0.28rem'" :margin="'0 0.08rem 0 0'"></xy-icon>
          <span class="ml-8 mr-16">Storage(GB):</span>
          50GB
        </div>
      </div>

      <el-divider />

      <el-row :gutter="32" class="font-16 mt-24">
        <el-col :xs="24" :md="12">
          <div class="name-container text-center flex flex-wrap">
            <div class="label color-subtitle ptb-7 w-100">Instance type name:</div>
            <div class="font-24 font-bold ptb-20 w-100">{{instanceList.value?.instance_type ?? '-'}}</div>
          </div>
        </el-col>
        <el-col :xs="24" :md="12">
          <div class="label font-24 font-bold mb-16">Pricing (Month):</div>
          <div class="deploy-container flex flex-ai-center flex-jc-between">
            <div class="swan flex flex-ai-center">
              <img :src="swanSmallLogo" class="swan-logo" />
              <div class="cont ml-16">
                <div class="font-14 font-medium color-subtitle">Swan Chain</div>
                <div class="font-20 font-bold color-primary">{{ replaceFormat(instanceList.value?.price_hour*24*30) }} SWAN</div>
              </div>
            </div>
            <div class="btn deploy-btn flex flex-ai-center pointer" @click="openPage(ELINK.LAGRANGE)">
              Deploy
              <svg class="ml-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.72 0.282669C15.654 0.216175 15.5747 0.164352 15.4873 0.13058C15.3998 0.0968077 15.3063 0.0818452 15.2127 0.0866686C5.86069 0.574669 2.40603 8.90534 2.37269 8.98934C2.32391 9.11052 2.3118 9.24336 2.33788 9.37137C2.36395 9.49937 2.42706 9.61689 2.51936 9.70934L6.29069 13.4807C6.38357 13.5734 6.50175 13.6367 6.63042 13.6625C6.7591 13.6884 6.89254 13.6757 7.01403 13.626C7.09736 13.592 15.3834 10.0987 15.9127 0.790669C15.918 0.697213 15.9037 0.603677 15.8705 0.516151C15.8373 0.428626 15.786 0.349072 15.72 0.282669ZM10.276 7.60934C10.0896 7.79585 9.852 7.92287 9.59334 7.97435C9.33469 8.02583 9.06658 7.99945 8.82292 7.89855C8.57927 7.79764 8.371 7.62675 8.22448 7.40747C8.07795 7.1882 7.99974 6.9304 7.99974 6.66667C7.99974 6.40294 8.07795 6.14514 8.22448 5.92587C8.371 5.70659 8.57927 5.5357 8.82292 5.43479C9.06658 5.33389 9.33469 5.30751 9.59334 5.35899C9.852 5.41047 10.0896 5.53749 10.276 5.724C10.526 5.97404 10.6664 6.31312 10.6664 6.66667C10.6664 7.02022 10.526 7.3593 10.276 7.60934Z" fill="white"/>
                <path d="M0.742 12.5627C0.917842 12.3856 1.1269 12.245 1.35719 12.1489C1.58748 12.0529 1.83448 12.0032 2.08401 12.0028C2.33353 12.0023 2.58069 12.0512 2.81131 12.1465C3.04193 12.2418 3.25147 12.3816 3.42791 12.5581C3.60436 12.7345 3.74424 12.9441 3.83953 13.1747C3.93482 13.4053 3.98366 13.6525 3.98323 13.902C3.98281 14.1515 3.93313 14.3985 3.83705 14.6288C3.74097 14.8591 3.60038 15.0682 3.42333 15.244C2.68267 15.9847 0 16 0 16C0 16 0 13.3027 0.742 12.5627Z" fill="white"/>
                <path d="M6.90472 1.56067C5.96509 1.39713 4.99988 1.46223 4.09072 1.75047C3.18156 2.03871 2.35516 2.54162 1.68139 3.21667C1.32486 3.57651 1.01488 3.97966 0.758722 4.41667C0.683713 4.54404 0.653159 4.69272 0.671864 4.83935C0.690569 4.98597 0.757472 5.12222 0.862055 5.22667L2.18805 6.55334C3.4202 4.59788 5.02242 2.90191 6.90472 1.56067Z" fill="white"/>
                <path d="M14.4394 9.09534C14.603 10.035 14.5379 11.0002 14.2496 11.9093C13.9614 12.8185 13.4585 13.6449 12.7834 14.3187C12.4236 14.6752 12.0205 14.9852 11.5834 15.2413C11.4561 15.3163 11.3074 15.3469 11.1608 15.3282C11.0141 15.3095 10.8779 15.2426 10.7734 15.138L9.44678 13.812C11.4022 12.5799 13.0982 10.9776 14.4394 9.09534Z" fill="white"/>
              </svg>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import XyIcon from '@/base-ui/xy-icon.vue'
import { EWindowSize } from '@/constant/common';
import { EIcon } from '@/constant/icon';
import { windowSize } from '@/hooks/layout';
import swanSmallLogo from '@/assets/img/logo-small.png'
import hardwareAll from '@/utils/hardware-list';
import { replaceFormat } from '@/utils/common';
import { openPage } from '@/hooks/router';
import { ELINK } from '@/constant/envLink';

const gpuLoad = ref(false)
const gpuList = reactive({
  value: 'Nvidia 2060',
  options: []
})
type Option = {
  instance_type: string
  gpu: string
  vcpu: string
  memory: string
  price_hour: string
}
const instanceList = reactive({
  value: ref<Option>(),
  options: [{
    instance_type: 'M1ae.small',
    gpu: 'Nvidia 2060',
    vcpu: '4',
    memory: '8',
    price_hour: '2'
  },
  {
    instance_type: 'M1ae.medium',
    gpu: 'Nvidia 2060',
    vcpu: '4',
    memory: '16',
    price_hour: '3'
  }]
})

async function gpuChangeMethod(key:string) {
  selectInstanceData()
}

async function instanceChangeMethod(key:string) {
  // selectInstanceData()

  console.log(instanceList.value)
}

function selectData() {
  gpuLoad.value = true
  try{
    const gpuNewArray = [...new Set(hardwareAll.map(item => item.gpu))];
    gpuList.options = gpuNewArray ?? []
    gpuList.value = 'Nvidia H100' ?? gpuNewArray[0] ?? ''

    selectInstanceData()
  } catch {
    gpuLoad.value = false
  }
}

function selectInstanceData() {
  gpuLoad.value = true
  try{
    const filteredItems = hardwareAll.filter(item => item.gpu.includes(gpuList.value));
    instanceList.options = filteredItems ?? []
    instanceList.value = filteredItems[0] ?? {}
  } finally {
    gpuLoad.value = false
  }
}

onMounted(() => selectData())
</script>

<style scoped lang="less">
.pricing-card {
  padding: 0.32rem;
  background-color: var(--color-dark-black);
  border-radius: 0.08rem;
  color: var(--color-light);
  .line {
    width: 1px;
    height: 22px;
    background-color: var(--color-line);
  }
  :deep(.el-select) {
    width: 100%;
    margin: 0;
    font-size: inherit;
    border: 1px solid var(--color-line);
    border-radius: 0.08rem !important;
    .el-tooltip__trigger {
      justify-content: space-between;
      padding: 0 0.12rem !important;
      background-color: var(--color-dark) !important;
      border-radius: 0.08rem !important;
      line-height: 40px;
      @media screen and (max-width: 767px) {
        padding: 0.04rem 0.1rem;
        height: 30px !important;
        line-height: 30px;
      }
      * {
        line-height: 40px;
        @media screen and (max-width: 767px) {
          line-height: 30px;
        }
      }
      .el-select__prefix {
        margin: 0 0.06rem 0 0;
        line-height: 1.2;
        color: var(--color-light);
        .icon {
          width: 0.34rem;
          height: 0.22rem;
          margin: 0 0.08rem 0 0;
          @media screen and (max-width: 1024px) {
            width: 34px;
            height: 23px;
          }
          &.icon-gpuIcon {
            background: url(../../../assets/img/pricing/gpu-icon.png) no-repeat center;
            background-size: auto 100%;
          }
        }
      }
      .el-select__selection {
        display: none;
        .el-select__selected-item {
          position: relative;
          top: auto;
          margin: 0 0.06rem 0 0;
          transform: translateY(0px);
          line-height: 1.2;
          color: #000;
          &.is-hidden {
            display: none;
          }
        }
      }
      .el-select__suffix {
        color: var(--color-light);
        .el-select__icon {
          width: 18px;
          height: 18px;
          svg, path {
            width: 100%;
            height: 100%;
            color: var(--color-light) !important;
            fill: var(--color-light) !important;
          }
        }
      }
    }
  }
  :deep(.el-divider) {
    margin: 0.08rem 0;
    border-color: var(--color-line);
  }
  .configuration {
    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  }
  .name-container {
    height: 100%;
  }
  .deploy-container {
    max-width: 4.7rem;
    padding: 0.16rem;
    background-color: var(--color-dark);
    border: 1px solid var(--color-line);
    border-radius: 0.08rem;
    @media screen and (max-width: 767px) {
      max-width: none;
    }
    .deploy-btn {
      padding: 0.03rem 0.26rem;
      border-radius: 0.08rem;
      &:hover {
        opacity: .9 !important;
      }
    }
    .swan {
      .swan-logo {
        height: 0.4rem;
      }
      .cont {
        * {
          line-height: 1.3;
        }
      }
    }
  }
}
</style>
