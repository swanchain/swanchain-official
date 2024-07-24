<template>
  <div class="footer-support">
    <div class="lax-landing">
      <div class="footer-support-logo flex">
        <img :src="logo" />
      </div>
      <el-row justify="space-between" class="footer-support-list">
        <template v-for="item in columns" :key="item.title">
          <el-col :span="6" :xs="12">
            <div class="title font-14 font-bold">{{ item.title }}</div>
            <template v-for="(it, i) in item.list" :key="i">
              <div v-if="it.value" class="label font-14" @click="toPage(router, it.value)">{{ it.label }}</div>
              <div v-else class="label font-14" @click="openPage(it.link)">{{ it.label }}</div>
            </template>
          </el-col>
        </template>
        <el-col :span="6" :xs="24">
          <template v-for="item in rows" :key="item.title">
            <div class="title font-14 font-bold">{{ item.title }}</div>
            <div class="flex flex-ai-center">
              <template v-for="(it, i) in item.list" :key="i">
                <xy-icon v-if="item.type === 'icon'" :name="it.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '22px' : '0.32rem'" :height="windowSize === EWindowSize.XS ? '22px' : '0.32rem'" :margin="windowSize === EWindowSize.XS ? '0.32rem 0.25rem 0.64rem 0px' : '0.08rem 0.12rem 0.32rem 0'"
                  radius="4rem" pointer @click="openPage(it.value)"></xy-icon>
                <div v-else class="desc font-14" v-html="it.label"></div>
              </template>
            </div>
          </template>
        </el-col>
      </el-row>
      <div class="copyright font-16">
        {{ copyright }}
        <span class="font-bold2 ml-10 mr-10">·</span>
        <span @click="toPage(router, '/privacy-policy')">Privacy Policy</span>
        <span class="font-bold2 ml-10 mr-10">·</span>
        <span @click="toPage(router, '/terms')">Term of Use</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import XyIcon from '@/base-ui/xy-icon.vue'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { EIcon } from '@/constant/icon'
import { ELINK } from '@/constant/envLink'
import { toPage, openPage } from '@/hooks/router'

const router = useRouter()

const columns = ref([
  {
    title: 'Explore',
    list: [
      { label: 'Lagrange', value: '', link: ELINK.LAGRANGE },
      { label: 'Multi-Chain Storage', value: '', link: ELINK.MCS  },
      { label: 'Meta Ark', value: '', link: ELINK.METAARK },
      { label: 'Chainnode', value: '', link: ELINK.CHAINNODE }
    ]
  },
  {
    title: 'Build',
    list: [
      { label: 'Block Explorer', value: '', link:  ELINK.MAINNETEXPLORER },
      { label: 'Documentation', value: '', link:  'https://docs.swanchain.io/' },
      { label: 'Blog', value:  '', link: 'https://swanchain.medium.com/' }
    ]
  },
  {
    title: 'About',
    list: [
      { label: 'About Us', value: '/about-us' },
      { label: 'Privacy Policy', value: '/privacy-policy' },
      { label: 'Term Of Use', value: '/terms' },
      { label: 'Careers', value: '', link: 'https://www.linkedin.com/company/swancloud/jobs/' },
      { label: 'Contact Us', value: '', link: 'https://discord.com/invite/swanchain' },
      { label: 'Brand Kit', value: '', link:  'https://drive.google.com/drive/folders/1gGno5tZknzdaVfKsGO7pkXXn5OWcTXyt?usp=drive_link' }
    ]
  }
])
const rows = ref([
  {
    title: 'Follow',
    type: 'icon',
    list: [
      { label: EIcon.DISCORD, value: ELINK.DISCORD },
      { label: EIcon.TWITTER, value: ELINK.TWITTER },
      { label: EIcon.T, value: ELINK.T },
      { label: EIcon.GITHUB, value: ELINK.GITHUB },
      { label: EIcon.IN, value: ELINK.IN },
      { label: EIcon.MEDIUM, value: ELINK.MEDIUM }
    ]
  }
])
const copyright = ref('© 2023 SWAN. ALL RIGHTS RESERVED.')

function link(url: string) {}
</script>

<style scoped lang="less">
.footer-support {
  background: var(--color-dark);
  background: linear-gradient(180deg, var(--color-background-image-top), var(--color-background-image-bottom));
  &-logo {
    padding: 0.42rem 1.28rem;
    @media screen and (max-width: 768px) {
      padding: 0.7rem 0.6rem 0.35rem;
    }
    img {
      height: 0.39rem;
      min-height: 30px;
    }
  }
  &-list {
    padding: 0 0 1.12rem 0;
    border-bottom: 0.01rem solid #343a40;
    width: calc(100% - 2.56rem);
    margin: auto;
    @media screen and (max-width: 768px) {
      width: calc(100% - 1.2rem);
      padding: 0 0 0.2rem 0;
    }
    .el-col {
      @media screen and (max-width: 767px) {
        margin: 0.4rem 0;
      }
    }
  }
  .title {
    color: var(--color-light);
    padding-bottom: 0.08rem;
  }
  .label {
    color: var(--color-info);
    margin-top: 0.1rem;
    cursor: pointer;
    width: fit-content;
    @media screen and (max-width: 768px) {
      margin-top: 0.2rem;
    }
    &:hover {
      color: var(--color-light);
    }
  }
  .desc {
    margin-top: 0.08rem;
    color: var(--color-info);
    @media screen and (max-width: 767px) {
      margin-top: 0.16rem;
    }
  }
  .copyright {
    text-align: center;
    padding: 0.49rem 1.28rem 0.56rem 1.28rem;
    color: var(--color-info);
    @media screen and (max-width: 768px) {
      padding: 0.49rem 0.6rem 0.56rem 0.6rem;
    }
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
