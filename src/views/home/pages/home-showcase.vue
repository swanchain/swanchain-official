<template>
  <div class="card page-body mt-48">
    <div class="card-title linear-title font-24 font-bold text-center">Showcase</div>
    <div class="home-header-list mt-32 plr-56">
      <xy-swiper-showcase :list="caseList" :item-width="windowSize === EWindowSize.SM ?  '32%' : windowSize === EWindowSize.XS ? '80%' : '25%'"></xy-swiper-showcase>
    </div>
  </div>
</template>

<script setup lang="ts">
import XySwiperShowcase from '@/base-ui/xy-swiper-showcase.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'

interface ShowcaseDataRow {
  title: string;
  icon: string;
  btn: Array<{ name: string }>;
  link: string;
  content: string;
}

const caseList = ref<Array<ShowcaseDataRow>>([]);

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASEAPI_CRM + 'crm_showcase/list'); 
    const data = await response.json();

    caseList.value = data.data.map((item: any) => ({
      title: item.title,
      icon: item.url_background,
      btn: [{ name: item.showcase_category }],
      link: item.link,
      content: item.detail,
    }));
  } catch (error) {
    console.error('Failed to fetch showcases:', error);
  }
});
</script>

<style scoped lang="less">
.card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  color: var(--color-light);
  &-item {
    position: relative;
    height: 100%;
    background-image: linear-gradient(
      180deg, 
      var(--color-background-image-top), 
      var(--color-background-image-bottom)
    );
    border-radius: 0.16rem;
    overflow: hidden;
    &-header{
      position: relative;
      &-title{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
      }
      &-logo{
        position: absolute;
        left: 50%;
        right: 0;
        bottom: 0.2rem;
        height: 0.24rem;
        transform: translateX(-50%);
        z-index: 3;
      }
    }
    &-body{
      padding: 0.24rem;
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
          padding: 0.03rem 0.13rem;
          background: #25262B;
          border: 0;
          border-radius: 4px;
        }
      }
      &-try{
        padding: 0.12rem 0.22rem;
        border: 0.02rem solid var(--color-primary);
        border-radius: 1rem;
        &:hover{
          svg {
            transform: translateX(3px);
          }
        }
        svg{
          width: 0.2rem;
          height: 0.2rem;
          transition: all 0.2s;
          @media screen and (max-width: 768px) {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
}
</style>
