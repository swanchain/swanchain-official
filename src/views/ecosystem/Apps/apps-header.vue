<template>
   <!-- page-body lax-landing -->
  <div class="home-header flex-column flex-ai-center">
    <div class="home-header-title font-46 font-bold plr-32">{{ title }}</div>
    <div class="font-24">Discover and explore the applications built on SWAN Chain.</div>
    <div class="flex flex-ai-center mt-16">
      <div class="home-header-btn btn font-16 flex flex-ai-center" @click="formDialog=true">
        Add Your App
        <svg viewBox="0 0 8 14" class="ml-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="home-header-list mt-80">
      <xy-swiper-app :list="crmForm.data" :item-width="windowSize === EWindowSize.XS ? '70%' : '2.53rem'" item-margin="0 0 0 0.32rem"></xy-swiper-app>
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

const title = ref('SWAN Chain Apps')
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
    const res = await getCRMFormList()
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

<style lang="less" scoped>
.home-header {
  width: 100%;
  padding: 1.5rem 0 0 0;
  background: var(--color-dark) url(../../../assets/img/apps/banner-index.jpg) no-repeat top center;
  background-size: 100%;
  position: relative;
  overflow: hidden;
  &-title {
    color: var(--color-light);
    text-align: center;
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
