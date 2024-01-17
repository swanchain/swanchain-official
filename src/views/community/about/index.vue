<template>
  <div class="landing">
    <div class="join_today">
      <div class="lang-max flex-row space-between">
        <div class="landing_content">
          <h1 class="font-65 font-black uppercase" v-html="$t('about.module_1_title')"></h1>
          <h3 class="font-22 weight-4">{{ $t('about.module_1_desc') }}</h3>
          <h3 class="font-22 weight-4">{{ $t('about.module_1_desc01') }}</h3>
          <div class="el flex-row">
            <a class="font-16 font-bold">{{ $t('about.module_1_btn') }}</a>
          </div>
        </div>
        <div class="landing_img flex-row center">
          <img :src="content_img" alt="">
        </div>
      </div>
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
            <div class="name font-42 font-bold text-center">Co-Founder</div>
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
        <a class="flex-row center" target="_blank" v-for="m in mediaData" :key="m" :href="m.link">
          <svg v-if="m.type === 'discord'" t="1704768639423" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2831">
            <path d="M1049.062 139.672a3 3 0 0 0-1.528-1.4A970.13 970.13 0 0 0 808.162 64.06a3.632 3.632 0 0 0-3.846 1.82 674.922 674.922 0 0 0-29.8 61.2 895.696 895.696 0 0 0-268.852 0 619.082 619.082 0 0 0-30.27-61.2 3.78 3.78 0 0 0-3.848-1.82 967.378 967.378 0 0 0-239.376 74.214 3.424 3.424 0 0 0-1.576 1.352C78.136 367.302 36.372 589.38 56.86 808.708a4.032 4.032 0 0 0 1.53 2.75 975.332 975.332 0 0 0 293.65 148.378 3.8 3.8 0 0 0 4.126-1.352A696.4 696.4 0 0 0 416.24 860.8a3.72 3.72 0 0 0-2.038-5.176 642.346 642.346 0 0 1-91.736-43.706 3.77 3.77 0 0 1-0.37-6.252 502.094 502.094 0 0 0 18.218-14.274 3.638 3.638 0 0 1 3.8-0.512c192.458 87.834 400.82 87.834 591 0a3.624 3.624 0 0 1 3.848 0.466 469.066 469.066 0 0 0 18.264 14.32 3.768 3.768 0 0 1-0.324 6.252 602.814 602.814 0 0 1-91.78 43.66 3.75 3.75 0 0 0-2 5.222 782.11 782.11 0 0 0 60.028 97.63 3.728 3.728 0 0 0 4.126 1.4A972.096 972.096 0 0 0 1221.4 811.458a3.764 3.764 0 0 0 1.53-2.704c24.528-253.566-41.064-473.824-173.868-669.082zM444.982 675.16c-57.944 0-105.688-53.174-105.688-118.478s46.818-118.482 105.688-118.482c59.33 0 106.612 53.64 105.686 118.478 0 65.308-46.82 118.482-105.686 118.482z m390.76 0c-57.942 0-105.686-53.174-105.686-118.478s46.818-118.482 105.686-118.482c59.334 0 106.614 53.64 105.688 118.478 0 65.308-46.354 118.482-105.688 118.482z"
              p-id="2832"></path>
          </svg>
          <svg v-else-if="m.type === 'twitter'" t="1704768985943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4645">
            <path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z"
              p-id="4646"></path>
          </svg>
          <svg v-else-if="m.type === 'telegram'" t="1704770176434" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8624">
            <path d="M957.4 197.2l-135.2 637.6c-10.2 45-36.8 56.2-74.6 35l-206-151.8-99.4 95.6c-11 11-20.2 20.2-41.4 20.2l14.8-209.8 381.8-345c16.6-14.8-3.6-23-25.8-8.2L299.6 568 96.4 504.4c-44.2-13.8-45-44.2 9.2-65.4L900.4 132.8c36.8-13.8 69 8.2 57 64.4z"
              p-id="8625"></path>
          </svg>
          <svg v-else-if="m.type === 'github'" t="1704769172600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6631">
            <path d="M855.557 216.855c35.621-66.153-5.089-152.661-5.089-152.661-91.597 0-157.75 61.064-157.75 61.064-35.621-20.355-152.661-20.355-152.661-20.355s-117.04 0-152.661 20.355c0 0-66.153-61.064-157.75-61.064 0 0-40.71 86.508-5.089 152.661 0 0-81.419 76.331-50.887 239.169 28.691 153.018 162.838 193.371 249.346 193.371 0 0-35.621 30.532-30.532 81.419 0 0-50.887 30.532-101.774 10.177s-76.331-71.242-76.331-71.242-50.887-66.153-101.774-40.71c0 0-15.266 15.266 40.71 40.71 0 0 40.71 61.064 55.976 96.685 15.266 35.621 96.685 66.153 178.105 45.798v117.04s0 10.177-20.355 15.266-20.355 15.266-10.177 15.266H723.25c10.177 0 10.177-10.177-10.177-15.266-20.355-5.089-20.355-15.266-20.355-15.266v-117.04s0.447-61.03 0-81.419c-1.119-51.128-35.621-81.419-35.621-81.419 86.508 0 220.655-40.353 249.346-193.371 30.533-162.837-50.886-239.168-50.886-239.168z"
              p-id="6632"></path>
          </svg>
          <svg v-else-if="m.type === 'LinkedIN'" t="1704769945022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7608">
            <path d="M272.571429 357.142857v566.285714H84V357.142857h188.571429z m12-174.857143q0.571429 41.714286-28.857143 69.714286T178.285714 280h-1.142857q-46.857143 0-75.428571-28T73.142857 182.285714q0-42.285714 29.428572-70T179.428571 84.571429t76 27.714285T284.571429 182.285714z m666.285714 416.571429v324.571428h-188v-302.857142q0-60-23.142857-94T667.428571 492.571429q-36 0-60.285714 19.714285T570.857143 561.142857q-6.285714 17.142857-6.285714 46.285714v316H376.571429q1.142857-228 1.142857-369.714285t-0.571429-169.142857l-0.571428-27.428572h188v82.285714h-1.142858q11.428571-18.285714 23.428572-32t32.285714-29.714285 49.714286-24.857143T734.285714 344q97.714286 0 157.142857 64.857143t59.428572 190z"
              p-id="7609"></path>
          </svg>
          <svg v-else t="1704779181965" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9598">
            <path d="M361 148.524C161.626 148.524 0 311.266 0 512s161.638 363.476 361 363.476S722 712.746 722 512 560.382 148.524 361 148.524z m576.5 21.292c-99.69 0-180.49 153.238-180.49 342.19s80.812 342.2 180.502 342.2 180.502-153.238 180.502-342.2H1118c0-189.006-80.8-342.19-180.496-342.19z m279.012 35.642c-35.052 0-63.47 137.256-63.47 306.548s28.4 306.548 63.47 306.548S1280 681.262 1280 512c0-169.298-28.43-306.542-63.484-306.542z"
              p-id="9599"></path>
          </svg>
          <span class="font-20">{{m.type}}</span>
        </a>
      </div>
    </div>

    <div class="need-further">
      <el-row class="block-cont row-bg" justify="center">
        <el-col :xs="24" :sm="14" :md="12" :lg="12" :xl="12" class="flex-row">
          <div class="content font-16">
            <h1 class="font-85 font-bold uppercase">NEED FURTHER HELP?</h1>
            <p class="font-30">Can't find the proper solution? Don't hesitate to contact us.</p>
            <el-button class="font-bold">Contact Us</el-button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="12" :lg="12" :xl="12" class="flex-row flex-end">
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
    const teamImg = require('@/assets/images/about/teams-01.png')
    const bossImg = require('@/assets/images/about/person.png')
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
    const mediaData = ref([
      {
        type: 'discord',
        link: process.env.VUE_APP_BASE_DISCORD_LINK
      },
      {
        type: 'twitter',
        link: process.env.VUE_APP_BASE_TWITTER_LINK
      },
      {
        type: 'telegram',
        link: process.env.VUE_APP_BASE_T_LINK
      },
      {
        type: 'github',
        link: process.env.VUE_APP_BASE_GITHUB_LINK
      },
      {
        type: 'LinkedIN',
        link: process.env.VUE_APP_BASE_LINKEDIN_LINK
      },
      {
        type: 'medium',
        link: process.env.VUE_APP_BASE_MEDIUM_LINK
      }
    ])

    onMounted(() => { })
    return {
      system, teamImg, bossImg, fundData, needImg, mediaData,
      content_img
    }
  }
})
</script>

<style lang="less" scoped>
.landing {
  padding: 0;
  .join_today {
    padding: 103px 0 210px;
    margin: auto;
    background: url(../../../assets/images/about/background-image01.png),
      url(../../../assets/images/about/background-image04.png);
    background-size: 10%, 100%;
    background-position: 0 10%, left bottom;
    background-repeat: no-repeat, no-repeat;
    @media screen and (max-width: 768px) {
      padding: 160px 0 210px;
    }
    @media screen and (max-width: 600px) {
      padding: 246px 0 320px;
    }
    h1 {
      width: 100%;
      margin: 0 0 5px;
      line-height: 1.1;
      cursor: pointer;
      word-break: break-word;
      @media screen and (max-width: 479px) {
        margin-top: 15px;
      }
    }
    .landing_content {
      width: 51%;
      @media screen and (max-width: 992px) {
        width: 60%;
      }
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
        color: @text-w-color;
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
      @media screen and (max-width: 992px) {
        width: 40%;
      }
      img {
        display: block;
        width: 95%;
        margin: 0 0 0 5%;
        @media screen and (max-width: 1200px) {
          max-width: 700px;
          margin: 0 auto;
        }
        @media screen and (max-width: 992px) {
          max-width: 900px;
          margin: 30px auto 0;
        }
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
    background: url(../../../assets/images/about/background-image02.png) 148px
      bottom no-repeat;
    background-size: 9.6%;
    @media screen and (max-width: 768px) {
      background-size: 15%;
    }
    :deep(.el-row) {
      .el-col {
        &.left {
          border-right: 1px solid @border-color;
          border-bottom: 1px solid @border-color;
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
            border-bottom: 1px solid @border-color;
            z-index: 9;
          }
        }
        .image-style {
          width: 100%;
          max-width: 630px;
          @media screen and (max-width: 1200px) {
            max-width: none;
          }
          .name {
            width: 100%;
            margin: 45px 0 0;
            @media screen and (max-width: 768px) {
              margin: 45px 0 80px;
            }
            @media screen and (max-width: 600px) {
              margin: 45px 0 160px;
            }
          }
          .radius {
            border: 12px solid @theme-color;
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
            @media screen and (max-width: 768px) {
              border-radius: 400px;
            }
            @media screen and (max-width: 600px) {
              border-radius: 600px;
            }
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
          color: @text-w-color;
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
        width: 80%;
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
      color: @text-w-color;
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
      a {
        display: block;
        margin: 0 20px;
        @media screen and (min-width: 2160px) {
          margin: 0 16px;
        }
        @media screen and (max-width: 768px) {
          margin: 10px 30px;
        }
        @media screen and (max-width: 600px) {
          margin: 20px 40px;
        }
        @media screen and (max-width: 540px) {
          margin: 30px 60px;
        }
        span {
          padding: 0 17px;
          color: @text-w-color;
          text-transform: capitalize;
        }
        svg {
          display: block;
          width: 30px;
          height: 30px;
          padding: 16px;
          cursor: pointer;
          fill: @theme-color;
          opacity: 1;
          transition: all 0.2s;
          border: 1px solid @theme-color;
          border-radius: 100px;
          @media screen and (min-width: 2160px) {
            width: 15px;
            height: 15px;
          }
          @media screen and (max-width: 768px) {
            width: 60px;
            height: 60px;
          }
          @media screen and (max-width: 600px) {
            width: 90px;
            height: 90px;
          }
          &:hover {
            opacity: 0.9;
          }
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
          @media screen and (max-width: 600px) {
            float: none;
            width: 60%;
            margin: auto;
          }
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
