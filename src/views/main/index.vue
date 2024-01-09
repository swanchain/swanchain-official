<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text font-16">
          <h1 class="font-55 font-black text-center">{{$t('main.banner.title')}}</h1>
          <p class="font-22 text-center" v-html="$t('main.banner.describe')"></p>
          <div class="flex-row center">
            <div class="learn-more font-20" @click="system.$commonFun.contactUsMethod()">Build on Swan Chain</div>
            <div class="font-16 flex-row center">
              EXPLORE DEVELOPER DOCS
              <div class="width-icon small">
                <svg t="1704790600303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13332">
                  <path d="M42.666667 512C42.666667 251.733333 251.733333 42.666667 512 42.666667s469.333333 209.066667 469.333333 469.333333-209.066667 469.333333-469.333333 469.333333S42.666667 772.266667 42.666667 512z m85.333333 0c0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384-384 170.666667-384 384z m268.8 209.066667c-17.066667-17.066667-17.066667-42.666667 0-59.733334l149.333333-149.333333-149.333333-149.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733334 17.066667-17.066667 42.666667-17.066667 59.733333 0l179.2 179.2c17.066667 17.066667 17.066667 42.666667 0 59.733334l-179.2 179.2c-8.533333 8.533333-17.066667 12.8-29.866666 12.8-12.8 0-21.333333-4.266667-29.866667-12.8z"
                    p-id="13333"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blockchain lang-max">
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="b in fundData" :key="b">
          <img :src="b.img" />
        </el-col>
      </el-row>
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
    const fundData = ref([
      {
        img: require(`@/assets/images/about/funded/funded-01.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-02.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-03.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-04.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-05.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-06.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-07.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-08.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-09.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-10.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-11.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-12.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-13.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-14.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-15.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-16.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-17.png`)
      },
      {
        img: require(`@/assets/images/about/funded/funded-18.png`)
      },
    ])

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      fundData
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
  .banner {
    position: relative;
    padding: 255px 0 140px;
    background: url(../../assets/images/bg-main.png) center no-repeat;
    background-size: 100%;
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
        max-width: 940px;
        margin: auto;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 1140px;
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
          margin: 0 40px 0 0;
          background-color: @theme-color;
          font-size: inherit;
          border: 1px solid @theme-color;
          border-radius: 100px;
          cursor: pointer;
          color: @white-color;
          line-height: 1;
          text-transform: uppercase;
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
        .width-icon {
          svg {
            margin: 0 0 0 10px;
            fill: @white-color;
          }
        }
      }
    }
  }
  :deep(.blockchain) {
    margin: 120px auto 60px;
    .block-cont {
      .el-col {
        margin: 10px 0;
        @media screen and (max-width: 767px) {
          margin: 20px 0;
        }
        img {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
