<template>
  <div class="anchor-container mt-16">
    <div class="anchor">
      <div class="anchor-content w-100">
        <template v-for="item in anchor" :key="item.sourceId">
          <a :href="`#${item.targetId}`" @click="goLink(item)" :id="item.sourceId" :class="{ 'anchor-content-item font-14': true, active: item.actived && route.params.type === 'General-Information', 'main-title': item.mainTitle }">
            {{ item.title }}
          </a>
        </template>
        <template v-for="item in anchorProvider" :key="item.sourceId">
          <a :href="`#${item.targetId}`" @click="goLink(item)" :id="item.sourceId" :class="{ 'anchor-content-item font-14': true, active: item.actived && route.params.type === 'Providers', 'main-title': item.mainTitle }">
            {{ item.title }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toPage } from '@/hooks/router';
import { anchor, anchorProvider } from '../config'
const route = useRoute()
const router = useRouter()

function goLink(row: any) {
  if (!row.mainTitle) return
  toPage(router, row.targetId === 'Swan-Providers' ? '/network/about-swan/Providers' : '/network/about-swan/General-Information')
}
</script>

<style scoped lang="less">
.anchor-container {
  position: relative;
  position: fixed;
  top: 1rem;
  @media screen and (max-width: 767px) {
    position: relative !important;        
    top: 0;
  }
}
.anchor {
  padding: 0;
  overflow: hidden;
  &-content {
    border: 0;
    &-item {
      display: block;
      cursor: pointer;
      color: var(--color-subtitle);
      padding: 0.1rem 0 0.1rem 0.16rem !important;
      text-decoration: none;
      &.main-title {
        padding: 0.1rem 0.08rem !important;
      }
      &.active {
        color: var(--color-primary);
      }
    }
  }
  &-btn {
    padding: 0.16rem 0;
  }
}
</style>
