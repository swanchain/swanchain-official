<template>
  <div class="wrapper" id="wrapper" ref="area">
    <el-container>
      <el-header>
        <el-alert center class="alert-body">
          <template #title>
            <span class="font-16">FilSwan Rebrands to Swan, Signalling Expansion from Storage to Computing</span>
          </template>
        </el-alert>
        <v-head></v-head>
      </el-header>
      <el-main>
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <el-backtop :right="20" :bottom="50" />
        </div>
        <v-foot v-if="route.name === 'dashboard' || route.name === 'aboutUs' || route.name === 'blog' || route.name === 'ecosystem'"></v-foot>
        <v-foot-short v-else></v-foot-short>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vFoot from './Footer.vue';
import vFootShort from './FooterShort.vue';
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElConfigProvider, ElBacktop, ElContainer, ElHeader, ElFooter, ElMain, ElRow, ElCol, ElAlert } from "element-plus"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
export default defineComponent({
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const language = computed(() => (store.state.languageNB))
    const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

    // const toggle = () => {
    //   language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
    // }
    // watch(language, () => {
    //   toggle()
    // })
    onMounted(() => { })
    return {
      route,
      locale
    }
  },
  components: {
    vFoot, vFootShort, vHead,
    ElConfigProvider, ElBacktop, ElContainer, ElHeader, ElFooter, ElMain, ElRow, ElCol, ElAlert
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  .content {
    width: 100%;
    :deep(.el-backtop) {
      background-color: @white-color;
      color: @theme-color;
      box-shadow: 0 0 15px @theme-color-opacity;
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 600px) {
        width: 110px;
        height: 110px;
      }
      .el-icon,
      svg {
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
        @media screen and (max-width: 600px) {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .el-container {
    .el-header,
    .el-footer,
    .el-main {
      width: 100%;
      height: auto;
      padding: 0;
    }
    .el-main {
      display: flex;
      min-height: 100vh;
      padding-top: 100px;
      align-items: flex-start;
      align-content: space-between;
      flex-wrap: wrap;
    }
    .el-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: @bg-color;
      border-bottom: 2px solid @border-color;
      &.bg-header {
        background-color: @white-color;
      }
    }
    .el-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      padding: 100px 0;
      @media screen and (max-width: 768px) {
        padding: 150px 0;
      }
      @media screen and (max-width: 600px) {
        padding: 200px 0;
      }
    }
    .bg {
    }
  }
  :deep(.alert-body) {
    padding: 0;
    background-color: @theme-color;
    color: @white-color;
    border-radius: 0;
    line-height: 2.18;
    @media screen and (max-width: 768px) {
      line-height: 1.5;
    }
    .el-alert__title {
      line-height: inherit;
    }
    .el-icon {
      width: 14px;
      height: 14px;
      color: inherit;
      @media screen and (min-width: 1920px) {
        width: 16px;
        height: 16px;
      }
      @media screen and (min-width: 2160px) {
        margin-top: -6px;
        width: 18px;
        height: 18px;
      }
      svg {
        width: inherit;
        height: inherit;
      }
    }
  }
}
</style>

<style lang="less">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
</style>

