<template>
  <section id="container-bridge">
    <div class="bridge-style">
      <div class="lang-max flew-row center">
        <div class="content">
          <div class="head backgroud flex-row nowrap font-16">
            <div :class="{'active font-bold': activeItem === 'Deposit', 'text-center':true}">Deposit</div>
            <div :class="{'active font-bold': activeItem === 'Withdraw', 'text-center':true}">Withdraw</div>
          </div>
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
              <b>Swan Chain Mainnet</b>
            <div class="text">You will receive: 0 ETH</div>
            </div>
          </div>
          <div class="connect font-18 font-bold text-center">
            Connect wallet
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
import { ElRow, ElCol, ElButton, ElSelect, ElOption, ElInput } from 'element-plus'
import { Bottom } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Bottom,
    ElRow, ElCol, ElButton, ElSelect, ElOption, ElInput
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
        }]
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
    padding: 15px 0;
    .content {
      width: 38%;
      max-width: 600px;
      min-width: 300px;
      padding: 24px 24px 29px;
      margin: 15px auto;
      background-color: #1e2026;
      border-radius: 10px;
      // box-shadow: 0 0 8px #ededed;
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
          &.active {
            background-color: @theme-color;
            color: @white-color;
          }
        }
      }
      .form {
        .top {
          padding: 14px 11px;
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
        .span {
          opacity: 0.5;
        }
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
        padding: 23px;
        margin: 29px 0 0;
        background-color: @theme-color;
        border-radius: 9px;
      }
    }
  }
}
</style>
