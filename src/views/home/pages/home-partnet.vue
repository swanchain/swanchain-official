<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Partners</div>
    <div v-for="(row, rowIndex) in chunkedPartnerImagesList" :key="rowIndex" class="funded-list flex flex-ai-center flex-jc-center mb-32">
      <img 
        v-for="(item, index) in row" 
        :key="index" 
        :src="item.url" 
        class="partnet-img" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import partnetPage01 from '@/assets/img/partnets/partnet-01.png'
// import partnetPage02 from '@/assets/img/partnets/partnet-02.png'
// import partnetPage03 from '@/assets/img/partnets/partnet-03.png'
// import partnetPage04 from '@/assets/img/partnets/partnet-04.png'
// import partnetPage05 from '@/assets/img/partnets/partnet-05.png'
// import partnetPage06 from '@/assets/img/partnets/partnet-06.png'
// import partnetPage07 from '@/assets/img/partnets/partnet-07.png'
// import partnetPage08 from '@/assets/img/partnets/partnet-08.png'
// import partnetPage09 from '@/assets/img/partnets/partnet-09.png'
// import partnetPage10 from '@/assets/img/partnets/partnet-10.png'
// import partnetPage11 from '@/assets/img/partnets/partnet-11.png'
// import partnetPage12 from '@/assets/img/partnets/partnet-12.png'
// import partnetPage13 from '@/assets/img/partnets/partnet-13.png'

// const slideList = ref([
//   {
//     img: partnetPage01
//   },
//   {
//     img: partnetPage02
//   },
//   {
//     img: partnetPage03
//   },
//   {
//     img: partnetPage04
//   },
//   {
//     img: partnetPage05
//   },
//   {
//     img: partnetPage06
//   },
//   {
//     img: partnetPage07
//   },
//   {
//     img: partnetPage08
//   },
//   {
//     img: partnetPage09
//   },
//   {
//     img: partnetPage10
//   },
//   {
//     img: partnetPage11
//   },
//   {
//     img: partnetPage12
//   },
//   {
//     img: partnetPage13
//   }
// ])

import { ref, onMounted } from 'vue';

interface PartneredImage {
  url: string;
}

const partneredImagesList = ref<PartneredImage[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASEAPI_PROXIMA + 'crm_partner/list'); 
    const data = await response.json();

    partneredImagesList.value = data.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});

const chunkedPartnerImagesList = computed(() => {
  const chunks = [];
  for (let i = 0; i < partneredImagesList.value.length; i += 6) {
    chunks.push(partneredImagesList.value.slice(i, i + 6));
  }
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
