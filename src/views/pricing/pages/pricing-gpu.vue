<template>
  <div class="pricing-gpu w-100 ptb-30">
    <div class="title font-24 font-bold">{{ title }}</div>
    <div class="filter flex flex-ai-center flex-jc-between ptb-16 mb-16">
      <div class="flex flex-ai-center">
        <div class="font-14">Total Available GPUs</div>
        <div class="font-18 font-bold2 mlr-16">{{gpuTotal ?? ''}}</div>
        <!-- <div class="font-14 color-subtitle">(of 72)</div> -->
      </div>
      <div class="flex">

        <el-select v-model="availabilityList.value" value-key="value" placeholder="Select" size="small">
          <template #prefix>
            <div class="flex flex-ai-center font-16" v-if="availabilityList.value">
              <!-- <span class="mlr-16 line"></span> -->
              {{ availabilityList.value?.label }}
            </div>
          </template>
          <el-option v-for="item in availabilityList.options" :key="item.value" :label="item.label" :value="item">
            <div class="flex flex-ai-center font-16">
              <i class="icon icon-gpuIcon"></i>
              {{item.label}}
            </div>
          </el-option>
        </el-select>
      </div>
    </div>
    <table-list @handTotal="handTotal" :filterSort="availabilityList.value?.value"></table-list>
  </div>
</template>

<script setup lang="ts">
import tableList from './table-list.vue'

type Option = {
  value: string
  label: string
}
const title = ref('GPU Availability and Pricing')
const availabilityList = reactive({
  value: {
    value: 'available_resource',
    label: 'Availability'
  },
  options: [
    {
      value: 'available_resource',
      label: 'Availability'
    },
    {
      value: 'lowest',
      label: 'Lowest Price'
    },
    {
      value: 'high',
      label: 'Highest Price'
    }
  ]
})
const gpuTotal = ref()

function handTotal(num: number) {
  gpuTotal.value = num
}
</script>

<style lang="less" scoped>
.pricing-gpu {
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
  }
  &-title {
    color: var(--color-light);
  }
  .filter {
    border-bottom: 1px solid var(--color-line);
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
}
</style>
