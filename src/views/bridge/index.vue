<template>
  <section id="container-bridge">
    <div class="bridge-style">
      <div class="lang-max flew-row center">
        <div class="content">
          <div class="head flex-row nowrap font-16">
            <div :class="{'active font-bold': activeItem === 'Deposit', 'text-center':true}">Deposit</div>
            <div :class="{'active font-bold': activeItem === 'Withdraw', 'text-center':true}">Withdraw</div>
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
import { ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem } from 'element-plus'
import CarouselContainer from '@/components/CarouselContainer.vue'
export default defineComponent({
  components: {
    CarouselContainer,
    ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const activeItem = ref('Deposit')

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      activeItem
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
  color: @theme-color;
  :deep(.bridge-style) {
    padding: 15px 0;
    .content {
      width: 38%;
      max-width: 600px;
      min-width: 300px;
      padding: 24px 24px 29px;
      margin: 15px auto;
      border-radius: 10px;
      box-shadow: 0 0 8px #ededed;
      .head {
        padding: 5px 9px;
        background-color: #ebeff9;
        border-radius: 9px;
        div {
          width: 50%;
          padding: 13px;
          border-radius: 8px;
          color: @text-color;
          &.active {
            background-color: @white-color;
            color: @black-color;
          }
        }
      }
    }
  }
}
</style>
