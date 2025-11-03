<template>
  <div class="card page-body mt-48">
    <div class="card-title linear-title font-24 font-bold text-center">Showcase</div>
    <div class="home-header-list mt-32 plr-56">
      <xy-swiper-showcase :list="caseList" :item-width="windowSize === EWindowSize.SM ?  '32%' : windowSize === EWindowSize.XS ? '80%' : '25%'"></xy-swiper-showcase>
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
import lagrangeShowcase13 from '@/assets/img/index/showcase-Llama3-8B-LLM-Chat.jpg'
import lagrangeShowcase14 from '@/assets/img/index/2048.jpg'

interface ShowcaseDataRow {
  title: string;
  icon: string;
  btn: Array<{ name: string }>;
  link: string;
  content: string;
}

const caseList = ref<Array<ShowcaseDataRow>>([]);

onMounted(async () => {
  try {
    const data = [
  {
    "detail": "Meta’s Llama 3, the next iteration of the open-access Llama family.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Llama3-8B-LLM-Chat/app",
    "showcase_category": "AI",
    "title": "Llama3-8B-LLM-Chat",
    "url_background": lagrangeShowcase13,
    "url_logo": lagrangeShowcase13
  },
  {
    "detail": "Stable Diffusion：a picture generator where you can use text, image or other information to create your own unique picture.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Stable-Diffusion-Base-LoRA/app",
    "showcase_category": "AI",
    "title": "Stable Diffusion",
    "url_background": lagrangeShowcase01,
    "url_logo": lagrangeShowcase01
  },
  {
    "detail": "The model will generate a up to 30 seconds music extract based on the description you provided.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/MusicGen/app",
    "showcase_category": "AI",
    "title": "MusicGen",
    "url_background": lagrangeShowcase02,
    "url_logo": lagrangeShowcase02
  },
  {
    "detail": "Generate speech based on text and you can change the configurations to make the speech unique.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Text-to-Speech/app",
    "showcase_category": "AI",
    "title": "Text-to-Speech",
    "url_background": lagrangeShowcase03,
    "url_logo": lagrangeShowcase03
  },
  {
    "detail": "Use various figures and descriptions to generate images.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/ComfyUI/app",
    "showcase_category": "AI",
    "title": "ComfyUI",
    "url_background": lagrangeShowcase04,
    "url_logo": lagrangeShowcase04
  },
  {
    "detail": "Jupyter is a web-based interactive computing platform that integrates code, equations, text, visualizations, and more.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Jupyter-Labs/app",
    "showcase_category": "Tools",
    "title": "Jupyter",
    "url_background": lagrangeShowcase05,
    "url_logo": lagrangeShowcase05
  },
  {
    "detail": "A virtual machine terminal with standard Ubuntu OS.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Terminal/app",
    "showcase_category": "Tools",
    "title": "Terminal",
    "url_background": lagrangeShowcase06,
    "url_logo": lagrangeShowcase06
  },
  {
    "detail": "A viewer where you can view every component of a JSON string.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Json-view/app",
    "showcase_category": "Tools",
    "title": "Json-view",
    "url_background": lagrangeShowcase07,
    "url_logo": lagrangeShowcase07
  },
  {
    "detail": "Classic tetris game, have fun.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/tetris/app",
    "showcase_category": "Game",
    "title": "Tetris",
    "url_background": lagrangeShowcase08,
    "url_logo": lagrangeShowcase08
  },
  {
    "detail": "Infinite Mario bros is an action platform game.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/Mario/app",
    "showcase_category": "Game",
    "title": "Mario",
    "url_background": lagrangeShowcase09,
    "url_logo": lagrangeShowcase09
  },
  {
    "detail": "Pac-Man is an arcade game developed by Namco.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/pac-man/app",
    "showcase_category": "Game",
    "title": "Pac-Man",
    "url_background": lagrangeShowcase10,
    "url_logo": lagrangeShowcase10
  },
  {
    "detail": "Lightning-fast downloads of the up-to-date snapshots to empower nodes' deployment for multiple chains seamless perpetual storage of archive snapshots.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/chainnode-rpc/app",
    "showcase_category": "Blockchain",
    "title": "Chainnode-RPC",
    "url_background": lagrangeShowcase11,
    "url_logo": lagrangeShowcase11
  },
  {
    "detail": "Traders can perform trustless swaps of Ethereum tokens on Uniswap.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/uniswap/app",
    "showcase_category": "Blockchain",
    "title": "Uniswap",
    "url_background": lagrangeShowcase12,
    "url_logo": lagrangeShowcase12
  },
  {
    "detail": "Slide numbered tiles and aim for the elusive 2048 in this addictive challenge.",
    "link": "https://lagrange.computer/spaces/0x231fe9090f4d45413474BDE53a1a0A3Bd5C0ef03/2048/app",
    "showcase_category": "Game",
    "title": "2048",
    "url_background": lagrangeShowcase14,
    "url_logo": lagrangeShowcase14
  }
]

    caseList.value = data.map((item: any) => ({
      title: item.title,
      icon: item.url_background,
      btn: [{ name: item.showcase_category }],
      link: item.link,
      content: item.detail,
    }));
  } catch (error) {
    console.error('Failed to fetch showcases:', error);
  }
});
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
