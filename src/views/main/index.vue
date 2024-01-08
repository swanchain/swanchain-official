<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-79 font-bold">{{$t('main.banner.title')}}</h1>
          <p class="font-23" v-html="$t('main.banner.describe')"></p>
          <div class="learn-more font-20" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="clients">
      <div class="lang-max">
        <div class="tit font-50 font-bold">{{$t("main.clients.title-1")}}</div>
        <CarouselContainer :slide-list="clientsData" :gutterValue="10"></CarouselContainer>
        <div class="tit font-50 font-bold">{{$t("main.clients.title-2")}}</div>
        <CarouselContainer :slide-list="partnersData" :gutterValue="10"></CarouselContainer>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem } from 'element-plus'
import CarouselContainer from '@/components/CarouselContainer.vue'
export default defineComponent({
  components: {
    CarouselContainer,
    ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const clientsData = ref([
      {
        img: require(`@/assets/images/dashboard/clients/clients-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-12.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-13.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-14.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-15.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-16.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-17.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-18.png`)
      },
    ])
    const partnersData = ref([
      {
        img: require(`@/assets/images/dashboard/partners/partners-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-12.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-13.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-14.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-15.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-16.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-17.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-18.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-19.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-20.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-21.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-22.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-23.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-24.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-25.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-26.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-27.png`)
      },
    ])

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      clientsData,
      partnersData
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .banner {
    position: relative;
    padding: 255px 0 140px;
    background: #eff5fc url(../../assets/images/bg-main.jpg) center bottom
      no-repeat;
    background-size: cover;
    @media screen and (min-width: 2160px) {
      padding: 195px 0 125px;
    }
    @media screen and (max-width: 1440px) {
      padding: 260px 0 145px;
    }
    @media screen and (max-width: 768px) {
      padding: 360px 0 185px;
    }
    .content {
      .text {
        max-width: 680px;
        margin: 0 36px;
        color: @black-color;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 880px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        p {
          margin: 25px 0 35px;
          @media screen and (max-width: 600px) {
            margin: 50px 0 70px;
          }
        }
        .learn-more {
          display: inline-block;
          padding: 16px 40px;
          margin: 0;
          background-color: @theme-color;
          border: 1px solid @theme-color;
          border-radius: 8px;
          cursor: pointer;
          color: @white-color;
          line-height: 1;
          transition: all 0.2s;
          @media screen and (max-width: 600px) {
            padding: 32px 80px;
            border-radius: 16px;
          }
          &:hover {
            background-color: transparent;
            color: @theme-color;
          }
        }
      }
    }
  }
  :deep(.clients) {
    padding: 15px 0 155px;
    .tit {
      margin: 110px 0 70px;
      text-align: center;
    }
  }
}
</style>
