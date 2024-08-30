<template>
  <div class="page-body lax-landing">
    <div class="home-header w-100 flex flex-ai-center flex-jc-between mb-32">
      <div>
        <div class="home-header-title font-30 font-bold">{{ title }}</div>
        <div class="font-16 color-subtitle">Swan Chain uses our own unique auction system. This system utilizes smart contracts, a bidding engine, and decentralized storage to create a transparent and efficient marketplace for various tasks.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = ref('Pricing')
</script>

<style lang="less" scoped>
.home-header {
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 540px) {
    flex-wrap: wrap;
  }
  &-title {
    color: var(--color-light);
  }
  &-btn {
    padding: 0.06rem 0.24rem;
    svg {
      width: 6px;
    }
  }
  &-tips {
    margin-top: 0.16rem;
    color: var(--color-light);
  }
  &-list {
    width: 100%;
  }
}
</style>
