<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">SWAN Providers are thriving</div>
    <el-row :gutter="32">
      <template v-for="item in thrivingData" :key="item.title">
        <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" class="mb-32">
          <div class="grid-content back-linear font-bold">
            <p class="font-16 capitalize">{{ item.title }}</p>
            <p class="font-30 capitalize color-primary">{{ item.number }}</p>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
const thrivingData = ref([
  {
    title: 'Providers:',
    number: '2,200+'
  },
  {
    title: 'CPU:',
    number: '38,000+'
  },
  {
    title: 'GPU:',
    number: '1000+'
  },
  {
    title: 'Storage:',
    number: '2.7 PB+'
  },
  {
    title: 'Memory:',
    number: '460 TB+'
  }
])
</script>

<style lang="less" scoped>
.el-row {
  .el-col {
    max-width: 20%;
    flex: 0 0 20%;
    @media screen and (max-width: 992px) {
      max-width: 33.33%;
      flex: 0 0 33.33%;
    }
    @media screen and (max-width: 540px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
    .grid-content {
      width: calc(100% - 0.32rem);
      height: calc(100% - 0.32rem);
      padding: 0.16rem;
      border-radius: 0.08rem;
      box-sizing: content-box;
    }
  }
}
</style>
