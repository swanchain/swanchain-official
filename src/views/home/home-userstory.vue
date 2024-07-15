<template>
  <div class="card plr-32 mt-64 mb-64">
    <div class="card-title linear-title font-48 font-bold text-center">User Story</div>
    <div class="home-header-list mt-32">
      <xy-swiper-userstory :list="caseList" :item-width="windowSize === EWindowSize.XS ? '80%' : '33.33%'" item-margin="0 0.32rem"></xy-swiper-userstory>
    </div>
  </div>
</template>

<script setup lang="ts">
import XySwiperUserstory from '@/base-ui/xy-swiper-userstory.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import userStoryImage from '@/assets/img/index/user-story.jpg'
import userStoryAvatar from '@/assets/img/index/project-name.png'

const caseList = ref([
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    link: '',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
])
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
