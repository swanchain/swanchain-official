<template>
  <el-row :gutter="32" class="w-100 guidance-container">
    <template v-for="item in guidanceList" :key="item.title">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mt-32">
        <div class="grid-content w-100 small-spacing font-16">
          <div class="title pb-16">{{ item.title }}</div>
          <ul class="flex flex-ai-center flex-jc-left">
            <li class="text-left">
              <div class="list flex flex-ai-center flex-wrap" v-if="item.list">
                <template v-for="it in item.list" :key="it.name">
                  <div class="mr-8 mt-16 flex flex-ai-center pointer" @click="openPage(it.link)">
                    {{ it.name }}

                    <svg class="ml-8" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6668 10.0002V15.8335C16.6668 16.2936 16.2936 16.6668 15.8335 16.6668H4.16683C3.70676 16.6668 3.3335 16.2936 3.3335 15.8335V4.16683C3.3335 3.70676 3.70676 3.3335 4.16683 3.3335H10.0002" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                      <path d="M16.667 8.3335V3.3335H11.667" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                      <path d="M16.6667 3.3335L7.5 12.5002" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                  </div>
                </template>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
import { openPage } from '@/hooks/router';

const guidanceList = ref([
  {
    title: 'Centralized:',
    list: [
      {
        name: 'Coinbase',
        link: ''
      },
      {
        name: 'Kraken',
        link: ''
      },
      {
        name: 'Upbit',
        link: ''
      },
      {
        name: 'Kucoin',
        link: ''
      }
    ]
  },
  {
    title: 'Decentralized:',
    list: [
      {
        name: 'Osmosis',
        link: ''
      },
      {
        name: 'Rango Exchanger',
        link: ''
      }
    ]
  }
])
</script>

<style scoped lang="less">
.guidance-container{
  :deep(.el-col){
    margin-bottom: 0.16rem;
    .grid-content{
      padding: 0;
      .title {
        color: var(--color-light);
        border-bottom: 1px solid var(--color-light);
      }
      ul {
        padding: 0;
        list-style: none;
        li {
          line-height: 1.1;
          .list {
            div {
              padding: 0.1rem 0.2rem;
              color: var(--color-light);
              border: 0.02rem solid var(--color-light);
              border-radius: 1rem;
              &:hover{
                text-decoration: underline;
              }
              svg {
                width: 0.2rem;
                height: 0.2rem;
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
  }
}
</style>