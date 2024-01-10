<template>
  <section id="container-faucet">
    <div class="bridge-style">
      <div class="lang-max flew-row center">
        <div class="content bg">
          <div class="banner">
            <h3 class="font-24 font-bold">Get Test Tokens</h3>
            <p class="font-14">This Faucet Transfers Test Tokens And Gas Tokens On Swan PoS And ZkEVM Testnets And Its Parent Chain (Goerli). Confirm Details Before Submitting</p>
          </div>
          <div class="tit width font-16 font-bold">Network</div>
          <div class="head backgroud flex-row nowrap font-16">
            <div :class="{'active font-bold': activeItem === 'Mumbai', 'text-center':true}" @click="activeItem = 'Mumbai'">Mumbai</div>
            <div :class="{'active font-bold': activeItem === 'Goërli', 'text-center':true}" @click="activeItem = 'Goërli'">Goërli</div>
            <div :class="{'active font-bold': activeItem === 'Swan', 'text-center':true}" @click="activeItem = 'Swan'">Swan zkEVM</div>
          </div>
          <div class="mumbai-cont" v-if="activeItem === 'Mumbai'">
            <div class="form flex-row font-16">
              <div class="tit width font-16 font-bold">Select Token</div>
              <div class="top width flex-row font-14">
                <el-select v-model="fromNetwork.value" class="m-2" placeholder="Select" size="large">
                  <el-option v-for="item in fromNetwork.options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </div>
              <div class="tit width font-16 font-bold">Select Token</div>
              <div class="bottom width font-16 font-bold">
                <el-input v-model="fromNetwork.balance" placeholder="Please input" class="input-with-select">
                  <template #append>
                    <span class="button">Paste</span>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="connect font-18 font-bold text-center">
              Connect Discord to get tokens
            </div>
          </div>
        </div>
      </div>
      <div class="lang-max flew-row center">
        <div class="content">
          <div class="banner width">
            <h3 class="font-16 font-bold">How can I get bulk Test Tokens?</h3>
            <p class="font-14">The Swan Faucet Only Dispenses A Small Number Of Test Tokens Every Day. To Request In Bulk, Please Complete
              <a>This Form.</a>
            </p>
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
    const activeItem = ref('Mumbai')
    const fromNetwork = reactive({
      balance: 'Oxxxxxxxxxxxxxxxxx',
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
#container-faucet {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  :deep(.bridge-style) {
    padding: 60px 0 80px;
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
      &.bg {
        background: @bg-module-color url(../../../assets/images/bg-faucet.png)
          top right no-repeat;
        background-size: 40%;
      }
      .backgroud {
        padding: 5px 9px;
        background-color: #3a3c48;
        border-radius: 9px;
      }
      .banner {
        width: 60%;
        min-width: 300px;
        line-height: 1.5;
        h3 {
          margin: 0 0 5px;
          color: @theme-color;
        }
        p {
          a {
            color: @theme-color;
            text-decoration: underline;
          }
        }
      }
      .width {
        width: 100%;
      }
      .tit {
        padding: 8px 0;
        margin: 20px 0 0;
      }
      .head {
        margin: 0;
        div {
          width: 33.3%;
          padding: 13px;
          border-radius: 8px;
          color: @text-w-color;
          cursor: pointer;
          &.active {
            background-color: @theme-color;
            color: @white-color;
          }
        }
      }
      .form {
        .top {
          padding: 14px 0 0;
          .el-select {
            width: 100%;
            margin: 0;
            font-size: inherit;
            .el-input {
              font-size: inherit;
              .el-input__wrapper {
                height: 48px;
                background-color: #3a3c48;
                font-size: inherit;
                border: 1px solid #3a3c48;
                border-radius: 6px;
                box-shadow: none;
              }
            }
          }
        }
        .bottom {
          .el-input-group {
            background-color: #3a3c48;
            font-size: inherit;
            border: 1px solid #3a3c48;
            border-radius: 9px;
            color: #8496ae;
            .el-input__wrapper {
              width: 70%;
              font-family: inherit;
              font-size: inherit;
              box-shadow: none;
              .el-input__inner {
                font-size: inherit;
                color: inherit;
              }
            }
            .el-input-group__append {
              width: 30%;
              padding: 0;
              background-color: #3a3c48;
              border-left: 2px solid #989ba6;
              .button {
                padding: 10px;
                color: @text-w-color;
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
        margin: 40px 0 0;
        background-color: @theme-color;
        border-radius: 9px;
      }
      .span {
        opacity: 0.5;
      }
    }
  }
}
</style>
