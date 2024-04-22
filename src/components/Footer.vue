<template>
  <div class="footer">
    <div class="powered lang-max flex-row space-between">
      <div class="footer_all">
        <el-row class="row-bg" justify="space-between">
          <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
            <div class="flex-row l">
              <img :src="nebulaLogo" class="footer_logo" alt="Swan" @click="goMain" />
              <div class="media-list flex-row">
                <a target="_blank" v-for="m in mediaData" :key="m" :href="m.link">
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
                  <svg v-else-if="m.type === 'linkedin'" t="1704769945022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7608">
                    <path d="M272.571429 357.142857v566.285714H84V357.142857h188.571429z m12-174.857143q0.571429 41.714286-28.857143 69.714286T178.285714 280h-1.142857q-46.857143 0-75.428571-28T73.142857 182.285714q0-42.285714 29.428572-70T179.428571 84.571429t76 27.714285T284.571429 182.285714z m666.285714 416.571429v324.571428h-188v-302.857142q0-60-23.142857-94T667.428571 492.571429q-36 0-60.285714 19.714285T570.857143 561.142857q-6.285714 17.142857-6.285714 46.285714v316H376.571429q1.142857-228 1.142857-369.714285t-0.571429-169.142857l-0.571428-27.428572h188v82.285714h-1.142858q11.428571-18.285714 23.428572-32t32.285714-29.714285 49.714286-24.857143T734.285714 344q97.714286 0 157.142857 64.857143t59.428572 190z"
                      p-id="7609"></path>
                  </svg>
                  <svg v-else t="1704779181965" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9598">
                    <path d="M361 148.524C161.626 148.524 0 311.266 0 512s161.638 363.476 361 363.476S722 712.746 722 512 560.382 148.524 361 148.524z m576.5 21.292c-99.69 0-180.49 153.238-180.49 342.19s80.812 342.2 180.502 342.2 180.502-153.238 180.502-342.2H1118c0-189.006-80.8-342.19-180.496-342.19z m279.012 35.642c-35.052 0-63.47 137.256-63.47 306.548s28.4 306.548 63.47 306.548S1280 681.262 1280 512c0-169.298-28.43-306.542-63.484-306.542z"
                      p-id="9599"></path>
                  </svg>
                </a>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <el-row>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a class="font-16 font-bold weight-6">EXPLORE</a>
                <a href="https://lagrangedao.org/" class="font-14 weight-4 t" target="_blank">Lagrange</a>
                <a href="https://multichain.storage/" class="font-14 weight-4 t" target="_blank">Multi-Chain Storage</a>
                <a href="https://www.fogmetalabs.com/metaark" class="font-14 weight-4 t" target="_blank">Meta Ark</a>
                <a href="https://chainnode.io/" class="font-14 weight-4 t" target="_blank">Chainnode</a>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a class="font-16 font-bold weight-6">BUILD</a>
                <a href="https://saturn-explorer.swanchain.io/" class="font-14 weight-4 t" target="_blank">Block Explorer</a>
                <a :href="system.$contactUsLink" class="font-14 weight-4 t" target="_blank">Faucet</a>
                <a href="https://docs.swanchain.io/" class="font-14 weight-4 t" target="_blank">Documentation</a>
                <a href="https://github.com/swanchain" class="font-14 weight-4 t" target="_blank">GitHub</a>
              </el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a class="font-16 font-bold weight-6">ABOUT</a>
                <router-link :to="{name: 'aboutUs'}" class="font-14 weight-4 t">About Us</router-link>
                <router-link :to="{name: 'privacy-policy'}" class="font-14 weight-4 t">Privacy Policy</router-link>
                <router-link :to="{name: 'terms'}" class="font-14 weight-4 t">Terms of Use</router-link>
                <a href="https://www.linkedin.com/company/swancloud/jobs/" class="font-14 weight-4 t" target="_blank">Careers</a>
                <a :href="system.$contactUsLink" class="font-14 weight-4 t" target="_blank">Contact Us</a>
                <a href="https://drive.google.com/drive/folders/1gGno5tZknzdaVfKsGO7pkXXn5OWcTXyt?usp=drive_link" class="font-14 weight-4 t" target="_blank">Brand Kit</a>
              </el-col>
              <!-- <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <a href="https://nebulablock.freshdesk.com/support/home" target="_blank" class="font-20 weight-7">{{$t('menu.Support')}}</a>
              </el-col> -->
            </el-row>
          </el-col>
          <el-col :span="24">
            <div class="copy uppercase tit font-14 weight-4 flex-row">
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
        type: 'linkedin',
        link: process.env.VUE_APP_BASE_LINKEDIN_LINK
      },
      {
        type: 'medium',
        link: process.env.VUE_APP_BASE_MEDIUM_LINK
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
  border-top: 1px solid @border-color;
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
    color: @text-w-color;
    @media screen and (max-width: 600px) {
      line-height: 2.5;
    }
    .footer_all {
      width: 100%;
      .el-row {
        display: flex;
        flex-wrap: wrap;
        .el-col {
          .l {
            height: 100%;
            flex-direction: row;
          }
          .footer_logo {
            display: block;
            height: 54px;
            margin: 0 80px 155px 0;
            cursor: pointer;
            @media screen and (min-width: 2160px) {
              height: 35px;
            }
            @media screen and (max-width: 1200px) {
              margin: 0 80px 55px 0;
            }
            @media screen and (max-width: 768px) {
              height: 81px;
            }
            @media screen and (max-width: 600px) {
              height: 108px;
            }
          }
          .media-list {
            @media screen and (max-width: 1200px) {
              margin: 0 0 55px;
            }
            a {
              display: block;
              padding: 8px;
              margin: 0 12px 0 0;
              border: 1px solid @white-color;
              border-radius: 100px;
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
                margin: 0 36px 0 0;
              }
              svg {
                display: block;
                width: 20px;
                height: 20px;
                cursor: pointer;
                fill: @white-color;
                opacity: 1;
                transition: all 0.2s;
                @media screen and (min-width: 2160px) {
                  width: 15px;
                  height: 15px;
                }
                @media screen and (max-width: 768px) {
                  width: 40px;
                  height: 40px;
                }
                @media screen and (max-width: 600px) {
                  width: 60px;
                  height: 60px;
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
            margin: 29px 0 0;
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
                margin: 15px 0;
                line-height: 1;
                text-transform: uppercase;
                color: inherit;
                @media screen and (max-width: 600px) {
                  margin: 50px 0 15px;
                }
              }
              a.t {
                line-height: 1.5;
                padding: 7px 0;
                margin: 0;
                text-transform: capitalize;
                transition: all 0.2s;
                &:hover {
                  text-decoration: underline;
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