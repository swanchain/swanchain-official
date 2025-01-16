<template>
  <section>
    <el-table v-loading="tableLoad" :data="instanceData" style="width: 100%" empty-text="No Data">
      <el-table-column prop="hardware_name" label="GPU" min-width="120">
        <template #default="scope">
          <span v-if="scope.row.hardware_type === 'CPU'">CPU Only</span>
          <div class="flex flex-ai-center" v-else>
            <img :src="gpuIcon" class="gpu-images mr-8" />
            {{scope.row.gpu ?? '-'}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="CPU" label="CPU">
        <template #default="scope">
          <div>{{scope.row.cpu ?? '-'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="Memory" label="Memory">
        <template #default="scope">
          <div>{{scope.row.memory ?? '-'}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="Availability">
        <template #header>
          <div class="text-center">Availability</div>
        </template>
        <template #default="scope">
          <div class="font-16 text-center">
            {{scope.row.available_resource ?? '-'}} 
            <!-- <span class="color-subtitle">(of 72)</span> -->
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price">
        <template #header>
          <div class="text-center text-center">Price</div>
        </template>
        <template #default="scope">
          <div class="font-bold color-primary text-center">{{scope.row.hardware_price}} SWAN/hr</div>
        </template>
      </el-table-column>
      <el-table-column label="">
        <template #default="scope">
          <div v-if="scope.row.hardware_status === 'available'" @click="openPage(ELINK.LAGRANGE)" class="font-bold text-center color-primary pointer">Rent Now</div>
          <div v-else class="font-bold text-center" style="color:#5C5F66">Rent Now</div>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script setup lang="ts">
import { getCPMachinesList } from '@/api/hardware';
import gpuIcon from '@/assets/img/pricing/gpu-icon.png'
import { ELINK } from '@/constant/envLink';
import { openPage } from '@/hooks/router';
import { sortBoole } from '@/utils/common';

const props = withDefaults(
  defineProps<{
    filterSort?: string
  }>(),
  {
    filterSort: 'available_resource'
  }
)

const router = useRouter()
const tableLoad = ref(false)
const instanceData = ref([])
const pagin = reactive({
  pageSize: 10,
  pageNo: 1,
  total: 0
})

function handleSizeChange(val: number) {
  pagin.pageSize = val
  pagin.pageNo = 1
  getListData()
}

async function handleCurrentChange (currentPage: number) {
  pagin.pageNo = currentPage
  getListData()
}

const emits = defineEmits(['handTotal'])
async function getListData() { 
  tableLoad.value = true
  try {
    const res = await getCPMachinesList()
    instanceData.value = res.data.hardware.map((row: any) => {
      const arr = row.hardware_description.split('·') ?? []
      let available_resource = 0
      Object.keys(row.region_detail).forEach(function (key) {
        if (row.region_detail[key].available_resource > 0) {
          available_resource += row.region_detail[key].available_resource
        }
      });
      return {
        ...row,
        gpu: arr[0],
        cpu: arr.length > 1 ? arr[1] : '',
        memory: arr.length > 2 ? arr[2] : '',
        available_resource: available_resource
      }
    })
    instanceData.value = instanceData.value.filter((item:any) => item.hardware_type !== 'CPU')
    instanceData.value = sortBoole(instanceData.value, props.filterSort)
    pagin.total = res?.data?.total ?? 0
    const totalQuantity = instanceData.value.reduce((sum, item) => sum + item.available_resource, 0);
    emits('handTotal', totalQuantity)
  } catch {
    console.error
  } finally {
    tableLoad.value = false
  }
}

onMounted(async () => {
  getListData()
})

watch(() => props.filterSort, () => {
  try {
    tableLoad.value = true
    instanceData.value = sortBoole(instanceData.value, props.filterSort)
  } finally {
    tableLoad.value = false
  }
})
</script>

<style lang="less" scoped>
.el-row {
  .el-col {
    margin: 0.1rem 0;
    &.flex {
      display: flex;
    }
    .module-container {
      position: relative;
      width: calc(100% - 0.64rem);
      height: calc(100% - 0.5rem);
      padding: 0.25rem 0.32rem;
      background-color: var(--color-light);
      border-radius: 0.14rem;
      @media screen and (max-width: 768px) {
      }
      &.world {
        width: 100%;
        height: 100%;
        min-height: 4.2rem;
        padding: 0;
        background-color: var(--color-primary);
        .title {
          position: absolute;
          left: 0.25rem;
          right: 0.25rem;
          top: 0.32rem;
          width: auto;
          color: var(--color-light);
          z-index: 9;
        }
      }
      .el-col {
        margin: 0;
      }
      .title {
        margin: 0;
        .icon {
          width: 0.24rem;
          height: 0.24rem;
          margin: 0 0.09rem 0 0;
          @media screen and (max-width: 1024px) {
            width: 16px;
            height: 16px;
          }
          &.icon-world {
            background: url(../../../assets/images/icons/icon-05.png)
              no-repeat;
            background-size: 100%;
          }
          &.icon-figures {
            background: url(../../../assets/images/icons/icon-04.png)
              no-repeat;
            background-size: 100%;
          }
          &.icon-gpu {
            background: url(../../../assets/images/icons/icon-08.png)
              no-repeat;
            background-size: 100%;
          }
          &.icon-resource {
            background: url(../../../assets/images/icons/icon-06.png)
              no-repeat;
            background-size: 100%;
          }
          &.icon-provider {
            background: url(../../../assets/images/icons/icon-07.png)
              no-repeat;
            background-size: 100%;
          }
          &.icon-list {
            background: url(../../../assets/images/icons/icon-09.png)
              no-repeat;
            background-size: 100%;
          }
        }
      }
    }
    b {
      position: relative;
      padding: 0.1rem 0 0;
      margin: 0;
      line-height: 1;
      small {
        margin: 0 0 0 4px;
        font-size: 0.16rem;
        @media screen and (min-width: 1800px) {
          font-size: 0.18rem;
        }
        @media screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
