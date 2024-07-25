<template>
  <!-- :slidesOffsetBefore="windowSize === EWindowSize.XS ? 0 : -145"  -->
  <swiper class="swiper-tag" :modules="modules" :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }" slides-per-view="auto">
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide pointer" :style="{ width: itemWidth }">
        <div class="swiper-slide-item text-center font-16">
          {{item}}
        </div>
      </swiper-slide>
    </template>
    
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>
<script setup lang="ts">
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import type { IOption } from 'types/common'
import { EIcon } from '@/constant/icon'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import XyIcon from '@/base-ui/xy-icon.vue'
import { openPage } from '@/hooks/router'

defineProps<{
  list: IOption[]
  itemWidth?: string
  itemHeight?: string
  itemMargin?: string
  itemLeft?: string
}>()
const emits = defineEmits(['click-item'])
const modules = ref([Navigation])
function handleClickItem(item: IOption) {
  emits('click-item', item)
}
SwiperCore.use([Navigation]);
</script>
<style lang="scss">
.swiper-tag {
  width: 100%;
  padding: 0.06rem 0;
  // margin-left: -1.565rem;
  .swiper-wrapper {
    display: flex;
    align-items: stretch;
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    &-item {
      position: relative;height: auto;
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
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    width: auto;
    height: 100%;
    padding: 0 0.15rem;
    margin: 0;
    background: linear-gradient(-90deg, var(--color-dark), var(--color-dark-opacity));
    z-index: 99;
    &:after{
      font-size: var(--font-20);
      color: var(--color-light);
    }
    &.swiper-button-next{
      right: 0;
    }
    &.swiper-button-prev{
      left: 0;
      background: linear-gradient(-90deg, transparent, var(--color-dark));
    }
    &.swiper-button-disabled{
      opacity: 0;
    }
  }
}
</style>
