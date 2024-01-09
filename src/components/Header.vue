<template>
  <section id="container-header" :class="{'bg-color-none': scrollTopVal > 400}">
    <div class="header lang-max flex-row space-between nowrap font-16">
      <img :src="nebulaLogo" class="logo-img" alt='Nebula Block' @click="goMain" />
      <div class="el-menu-right flex-row menu-width-mit">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :teleported="true" @select="handleSelect">
          <el-menu-item index="Ecosystem">
            <span class="mit font-16">{{$t('menu.Ecosystem')}}</span>
          </el-menu-item>
          <el-menu-item index="Bridge">
            <span class="mit font-16">{{$t('menu.Bridge')}}</span>
          </el-menu-item>
          <el-menu-item index="Developers">
            <span class="mit font-16">{{$t('menu.Developers')}}</span>
          </el-menu-item>
          <el-menu-item index="Community">
            <span class="mit font-16">{{$t('menu.Community')}}</span>
          </el-menu-item>
          <el-menu-item index="Blog">
            <span class="mit font-16">{{$t('menu.Blog')}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onBeforeUnmount, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  ArrowDown, CaretBottom
} from '@element-plus/icons-vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus"
export default defineComponent({
  components: {
    ArrowDown, CaretBottom,
    ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const emailAddress = computed(() => (store.state.emailAddress))
    const contactShow = computed(() => (String(store.state.contactShow) === 'true'))
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require("@/assets/images/SWAN_logo_02.png")
    const scrollTopVal = ref(0)
    const activeIndex = ref('1')
    const dataShow = ref(false)

    const scrollTop = () => {
      nextTick(() => {
        let elVal = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTopVal.value = elVal
      })
    }
    function goMain () {
      router.push({ name: 'dashboard' })
      activeIndex.value = '1'
    }
    async function handleSelect (key, keyPath) {
      if (key === 'Ecosystem') router.push({ name: 'aboutUs' })
      if (key === 'Bridge') router.push({ name: 'bridge' })
      else if (key === 'blog') system.$commonFun.goLink('https://nebulablock.medium.com/')
    }
    // what-we-do
    async function activeMenu (row) {
      const nameMenu = row || route.name
      if (nameMenu.indexOf('dashboard') > -1) activeIndex.value = '1'
      else if (nameMenu.indexOf('aboutUs') > -1) activeIndex.value = 'Ecosystem'
      else if (nameMenu.indexOf('bridge') > -1) activeIndex.value = 'Bridge'
      else if (nameMenu.indexOf('blog') > -1) activeIndex.value = 'Blog'
      else activeIndex.value = '1'
    }
    function handleLogin (dia) {
      dataShow.value = dia
      contactShow.value = dia
    }
    onMounted(() => {
      activeMenu()
      window.addEventListener('scroll', scrollTop, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollTop, true);
    })
    watch(route, (to, from) => {
      activeMenu()
      window.scrollTo(0, 0)
    })
    return {
      t,
      system,
      language,
      emailAddress,
      nebulaLogo,
      scrollTopVal,
      activeIndex,
      dataShow,
      contactShow,
      handleSelect, goMain, handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
#container-header {
  // transition: all 0.2s;
  &.bg-color {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
  .header {
    margin: auto;
    padding: 12px 0;
    font-family: "Inter-SemiBold";
    @media screen and (min-width: 2160px) {
      padding: 6px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 24px 0;
    }
    .logo-img {
      height: 37px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        height: 55px;
      }
      @media screen and (max-width: 767px) {
        height: 74px;
      }
      @media screen and (max-width: 540px) {
        height: 111px;
      }
    }
    .el-menu-right {
      justify-content: flex-end;
      flex-wrap: nowrap;
      :deep(.el-menu) {
        width: calc(100% - 170px);
        height: auto;
        background-color: transparent;
        border: 0;
        justify-content: flex-end;
        .el-menu-item,
        .el-sub-menu,
        .el-sub-menu__title {
          padding: 0;
          margin-left: 50px;
          background-color: transparent !important;
          border-bottom: 1.6px solid transparent;
          color: @black-color;
          line-height: 1.5;
          text-transform: uppercase;
          @media screen and (min-width: 2160px) {
            line-height: 35px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:hover,
          &.is-active {
            border-bottom: 1.6px solid transparent;
            color: @theme-color;
            .el-sub-menu__title {
              color: inherit;
            }
            .mit {
              border-bottom: 2px solid @theme-color;
            }
          }
          .el-icon {
            width: 40px;
            height: 40px;
            @media screen and (max-width: 992px) {
              width: 50px;
              height: 50px;
            }
            @media screen and (max-width: 599px) {
              width: 90px;
              height: 90px;
            }
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .el-sub-menu__icon-arrow {
            position: static;
            width: 10px;
            height: 10px;
            right: 10px;
            margin-left: 8px;
            margin-top: -3px;
            background: url(../assets/images/dashboard/menu.png) no-repeat
              center;
            background-size: 100%;
            // @media screen and (max-width: 992px) {
            //   width: 20px;
            //   height: 20px;
            // }
            svg {
              display: none;
            }
          }
        }
        .el-sub-menu__title {
          border: 0 !important;
        }
      }
    }
    .right {
      white-space: nowrap;
      color: @black-color;
      // @media screen and (max-width: 600px) {
      //   display: none;
      // }
      .login {
        background-color: @theme-color;
        padding: 6px 16px;
        margin: 0 45px;
        border: 1px solid @theme-color;
        border-radius: 6px;
        color: @white-color;
        cursor: pointer;
        transition: all 0.2s;
        @media screen and (max-width: 768px) {
          padding: 9px 24px;
          margin: 0 0 0 45px;
          border-radius: 12px;
        }
        @media screen and (max-width: 600px) {
          padding: 12px 32px;
          border-radius: 18px;
        }
        @media screen and (max-width: 540px) {
          padding: 15px 40px;
        }
        &:hover {
          background-color: transparent;
          color: @theme-color;
        }
      }
      i.mit-icon {
        width: 25px;
        height: 25px;
        background: url(../assets/images/i18n.png) no-repeat left 1px;
        background-size: 90%;
        @media screen and (max-width: 768px) {
          width: 20px;
          height: 20px;
        }
      }
      span.mit {
        margin: 0 6px;
        color: @black-color;
        line-height: 25px;
        @media screen and (max-width: 768px) {
          margin: 0 5px;
        }
      }
      .el-dropdown {
        @media screen and (max-width: 768px) {
          display: none;
        }
        * {
          outline: none !important;
          cursor: pointer;
        }
        // cursor: pointer;
        outline: none;
        border: 0;
        i {
          margin: 0;
          color: @black-color;
          &.el-icon--right {
            margin: -3px 0 0;
          }
        }
      }
      .sign {
        .el-dropdown {
          @media screen and (max-width: 768px) {
            display: block;
          }
        }
      }
      .language {
        .tit {
          span {
            color: @black-color;
          }
        }
      }
      .log-in {
        margin-right: 0.3rem;
        .tit {
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.i18n-popper {
  display: none;
  * {
    outline: none !important;
  }
  .el-dropdown-link:focus-visible {
    outline: none !important;
  }
  .language-menu {
    min-width: 110px;
    padding: 4px 0;
    white-space: nowrap;
    color: @black-color;
    // @media screen and (max-width: 600px) {
    //   display: none;
    // }
    &.is-disabled {
      opacity: 0.4;
      &:hover {
        span.mit {
          text-decoration: none;
        }
      }
    }
    &:hover {
      span.mit {
        text-decoration: underline;
      }
    }
    i.mit-icon {
      width: 18px;
      height: 18px;
      margin: 0 10px 0 0;
      background: url(../assets/images/i18n-en.png) no-repeat left center;
      background-size: 100%;
      @media screen and (max-width: 768px) {
        margin: 0 5px 0 0;
      }
      &.cn {
        background: url(../assets/images/i18n-cn.png) no-repeat left center;
        background-size: 100%;
      }
    }
    span.mit {
      padding-top: 4px;
      color: @black-color;
      line-height: 1;
    }
  }
}

.menu-popper {
  background-color: transparent;
  border: 0 !important;
  border-radius: 0;
  // .el-popper__arrow {
  //   display: none;
  // }
  .el-dropdown-menu {
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 0 0 10px @black-color;
    li {
      padding: 6px 16px;
      background-color: @white-color;
      color: @black-color !important;
      &:hover {
        background-color: rgba(233, 233, 233, 0.8);
      }
      span {
        min-width: 120px;
        line-height: 1.7;
        text-align: center;
      }
    }
  }
}
</style>

