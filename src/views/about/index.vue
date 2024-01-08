<template>
  <div class="landing">
    <div class="join_today">
      <div class="lang-max flex-row space-between">
        <div class="landing_content">
          <h1 class="font-65 font-black" v-html="$t('about.module_1_title')"></h1>
          <h3 class="font-22 weight-4">{{ $t('about.module_1_desc') }}</h3>
          <h3 class="font-22 weight-4">{{ $t('about.module_1_desc01') }}</h3>
          <div class="el flex-row">
            <a class="font-16 font-bold">{{ $t('about.module_1_btn') }}</a>
          </div>
        </div>
        <!-- <div class="landing_img" :style="{'background-image': 'url('+content_img+')'}"></div> -->
        <div class="landing_img">
          <img :src="content_img" alt="">
        </div>
      </div>

      <svg class="svg" viewBox="0 0 1920 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1920" y="98" transform="rotate(-180 1920 98)" fill="url(#paint0_linear_327_1129)" fill-opacity="0.5" />
        <defs>
          <linearGradient id="paint0_linear_327_1129" x1="2880" y1="98" x2="2880" y2="196" gradientUnits="userSpaceOnUse">
            <stop stop-color="#447DFF" stop-opacity="0.35" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="aboutSwan">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="15" :md="15" :lg="15" :xl="15" class="left">
          <div class="content">
            <div class="title font-50 font-bold">{{ $t('about.about_Swan_title') }}</div>
            <div class="desc font-22">
              {{ $t('about.about_Swan_desc') }}
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9" class="flex-row">
          <div class="image-style flex-row center">
            <img :src="teamImg" />
          </div>
        </el-col>
      </el-row>

      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="15" :md="15" :lg="15" :xl="15" class="left">
          <div class="content">
            <div class="title font-50 font-bold">{{ $t('about.about_meet_title') }}</div>
            <div class="desc font-22">
              {{ $t('about.about_meet_desc') }}
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9" class="flex-row right">
          <div class="image-style flex-row center">
            <img :src="bossImg" class="radius" />
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="blockchain lang-max">
      <div class="subtit font-50 font-bold text-center">{{$t('dashboard.person_title')}}</div>
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="b in fundData" :key="b">
          <img :src="b.img" />
        </el-col>
      </el-row>
    </div>

    <div class="hassle" style="padding-top: 0.2rem">
      <div class="lang-max">
        <div class="title font-50 font-bold text-center">{{ $t('careers.filecoin_netowork') }}</div>
        <div class="Swan_video">
          <div class="img">
            <img src="@/assets/images/about/Notary_Post.jpg" />
          </div>
        </div>
        <div class="desc font-22">
          {{ $t('careers.filecoin_netowork_desc') }}
          <span>{{ $t('careers.filecoin_netowork_desc_span01') }}</span>{{ $t('careers.filecoin_netowork_desc_span02') }}
          <span>{{ $t('careers.filecoin_netowork_desc_span03') }}</span>.
        </div>
        <!-- <div class="el">
          <el-button>Read More</el-button>
        </div> -->
      </div>
    </div>

    <div class="joinList lang-max">
      <div class="title font-50 font-bold text-center">{{ $t('dashboard.join_title') }}</div>
      <div class="list flex-row center">
        <a :href="discord_link" target="_block"><img src="@/assets/images/dashboard/list_discord.png" /></a>
        <a :href="twitter_link" target="_block"><img src="@/assets/images/dashboard/list_twitter.png" /></a>
        <a :href="t_link" target="_block"><img src="@/assets/images/dashboard/list_telegram.png" /></a>
        <a :href="github_link" target="_block"><img src="@/assets/images/dashboard/list_github.png" /></a>
        <a :href="linkedin_link" target="_block"><img src="@/assets/images/dashboard/list_linkedIN.png" /></a>
        <a :href="medium_link" target="_block"><img src="@/assets/images/dashboard/list_medium.png" /></a>
      </div>
    </div>

    <div class="need-further">
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex-row">
          <div class="content font-16">
            <h1 class="font-85 font-bold">NEED FURTHER HELP?</h1>
            <p class="font-30">Can't find the proper solution? Don't hesitate to contact us.</p>
            <el-button class="font-bold">Contact Us</el-button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <img :src="needImg" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem } from 'element-plus'
export default defineComponent({
  components: {
    ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const content_img = require('@/assets/images/about/Project_workingon.png')
    const teamImg = require('@/assets/images/about/teams-01.jpg')
    const bossImg = require('@/assets/images/about/person.jpg')
    const discord_link = process.env.VUE_APP_BASE_DISCORD_LINK
    const medium_link = process.env.VUE_APP_BASE_MEDIUM_LINK
    const twitter_link = process.env.VUE_APP_BASE_TWITTER_LINK
    const linkedin_link = process.env.VUE_APP_BASE_LINKEDIN_LINK
    const t_link = process.env.VUE_APP_BASE_T_LINK
    const github_link = process.env.VUE_APP_BASE_GITHUB_LINK
    const email_link = process.env.VUE_APP_BASE_EMAIL
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
    const needImg = require(`@/assets/images/about/background-image03.png`)

    onMounted(() => { })
    return {
      system, teamImg, bossImg, fundData, needImg,
      content_img, discord_link, medium_link, twitter_link, linkedin_link, t_link, github_link, email_link
    }
  }
})
</script>

<style lang="less" scoped>
.landing {
  padding: 0;
  color: #333;
  .join_today {
    padding: 103px 0 0;
    margin: auto;
    background: url(../../assets/images/about/background-image01.png) 0 10%
      no-repeat;
    background-size: 10%;
    @media screen and (max-width: 768px) {
      padding: 0.25rem 0 0;
    }
    @media screen and (max-width: 479px) {
      padding: 40px 0 0;
    }
    h1 {
      width: 100%;
      margin: 0 0 5px;
      line-height: 1.1;
      cursor: pointer;
      text-transform: uppercase;
      word-break: break-word;
      @media screen and (max-width: 479px) {
        margin-top: 15px;
      }
    }
    .landing_content {
      width: 51%;
      .landing_logo {
        width: 100%;
        height: 0.6rem;
        @media screen and (max-width: 600px) {
          height: 80px;
        }
        @media screen and (max-width: 479px) {
          height: 60px;
        }
        img {
          height: 100%;
          width: auto;
          max-width: 100%;
        }
      }
      h3 {
        margin: 26px 0;
        color: @text-color;
        line-height: 1.55;
        word-break: break-word;
        @media screen and (max-width: 768px) {
          width: 100% !important;
        }
      }
      .el {
        margin: 40px 0 0;
        // overflow: hidden;
        @media screen and (max-width: 768px) {
          width: 100% !important;
        }
        @media screen and (max-width: 600px) {
          margin-top: 15px;
        }
        .el-button,
        a {
          float: left;
          padding: 16px 32px;
          margin: 0 0.3rem 0 0;
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
            background-color: @white-color;
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
      a {
        position: relative;
        display: block;
        padding: 0 0 0 0.18rem;
        margin-bottom: 0.1rem;
        line-height: 1;
        text-decoration: underline;
        &::before {
          content: "·";
          font-size: 0.4rem;
          line-height: 0.18rem;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
      .el-button {
        float: left;
        padding: 0.2rem 0.3rem 0.16rem;
        background-image: linear-gradient(to right, #3f97ff, #94e2ff);
        letter-spacing: 0.04rem;
        border: 0;
        outline: none;
      }
    }
    .landing_img {
      width: 49%;
      height: 100%;
      min-height: 2.8rem;
      // background-color: #a8b4cd;
      background-color: transparent;
      background-size: auto 100%;
      background-position: center;
      background-repeat: no-repeat;
      img {
        display: block;
        width: 95%;
        margin: 0 0 0 5%;
      }
      @media screen and (max-width: 600px) {
        min-height: auto;
        img {
          width: 85%;
          margin: 30px auto 0;
        }
      }
    }
    img {
      display: block;
      width: 50%;
      height: auto;
    }
    .svg {
      width: 100%;
      height: 100px;
      margin: 115px 0 0;
      rect {
        width: 100%;
        height: 100px;
        @media screen and (max-width: 600px) {
          height: 300px;
        }
      }
    }
  }
  .aboutSwan {
    padding: 0 0 93px;
    background: url(../../assets/images/about/background-image02.png) 148px
      bottom no-repeat;
    background-size: 9.6%;
    :deep(.el-row) {
      .el-col {
        &.left {
          border-right: 1px solid @theme-color-opacity;
          border-bottom: 1px solid @theme-color-opacity;
          z-index: -1;
          .content {
            float: right;
            max-width: 800px;
            padding: 100px 80px;
            @media screen and (max-width: 1200px) {
              max-width: none;
            }
          }
        }
        &.right {
          position: relative;
          &::before {
            position: absolute;
            content: "";
            left: -8px;
            top: -8px;
            width: 16px;
            height: 16px;
            background-color: @theme-color;
            z-index: 9;
          }
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            border-bottom: 1px solid @theme-color-opacity;
            z-index: 9;
          }
        }
        .image-style {
          width: 100%;
          max-width: 630px;
          @media screen and (max-width: 1200px) {
            max-width: none;
          }
        }
        h1 {
          height: 0.96rem;
          line-height: 0.32rem;
        }
        img {
          width: 90%;
          max-width: 335px;
          margin: auto;
          border-radius: 4px;
          &.radius {
            border-radius: 200px;
          }
          @media screen and (max-width: 600px) {
            width: 60%;
            max-width: none;
            margin: 150px auto;
          }
        }
        p {
          line-height: 1.5;
        }
        .desc {
          margin: 50px 0 0;
          line-height: 1.7;
          color: @text-color;
        }
      }
    }
    .el {
      overflow: hidden;
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 0.3rem;
      }
      .el-button {
        float: left;
        padding: 16px 32px;
        margin: 0 0.3rem;
        background: @theme-color;
        border: 0;
        border-radius: 0.05rem;
        outline: none;
        color: @white-color;
        @media screen and (max-width: 768px) {
          margin-bottom: 0.15rem;
        }
      }
    }
  }
  :deep(.blockchain) {
    margin: 120px auto 60px;
    .block-cont {
      margin: 80px auto;
      // @media screen and (max-width: 768px) {
      //   max-width: 1350px;
      // }
      img {
        width: 90%;
        margin: 0 auto;
      }
    }
    .row-bg {
      .el-col {
        margin: 10px 0;
        @media screen and (max-width: 767px) {
          margin: 20px 0;
        }
        .content {
          height: calc(100% - 40px);
          padding: 20px 0;
          background-color: @theme-color;
          color: @white-color;
          border-radius: 10px;
          @media screen and (max-width: 768px) {
            height: calc(100% - 80px);
            padding: 40px 0;
            border-radius: 20px;
          }
        }
      }
    }
  }
  :deep(.hassle) {
    padding: 95px 0 120px;
    @media screen and (max-width: 768px) {
      padding: 55px 0 140px;
    }
    @media screen and (max-width: 479px) {
      padding: 25px 0 100px;
    }
    .Swan_video {
      position: relative;
      width: 53%;
      margin: 55px auto;
      // padding: 0 14% 0 16.8%;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
      .img {
        position: relative;
        width: 100%;
        margin: auto;
        img {
          position: relative;
          display: block;
          width: 100%;
          z-index: 2;
        }
      }
    }
    .el-row {
      max-width: 1144px;
      margin: 0.55rem auto 0;
      flex-wrap: wrap;
      .el-col {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 32px;
        margin: 0 0 0.6rem;
        background-color: #e6f5fb;
        border-radius: 8px;
        transition: all 0.3s;
        @media screen and (max-width: 768px) {
          width: calc(50% - 0.3rem);
          padding: 40px 32px;
          margin: 15px 0.15rem;
        }
        @media screen and (max-width: 600px) {
          width: 100%;
        }
        h1 {
          margin: 0 0 10px;
          line-height: 2;
        }
        img {
          display: block;
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 auto 0.25rem;
          border-radius: 100%;
        }
        p {
          line-height: 1.5;
          word-break: break-word;
        }
      }
      .desc_cont {
        padding: 15px;
        background-color: transparent;
        p {
          margin: 0 0 15px;
        }
      }
    }
    .desc {
      width: 84%;
      margin: 0 auto;
      line-height: 1.7;
      word-break: break-word;
      color: @text-color;
      // span {
      //   font-weight: bold;
      //   color: #053a8e;
      // }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .el {
      display: flex;
      justify-content: center;
      // overflow: hidden;
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 0.3rem;
      }
      .el-button {
        float: left;
        padding: 16px 32px;
        margin: 0 0.3rem;
        background-color: @white-color;
        color: @theme-color;
        border: 2px solid @theme-color;
        border-radius: 0.05rem;
        outline: none;
        box-shadow: 0 12px 32px -12px rgba(12, 22, 44, 0.32);
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
        span {
          color: inherit;
        }
        &:hover {
          background-color: @theme-color;
          color: @white-color;
        }
        @media screen and (max-width: 768px) {
          margin-bottom: 0.15rem;
        }
        @media screen and (max-width: 479px) {
          width: calc(100% - 0.3rem);
          margin: 0 0.15rem 16px;
        }
      }
    }
  }
  .joinList {
    padding: 50px 0 0;
    .list {
      margin: 50px auto 125px;
      @media screen and (max-width: 600px) {
        flex-wrap: wrap;
      }
      img {
        display: block;
        height: 65px;
        width: auto;
        margin: 20px 26px;
        @media screen and (max-width: 768px) {
          height: 90px;
        }
        @media screen and (max-width: 600px) {
          height: 115px;
        }
      }
    }
  }
  :deep(.need-further) {
    padding: 0 8.5%;
    margin: 0 0 70px;
    background-color: @theme-color;
    line-height: 1;
    .el-row {
      .el-col {
        .content {
          padding: 32px 44px;
          color: @white-color;
          @media screen and (max-width: 600px) {
            padding: 150px 44px;
          }
          h1 {
            text-transform: uppercase;
          }
          p {
            margin: 65px 0 70px;
            @media screen and (max-width: 600px) {
              margin: 100px 0 110px;
            }
          }
          .el-button {
            float: left;
            height: auto;
            padding: 20px 45px;
            margin: 0;
            background-color: @white-color;
            font-size: inherit;
            color: @theme-color;
            border: 2px solid @white-color;
            border-radius: 100px;
            outline: none;
            transition: background-color 0.3s, border-color 0.3s, color 0.3s;
            line-height: 1;
            @media screen and (max-width: 600px) {
              padding: 40px 90px;
            }
            span {
              color: inherit;
            }
            &:hover {
              background-color: @theme-color;
              color: @white-color;
            }
          }
        }
        img {
          width: 98%;
          float: right;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .landing {
    .join_today {
      .landing_content,
      img,
      .landing_img,
      .Swan_video {
        width: 100%;
        margin: 0.25rem auto 0;
      }
    }
  }
}
</style>
