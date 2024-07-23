<template>
  <div class="carousel-container page-body w-100 pt-48 pb-32">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Partners</div>
    <el-row class="row-bg" :gutter="32" justify="center">
      <template v-for="list in slideList.slice(0, 6)" :key="list">
        <el-col class="mb-32 flex">
          <img :src="list.img" class="partnet-img" />
        </el-col>
      </template>
    </el-row>
    <el-row class="row-bg" :gutter="32" justify="center">
      <template v-for="list in slideList.slice(6, 20)" :key="list">
        <el-col class="mb-32 flex">
          <img :src="list.img" class="partnet-img" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import partnetPage01 from '@/assets/img/partnets/partnet-01.png'
import partnetPage02 from '@/assets/img/partnets/partnet-02.png'
import partnetPage03 from '@/assets/img/partnets/partnet-03.png'
import partnetPage04 from '@/assets/img/partnets/partnet-04.png'
import partnetPage05 from '@/assets/img/partnets/partnet-05.png'
import partnetPage06 from '@/assets/img/partnets/partnet-06.png'
import partnetPage07 from '@/assets/img/partnets/partnet-07.png'
import partnetPage08 from '@/assets/img/partnets/partnet-08.png'
import partnetPage09 from '@/assets/img/partnets/partnet-09.png'
import partnetPage10 from '@/assets/img/partnets/partnet-10.png'
import partnetPage11 from '@/assets/img/partnets/partnet-11.png'
import partnetPage12 from '@/assets/img/partnets/partnet-12.png'
import partnetPage13 from '@/assets/img/partnets/partnet-13.png'

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
  }
])
</script>

<style lang="less" scoped>
.el-row{
  .el-col{
    max-width: 14%;
    flex: 0 0 14%;
    @media screen and (max-width: 992px) {
      max-width: 25%;
      flex: 0 0 25%;
    }
    @media screen and (max-width: 540px) {
      max-width: 33.33%;
      flex: 0 0 33.33%;
    }
    .partnet-img{
      width: auto;
      max-width: 100%;
      max-height: 0.72rem;
      margin: auto;
      @media screen and (max-width: 768px) {
        width: 100%;
        max-height: none;
      }
    }
  }
}
</style>
