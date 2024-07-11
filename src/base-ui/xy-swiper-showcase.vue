<template>
   <!-- :navigation="true" -->
  <swiper :modules="modules" slides-per-view="auto" :looped-slides="list.length + 2" :autoplay="autoplay" loop>
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide" :style="{ width: itemWidth, height: itemHeight }">
        <div class="card-item swiper-slide-item text-center">
          <div class="card-item-header flex flex-jc-center flex-ai-center">
            <img :src="item.icon" class="w-100" />
            <div class="card-item-header-logo pt-20 pb-20 flex flex-ai-center flex-jc-center">
              <img :src="lagrangeLogo" />
            </div>
            <div class="card-item-header-title font-28 font-bold pt-16 flex flex-jc-center flex-ai-center">{{ item.title }}</div>
          </div>
          <div class="card-item-body">
            <div class="card-item-body-btn flex">
              <template v-for="b in item.btn" :key="b">
                <div class="font-16 btn mr-10 mb-8">{{b.name}}</div>
              </template>
            </div>
            <div class="card-item-body-content font-20 line-3 mt-8 mb-16 text-left">{{ item.content }}</div>
            <div class="flex flex-ai-center flex-js-left">
              <div @click="openPage(item.link)" class="card-item-body-try font-16 font-bold2 flex flex-ai-center flex-js-center pointer">
                Try It Now

                <svg class="ml-10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_853_15967)">
                    <path d="M0.625 10H19.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.125 3.75L19.375 10L13.125 16.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_853_15967">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </template>
  </swiper>
</template>
<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper' // 引入库
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css' // 引入样式文件 注意5和6版本的样式文件不一致
import type { IOption } from 'types/common'
import { openPage } from '@/hooks/router'
import lagrangeLogo from '@/assets/img/index/lagrange-logo.png'

defineProps<{
  list: IOption[]
  itemWidth?: string
  itemHeight?: string
  itemMargin?: string
  itemLeft?: string
}>()
const emits = defineEmits(['click-item'])
const modules = ref([Autoplay, Navigation, Pagination])
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
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  // margin-left: -1.565rem;
  .swiper-wrapper {
    display: flex;
    align-items: stretch;
    transition-timing-function: linear !important;
  }
  .swiper-slide{
    .card-item {
      position: relative;
      height: 100%;
      margin: 0 0.16rem;
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
          z-index: 2;
          text-shadow: 0 0.04rem 0.08rem #000;
        }
        &-logo{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
            180deg, 
            transparent, 
            var(--color-dark)
          );
          z-index: 3;
          img{
            height: 0.24rem;
          }
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
        &-content{
          min-height: 0.72rem;
        }
      }
    }
  }
}
</style>
