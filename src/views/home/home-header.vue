<template>
  <div class="banner">
    <div class="content lang-max flex-row">
      <div class="text font-16">
        <div class="font-74 text-center flex flex-ai-center flex-jc-center mb-30 plr-32">
          Full Toolset
          <p class="font-bold text-center ml-20">AI Blockchain</p>
        </div>
        <div class="flex flex-ai-center flex-jc-center center">
          <div class="learn-more font-14 uppercase mb-16 mr-16" @click="openPage('https://docs.swanchain.io/development-resource/quickstarts')">Build on Swan Chain</div>
          <div class="learn-more font-14 uppercase mb-16" @click="openPage('https://docs.swanchain.io/')">EXPLORE DEVELOPER DOCS</div>
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
  padding: 2.74rem 0 2.1rem;
  background: url(../../assets/img/index/bg-main.jpg) center no-repeat;
  background-size: auto 100%;
  .content {
    .text {
      margin: auto;
      @media screen and (max-width: 1260px) {
        max-width: 1140px;
      }
      @media screen and (max-width: 600px) {
        max-width: none;
      }
      .learn-more {
        display: inline-block;
        padding: 0.15rem 0.24rem;
        background-color: var(--color-primary);
        font-size: inherit;
        border: 1px solid var(--color-primary);
        border-radius: 100px;
        cursor: pointer;
        color: var(--color-light);
        line-height: 1;
        transition: all 0.2s;
        &:hover {
          background-color: var(--color-light);
          color: var(--color-primary);
        }
      }
      .explore {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .width-icon {
        svg {
          margin: 0 0 0 10px;
          fill: var(--color-light);
        }
      }
    }
  }
}
</style>
