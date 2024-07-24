<template>
  <div class="banner">
    <div class="content lang-max flex-row">
      <div class="text font-16">
        <div class="font-46 font-bold text-center flex flex-ai-center flex-jc-center mb-110 plr-32">
          Build The Web3 Future with Swan
        </div>
        <div class="flex flex-wrap flex-jc-center banner-text">
          <div class="font-14 mb-16">Swan has a global team of dedicated, world-class talents who are committed to building the best Web3 infrastructure.</div>
          <div class="font-14 mb-10">We are constantly looking for talents to join us to make Web3 better. Check below for current openings</div>
          <div class="flex flex-ai-center flex-js-left">
            <div @click="openPage('https://www.linkedin.com/company/swancloud/jobs/')" class="banner-text-try font-14 font-bold2 flex flex-ai-center flex-js-center pointer">
              Job Opening

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
    </div>
  </div>
</template>

<script setup lang="ts">
import { openPage } from '@/hooks/router';

</script>

<style lang="less" scoped>
.home-header {
  width: 100%;
  padding: 0;
  position: relative;
  z-index: 3;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
  img{
    width: 100%;
  }
}
.banner {
  position: relative;
  z-index: 3;
  padding: 2.72rem 0 0;
  background: url(../../../assets/img/aboutUs/aboutUs-bg.jpg) top center no-repeat;
  background-size: auto 90%;
  .content {
    .text {
      margin: auto;
      @media screen and (max-width: 1260px) {
        max-width: 1140px;
      }
      @media screen and (max-width: 600px) {
        max-width: none;
      }
      .banner-text {
        width: 40%;
        max-width: 600px;
        min-width: 420px;
        padding: 0.16rem;
        margin: auto;
        background-image: linear-gradient(
          180deg, 
          var(--color-background-image-top), 
          var(--color-background-image-bottom)
        );
        border-radius: 0.16rem;
        @media screen and (max-width: 600px) {
          min-width: 320px;
        }
        .font-18{
          line-height: 1.5;
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
    }
  }
}
</style>
