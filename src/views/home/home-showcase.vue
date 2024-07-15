<template>
  <div class="card plr-32 mt-64 mb-64">
    <div class="card-title linear-title font-48 font-bold text-center">Showcase</div>
    <div class="home-header-list mt-32">
      <xy-swiper-showcase :list="caseList" :item-width="windowSize === EWindowSize.SM ?  '33.33%' : windowSize === EWindowSize.XS ? '80%' : '25%'" item-margin="0 0.32rem"></xy-swiper-showcase>
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
import lagrangeShowcase05 from '@/assets/img/index/showcase-Jupyter.jpg'
import lagrangeShowcase06 from '@/assets/img/index/showcase-Terminal.jpg'
import lagrangeShowcase07 from '@/assets/img/index/showcase-Json-view.jpg'
import lagrangeShowcase08 from '@/assets/img/index/showcase-Tetris.jpg'
import lagrangeShowcase09 from '@/assets/img/index/showcase-Mario.jpg'
import lagrangeShowcase10 from '@/assets/img/index/showcase-Pac-Man.jpg'
import lagrangeShowcase11 from '@/assets/img/index/showcase-Chainnode-RPC.jpg'
import lagrangeShowcase12 from '@/assets/img/index/showcase-Uniswap.jpg'

const caseList = ref([
  {
    title: 'Stable Diffusion',
    icon: lagrangeShowcase01,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Stable-Diffusion-Base-LoRA/app',
    content:
      'Stable Diffusion：a picture generator where you can use text, image or other information to create your own unique picture.'
  },
  {
    title: 'MusicGen',
    icon: lagrangeShowcase02,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/MusicGen/app',
    content:
      'The model will generate a up to 30 seconds music extract based on the description you provided.'
  },
  {
    title: 'Text-to-Speech',
    icon: lagrangeShowcase03,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Text-to-Speech/app',
    content:
      'Generate speech based on text and you can change the configurations to make the speech unique.'
  },
  {
    title: 'ComfyUI',
    icon: lagrangeShowcase04,
    btn: [{ name: 'AI' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/ComfyUI/app',
    content:
      'Use various figures and descriptions to generate images.'
  },


  {
    title: 'Jupyter',
    icon: lagrangeShowcase05,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Jupyter-Labs/app',
    content:
      'Jupyter is a web-based interactive computing platform that integrates code, equations, text, visualizations, and more.'
  },
  {
    title: 'Terminal',
    icon: lagrangeShowcase06,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Terminal/app',
    content:
      'A virtual machine terminal with standard Ubuntu OS.'
  },
  {
    title: 'Json-view',
    icon: lagrangeShowcase07,
    btn: [{ name: 'Tools' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Json-view/app',
    content:
      'A viewer where you can view every component of a JSON string.'
  },



  {
    title: 'Tetris',
    icon: lagrangeShowcase08,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/tetris/app',
    content:
      'Classic tetris game, have fun.'
  },
  {
    title: 'Mario',
    icon: lagrangeShowcase09,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Mario/app',
    content:
      'Infinite Mario bros is an action platform game.'
  },
  {
    title: 'Pac-Man',
    icon: lagrangeShowcase10,
    btn: [{ name: 'Game' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/pac-man/app',
    content:
      'Pac-Man is an arcade game developed by Namco.'
  },


  {
    title: 'Chainnode-RPC',
    icon: lagrangeShowcase11,
    btn: [{ name: 'Blockchain' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/chainnode-rpc/app',
    content:
      "Lightning-fast downloads of the up-to-date snapshots to empower nodes' deployment for multiple chains seamless perpetual storage of archive snapshots."
  },
  {
    title: 'Uniswap',
    icon: lagrangeShowcase12,
    btn: [{ name: 'Blockchain' }],
    link: 'https://lagrangedao.org/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/uniswap/app',
    content:
      'Traders can perform trustless swaps of Ethereum tokens on Uniswap.'
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
