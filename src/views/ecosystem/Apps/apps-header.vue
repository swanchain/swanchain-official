<template>
  <div class="home-header flex-column flex-ai-center">
    <div class="home-header-title font-54 font-bold plr-32">{{ title }}</div>
    <div class="flex flex-ai-center mt-80">
      <div class="home-header-btn btn font-16 flex flex-ai-center" @click="formDialog=true">
        Add Your App
        <svg viewBox="0 0 8 14" class="ml-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="home-header-list mt-80">
      <xy-swiper-app :list="recommendList" :item-width="windowSize === EWindowSize.XS ? '80%' : '3.13rem'" item-margin="0 0.16rem"></xy-swiper-app>
    </div>
  </div>

  <apps-form :formDialog="formDialog" @hardClose="hardClose"></apps-form>
</template>

<script setup lang="ts">
import appsForm from './apps-form.vue'
import XySwiperApp from '@/base-ui/xy-swiper-app.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'

const title = ref('The Gateway to Modular ZK Dapp in One Place')
const recommendList = ref([
  {
    title: 'Lagrange Dao',
    label: 'Lagrange',
    value: '/index',
    btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }]
  },
  {
    title: 'Multi-Chain Storage',
    label: 'MCS',
    value: '/index',
    btn: [{ name: 'Social' }],
  },
  // {
  //   title: 'Meta Ark',
  //   label: 'MetaArk',
  //   value: '/index',
  //   btn: [{ name: 'DeFi/Payments' }, { name: 'Social' }],
  // },
  // {
  //   title: 'Chainnode',
  //   label: 'Chainnode',
  //   value: '/index',
  //   btn: [{ name: 'Social' }],
  // }
])
const formDialog = ref(false)

function hardClose(dialog: boolean) {
  formDialog.value = dialog
}
</script>

<style lang="less" scoped>
.home-header {
  width: 100%;
  padding: 2.5rem 0 0.25rem 0;
  background: var(--color-dark) url(../../../assets/img/apps/banner-index.jpg) no-repeat top center;
  background-size: auto 4.75rem;
  position: relative;
  overflow: hidden;
  &-title {
    color: var(--color-light);
    text-align: center;
  }
  &-btn {
    padding: 0.12rem 0.24rem;
    letter-spacing: 0.01rem;
    svg {
      width: 6px;
    }
  }
  &-tips {
    margin-top: 0.16rem;
    color: var(--color-light);
  }
  &-list {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .home-header {
    padding-top: 3rem;
  }
}
</style>
