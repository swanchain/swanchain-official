<template>
  <!-- :slidesOffsetBefore="windowSize === EWindowSize.XS ? 0 : -145"  -->
  <swiper class="swiper-app" :modules="modules" :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }" slides-per-view="auto" :looped-slides="list.length + 2" :autoplay="autoplay" loop>
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide" :style="{ width: itemWidth }">
        <div class="swiper-slide-item back-linear text-center">
          <div class="swiper-slide-item-logo flex flex-jc-center flex-ai-start mb-16">
            <div class="flex flex-ai-center">
              <img :src="item.logo" class="card-item-logo-img" alt="logo" />
              <!-- <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '46px' : '0.8rem'" :height="windowSize === EWindowSize.XS ? '46px' : '0.8rem'" pointer></xy-icon> -->
            </div>
          </div>
          <div class="swiper-slide-item-btn flex flex-jc-center">
            <!-- <template v-for="b in item.btn" :key="b">
              <div class="font-16 btn mr-10 mb-10">{{b.name}}</div>
            </template> -->
            <div class="font-16 btn mr-10 mb-10">{{item.tag || '-'}}</div>
          </div>
          <div class="swiper-slide-item-content font-20 font-bold line-8 mt-8">{{ item.name }}</div>
        </div>
      </swiper-slide>
    </template>
    
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </swiper>
</template>
<script setup lang="ts">
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import type { IOption } from 'types/common'
import { EIcon } from '@/constant/icon'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import XyIcon from '@/base-ui/xy-icon.vue'

defineProps<{
  list: IOption[]
  itemWidth?: string
  itemHeight?: string
  itemMargin?: string
  itemLeft?: string
}>()
const emits = defineEmits(['click-item'])
const modules = ref([Autoplay])
const autoplay = reactive({
  delay: 5500, 
  stopOnLastSlide: false,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
  autoplayDisableOnInteraction: false,
  autoplayStopOnLast: false
})
function handleClickItem(item: IOption) {
  emits('click-item', item)
}
SwiperCore.use([Navigation]);
</script>
<style lang="scss">
.swiper-app {
  width: 100%;
  // margin-left: -1.565rem;
  .swiper-wrapper {
    display: flex;
    align-items: stretch;
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    &-item {
      position: relative;
      height: 100%;
      margin: 0 0 0 0.32rem;
      border-radius: 0.16rem;
      padding: 0.32rem 0.16rem;
      color: var(--color-light);
      border-radius: 0.16rem;
      user-select: none;
      &-logo {
        .card-item-logo-img{
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
  }
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    width: auto;
    height: 100%;
    padding: 0 0.15rem;
    margin: 0;
    background: linear-gradient(-90deg, var(--color-dark), transparent);
    z-index: 99;
    &:after{
      font-size: var(--font-44);
      color: var(--color-light);
    }
    &.swiper-button-next{
      right: 0;
    }
    &.swiper-button-prev{
      left: 0;
      background: linear-gradient(-90deg, transparent, var(--color-dark));
    }
  }
}
</style>
