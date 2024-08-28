<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Partners</div>
    <el-row class="row-bg" :gutter="32" justify="center" v-for="(row, rowIndex) in chunkedPartnerImagesList" :key="rowIndex">
      <template v-for="(item, index) in row" :key="index">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" class="mb-32 flex">
          <img :src="item.url" class="partnet-img" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
import partnetPage14 from '@/assets/img/partnets/partnet-14.png'

interface PartneredImage {
  url: string;
}

const partneredImagesList = ref<PartneredImage[]>([
  {
      "url": partnetPage01
  },
  {
      "url": partnetPage02
  },
  {
      "url": partnetPage03
  },
  {
      "url": partnetPage04
  },
  {
      "url": partnetPage05
  },
  {
      "url": partnetPage06
  },
  {
      "url": partnetPage07
  },
  {
      "url": partnetPage08
  },
  {
      "url": partnetPage09
  },
  {
      "url": partnetPage10
  },
  {
      "url": partnetPage11
  },
  {
      "url": partnetPage12
  },
  {
      "url": partnetPage13
  },
  {
      "url": partnetPage14
  }
]);

onMounted(async () => {
  try {
    // const response = await fetch(import.meta.env.VITE_BASEAPI_CRM + 'crm_partner/list'); 
    // const data = await response.json();

    // partneredImagesList.value = data.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});

const chunkedPartnerImagesList = computed(() => {
  const chunks = [];
  chunks.push(partneredImagesList.value);
  return chunks;
});
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
  }
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
</style>
