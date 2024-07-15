<template>
  <div class="card w-100 mt-64 mb-64">
    <div class="card-title font-48 font-bold text-center">Showcase</div>
    <el-row :gutter="32">
      <template v-for="(item, index) in caseList" :key="index">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" class="mt-32">
          <div class="card-item">
            <div class="card-item-header flex flex-jc-center flex-ai-center">
              <img :src="item.icon" class="w-100" />
              <img :src="lagrangeLogo" class="card-item-header-logo" />
              <div class="card-item-header-title font-28 font-bold flex flex-jc-center flex-ai-center">{{ item.title }}</div>
            </div>
            <div class="card-item-body">
              <div class="card-item-body-btn flex">
                <template v-for="b in item.btn" :key="b">
                  <div class="font-16 btn mr-10 mb-8">{{b.name}}</div>
                </template>
              </div>
              <div class="card-item-body-content font-20 line-3 mt-8 mb-16">{{ item.content }}</div>
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
        </el-col>
      </template>
    </el-row>
    <div class="home-header-list mt-80">
      <xy-swiper-showcase :list="caseList" :item-width="windowSize === EWindowSize.XS ? '80%' : '25%'" item-margin="0 0.32rem"></xy-swiper-showcase>
    </div>
  </div>
</template>

<script setup lang="ts">
import XySwiperShowcase from '@/base-ui/xy-swiper-showcase.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import lagrangeShowcase01 from '@/assets/img/index/showcase-stableDiffusion.jpg'
import lagrangeShowcase02 from '@/assets/img/index/showcase-musicGen.jpg'
import lagrangeShowcase03 from '@/assets/img/index/showcase-textToSpeech.jpg'
import lagrangeShowcase04 from '@/assets/img/index/showcase-comfyui.jpg'
import lagrangeLogo from '@/assets/img/index/lagrange-logo.png'
import { openPage } from '@/hooks/router'

const caseList = ref([
  {
    title: 'Stable Diffusion',
    icon: lagrangeShowcase01,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Stable-Diffusion-Base-LoRA/app',
    content:
      'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'MusicGen',
    icon: lagrangeShowcase02,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/MusicGen/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Text-to-Speech',
    icon: lagrangeShowcase03,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Text-to-Speech/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'ComfyUI',
    icon: lagrangeShowcase04,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/ComfyUI/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },


  {
    title: 'Jupyter',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Jupyter-Labs/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Terminal',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Terminal/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Json-view',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Json-view/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },



  {
    title: 'Tetris',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/tetris/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Mario',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Mario/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Pac-Man',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/pac-man/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },


  {
    title: 'Chainnode-RPC',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Blockchain' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/chainnode-rpc/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  },
  {
    title: 'Uniswap',
    icon: lagrangeShowcase04,
    btn: [{ name: 'Blockchain' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/uniswap/app',
    content:
    'The model will generate a short music extract based on the description you provided...'
  }
])
</script>

<style scoped lang="less">
.card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  color: var(--color-light);
  &-title {
    background-image: linear-gradient(45deg, #FFFFFF, #A6A8AD, #E4E6ED, #C3C6D0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
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
