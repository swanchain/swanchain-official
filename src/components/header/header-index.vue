<template>
  <div :class="`header ${abs ? 'abs' : ''}`">
    <el-alert center class="alert-body" v-if="route.name === 'index' || route.name === 'privacy-policy' || route.name === 'terms' || route.name === 'aboutUs'" :light="isLight">
      <template #title>
        <swiper
          class="news-swiper"
          :modules="modules"
          direction="vertical"
          :autoplay="autoplay"
          :loop="true"
          :slides-per-view="1"
          :space-between="10"
          :freeMode="true"
          :mousewheel="true"
        >
          <swiper-slide v-for="(news, index) in newsList" :key="index" class="news-item" @click="openPage(news.url)">
            {{ news.name }}
          </swiper-slide>
        </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/mousewheel'

import HeaderLogo from './header-logo.vue'
import HeaderMenus from './header-menus.vue'
import { openPage } from '@/hooks/router'
import { getRetrieveSwanNews } from '@/api/apps'

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

const newsList = ref<{ name: string; url: string }[]>([])

onMounted(async () => {
  try {
    const response = await getRetrieveSwanNews()
    if (response?.data?.length) {
      newsList.value = response.data.map(item => ({
        name: item.name,
        url: item.url
      }))
    }
  } catch (error) {
    console.error('Failed to fetch news:', error)
  }
})

const modules = ref([Autoplay, FreeMode, Mousewheel])
const autoplay = reactive({
  delay: 3000,
  disableOnInteraction: false,
  pauseOnMouseEnter: false
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  z-index: 999;
  top: 0;
  &-body{
  padding: 0.26rem 1.28rem;
  @media screen and (max-width: 992px) {
    padding: 0.26rem 0.9rem;
  }
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
.news-swiper {
  height: 18px;
  overflow: hidden;
}

:deep(.news-item) {
  cursor: pointer;
  text-align: center;
  color: white;
  &:hover{
    text-decoration: underline;}
}
</style>
