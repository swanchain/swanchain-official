<template>
  <div class="carousel-container page-body w-100 pt-32">
    <div class="card-title linear-title font-32 font-weight-6 text-center mb-32">Powered by</div>
    <el-row class="row-bg" :gutter="32">
      <template v-for="list in slideList" :key="list">
        <el-col :xs="8" :sm="6" :md="6" :lg="6" class="mb-32 flex">
          <img :src="list.img" class="w-100" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import powerPage01 from '@/assets/img/powered/power-01.png'
import powerPage02 from '@/assets/img/powered/power-02.png'
import powerPage03 from '@/assets/img/powered/power-03.png'
import powerPage04 from '@/assets/img/powered/power-04.png'
import powerPage05 from '@/assets/img/powered/power-05.png'
import powerPage06 from '@/assets/img/powered/power-06.png'
import powerPage07 from '@/assets/img/powered/power-07.png'
import powerPage08 from '@/assets/img/powered/power-08.png'

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

<style lang="less" scoped></style>
