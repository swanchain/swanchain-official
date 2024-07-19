<template>
  <div class="eco-card page-body pt-48 pb-48 w-100">
    <div class="card-title linear-title font-24 font-bold text-center">
      Explore the <span class="color-primary">Swan Chain Ecosystem</span>
    </div>
    <div class="flex flex-ai-center flex-jc-center center mt-8">
      <div class="learn-more font-14 pointer flex flex-ai-center flex-jc-center" @click="toPage(router, '/ecosystem/Apps')">
        Explorer dApps
        <svg class="ml-8" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 4L11.5 8L7.5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <el-row :gutter="32">
      <template v-for="(item, index) in list" :key="index">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" class="mt-32 pointer" @click="openPage(item.link)">
          <div class="eco-card-item back-linear font-16">
            <div class="eco-card-item-logo flex flex-jc-between flex-ai-start">
              <div class="flex flex-ai-center">
                <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" :height="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" radius="4rem" pointer></xy-icon>
              </div>
              <!-- <div class="eco-card-item-date font-16" v-if="item.live">{{ item.live }}</div> -->
            </div>
            <div class="eco-card-item-title font-16 font-bold mt-16 mb-8">{{ item.title }}</div>
            <div class="eco-card-item-content font-14 line-8 mt-10">{{ item.content }}</div>
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
import { openPage, toPage } from '@/hooks/router';
import router from '@/router';
import { ELINK } from '@/constant/envLink';

const list = ref([
  {
    title: 'Lagrange Dao',
    live: 'Live on Pacific',
    link: ELINK.LAGRANGE,
    label: 'Lagrange',
    btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }],
    content:
      'It provides data sharing & analytic spaces for Decentralized science(DeSci). With Lagrange Spaces, researchers are able to use public infrastructure for storing...'
  },
  {
    title: 'Multi-Chain Storage',
    live: 'Live on Pacific',
    link: ELINK.MCS,
    label: 'MCS',
    btn: [{ name: 'Social' }],
    content:
      'Multi-Chain Storage, or MCS, developed by the Swan Network, is a new kind of storage service that works with different blockchain networks. It transcends traditional cloud storage by using smart...'
  },
  {
    title: 'Meta Ark',
    live: 'Live on Pacific',
    link: ELINK.METAARK,
    label: 'MetaArk',
    btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }],
    content:
      'Ark: Meta Survival is a semi-open world metaverse inspired by The Moon and The Martian, utilizing Play-To-Earn and Move-To-Earn mechanisms that allow players to earn tokens through skilled gameplay and active participation.'
  },
  {
    title: 'Chainnode',
    live: '',
    link: ELINK.CHAINNODE,
    label: 'Chainnode',
    btn: [{ name: 'Social' }],
    content:
      'Low-latency blockchain nodes for Web3 developers. Archival Ethereum, Optimism, Polygon, Arbitrum, BSC, Gnosis, Base. WebSocket, HTTP JSON RPC debug trace ...'
  }
])

const crmForm = reactive({
  loading: false,
  data: []
})

async function getListData() { 
  try {
    crmForm.loading = true
    const res = await getCRMFormList()
    crmForm.data = res?.data ?? []
  } catch {
    console.error
  } finally {
    crmForm.loading = false
  }
}

onMounted(() => {
  // getListData()
})
</script>

<style scoped lang="less">
.eco-card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  min-height: 2rem;
  color: var(--color-light);
  &-item {
    position: relative;
    height: 100%;
    border-radius: 0.16rem;
    padding: 0.16rem;
    &-logo {
      &-img{
        display: block;
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 2rem;
        @media screen and (max-width: 768px) {
          width: 44px;
          height: 44px;
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
        padding: 0.08rem 0.16rem;
        background: #343a40;
        border: 0;
      }
    }
  }
  &-categories{
    :deep(&-tabs) {
      .el-tabs__header{
        margin: 0;
      }
      .el-tabs__nav-wrap{
        .el-tabs__nav{
          .el-tabs__item{
            padding: 0.14rem 0.2rem;
            margin: 0 0.16rem 15px 0;
            border: 0.02rem solid #9B9B9B;
            border-radius: 1rem;
            color: #9B9B9B;
            transition: all 0.2s;
            &.is-active, &:hover{
              border-color: var(--color-primary);
              color: var(--color-light);
              box-shadow: 0 3px 13px  var(--color-primary);
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
      width: 33%;
      min-width: 320px;
      margin: auto;
      .el-input__wrapper{
        background-color: var(--color-dark-black) !important;
        font-family: inherit;
        font-size: inherit;
        border-radius: 1rem;
        .el-input__inner{
          text-align: center;
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
