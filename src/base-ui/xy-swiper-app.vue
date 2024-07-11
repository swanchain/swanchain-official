<template>
  <swiper :modules="modules" :slidesOffsetBefore="windowSize === EWindowSize.XS ? 0 : -145" slides-per-view="auto" :looped-slides="list.length + 2" :autoplay="autoplay" loop>
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide" :style="{ width: itemWidth, height: itemHeight, left: itemLeft, margin: itemMargin }">
        <div class="swiper-slide-item text-center">
          <div class="swiper-slide-item-logo flex flex-jc-center flex-ai-start mb-32">
            <div class="flex flex-ai-center">
              <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '46px' : '0.8rem'" :height="windowSize === EWindowSize.XS ? '46px' : '0.8rem'" pointer></xy-icon>
            </div>
          </div>
          <div class="swiper-slide-item-btn flex flex-jc-center">
            <template v-for="b in item.btn" :key="b">
              <div class="font-16 btn mr-10 mb-10">{{b.name}}</div>
            </template>
          </div>
          <div class="swiper-slide-item-content font-22 font-bold line-8 mt-32">{{ item.title }}</div>
        </div>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script setup lang="ts">
import { Autoplay } from 'swiper' // 引入库
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css' // 引入样式文件 注意5和6版本的样式文件不一致
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
  // disableOnInteraction: false,
  // autoplayDisableOnInteraction:false
  // pauseOnMouseEnter: true
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
  autoplayDisableOnInteraction: false,
  autoplayStopOnLast: false
})
function handleClickItem(item: IOption) {
  emits('click-item', item)
}
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  // margin-left: -1.565rem;
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }
  &-slide {
    width: 100%;
    margin: 0 0.16rem;
    background: linear-gradient(180deg, var(--color-background-image-top), var(--color-background-image-bottom));
    position: relative;
    user-select: none;
    // cursor: pointer;
    color: var(--color-light);
    border-radius: 0.16rem;
    &-item {
      position: relative;
      height: 100%;
      background: linear-gradient(180deg, var(--color-background-image-top), var(--color-background-image-bottom));
      border-radius: 0.16rem;
      padding: 0.48rem 0.24rem;
      &-logo {
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
  }
}
</style>
