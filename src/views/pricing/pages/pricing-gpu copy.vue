<template>
  <div class="pricing-gpu w-100 ptb-30">
    <div class="title font-24 font-bold">{{ title }}</div>
    <div class="filter flex flex-ai-center flex-jc-between ptb-16 mb-16">
      <div class="flex flex-ai-center">
        <div class="font-14">Total Available GPUs</div>
        <div class="font-16 font-bold2 mlr-16">291</div>
        <div class="font-14 color-subtitle">(of 72)</div>
      </div>
      <div class="flex">
        <el-tree
            class="tree-border"
            :data="data"
            show-checkbox
            ref="treeRef"
            node-key="menuId"
            :props="defaultProps"
            :filter-node-method="filterNode"
            @check="handCheck"
        ></el-tree>

        <el-select v-model="availabilityList.value" placeholder="Select" size="small" @change="priceChangeMethod">
          <template #prefix>
            <div class="flex flex-ai-center font-16">
              <!-- <span class="mlr-16 line"></span> -->
              {{availabilityList.value}}
            </div>
          </template>
          <el-option v-for="item in availabilityList.options" :key="item.value" :label="item.label" :value="item.value">
            <div class="flex flex-ai-center font-16">
              <i class="icon icon-gpuIcon"></i>
              {{item.label}}
            </div>
          </el-option>
        </el-select>
      </div>
    </div>
    <table-list></table-list>
  </div>
</template>

<script setup lang="ts">
import tableList from './table-list.vue'

const title = ref('GPU Availability and Pricing')
const availabilityList = reactive({
  value: 'Availability',
  options: [
    {
      value: 'Availability',
      label: 'Availability'
    },
    {
      value: 'Lowest Price',
      label: 'Lowest Price'
    },
    {
      value: 'Highest Price',
      label: 'Highest Price'
    }
  ]
})

const defaultProps = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}
const data = [
  {
    id: 'gpu',
    label: 'Level one 1',
    children: [
      {
        id: 'gpu-1',
        label: 'Level two 2-1'
      },
      {
        id: 'gpu-2',
        label: 'Level two 2-2'
      },
    ],
  },
  {
    id: 'CPU',
    label: 'Level one 1',
    children: [
      {
        id: 'CPU-1',
        label: 'Level two 2-1'
      },
      {
        id: 'CPU-2',
        label: 'Level two 2-2'
      },
    ],
  },
]
const treeRef = ref()
 
interface Tree {
  [key: string]: any
}
  
  
const filterNode = (value: string, data: Tree) => {
  console.log(value)
  if (!value) return true
  //我这里tree数据中的唯一id为menuName，根据自己的数据修改即可
  return data.menuName.includes(value)
}

function handCheck() {
  const ids = treeRef.value?.getCheckedKeys()
  console.log(ids)
}

async function priceChangeMethod(key:string) {
  console.log(availabilityList.value)
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
      }
      * {
        line-height: 40px;
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
