<template>
  <footer-support v-if="showBg"></footer-support>
</template>

<script setup lang="ts">
import footerSupport from './footer-support.vue'

const ROUTE_WHITE = ['/', '/ecosystem/Apps', '/about-us', '/privacy-policy', '/terms']
const showBg = ref(false)
const route = useRoute()
if (ROUTE_WHITE.includes(route.path)) {
  showBg.value = true
}
const router = useRouter()
router.beforeEach(to => {
  showBg.value = !!ROUTE_WHITE.includes(to.path)
})
</script>

<style scoped lang="less"></style>
