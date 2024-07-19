<template>
  <div class="page-body w-100 pt-32">
    <div class="font-24 font-bold text-center mb-32">FUNDED BY</div>
    <el-row class="row-bg" justify="center" :gutter="24">
      <template v-for="list in slideList" :key="list">
        <el-col :xs="8" :sm="6" :md="6" :lg="4" class="mb-24">
          <img :src="list.img" class="w-100" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import partnetPage01 from '@/assets/img/aboutUs/funded/funded-01.png'
import partnetPage02 from '@/assets/img/aboutUs/funded/funded-02.png'
import partnetPage03 from '@/assets/img/aboutUs/funded/funded-03.png'
import partnetPage04 from '@/assets/img/aboutUs/funded/funded-04.png'
import partnetPage05 from '@/assets/img/aboutUs/funded/funded-05.png'
import partnetPage06 from '@/assets/img/aboutUs/funded/funded-06.png'
import partnetPage07 from '@/assets/img/aboutUs/funded/funded-07.png'
import partnetPage08 from '@/assets/img/aboutUs/funded/funded-08.png'
import partnetPage09 from '@/assets/img/aboutUs/funded/funded-09.png'
import partnetPage10 from '@/assets/img/aboutUs/funded/funded-10.png'
import partnetPage11 from '@/assets/img/aboutUs/funded/funded-11.png'
import partnetPage12 from '@/assets/img/aboutUs/funded/funded-12.png'
import partnetPage13 from '@/assets/img/aboutUs/funded/funded-13.png'
import partnetPage14 from '@/assets/img/aboutUs/funded/funded-14.png'
import partnetPage15 from '@/assets/img/aboutUs/funded/funded-15.png'
import partnetPage16 from '@/assets/img/aboutUs/funded/funded-16.png'
import partnetPage17 from '@/assets/img/aboutUs/funded/funded-17.png'

const slideList = ref([
  {
    img: partnetPage01
  },
  {
    img: partnetPage02
  },
  {
    img: partnetPage03
  },
  {
    img: partnetPage04
  },
  {
    img: partnetPage05
  },
  {
    img: partnetPage06
  },
  {
    img: partnetPage07
  },
  {
    img: partnetPage08
  },
  {
    img: partnetPage09
  },
  {
    img: partnetPage10
  },
  {
    img: partnetPage11
  },
  {
    img: partnetPage12
  },
  {
    img: partnetPage13
  },
  {
    img: partnetPage14
  },
  {
    img: partnetPage15
  },
  {
    img: partnetPage16
  },
  {
    img: partnetPage17
  }
])
</script>

<style lang="less" scoped>
img {
  display: block;
}
</style>
