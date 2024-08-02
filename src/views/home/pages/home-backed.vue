<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Backed By</div>
    <el-row class="row-bg" :gutter="32" justify="center">
      <template v-for="list in slideList.slice(0, 4)" :key="list">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" class="mb-32 flex">
          <img :src="list.img" class="funders-img" />
        </el-col>
      </template>
    </el-row>
    <el-row class="row-bg" :gutter="32" justify="center">
      <template v-for="list in slideList.slice(4)" :key="list">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" class="mb-32 flex">
          <img :src="list.img" class="funders-img" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import powerPage01 from '@/assets/img/Backed/Backed-01.png'
import powerPage02 from '@/assets/img/Backed/Backed-02.png'
import powerPage03 from '@/assets/img/Backed/Backed-03.png'
import powerPage04 from '@/assets/img/Backed/Backed-04.png'
import powerPage05 from '@/assets/img/Backed/Backed-05.png'
import powerPage06 from '@/assets/img/Backed/Backed-06.png'
import powerPage07 from '@/assets/img/Backed/Backed-07.png'
import powerPage08 from '@/assets/img/Backed/Backed-08.png'

const slideList = ref([
  {
    img: powerPage01
  },
  {
    img: powerPage02
  },
  {
    img: powerPage03
  },
  {
    img: powerPage04
  },
  {
    img: powerPage05
  },
  {
    img: powerPage06
  },
  {
    img: powerPage07
  },
  {
    img: powerPage08
  }
])
</script>

<style lang="less" scoped>
.el-row {
  .el-col {
    max-width: auto;
    flex: 0 0 auto;
    @media screen and (max-width: 992px) {
      max-width: 33.33%;
      flex: 0 0 33.33%;
    }
    @media screen and (max-width: 540px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
    .grid-content {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: content-box;
    }
  }
}
.funders-img {
  width: auto;
  max-width: 100%;
  max-height: 0.72rem;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: none;
  }
}
</style>
