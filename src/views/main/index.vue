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
        <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="e in ethereumData" :key="e">
          <img :src="e.img" />
        </el-col>
      </el-row>
    </div>

    <div class="unlock-area">
      <div class="lang-max">
        <div class="tit font-50 weight-6 text-center">Unlock The Next Level of Ethereum with Swan Orchestrator</div>
        <div class="font-27  text-center">The most advanced blockchain scaling & computing technology</div>
        <el-row class="unlock-cont row-bg" :gutter="48" justify="center">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="u in unlockData" :key="u">
            <div class="content">
              <div class="image">
                <img :src="u.img" :class="u.class" />
              </div>
              <p v-if="u.desc" class="font-30 weight-6">{{u.desc}}</p>
              <p v-else class="font-22 weight-4">{{u.subscribe}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="unlock-area">
      <div class="lang-max">
        <div class="tit font-50 weight-6 text-center">See The Differences You Can Make With Swan Chain</div>

      </div>
    </div>

    <div class="dapps-area">
      <div class="lang-max">
        <el-row justify="space-between">
          <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
            <div class="font-16 text-center">
              <h1 class="font-65 font-bold">Empower Your dApps with Swan Chain</h1>
              <h3 class="font-22 weight-4 d">Dream, code and launch dApps on Swan Chain, the layer 2 blockchain for effortlessly building and scaling your dApps to infinity. Ditch development roadblocks, crush fees, and unleash your app's true potential.</h3>
              <div class="el flex-row">
                <a class="font-16 font-bold">Start Building</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="blockchain lang-max">
      <div class="subtit font-50 font-bold text-center">{{$t('dashboard.person_title')}}</div>
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="b in fundData" :key="b">
          <img :src="b.img" />
        </el-col>
      </el-row>
    </div>

    <div class="any-updates">
      <div class="bg">
        <img :src="anyImage" alt="">
      </div>
      <div class="any-banner lang-max">
        <el-row justify="space-between">
          <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
            <div class="font-16">
              <h1 class="font-46 font-bold">Don't Miss Any Updates</h1>
              <h3 class="font-20 weight-4 d">Sign up for our newsletter to get alpha, key insights, and killer resources.</h3>
              <el-input v-model="searchInput" class="w-50 m-2" placeholder="Enter your email address" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem, ElInput } from 'element-plus'
import CarouselContainer from '@/components/CarouselContainer.vue'
export default defineComponent({
  components: {
    CarouselContainer,
    ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem, ElInput
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
    const ethereumData = ref([
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/ethereum/ethereum-12.png`)
      },
    ])
    const unlockData = ref([
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-01.png`),
        desc: 'Transaction',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-02.png`),
        desc: 'Provider',
        class: 'big'
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-03.png`),
        desc: 'Task',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-04.png`),
        desc: 'Task',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-05.png`),
        subscribe: 'Addressing and resolving claims or disputes from clients.',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-06.png`),
        subscribe: 'Penalizing providers for non-compliance or malpractice.',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-07.png`),
        subscribe: 'Assigning and updating reputation scores for providers based on their performance and reliability',
        class: ''
      },
      {
        img: require(`@/assets/images/dashboard/unlock/unlock-08.png`),
        subscribe: 'Handling collateral requirements for providers as part of the task fulfllment and slashing system.',
        class: 'small'
      }
    ])
    const searchInput = ref('')
    const anyImage = require('@/assets/images/dashboard/background-image03.png')

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      fundData,
      ethereumData,
      unlockData,
      searchInput,
      anyImage
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  padding: 0 0 103px;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  border-bottom: 2px solid @border-color;
  .banner {
    position: relative;
    padding: 195px 0 140px;
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
        line-height: 1.4;
        @media screen and (max-width: 1260px) {
          max-width: 1140px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        h1 {
          width: 90%;
          margin: auto;
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
    margin: 120px auto 90px;
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
  :deep(.unlock-area) {
    position: relative;
    padding: 60px 0 130px;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 7px;
      height: 2px;
      background-color: #254388;
    }
    &::after {
      position: absolute;
      content: "";
      left: 50%;
      bottom: 0;
      width: 16px;
      height: 16px;
      margin-left: -8px;
      background-color: @theme-color;
    }
    .tit {
      width: 70%;
      margin: 0 auto 10px;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
      @media screen and (max-width: 600px) {
        width: 95%;
      }
    }
    .unlock-cont {
      margin: 100px auto 0;
      .el-col {
        margin: 29px 0;
        .content {
          height: calc(100% - 100px);
          padding: 38px 34px 60px;
          background-color: #ecf0f9;
          border: 1px solid @theme-color;
          border-radius: 15px;
          color: #000;
          line-height: 1.2;
          .image {
            height: 180px;
            img {
              height: 84px;
              &.small {
                height: 70px;
              }
              &.big {
                height: 125px;
              }
            }
          }
        }
      }
    }
  }
  :deep(.dapps-area) {
    padding: 130px 0 165px;
    background: url(../../assets/images/about/background-image05.png),
      url(../../assets/images/about/background-image04.png),
      url(../../assets/images/dashboard/background-image04.png);
    background-size: 100%, 100%, 548px;
    background-position: left top, left bottom, right center;
    background-repeat: no-repeat, no-repeat, no-repeat;
    h1 {
      padding: 65px 100px 10px;
      background: url(../../assets/images/dashboard/background-image05.png) left
        0 no-repeat;
      background-size: 70px;
    }
    .el {
      margin: 45px auto 0;
      .el-button,
      a {
        padding: 16px 32px;
        margin: auto;
        background: @theme-color;
        border: 2px solid @theme-color;
        border-radius: 1rem;
        outline: none;
        color: @white-color;
        letter-spacing: 0;
        box-shadow: 0 12px 32px -12px rgba(12, 22, 44, 0.32);
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
        text-decoration: none;
        &::before {
          display: none;
        }
        &:hover {
          background-color: transparent;
          color: @theme-color;
          border-color: @theme-color;
        }
      }
      .tips {
        color: @theme-color;
        line-height: 1.2;
        word-break: break-word;
      }
    }
  }
  :deep(.any-updates) {
    position: relative;
    padding: 86px 0;
    .bg {
      position: absolute;
      left: 65px;
      top: 0;
      bottom: 0;
      z-index: 1;
      img {
        height: 100%;
      }
    }
    .any-banner {
      background: @theme-color;
      border-radius: 30px;
      .el-row {
        padding: 70px 0 80px;
        margin: 0 155px;
        background: url(../../assets/images/dashboard/background-image02.png)
          right center no-repeat;
        background-size: 245px;
        z-index: 9;
        .d {
          padding: 20px 0 30px;
        }
        .el-input {
          width: 45%;
          min-width: 300px;
          font-size: inherit;
          .el-input__wrapper {
            height: auto;
            background-color: @white-color;
            font-size: inherit;
            box-shadow: none;
            border: 1px solid @white-color;
            border-radius: 100px;
            .el-input__inner {
              height: auto;
              padding: 4px 55px 4px 6px;
              background: url(../../assets/images/dashboard/icon-right.png)
                calc(100% - 30px) center no-repeat;
              background-size: 15px;
              font-size: inherit;
              color: #b0b0b0;
            }
          }
        }
      }
    }
  }
}
</style>
