<template>
  <div class="help-style">
    <div class="help-banner">
      <div class="banner lang-max flex-row center text-center font-16">
        <el-input v-model="searchInput" class="w-50 m-2" placeholder="Search questions, keywords, articles" />
      </div>
    </div>

    <div class="help-list">
      <div class="lang-max">
        <el-row class="help-cont row-bg" :gutter="56">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="b in moreData" :key="b">
            <div class="content">
              <div class="area text-center">
                <div class="tit font-24 font-bold">{{b.title}}</div>
                <div class="font-16">{{b.desc}}</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="content">
              <div class="area text-center">
                <div class="tit font-24 font-bold">The Swan Network</div>
                <div class="font-16">Dive deeper into Swan's governance</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="recent-activity">
      <div class="lang-max">
        <div class="tit font-27 font-bold text-center">Recent activity</div>
        <ul>
          <li v-for="l in articleData" :key="l">
            <div class="tit font-20 font-bold">{{l.title}}</div>
            <div class="cont font-16 flex-row space-between">
              <span>{{l.desc}}</span>
              <span>Article created 5 months ago</span>
            </div>
          </li>
        </ul>
        <small class="more font-16">See more</small>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { Search } from '@element-plus/icons-vue'
import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
export default defineComponent({
  components: {
    Search, ElRow, ElCol, ElButton, ElInput
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const moreData = ref([
      {
        title: 'Getting started',
        desc: 'Everything you need to start using Swan '
      },
      {
        title: 'Using Swan Mainnet',
        desc: 'Guides on how to deposit, withdraw, and more'
      },
      {
        title: 'Other topics',
        desc: 'Learn more about the Swan protocol'
      }
    ])
    const searchInput = ref('')
    const articleData = ref([
      {
        title: 'Transaction questions',
        desc: 'What to do with a stuck/pending transaction?',
        date: ''
      },
      {
        title: 'Transaction questions',
        desc: 'Managing the gas fees that make up the L2 execution fee',
        date: ''
      },
      {
        title: 'Wallet troubleshooting',
        desc: 'How do I add OP Goerli (the test network) to my wallet?',
        date: ''
      },
      {
        title: 'Transaction questions',
        desc: 'The Transaction Pool (a.k.a. Mempool)',
        date: ''
      },
      {
        title: 'Ecosystem',
        desc: 'Explore OP Mainnet with quests on Coinbase Wallet',
        date: ''
      }
    ])

    onMounted(() => { })
    return {
      system, moreData, searchInput, articleData
    }
  }
})
</script>

<style lang="less" scoped>
.help-style {
  padding: 0;
  word-break: break-word;
  color: @text-w-color;
  line-height: 1.33;
  :deep(.help-banner) {
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
      padding: 123px 0 137px;
      background: url(../../../assets/images/help/background-image01.png),
        url(../../../assets/images/help/background-image02.png);
      background-size: 330px, 175px;
      background-position: left center, right center;
      background-repeat: no-repeat, no-repeat;
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
            padding: 24px 15px 24px 65px;
            background: url(../../../assets/images/help/icon-search.png) 15px
              center no-repeat;
            background-size: 34px;
            font-size: inherit;
            color: #b0b0b0;
          }
        }
      }
    }
  }
  :deep(.help-list) {
    width: 86%;
    margin: 60px auto 120px;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .help-cont {
      .el-col {
        margin: 12px 0;
        .content {
          height: 100%;
          background-color: @bg-module-color;
          color: @text-w-color;
          border: 2px solid @bg-module-color;
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
            .tit {
              padding: 0 0 8px;
              text-transform: capitalize;
              color: @theme-color;
            }
          }
        }
      }
    }
  }
  :deep(.recent-activity) {
    width: 86%;
    margin: 0 auto 120px;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    .tit {
      padding: 10px 0;
      color: @theme-color;
    }
    ul {
      li {
        margin: 0 0 20px;
        border-bottom: 2px solid @border-color;
        .cont {
          padding: 10px 0 20px;
        }
      }
    }
    .more {
      color: @theme-color;
    }
  }
}
</style>
