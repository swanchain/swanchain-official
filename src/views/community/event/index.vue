<template>
  <div class="event-style">
    <div class="event-banner">
      <div class="banner lang-max flex-row center text-center">
        <h1 class="font-65 font-black">Swan Chain Events</h1>
        <h3 class="font-27 weight-4">Come Meet the World's Most Innovative Web3 Builders</h3>
      </div>
    </div>

    <div class="event-list">
      <div class="lang-max">
        <el-row class="event-cont row-bg" :gutter="56">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="b in fundData" :key="b">
            <div class="content">
              <img :src="b.img" />
              <div class="area font-16">
                <div class="font-14">Testent</div>
                <div class="tit uppercase font-24 font-bold">{{b.title}}</div>
                <div class="el flex-row">
                  <a class="font-14">{{ $t('public.Learn-More') }}</a>
                </div>
                <div class="date font-bold">{{b.date}}</div>
                <p>6 Day Event</p>
              </div>
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
      system, fundData
    }
  }
})
</script>

<style lang="less" scoped>
.event-style {
  padding: 0;
  word-break: break-word;
  line-height: 1.33;
  .event-banner {
    margin: auto;
    background: url(../../../assets/images/event/background-image01.png);
    background-size: auto 100%;
    background-position: left top;
    background-repeat: repeat;
    @media screen and (max-width: 768px) {
      padding: 0.25rem 0 0;
    }
    @media screen and (max-width: 479px) {
      padding: 40px 0 0;
    }
    .banner {
      padding: 103px 0 90px;
      background: url(../../../assets/images/event/background-image02.png),
        url(../../../assets/images/event/background-image03.png);
      background-size: 245px, 290px;
      background-position: left center, right center;
      background-repeat: no-repeat, no-repeat;
      h1 {
        width: 100%;
        margin: 0 0 5px;
        line-height: 1.1;
        cursor: pointer;
        text-transform: capitalize;
        @media screen and (max-width: 479px) {
          margin-top: 15px;
        }
      }
      h3 {
        margin: 26px 0;
        color: @text-w-color;
      }
    }
  }
  :deep(.event-list) {
    width: 86%;
    margin: 60px auto 120px;
    .event-cont {
      .el-col {
        margin: 47px 0;
        .content {
          height: 100%;
          background-color: @bg-module-color;
          color: @text-w-color;
          border: 1px solid @bg-module-color;
          border-radius: 10px;
          overflow: hidden;
          @media screen and (max-width: 768px) {
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
            .tit {
              padding: 6px 0 20px;
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
              background: url(../../../assets/images/event/icon-date.png) left
                center no-repeat;
              background-size: 16px;
          @media screen and (max-width: 768px) {
              padding: 3px 0 3px 42px;
              background-size: 26px;
          }
            }
          }
        }
      }
    }
  }
}
</style>
