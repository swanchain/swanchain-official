<template>
  <div class="footer">
    <div class="powered lang-max flex-row space-between">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="foot-media">
            <div class="media-list flex-row center">
              <a href="https://twitter.com/nebulablockdata" target="_blank">
                <img :src="media01" alt="">
              </a>
              <a href="https://nebulablock.medium.com/" target="_blank">
                <img :src="media02" alt="">
              </a>
              <a href="https://www.linkedin.com/company/nebula-block/" target="_blank">
                <img :src="media03" alt="">
              </a>
            </div>
            <div class="tit font-24">{{$t('footer.copy')}}</div>
          </div>
        </el-col>
      </el-row>
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
    const media01 = require(`@/assets/images/dashboard/media-01.png`)
    const media02 = require(`@/assets/images/dashboard/media-02.png`)
    const media03 = require(`@/assets/images/dashboard/media-03.png`)

    function goMain () {
      router.push({ name: 'dashboard' })
    }
    onMounted(() => { })
    return {
      system,
      nebulaLogo,
      goMain,
      media01, media02, media03
    }
  },
  components: { ElRow, ElCol }
})
</script>
<style  lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    padding: 150px 0;
  }
  @media screen and (max-width: 600px) {
    padding: 200px 0;
  }
  .powered {
    width: 100%;
    padding: 0;
    font-weight: 400;
    color: @theme-color;
    @media screen and (max-width: 600px) {
      line-height: 2.5;
    }
    .el-row {
      width: 100%;
      @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
      }
      .el-col {
        .tit {
          margin: 24px 0 0;
          text-align: center;
        }
        .foot-media {
          .media-list {
            a {
              display: block;
              margin: 0 12px;
              @media screen and (min-width: 2160px) {
                margin: 0 6px;
              }
              @media screen and (max-width: 768px) {
                margin: 0 18px;
              }
              @media screen and (max-width: 600px) {
                margin: 0 24px;
              }
              @media screen and (max-width: 540px) {
                margin: 0 36px;
              }
              img,
              svg {
                display: block;
                width: 43px;
                height: 43px;
                cursor: pointer;
                @media screen and (min-width: 2160px) {
                  width: 20px;
                  height: 20px;
                }
                @media screen and (max-width: 768px) {
                  width: 86px;
                  height: 86px;
                }
                @media screen and (max-width: 600px) {
                  width: 100px;
                  height: 100px;
                }
                &:hover {
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>