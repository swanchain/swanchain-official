<template>
  <div class="blog-style">
    <div class="blog-banner">
      <div class="banner lang-max flex-row center">
        <el-row class="banner-cont flex-row" justify="space-between">
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="font-16">
              <span class="small">SwanChain</span>
              <h1 class="font-40 font-bold">SWAN JUPITER TESTENT 150,000SWAN</h1>
              <h3 class="font-20 weight-4 d">worldwide offered diverse computing resources. In total, over 130 GPUs were deployed from 9 countries and …</h3>
              <h3 class="font-20 weight-4">4 min read</h3>
            </div>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <img :src="bannerImg" class="img" />
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="blog-list">
      <div class="lang-max">
        <el-row class="blog-cont" :gutter="28">
          <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
            <div class="left font-16">
              <div class="title weight-6">All Articles</div>
              <ul>
                <li class="t">Announcements</li>
                <li>Builder Support</li>
                <li>Community</li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="24" :sm="16" :md="18" :lg="18" :xl="18">
            <el-row class="row-bg" :gutter="28">
              <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="b in fundData" :key="b">
                <div class="content">
                  <img :src="b.img" />
                  <div class="area font-14">
                    <div class="small">Testent</div>
                    <div class="tit font-20 font-bold">{{b.title}}</div>
                    <div class="flex-row space-between">{{b.date}}
                      <p>6 Day Event</p>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
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
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown } from 'element-plus'
export default defineComponent({
  components: {
    ElRow, ElCol, ElButton, ElDropdown
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const bannerImg = require(`@/assets/images/blog.jpg`)
    const fundData = ref([
      {
        img: require(`@/assets/images/blog.jpg`),
        title: 'SWAN JUPITER TESTENT 150,000SWAN',
        date: 'Dec 11, 2023, 02:00 AM'
      },
      {
        img: require(`@/assets/images/blog.jpg`),
        title: 'SWAN JUPITER TESTENT 150,000SWAN',
        date: 'Dec 11, 2023, 02:00 AM'
      },
      {
        img: require(`@/assets/images/blog.jpg`),
        title: 'SWAN JUPITER TESTENT 150,000SWAN',
        date: 'Dec 11, 2023, 02:00 AM'
      },
      {
        img: require(`@/assets/images/blog.jpg`),
        title: 'SWAN JUPITER TESTENT 150,000SWAN',
        date: 'Dec 11, 2023, 02:00 AM'
      }
    ])

    onMounted(() => { })
    return {
      system, bannerImg, fundData
    }
  }
})
</script>

<style lang="less" scoped>
.blog-style {
  padding: 0;
  word-break: break-word;
  line-height: 1.33;
  .blog-banner {
    padding: 100px 0 40px;
    margin: auto;
    .banner {
      padding: 37px 0;
      background-color: @theme-color;
      border-radius: 30px;
      .banner-cont {
        padding: 0 70px;
        h1 {
          width: 100%;
          margin: 15px 0 0;
          line-height: 1.1;
          cursor: pointer;
          text-transform: capitalize;
        }
        h3 {
          margin: 20px 0;
          color: @text-w-color;
          &.d{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .small {
          display: inline;
          padding: 4px 14px;
          background-color: @white-color;
          color: @theme-color;
          border-radius: 30px;
        }
      }
    }
  }
  :deep(.blog-list) {
    width: 92%;
    margin: 60px auto 120px;
    .blog-cont {
      .el-col {
        margin: 14px 0;
        .left {
          max-width: 222px;
          .title {
            padding: 10px 15px 10px 42px;
            margin: 0 0 20px;
            background: @theme-color
              url(../../assets/images/dashboard/icon-article.png) 11px center
              no-repeat;
            background-size: 22px;
            border-radius: 10px;
            color: @white-color;
          }
          ul {
            li {
              padding: 12px 0 12px 48px;
              line-height: 1.2;
              cursor: pointer;
              &.t {
                padding-left: 42px;
                background: url(../../assets/images/dashboard/icon-a-01.png)
                  14px center no-repeat;
                background-size: 20px;
              }
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
        .content {
          height: 100%;
          background-color: @bg-module-color;
          color: @text-w-color;
          border: 1px solid @bg-module-color;
          border-radius: 10px;
          overflow: hidden;
          @media screen and (max-width: 768px) {
            height: calc(100% - 80px);
            padding: 40px 0;
            border-radius: 20px;
          }
          &:hover {
            border-color: @theme-color;
          }
          img {
            width: 100%;
            margin: 0 auto;
          }
          .area {
            padding: 20px;
            .small {
              display: inline;
              padding: 4px 14px;
              background-color: @theme-color;
              border-radius: 30px;
            }
            .tit {
              padding: 8px 0 20px;
              margin: 0 0 20px;
              text-transform: uppercase;
              border-bottom: 1px solid @border-color;
            }
            .el {
              a {
                padding: 8px 26px;
                margin: 0 0 20px;
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
            }
            .date {
              padding: 3px 0 3px 32px;
              background: url(../../assets/images/event/icon-date.png) left
                center no-repeat;
              background-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
