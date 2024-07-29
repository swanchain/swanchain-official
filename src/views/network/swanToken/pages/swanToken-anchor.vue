<template>
  <div class="anchor-container mt-16">
    <div class="anchor">
      <div class="anchor-content w-100">
        <template v-for="item in anchor" :key="item.sourceId">
          <a :href="`#${item.targetId}`" :id="item.sourceId" :class="{ 'anchor-content-item font-14': true, active: item.actived, 'main-title': item.mainTitle }">
            {{ item.title }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { anchor } from '../config'
</script>

<style scoped lang="less">
.anchor-container {
  position: relative;
  position: fixed;
  top: 1rem;
  width: 25%;
  max-width: 280px;
  @media screen and (max-width: 767px) {
    position: relative !important;
    top: 0;
    width: 100%;
    max-width: none;
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
      padding: 0.1rem 0 !important;
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
