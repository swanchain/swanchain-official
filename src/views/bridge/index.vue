<template>
  <section id="container-bridge">
    <div class="bridge-style">
      <div class="lang-max flew-row center">
        <div class="content">
          <div class="head backgroud flex-row nowrap font-16">
            <div :class="{'active font-bold': activeItem === 'Deposit', 'text-center':true}" @click="activeItem = 'Deposit'">Deposit</div>
            <div :class="{'active font-bold': activeItem === 'Withdraw', 'text-center':true}" @click="activeItem = 'Withdraw'">Withdraw</div>
          </div>
          <div class="deposit-cont" v-if="activeItem === 'Deposit'">
            <div class="form backgroud flex-row font-16">
              <div class="top flex-row font-14">
                <span class="span">From</span>
                <el-select v-model="fromNetwork.value" class="m-2" placeholder="Select" size="large">
                  <el-option v-for="item in fromNetwork.options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </div>
              <div class="bottom font-20 font-bold">
                <el-input v-model="fromNetwork.balance" placeholder="Please input" class="input-with-select">
                  <template #append>
                    <el-select v-model="fromNetwork.value" class="m-2" placeholder="Select" size="large">
                      <el-option v-for="item in fromNetwork.options" :key="item.value" :label="item.unit" :value="item.value" />
                    </el-select>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="up flex-row center font-16">
              <div class="width-icon small">
                <Bottom />
              </div>
            </div>
            <div class="form backgroud flex-row font-14">
              <div class="top flex-row">
                <span>To</span>
                <div class="net flex-row"><img src="@/assets/images/network/swan-mainnet.png" />
                  <b>Swan Chain Mainnet</b>
                </div>
                <div class="text">You will receive: 0 ETH</div>
              </div>
            </div>
            <div class="connect font-18 font-bold text-center">
              Connect wallet
            </div>
          </div>
          <div class="withdraw-cont" v-else>
            <div class="radio-style font-16">
              <el-radio-group v-model="fromNetwork.radio">
                <el-radio label="1" size="large" border>
                  <div class="r">
                    <div class="flex-row font-16 font-bold">
                      <img src="@/assets/images/network/Vector.png" width="18" />
                      <b>Use a third party bridge</b>
                    </div>
                    <div class="t font-14 span">This Usually Takes Under 20min<br />Bridge To Multiple Chains, Limited To Certain Tokens</div>
                  </div>
                </el-radio>
                <el-radio label="2" size="large" border>
                  <div class="r">
                    <div class="flex-row font-16 font-bold">
                      <img src="@/assets/images/network/Vector-01.png" width="18" />
                      <b>Use the official bridge</b>
                    </div>
                    <div class="t font-14 span">This Usually Takes 7 Days<br />Bridge Any Token To Ethereum Mainnet</div>
                  </div>
                </el-radio>
              </el-radio-group>
            </div>
            <div class="form backgroud flex-row font-16">
              <div class="top flex-row font-14">
                <span>From</span>
                <div class="net flex-row"><img src="@/assets/images/network/swan-mainnet.png" />
                  <b>Swan Chain Mainnet</b>
                </div>
              </div>
              <div class="bottom font-20 font-bold">
                <el-input v-model="fromNetwork.balance" placeholder="Please input" class="input-with-select">
                  <template #append>
                    <el-select v-model="fromNetwork.value" class="m-2" placeholder="Select" size="large">
                      <el-option v-for="item in fromNetwork.options" :key="item.value" :label="item.unit" :value="item.value" />
                    </el-select>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="up flex-row center font-16">
              <div class="width-icon small">
                <Bottom />
              </div>
            </div>
            <div class="form backgroud flex-row font-14">
              <div class="top flex-row">
                <span>To</span>
                <div class="net flex-row"><img src="@/assets/images/network/swan-mainnet.png" />
                  <b>Swan Chain Mainnet</b>
                </div>
                <div class="text">You will receive: 0 ETH</div>
              </div>
            </div>
            <div class="connect font-18 font-bold text-center">
              Connect wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElSelect, ElOption, ElInput, ElRadioGroup, ElRadio } from 'element-plus'
import { Bottom } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Bottom,
    ElRow, ElCol, ElButton, ElSelect, ElOption, ElInput, ElRadioGroup, ElRadio
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const activeItem = ref('Deposit')
    const fromNetwork = reactive({
      balance: '0',
      value: 'Ethereum',
      options: [
        {
          value: 'Ethereum',
          label: 'Ethereum Mainnet',
          unit: 'ETH'
        }],
      radio: '1'
    })

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      activeItem,
      fromNetwork
    }
  }
})
</script>

<style lang="less" scoped>
#container-bridge {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  :deep(.bridge-style) {
    padding: 60px 0 80px;
    @media screen and (max-width: 992px) {
      padding: 160px 0 80px;
    }
    @media screen and (max-width: 600px) {
      padding: 240px 0 80px;
    }
    .content {
      width: 38%;
      max-width: 550px;
      min-width: 300px;
      padding: 24px 24px 29px;
      margin: 15px auto;
      background-color: @bg-module-color;
      border-radius: 10px;
      // box-shadow: 0 0 8px #ededed;
      @media screen and (min-width: 2160px) {
        max-width: 600px;
      }
      @media screen and (max-width: 1200px) {
        width: 50%;
        max-width: none;
      }
      @media screen and (max-width: 992px) {
        width: 70%;
        max-width: none;
      }
      @media screen and (max-width: 600px) {
        width: 80%;
      }
      .backgroud {
        padding: 5px 9px;
        background-color: #3a3c48;
        border-radius: 9px;
      }
      .head {
        margin: 0 0 22px;
        div {
          width: 50%;
          padding: 13px;
          border-radius: 8px;
          color: @text-w-color;
          cursor: pointer;
          @media screen and (max-width: 992px) {
            padding: 26px;
          }
          @media screen and (max-width: 600px) {
            padding: 39px;
          }
          &.active {
            background-color: @theme-color;
            color: @white-color;
          }
        }
      }
      .radio-style {
        margin: 0;
        .el-radio-group {
          display: block;
          width: 100%;
          .el-radio {
            flex-direction: row-reverse;
            justify-content: space-between;
            width: 100%;
            height: auto;
            padding: 17px 19px;
            margin: 0 0 18px;
            background-color: #3a3c48;
            border-radius: 9px;
            line-height: 1.3;
            &.is-checked {
              background-color: @white-color;
              border: 2px solid @theme-color;
              .r {
                color: #020202;
                .t {
                  color: #020202;
                }
              }
            }
            .r {
              color: @white-color;
              b {
                margin: 0 0 0 10px;
              }
              .t {
                margin: 10px 0 0;
                color: @text-w-color;
              }
            }
          }
        }
      }
      .form {
        .top {
          padding: 14px 11px;
          @media screen and (max-width: 992px) {
            padding: 28px 22px;
          }
          @media screen and (max-width: 600px) {
            padding: 42px 33px;
          }
          .el-select {
            margin: 0 10px;
            font-size: inherit;
            .el-input {
              font-size: inherit;
              .el-input__wrapper {
                font-size: inherit;
                border: 1px solid @text-w-color;
                border-radius: 6px;
                box-shadow: none;
              }
            }
          }
        }
        .bottom {
          width: calc(100% - 22px);
          padding: 0 11px 24px;
          @media screen and (max-width: 992px) {
            padding: 0 22px 48px;
          }
          @media screen and (max-width: 600px) {
            padding: 0 33px 72px;
          }
          .el-input-group {
            background-color: @text-w-color;
            border: 1px solid #bbc7d8;
            border-radius: 9px;
            color: #8496ae;
            .el-input__wrapper {
              width: 70%;
              font-family: inherit;
              font-size: inherit;
              box-shadow: none;
              @media screen and (max-width: 992px) {
                height: 40px;
              }
              @media screen and (max-width: 600px) {
                height: 80px;
              }
              .el-input__inner {
                font-size: inherit;
                color: inherit;
              }
            }
            .el-input-group__append {
              padding: 0;
              width: 30%;
              border-left: 2px solid #bbc7d8;
              .el-select {
                width: 100%;
                margin: 0;
                .el-input__wrapper {
                  background-color: @text-w-color;
                }
              }
            }
          }
        }
        .net,
        b {
          margin: 0 10px;
        }
        .text {
          width: 100%;
          margin: 10px 0 0;
        }
      }
      .up {
        padding: 10px;
        svg {
          fill: @theme-color;
          color: @theme-color;
        }
      }
      .connect {
        padding: 22px;
        margin: 29px 0 0;
        background-color: @theme-color;
        border-radius: 9px;
        @media screen and (max-width: 992px) {
          padding: 44px;
        }
        @media screen and (max-width: 600px) {
          padding: 66px;
        }
      }
      .span {
        opacity: 0.5;
      }
    }
  }
}
</style>
