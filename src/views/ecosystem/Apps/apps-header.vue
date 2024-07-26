<template>
  <div class="page-body lax-landing">
    <div class="home-header flex flex-ai-center flex-jc-between">
      <div>
        <div class="home-header-title font-30 font-bold">{{ title }}</div>
        <div class="font-20 color-subtitle">Discover and explore the applications built on Swan Chain.</div>
      </div>
      <div class="flex flex-ai-center mt-16">
        <div class="home-header-btn btn font-16 flex flex-ai-center" @click="formDialog=true">
          Add Your App
          <svg viewBox="0 0 8 14" class="ml-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <!-- <div class="home-header-list mt-80">
        <xy-swiper-app :list="crmForm.data" :item-width="windowSize === EWindowSize.XS ? '50%' : '20%'"></xy-swiper-app>
      </div> -->
    </div>
  </div>

  <apps-form :formDialog="formDialog" @hardClose="hardClose"></apps-form>
</template>

<script setup lang="ts">
import appsForm from './apps-form.vue'
import XySwiperApp from '@/base-ui/xy-swiper-app.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { getCRMFormList } from '@/api/apps';

const title = ref('Swan Chain Apps')
const recommendList = ref([
  {
    title: 'Lagrange Dao',
    label: 'Lagrange',
    value: '/index',
    btn: [{ name: 'Dao' }, { name: 'AI & ML' }]
  },
  {
    title: 'Multi-Chain Storage',
    label: 'MCS',
    value: '/index',
    btn: [{ name: 'AI & ML' }],
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
  // getListData()
})
</script>

<style lang="less" scoped>
.home-header {
  width: 100%;
  padding: 0.32rem 0;
  // background: var(--color-dark) url(../../../assets/img/apps/banner-index.jpg) no-repeat top center;
  // background-size: 100%;
  position: relative;
  border-bottom: 1px solid #5c5f66;
  overflow: hidden;
  &-title {
    color: var(--color-light);
  }
  &-btn {
    padding: 0.06rem 0.24rem;
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
