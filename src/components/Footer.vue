<template>
  <div class="footer">
    <div class="powered lang-max flex-row space-between">
      <div class="footer_all">
        <el-row class="row-bg" justify="space-between">
          <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
            <img :src="nebulaLogo" class="footer_logo" alt="Swan" @click="goMain" />
            <div class="media-list flex-row">
              <a target="_blank" v-for="m in mediaData" :key="m" :href="m.link">
                <img :src="m.icon" alt="">
              </a>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <el-row>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <router-link :to="{name: 'aboutUs'}" class="font-20 weight-7">{{$t('menu.Ecosystem')}}</router-link>
                <router-link :to="{name: 'aboutUs'}" class="font-16 weight-4">{{$t('menu.Ecosystem')}}</router-link>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <router-link :to="{name: 'aboutUs'}" class="font-20 weight-7">{{$t('menu.Ecosystem')}}</router-link>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a href="https://nebulablock.freshdesk.com/support/home" target="_blank" class="font-20 weight-7">{{$t('menu.Support')}}</a>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <div class="copy tit font-16 weight-4 flex-row">
              {{$t('footer.copy')}}

              <router-link :to="{name: 'privacy-policy'}"> {{ $t('menu.PrivacyPolicy') }}</router-link>
              <router-link :to="{name: 'terms'}"> {{ $t('menu.TermsOfUse') }}</router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElRow, ElCol } from 'element-plus'
export default defineComponent({
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require(`@/assets/images/SWAN_logo_01.png`)
    const mediaData = ref([
      {
        icon: require(`@/assets/images/dashboard/media-01.png`),
        link: process.env.VUE_APP_BASE_DISCORD_LINK
      },
      {
        icon: require(`@/assets/images/dashboard/media-02.png`),
        link: process.env.VUE_APP_BASE_TWITTER_LINK
      },
      {
        icon: require(`@/assets/images/dashboard/media-03.png`),
        link: process.env.VUE_APP_BASE_T_LINK
      },
      {
        icon: require(`@/assets/images/dashboard/media-04.png`),
        link: process.env.VUE_APP_BASE_GITHUB_LINK
      },
      {
        icon: require(`@/assets/images/dashboard/media-05.png`),
        link: process.env.VUE_APP_BASE_LINKEDIN_LINK
      },
      {
        icon: require(`@/assets/images/dashboard/media-06.png`),
        link: ''
      }
    ])

    function goMain () {
      router.push({ name: 'dashboard' })
    }
    onMounted(() => { })
    return {
      system,
      nebulaLogo,
      goMain,
      mediaData
    }
  },
  components: { ElRow, ElCol }
})
</script>
<style  lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 40px 0;
  background: @black-color url(../assets/images/bg-footer.jpg) top right
    no-repeat;
  background-size: auto 100%;
  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 0;
  }
  .powered {
    // width: 100%;
    padding: 0;
    font-weight: 400;
    color: @white-color;
    @media screen and (max-width: 600px) {
      line-height: 2.5;
    }
    .footer_all {
      width: 100%;
      .el-row {
        display: flex;
        flex-wrap: wrap;
        .el-col {
          .footer_logo {
            display: block;
            height: 70px;
            margin: 0 0 155px;
            cursor: pointer;
            @media screen and (min-width: 2160px) {
              height: 35px;
            }
            @media screen and (max-width: 1200px) {
              margin: 0 0 55px;
            }
            @media screen and (max-width: 768px) {
              height: 140px;
            }
            @media screen and (max-width: 600px) {
              height: 175px;
            }
          }
          .media-list {
            @media screen and (max-width: 1200px) {
              margin: 0 0 55px;
            }
            a {
              display: block;
              margin: 0 12px 0 0;
              @media screen and (min-width: 2160px) {
                margin: 0 10px 0 0;
              }
              @media screen and (max-width: 768px) {
                margin: 0 18px 0 0;
              }
              @media screen and (max-width: 600px) {
                margin: 0 24px 0 0;
              }
              @media screen and (max-width: 540px) {
                margin: 0 6036px 0 0;
              }
              img,
              svg {
                display: block;
                width: 40px;
                height: 40px;
                cursor: pointer;
                opacity: 1;
                transition: all 0.2s;
                @media screen and (min-width: 2160px) {
                  width: 20px;
                  height: 20px;
                }
                @media screen and (max-width: 768px) {
                  width: 80px;
                  height: 80px;
                }
                @media screen and (max-width: 600px) {
                  width: 100px;
                  height: 100px;
                }
                &:hover {
                  opacity: 0.9;
                }
              }
            }
          }
          .li {
            padding: 14px 0 8px;
            margin: 14px 0 0;
            border-bottom: 1px solid #a1aed4;
            position: relative;
            color: @white-color;
            line-height: 1.1;
            &:after {
              content: "";
              display: block;
              width: 17px;
              height: 5px;
              background-color: @white-color;
              position: absolute;
              left: 0;
              bottom: -2.5px;
            }
            h6 {
              margin-bottom: 5px;
            }
          }
          .copy {
            margin: 30px 0 0;
            color: @white-color;
            text-transform: uppercase;
            a {
              margin: 0 0 0 20px;
              color: inherit;
              text-transform: capitalize;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .el-row {
            margin: 0;
            @media screen and (max-width: 860px) {
              margin: 34px 0 0;
            }
            .el-col {
              a {
                display: block;
                padding: 20px 0;
                margin: 15px 0 0;
                color: @white-color;
                line-height: 1;
                text-transform: uppercase;
                @media screen and (max-width: 600px) {
                  margin: 50px 0 15px;
                }
              }
              a.t {
                line-height: 1.5;
                padding: 7px 0;
                margin: 0;
                text-transform: capitalize;
                color: rgba(229, 235, 255, 0.56);
                transition: all 0.2s;
                &:hover {
                  color: @white-color;
                }
              }
            }
          }
        }
        .el-col-9 {
          @media screen and (max-width: 999px) {
            width: 30%;
          }
        }
        .el-col-15 {
          @media screen and (max-width: 999px) {
            width: 70%;
          }
        }
      }
    }
  }
}
</style>