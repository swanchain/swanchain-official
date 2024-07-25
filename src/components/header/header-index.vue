<template>
  <div :class="`header ${abs ? 'abs' : ''}`">
    <el-alert center class="alert-body" v-if="route.name === 'index' || route.name === 'privacy-policy' || route.name === 'terms' || route.name === 'aboutUs'" :light="isLight">
      <template #title>
        <span @click="openPage('https://docs.swanchain.io/swan-chain/swan-chain-mainnet')" class="font-14">
          Swan Chain Mainnet is LIVE! Join now to earn SWAN tokens!
        </span>
      </template>
    </el-alert>
    <!-- ${!isMargin ? 'header-body-m': ''} -->
    <div :class="`header-body lax-landing flex flex-ai-center flex-jc-between`">
      <header-logo :light="false"></header-logo>
      <!-- <div class="flex flex-ai-center"> -->
        <header-menus :light="false"></header-menus>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from './header-logo.vue'
import HeaderMenus from './header-menus.vue'
import { openPage } from '@/hooks/router'

const ROUTE_WHITE = []
const isLight = ref(false)
const abs = computed(() => isLight.value)
const route = useRoute()
if (ROUTE_WHITE.includes(route.path)) {
  isLight.value = true
}

const ROUTE_MARGIN = ['/', '/ecosystem/Apps', '/about-us', '/privacy-policy', '/terms']
const isMargin = ref(false)
if (ROUTE_MARGIN.includes(route.path)) {
  isMargin.value = true
}

const router = useRouter()
router.beforeEach(to => {
  isLight.value = !!ROUTE_WHITE.includes(to.path)
  isMargin.value = !!ROUTE_MARGIN.includes(to.path)
})

// const bgColor = ref('')
// onMounted(() => {
//   const main = document.getElementsByTagName('main')?.[0]
//   main?.addEventListener('scroll', function () {
//     bgColor.value = `RGBA(35, 42, 146, ${main.scrollTop / 1000})`
//   })
// })
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  z-index: 999;
  top: 0;
  &-body{
  padding: 0.26rem 1.28rem;
  @media screen and (max-width: 768px) {
    padding: 0.26rem 0.6rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0.26rem 0 0.26rem 0.6rem;
  }
  &.header-body-m{
    padding: 0.26rem 0.64rem;
  }
  // @media screen and (max-width: 767px) {
  //   background-color: #fff;
  // }
  }
:deep(.alert-body) {
  padding: 8px 0;
  background-color: var(--color-primary);
  color: var(--color-light);
  border-radius: 0;
  line-height: 1;
  @media screen and (max-width: 992px) {
    padding: 6px;
  }
  @media screen and (max-width: 414px) {
    padding: 6px 30px 6px 10px;
  }
  .el-alert__content {
    display: flex;
    span{
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .el-alert__title {
    line-height: 1;
  }
  .el-icon {
    top: 50%;
    margin-top: -7px;
    width: 14px;
    height: 14px;
    color: inherit;
    @media screen and (min-width: 1920px) {
      margin-top: -8px;
      width: 16px;
      height: 16px;
    }
    @media screen and (min-width: 2160px) {
      margin-top: -9px;
      width: 18px;
      height: 18px;
    }
    @media screen and (max-width: 992px) {
      margin-top: -8px;
      width: 16px;
      height: 16px;
    }
    @media screen and (max-width: 600px) {
      margin-top: -9px;
      width: 18px;
      height: 18px;
    }
    svg {
      width: inherit;
      height: inherit;
    }
  }
}
}
.header.light {
  background-color: var(--color-light);
}
.header.abs {
  position: absolute;
}
</style>
