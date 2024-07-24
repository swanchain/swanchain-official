<template>
  <div class="page-body w-100 pt-32 pb-64">
    <div class="font-24 font-bold text-center mb-32">JOIN SWAN'S GLOBAL COMMUNITY</div>
    <div class="join-container flex flex-ai-center flex-jc-center flex-wrap">
      <template v-for="list in mediaList" :key="list">
        <div class="mb-32 ml-16 mr-16 font-18 flex flex-ai-center flex-jc-center pointer" @click="openPage(list.link)">
          <div class="mr-8">
            <xy-icon :name="list.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '24px' : '0.33rem'" :height="windowSize === EWindowSize.XS ? '24px' : '0.33rem'"></xy-icon>
          </div>
          {{ list.label }}
        </div>
      </template>
    </div>

    <el-row :gutter="16" class="help-container">
      <el-col :xs="24" :sm="13" :md="16" class="flex flex-ai-end">
        <div class="mb-32"> 
          <div class="title font-24 font-bold">Need Further Help?</div>
          <div class="font-14 mt-16 mb-16">Can't find the proper solution? Don't hesitate to contact us.</div>
          <div class="flex flex-ai-center flex-js-left">
            <div @click="openPage('https://discord.com/invite/swanchain')" class="help-container-try font-14 font-bold2 flex flex-ai-center flex-js-center pointer">
              Contact Us

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
      </el-col>
      <el-col :xs="24" :sm="11" :md="8">
        <img :src="helpImages" class="w-100"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import XyIcon from '@/base-ui/xy-icon.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { EIcon } from '@/constant/icon'
import { ELINK } from '@/constant/envLink';
import { openPage } from '@/hooks/router';
import helpImages from '@/assets/img/aboutUs/help-images.png'

const mediaList = ref([
  {
    label: EIcon.JoinDiscord,
    link: ELINK.DISCORD
  },
  {
    label: EIcon.JoinTwitter,
    link: ELINK.TWITTER
  },
  {
    label: EIcon.JoinTelegram,
    link: ELINK.T
  },
  {
    label: EIcon.JoinGithub,
    link: ELINK.GITHUB
  },
  {
    label: EIcon.JoinLinkedIn,
    link: ELINK.IN
  },
  {
    label: EIcon.JoinMedium,
    link: ELINK.MEDIUM
  }
])
</script>

<style lang="less" scoped>
.join-container {
  svg {
    width: 0.32rem;
    height: 0.32rem;
    @media screen and (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
}
.help-container {
  padding: 0.24rem 0.64rem;
  background: url(../../../assets/img/aboutUs/help-bg.png) no-repeat bottom center;
  background-size: 100%;
  border-radius: 0.16rem;
  img {
    display: block;
    max-width: 500px;
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
}
</style>
