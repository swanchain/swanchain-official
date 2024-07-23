<template>
  <div class="card pt-48 pb-48">
    <div class="card-title linear-title font-24 font-bold text-center">User Story</div>
    <div class="home-header-list mt-32">
      <xy-swiper-userstory :list="caseList" :item-width="windowSize === EWindowSize.SM ?  '45%' : windowSize === EWindowSize.XS ? '75%' : '30%'"></xy-swiper-userstory>
    </div>
  </div>
</template>

<script setup lang="ts">
import XySwiperUserstory from '@/base-ui/xy-swiper-userstory.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import userStoryImage from '@/assets/img/index/user-story.jpg'
import userStoryAvatar from '@/assets/img/index/project-name.png'
import userStoryImage01 from '@/assets/img/index/user-story-header-image01.jpg'
import userStoryAvatar01 from '@/assets/img/index/project-name01.png'
import peopleIcon from '@/assets/img/index/people-img.jpg'
import peopleIcon01 from '@/assets/img/index/people-img01.jpg'

const caseList = ref([
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    peopleIcon: peopleIcon,
    peopleName: 'Hamzah Khan Polygon',
    peopleDesc: 'Chief executive officer',
    link: '',
    projectContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Apus Network',
    icon: userStoryImage01,
    avatarIcon: userStoryAvatar01,
    peopleIcon: peopleIcon01,
    peopleName: 'Jason',
    peopleDesc: 'Core Contributor of Apus Network',
    link: 'https://www.apus.network/',
    projectContent:
      "Apus Network is building a decentralized, trustless GPU network for efficient AI computation on AO.",
    content:
      "By integrating Swan Chain's SDK, Apus Network leverages Swan Chain's computational resources, enhancing our ability to provide efficient GPU power for AI inference. This integration has been crucial in building our scalable, trustless GPU network on AO."
  },
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    peopleIcon: peopleIcon,
    peopleName: 'Hamzah Khan Polygon',
    peopleDesc: 'Chief executive officer',
    link: '',
    projectContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    peopleIcon: peopleIcon,
    peopleName: 'Hamzah Khan Polygon',
    peopleDesc: 'Chief executive officer',
    link: '',
    projectContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },{
    title: 'Apus Network',
    icon: userStoryImage01,
    avatarIcon: userStoryAvatar01,
    peopleIcon: peopleIcon01,
    peopleName: 'Jason',
    peopleDesc: 'Core Contributor of Apus Network',
    link: 'https://www.apus.network/',
    projectContent:
      "Apus Network is building a decentralized, trustless GPU network for efficient AI computation on AO.",
    content:
      "By integrating Swan Chain's SDK, Apus Network leverages Swan Chain's computational resources, enhancing our ability to provide efficient GPU power for AI inference. This integration has been crucial in building our scalable, trustless GPU network on AO."
  },
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    peopleIcon: peopleIcon,
    peopleName: 'Hamzah Khan Polygon',
    peopleDesc: 'Chief executive officer',
    link: '',
    projectContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: 'Project name',
    icon: userStoryImage,
    avatarIcon: userStoryAvatar,
    peopleIcon: peopleIcon,
    peopleName: 'Hamzah Khan Polygon',
    peopleDesc: 'Chief executive officer',
    link: '',
    projectContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
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
