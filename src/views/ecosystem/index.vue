<template>
  <div class="ecosystem-style">
    <div class="ecosystem-banner">
      <div class="banner lang-max">
        <el-row class="banner-cont flex-row" justify="space-between">
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <div class="font-16">
              <h1 class="font-40 font-bold">
                <i>Swan Chain Ecosystem</i>
              </h1>
              <h3 class="font-18 weight-4 d">An overview of the apps and integrations in the Swan Chain Ecosystem.</h3>
              <div class="el flex-row">
                <a class="font-20">Add your app</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="ecosystem-list">
      <div class="lang-max">
        <ul class="list flex-row space-between font-14">
          <li v-for="t in tabData" :key="t" :class="{'active': t.active}">
            {{t.name}}
          </li>
        </ul>
        <el-row class="ecosystem-cont" :gutter="28">
          <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6" v-for="b in fundData" :key="b">
            <div class="content">
              <div class="image flex-row space-between">
                <img :src="b.img" />
                <div class="flex-row font-12">
                  <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_254_3239)">
                      <g clip-path="url(#clip1_254_3239)">
                        <path d="M7.07032 4.05078L8.2422 4.54297L8.71095 5.71485C8.75782 5.76172 8.80469 5.8086 8.85156 5.8086C8.92189 5.8086 8.96876 5.76172 8.9922 5.71485L9.48438 4.54297L10.6562 4.05078C10.7031 4.02735 10.7266 3.98047 10.7266 3.91016C10.7266 3.86328 10.7031 3.81641 10.6562 3.76954L9.48438 3.30078L8.9922 2.12891C8.96876 2.08203 8.92189 2.03516 8.87501 2.03516C8.8047 2.03516 8.75781 2.08203 8.73439 2.12891L8.2422 3.30078L7.07032 3.79297C7.02345 3.81641 7.00001 3.86328 7.00001 3.9336C7.00001 3.98047 7.02345 4.02735 7.07032 4.05078ZM12.9297 7.19141L11.9922 6.79297L11.5938 5.87891C11.5703 5.83204 11.5469 5.8086 11.5 5.8086C11.4531 5.8086 11.4062 5.83204 11.3828 5.87891L10.9844 6.79297L10.0703 7.19141C10.0234 7.21485 9.97656 7.26172 9.97656 7.3086C9.97656 7.35547 10.0234 7.37891 10.0703 7.40235L10.9844 7.80078L11.3828 8.73828C11.4062 8.76172 11.4297 8.8086 11.4766 8.8086C11.5234 8.8086 11.5703 8.76172 11.5938 8.73828L11.9922 7.80078L12.9062 7.40235C12.9531 7.37891 13 7.33204 13 7.28516C13 7.23828 12.9531 7.21485 12.9297 7.19141ZM9.53125 8.31641L7.07032 7.94141L5.96876 5.71485C5.87501 5.52735 5.68751 5.41016 5.47657 5.41016C5.28907 5.41016 5.10157 5.52735 5.00782 5.71485L3.90626 7.94141L1.44532 8.31641C1.00001 8.36328 0.835943 8.92578 1.16407 9.23047L2.92189 10.9648L2.52345 13.4258C2.45312 13.754 2.73439 14.0352 3.03907 14.0352C3.13282 14.0352 3.20312 14.0352 3.29689 13.9883L5.50001 12.8164L7.6797 13.9883C7.8672 14.0821 8.07813 14.0586 8.2422 13.9414C8.4297 13.8243 8.5 13.6133 8.47656 13.4258L8.0547 10.9648L9.83595 9.23047C10.1406 8.92578 9.97656 8.36328 9.53125 8.31641ZM6.83595 10.5664L7.16407 12.4414L5.50001 11.5508L3.81251 12.4414L4.14063 10.5664L2.78126 9.25391L4.65626 8.97266L5.50001 7.28516L6.32032 8.97266L8.19531 9.25391L6.83595 10.5664Z"
                          fill="#447DFF" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_254_3239">
                        <rect width="17" height="20" fill="white" transform="translate(0 0.0351562)" />
                      </clipPath>
                      <clipPath id="clip1_254_3239">
                        <rect width="13" height="13" fill="white" transform="translate(0 1.53516)" />
                      </clipPath>
                    </defs>
                  </svg>
                  Live incentives
                </div>
              </div>
              <div class="area font-14">
                <div class="tit font-18 font-bold">
                  <i>{{b.name}}</i>
                </div>
                <div class="source font-12 weight-3">{{b.source}}</div>
                <div class="font-14">{{b.title}}</div>
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
import { ElRow, ElCol, ElButton, ElDropdown, ElInput } from 'element-plus'
export default defineComponent({
  components: {
    ElRow, ElCol, ElButton, ElDropdown, ElInput
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
        img: require(`@/assets/images/ecosystem/ecosystem-01.png`),
        title: 'Save money and win prizes! PoolTogether is a no loss prize savings protocol. The more you deposit the better your chances to win!',
        name: 'PoolTogether',
        source: 'app.pooltogether.com'
      },
      {
        img: require(`@/assets/images/ecosystem/ecosystem-02.png`),
        title: 'The Uniswap protocol is a peer-to-peer system designed for exchanging ERC20 Tokens on EVM-compatible blockchains.',
        name: 'Uniswap',
        source: 'uniswap.org'
      },
      {
        img: require(`@/assets/images/ecosystem/ecosystem-03.png`),
        title: 'Beefy Finance is a Multi-Chain Yield Optimizer Protocol.',
        name: 'Beefy',
        source: 'beefy.com'
      },
      {
        img: require(`@/assets/images/ecosystem/ecosystem-04.png`),
        title: 'OpenSea is the first & leading global NFT marketplace.',
        name: 'OpenSea',
        source: 'opensea.io'
      }
    ])
    const tabData = ref([
      {
        name: 'All apps',
        active: false
      },
      {
        name: 'Incentives',
        active: false
      },
      {
        name: 'New to web3',
        active: true
      },
      {
        name: 'DeFi',
        active: false
      },
      {
        name: 'NFT',
        active: false
      },
      {
        name: 'Bridge',
        active: false
      },
      {
        name: 'On-ramp',
        active: false
      },
      {
        name: 'Wallet',
        active: false
      },
      {
        name: 'Tool',
        active: false
      },
      {
        name: 'DAO',
        active: false
      }
    ])

    onMounted(() => { })
    return {
      system, fundData, tabData
    }
  }
})
</script>

<style lang="less" scoped>
.ecosystem-style {
  padding: 0;
  word-break: break-word;
  line-height: 1.33;
  .ecosystem-banner {
    padding: 100px 0 30px;
    margin: auto;
    @media screen and (max-width: 768px) {
      padding: 150px 0 30px;
    }
    .banner {
      background-color: @bg-module-color;
      border-radius: 30px;
      .banner-cont {
        padding: 83px 0 126px;
        margin: 0 80px 0 126px;
        background: url(../../assets/images/bg-ecosystem.png) bottom right
          no-repeat;
        background-size: auto calc(100% - 10px);
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
          &.d {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .el {
          margin: 30px 0 0;
          .el-button,
          a {
            float: left;
            padding: 14px 37px;
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
        .img {
          border-radius: 11px;
        }
      }
    }
  }
  :deep(.ecosystem-list) {
    margin: 0 auto 120px;
    .ecosystem-cont {
      .el-col {
        margin: 0 0 34px;
        @media screen and (max-width: 768px) {
          margin: 0 0 68px;
        }
        .content {
          height: calc(100% - 127px);
          padding: 30px 30px 95px;
          background-color: @bg-module-color;
          color: @text-w-color;
          border: 2px solid @bg-module-color;
          border-radius: 10px;
          overflow: hidden;
          @media screen and (max-width: 768px) {
            height: calc(100% - 80px);
            padding: 40px 60px;
            border-radius: 20px;
          }
          &:hover {
            border-color: @theme-color;
          }
          .image {
            align-items: flex-start;
            color: @theme-color;
            img {
              height: 80px;
            }
          }
          .area {
            .small {
              display: inline;
              padding: 4px 14px;
              background-color: @theme-color;
              border-radius: 30px;
            }
            .tit {
              padding: 23px 0 0;
              color: @theme-color;
            }
            .source {
              padding: 10px 0 20px;
            }
          }
        }
      }
    }
    ul {
      padding: 0 0 30px;
      overflow-x: auto;
      li {
        padding: 18px 34px;
        margin: 20px 0 0;
        border: 1px solid @theme-color;
        border-radius: 100px;
        cursor: pointer;
        &:hover,
        &.active {
          background-color: @theme-color;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
