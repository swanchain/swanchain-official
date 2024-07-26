<template>
  <div class="card page-body pt-48 pb-48">
    <div class="card-title linear-title font-24 font-bold text-center">User Story</div>
    <!-- <div class="home-header-list mt-32">
      <xy-swiper-userstory :list="caseList" :item-width="windowSize === EWindowSize.SM ?  '45%' : windowSize === EWindowSize.XS ? '75%' : '30%'"></xy-swiper-userstory>
    </div> -->
    <el-row :gutter="32" justify="center">
      <template v-for="(item, index) in caseList" :key="index">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" class="mt-32 pointer">
          <div class="card-item back-linear swiper-slide-item text-center">
            <div class="card-item-header flex flex-jc-center flex-ai-center">
              <img :src="item.icon" class="w-100" />
              <div class="card-item-header-body">
                <div class="card-item-header-body-project font-16 flex flex-ai-center flex-jc-left">
                  <img :src="item.avatarIcon" class="mr-10" /> {{item.title}}
                </div>
                <div class="card-item-body-content font-14 mt-8 mb-8 text-left">{{ item.projectContent }}</div>
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
              <div class="card-item-introduce-content font-14 line-8 mt-16 text-left">{{ item.content }}</div>
            </div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import XySwiperUserstory from '@/base-ui/xy-swiper-userstory.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import userStoryImage from '@/assets/img/index/user-story.jpg'
import userStoryImage01 from '@/assets/img/index/user-story-header-image01.jpg'
import userStoryImage02 from '@/assets/img/index/user-story-header-image02.jpg'
import userStoryImage03 from '@/assets/img/index/user-story-header-image03.jpg'
import userStoryAvatar from '@/assets/img/index/project-name.png'
import userStoryAvatar01 from '@/assets/img/index/project-name01.png'
import userStoryAvatar02 from '@/assets/img/index/project-name02.png'
import userStoryAvatar03 from '@/assets/img/index/project-name03.png'
import peopleIcon from '@/assets/img/index/people-img.jpg'
import peopleIcon01 from '@/assets/img/index/people-img01.jpg'
import peopleIcon02 from '@/assets/img/index/people-img03.jpg'
import peopleIcon03 from '@/assets/img/index/people-img02.png'
import { openPage } from '@/hooks/router'

const caseList = ref([
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
    title: 'Nebula Block',
    icon: userStoryImage02,
    avatarIcon: userStoryAvatar02,
    peopleIcon: peopleIcon02,
    peopleName: 'Jarod',
    peopleDesc: 'Head of Operations',
    link: '',
    projectContent:
      "Offering comprehensive hosting solutions to make computing resources accessible to everyone.",
    content:
      "Swan Chain has transformed our business model by enabling us to effectively monetize our GPU resources, creating new revenue streams. This partnership maximizes the utility of our infrastructure while addressing the increasing demand for distributed computing power."
  },
  // {
  //   title: 'Oort',
  //   icon: userStoryImage03,
  //   avatarIcon: userStoryAvatar03,
  //   peopleIcon: peopleIcon03,
  //   peopleName: '',
  //   peopleDesc: 'Founder & CEO of OORT',
  //   link: '',
  //   projectContent:
  //     "Decentralized, verifiable cloud computing platform for AI applications.",
  //   content:
  //     "Swan Chain has significantly enhanced OORT's capabilities. By leveraging Swan Chain's computing resources, we've expanded our decentralized AI platform's capacity and reach. This partnership has significantly driven our competency in AI model training and increased value of our providers."
  // },
  // {
  //   title: 'Project name',
  //   icon: userStoryImage,
  //   avatarIcon: userStoryAvatar,
  //   peopleIcon: peopleIcon,
  //   peopleName: 'Hamzah Khan Polygon',
  //   peopleDesc: 'Chief executive officer',
  //   link: '',
  //   projectContent:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   content:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // }
])
</script>

<style scoped lang="less">
.card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  color: var(--color-light);
  .el-row{
    .el-col{
      .card-item {
        position: relative;
        height: 100%;
        margin: 0;
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
            bottom: 0;
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
              line-height: 1.1;
            }
          }
        }
      }
    }
  }
}
</style>
