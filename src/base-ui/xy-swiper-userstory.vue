<template>
  <swiper :modules="modules" :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }" slides-per-view="auto" :looped-slides="list.length + 2" :autoplay="autoplay" loop>
    <template v-for="(item, index) in list" :key="index">
      <swiper-slide class="swiper-slide" :style="{ width: itemWidth, height: itemHeight }">
        <div class="card-item back-linear swiper-slide-item text-center">
          <div class="card-item-header flex flex-jc-center flex-ai-center">
            <img :src="item.icon" class="w-100 card-item-header-background" />
            <div class="card-item-header-body">
              <div class="card-item-header-body-project font-16 flex flex-ai-center flex-jc-left">
                <img :src="item.avatarIcon" class="mr-10" /> {{item.title}}
              </div>
              <div class="card-item-body-content font-14 line-2 mt-8 mb-8 text-left">{{ item.projectContent }}</div>
              <!-- <div class="flex flex-ai-center flex-js-left">
                <div @click="openPage(item.link)" :class="`card-item-header-body-try ${item.link?'':'is-disabled'} font-14 font-bold2 flex flex-ai-center flex-js-center pointer`">
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
              </div> -->
            </div>
          </div>
          <div class="card-item-introduce back-linear">
            <div class="card-item-introduce-user font-24 flex flex-ai-center">
              <img :src="item.peopleIcon" class="mr-16 img-left" /> 
              <div class="card-item-introduce-name text-left">
                <div class="font-16 font-bold">{{ item.peopleName }}</div>
                <div class="font-14 desc">{{ item.peopleDesc }}</div>
              </div>
            </div>
            <div class="card-item-introduce-content font-14 line-5 mt-16 text-left">{{ item.content }}</div>
          </div>
        </div>
      </swiper-slide>
    </template>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- <div class="shelter"></div> -->
  </swiper>
</template>
<script setup lang="ts">
import SwiperCore, { Autoplay, Navigation } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css' 
import type { IOption } from 'types/common'
import { openPage } from '@/hooks/router'

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
<style lang="scss" scoped>
.swiper {
  width: 100%;
  // padding-left: 1.28rem;
  // @media screen and (max-width: 768px) {
  //   padding-left: 0.6rem;
  // }
  .swiper-wrapper {
    display: flex;
    align-items: stretch;
    transition-timing-function: linear !important;
  }
  .swiper-slide{
    .card-item {
      position: relative;
      height: 100%;
      margin: 0 0.32rem 0 0;
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
        &-body{
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          padding: 0.16rem;
          background-image: linear-gradient(
            180deg, 
            transparent, 
            var(--color-dark)
          );
          z-index: 3;
          &-project{
            img{
              width:0.4rem;
              height:0.4rem;
              border-radius:1rem;
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
            padding: 0.07rem 0.16rem;
            border: 0.02rem solid var(--color-primary);
            border-radius: 1rem;
            &.is-disabled{
              cursor: no-drop;
              opacity: .7;
            }
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
        &-background {
          height: 2.3rem;
        }
      }
      &-introduce{
        padding: 0.16rem;
        &-content{
          min-height: 1.099rem;
        }
        &-user{
          .img-right{
            height: 0.28rem;
          }
          .img-left{
            width: 0.58rem;
            height: 0.58rem;
            border-radius: 1rem;
          }
        }
        &-name{
          .desc{
            color: var(--color-subtitle);
          }
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
}
</style>
