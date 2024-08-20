<template>
  <div class="banner page-body lax-landing flex-row">
    <div class="content">
      <div class="font-46 text capitalize">
        Swan Chain <br />
        A Full Toolset <span class="font-bold">AI Blockchain</span>
      </div>
      <div class="font-16">Swan Chain, initiated in 2021, is a full toolset AI blockchain infrastructure accelerating AI adoption. Utilizing OP Stack's Ethereum Layer 2 technology, it pioneers in merging Web3 with AI by providing comprehensive solutions across storage, computing, bandwidth, and payments.</div>
      <div class="flex flex-ai-center">
        <div class="learn-more font-14 uppercase mt-20 mr-16 flex flex-ai-center flex-jc-center" @click="openPage('https://docs.swanchain.io/development-resource/quickstarts')">
          Build on Swan Chain
          
          <svg class="ml-8" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4L11.5 8L7.5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="learn-more font-14 uppercase mt-20 flex flex-ai-center flex-jc-center" @click="openPage('https://docs.swanchain.io/')">
          EXPLORE DEVELOPER DOCS
          
          <svg class="ml-8" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4L11.5 8L7.5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="funded">
      <div class="font-24 font-bold text-center">Powered By</div>
      <div v-for="(row, rowIndex) in chunkedPoweredImagesList" :key="rowIndex" class="funded-list flex flex-ai-center flex-jc-center">
        <img 
          v-for="(item, index) in row" 
          :key="index" 
          :src="item.url" 
          class="pointer" 
          @click="openPage(item.link_url)" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openPage } from '@/hooks/router';
import { ref, onMounted } from 'vue';

interface PoweredImage {
  url: string;
  link_url: string;
}

const poweredImagesList = ref<PoweredImage[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASEAPI_PROXIMA + 'crm_powered/list'); 
    const data = await response.json();

    poweredImagesList.value = data.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});

const chunkedPoweredImagesList = computed(() => {
  const chunks = [];
  for (let i = 0; i < poweredImagesList.value.length; i += 6) {
    chunks.push(poweredImagesList.value.slice(i, i + 6));
  }
  return chunks;
});

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
  background: url(../../../assets/img/index/bg-main.jpg) center bottom no-repeat;
  background-size: 100%;
  @media screen and (max-width: 768px) {
    background-position: center;
  }
  .content {
    width: 59%;
    max-width: 700px;
    min-width: 320px;
    padding: 1.2rem 0 1.34rem;
    @media screen and (max-width: 768px) {
      padding: 1.2rem 0 0.7rem;
    }
    .learn-more{
      padding: 0.1rem 0.16rem;
    }
    .text {
      line-height: 1;
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
  .funded{
    padding: 0 0 0.36rem;
    &-list{
      @media screen and (max-width: 600px) {
        flex-wrap: wrap;
      }
      img{
        width: auto;
        height: 0.72rem;
        margin: 0.16rem;
        @media screen and (max-width: 768px) {
          height: 50px;
        }
        @media screen and (max-width: 600px) {
          height: 45px;
        }
      }
    }
  }
}
</style>
