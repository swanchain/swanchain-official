<template>
   <!-- :autoplay="autoplay" :looped-slides="list.length + 2" loop -->
  <swiper ref="swiperShowcase" class="swiper-showcase" :modules="modules" :navigation="{
      nextEl: '.swiper-showcase-next',
      prevEl: '.swiper-showcase-prev'
    }" :pagination="{ clickable: true }" slides-per-view="auto" :autoplay="autoplay">
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide" :style="{ width: itemWidth, height: itemHeight }">
        <div class="card-item back-linear swiper-slide-item text-center">
          <div class="card-item-header flex flex-jc-center flex-ai-center">
            <img :src="item.icon" class="w-100 card-item-header-background" />
            <div class="card-item-header-logo pt-20 pb-20 flex flex-ai-center flex-jc-center">
              <img :src="lagrangeLogo" />
            </div>
            <div class="card-item-header-title font-16 font-bold pt-10 flex flex-jc-center flex-ai-center">{{ item.title }}</div>
          </div>
          <div class="card-item-body back-linear">
            <div class="card-item-body-btn flex">
              <template v-for="b in item.btn" :key="b">
                <div class="font-16 btn mr-10 mb-8">{{b.name}}</div>
              </template>
            </div>
            <div class="card-item-body-content font-14 line-3 mt-8 mb-8 text-left">{{ item.content }}</div>
            <div class="flex flex-ai-center flex-js-left">
              <div @click="openPage(item.link)" class="card-item-body-try font-14 font-bold2 flex flex-ai-center flex-js-center pointer">
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

    <!-- <div class="swiper-button-prev swiper-showcase-prev"></div>
    <div class="swiper-button-next swiper-showcase-next"></div> -->
  </swiper>
</template>
<script setup lang="ts">
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css' 
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
  delay: 2000, 
  stopOnLastSlide: false,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
  autoplayDisableOnInteraction: false,
  autoplayStopOnLast: false
})
function handleClickItem(item: IOption) {
  emits('click-item', item)
}
SwiperCore.use([Navigation, Pagination]);
</script>
<style lang="scss">
.swiper-showcase {
  width: 100%;
  padding-bottom: calc(0.64rem + 8px);
  // padding-left: 1.28rem;
  // @media screen and (max-width: 768px) {
  //   padding-left: 0.6rem;
  // }
  .swiper-wrapper {
    display: flex;
    align-items: stretch;
    transition-timing-function: linear !important;
  }
  .swiper-slide {
    .card-item {
      position: relative;
      height: 100%;
      margin: 0 0.16rem;
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
            @media screen and (max-width: 768px) {
              height: 20px;
            }
            @media screen and (max-width: 600px) {
              height: 24px;
            }
          }
        }
        &-background{
          height: 1.95rem;
          @media screen and (max-width: 768px) {
            height: 2.5rem;
          }
          @media screen and (max-width: 600px) {
            height: 4.5rem;
          }
        }
      }
      &-body{
        padding: 0.16rem;
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
            padding: 0 0.13rem;
            background: #25262B;
            border: 0;
            border-radius: 4px;
          }
        }
        &-try{
          padding: 0.07rem 0.16rem;
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
          min-height: 0.66rem;
          line-height: 1.57;
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
  .shelter {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1.28rem;
    height: 100%;
    background: #000;
    z-index: 98;
    @media screen and (max-width: 768px) {
      width: 0.6rem;
    }
  }
  .swiper-pagination{
    display: flex;
    justify-content: center;
    bottom: 0.32rem;
    .swiper-pagination-bullet{
      width: 8px;
      height: 8px;
      margin: 0 0.08rem;
      background-color: var(--color-light-opacity-25);
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background-color: var(--color-light);
      }
    }
  }
}
</style>
