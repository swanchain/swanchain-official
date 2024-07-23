<template>
  <div class="card w-100">
    <div class="card-categories flex flex-ai-center flex-jc-between mb-48 mt-20">
      <el-tabs v-model="activeName" class="card-categories-tabs">
        <el-tab-pane name="all">
          <template #label>
            <div class="font-16">All</div>
          </template>
        </el-tab-pane>
        <!-- <el-tab-pane name="Gaming">
          <template #label>
            <div class="font-16">Gaming</div>
          </template>
        </el-tab-pane> -->
      </el-tabs>

      <!-- <div class="card-input flex-column flex-jc-center font-16">
        <el-input
          v-model="tabsInput"
          placeholder="Search"
          clearable
        />
      </div> -->
    </div>

    <el-row :gutter="16" v-loading="crmForm.loading" element-loading-text="Loading...">
      <template v-for="(item, index) in crmForm.data" :key="index">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" class="mt-16">
          <div class="card-item back-linear font-16">
            <div class="card-item-logo flex flex-jc-between flex-ai-start mb-10">
              <div class="flex flex-ai-center">
                <img :src="item.logo" class="card-item-logo-img" alt="logo" />
                <!-- <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" :height="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" radius="4rem" pointer></xy-icon> -->
              </div>
              <!-- <div class="card-item-date font-16" v-if="item.live">{{ item.live }}</div> -->
            </div>
            <div class="card-item-title font-22 font-weight-6 mb-10">{{ item.name }}</div>
            <div class="card-item-btn flex">
              <!-- <template v-for="b in item.tag" :key="b">
                <div class="font-16 btn mr-10 mb-10">{{b.name}}</div>
              </template> -->
              <div class="font-16 btn mr-10 mb-10">{{item.tag}}</div>
            </div>
            <div class="card-item-content font-16 line-8">{{ item.description }}</div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import XyIcon from '@/base-ui/xy-icon.vue'
import { EIcon } from '@/constant/icon'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { getCRMFormList } from '@/api/apps';

const activeName = ref('all')
const tabsInput = ref('')
const list = ref([
  {
    title: 'Lagrange Dao',
    live: 'Live on Pacific',
    label: 'Lagrange',
    btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }],
    content:
      'It provides data sharing & analytic spaces for Decentralized science(DeSci). With Lagrange Spaces, researchers are able to use public infrastructure for storing...'
  },
  {
    title: 'Multi-Chain Storage',
    live: 'Live on Pacific',
    label: 'MCS',
    btn: [{ name: 'Social' }],
    content:
      'Multi-Chain Storage, or MCS, developed by the Swan Network, is a new kind of storage service that works with different blockchain networks. It transcends traditional cloud storage by using smart...'
  },
  // {
  //   title: 'Meta Ark',
  //   live: 'Live on Pacific',
  //   label: 'MetaArk',
  //   btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }],
  //   content:
  //     'Ark: Meta Survival is a semi-open world metaverse inspired by The Moon and The Martian, utilizing Play-To-Earn and Move-To-Earn mechanisms that allow players to earn tokens through skilled gameplay and active participation.'
  // },
  // {
  //   title: 'Chainnode',
  //   live: '',
  //   label: 'Chainnode',
  //   btn: [{ name: 'Social' }],
  //   content:
  //     'Low-latency blockchain nodes for Web3 developers. Archival Ethereum, Optimism, Polygon, Arbitrum, BSC, Gnosis, Base. WebSocket, HTTP JSON RPC debug trace ...'
  // }
])

const crmForm = reactive({
  loading: false,
  data: []
})

async function getListData() { 
  try {
    crmForm.loading = true
    const params = {
      limit: 500,
      offse:0
    }
    const res = await getCRMFormList(params)
    crmForm.data = res?.data ?? []
  } catch {
    console.error
  } finally {
    crmForm.loading = false
  }
}

onMounted(() => {
  getListData()
})
</script>

<style scoped lang="less">
.card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  min-height: 2rem;
  margin: 1.2rem 0 1.5rem;
  margin: 0.6rem 0 1.5rem;
  color: var(--color-light);
  &-title {
  }
  &-item {
    position: relative;
    height: 100%;
    border-radius: 0.16rem;
    padding: 0.16rem;
    &-logo {
      &-img{
        display: block;
        width: 0.64rem;
        height: 0.64rem;
        border-radius: 2rem;
        @media screen and (max-width: 768px) {
          width: 42px;
          height: 42px;
        }
      }
    }
    &-date {
      position: relative;
      padding-left: 0.2rem;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        width: 0.12rem;
        height: 0.12rem;
        margin-top: -0.06rem;
        background-color: var(--color-primary);
        border-radius: 0.12rem;
      }
    }
    &-btn {
      .btn {
        padding: 0.05rem 0.16rem;
        background: #343a40;
        border: 0;
      }
    }
  }
  &-categories{
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
    :deep(&-tabs) {
      position: relative;
      width: 100%;
      @media screen and (max-width: 768px) {
        margin: 0 0 0.3rem 0;
      }
      .el-tabs__header{
        width: calc(100% - 0.4rem);
        margin: 0;
      }
      .el-tabs__nav-wrap{
        .el-tabs__nav{
          .el-tabs__item{
            height: auto;
            padding: 0.05rem 0.16rem;
            margin: 0 0.16rem 0 0;
            border: 0.02rem solid #9B9B9B;
            border-radius: 1rem;
            color: #9B9B9B;
            transition: all 0.2s;
            @media screen and (max-width: 768px) {
              padding: 0.1rem 0.24rem;
            }
            &.is-active, &:hover{
              border-color: var(--color-primary);
              color: var(--color-light);
              // box-shadow: 0 3px 13px  var(--color-primary);
            }
          }
        }
      }
      .el-tabs__nav-wrap:after, .el-tabs__active-bar{
        display: none;
      }
    }
  }
  &-input{
    :deep(.el-input) {
      min-width: 320px;
      max-width: 3.8rem;
      margin: 0;
      .el-input__wrapper{
        background-color: var(--color-dark-black) !important;
        font-family: inherit;
        font-size: inherit;
        border-radius: 1rem;
        .el-input__inner{
          color: var(--color-light-opacity);
        }
        .el-input__icon{
          font-size: 18px;
        }
        svg{
          color: var(--color-light-opacity) !important;
        }
      }
    }
  }
}
</style>
