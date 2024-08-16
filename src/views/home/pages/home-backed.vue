<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Backed By</div>
    <div v-for="(row, rowIndex) in chunkedBackedImagesList" :key="rowIndex" class="funded-list flex flex-ai-center flex-jc-center mb-32">
      <img 
        v-for="(item, index) in row" 
        :key="index" 
        :src="item.url" 
        class="funders-img" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import powerPage01 from '@/assets/img/Backed/Backed-01.png'
// import powerPage02 from '@/assets/img/Backed/Backed-02.png'
// import powerPage03 from '@/assets/img/Backed/Backed-03.png'
// import powerPage04 from '@/assets/img/Backed/Backed-04.png'
// import powerPage05 from '@/assets/img/Backed/Backed-05.png'
// import powerPage06 from '@/assets/img/Backed/Backed-06.png'
// import powerPage07 from '@/assets/img/Backed/Backed-07.png'
// import powerPage08 from '@/assets/img/Backed/Backed-08.png'

// const slideList = ref([
//   {
//     img: powerPage01
//   },
//   {
//     img: powerPage02
//   },
//   {
//     img: powerPage03
//   },
//   {
//     img: powerPage04
//   },
//   {
//     img: powerPage05
//   },
//   {
//     img: powerPage06
//   },
//   {
//     img: powerPage07
//   },
//   {
//     img: powerPage08
//   }
// ])

import { ref, onMounted } from 'vue';

interface BackedImage {
  url: string;
}

const backedImagesList = ref<BackedImage[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASEAPI_PROXIMA + 'crm_backed/list'); 
    const data = await response.json();

    backedImagesList.value = data.data;
    console.log(backedImagesList.value)
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});

const chunkedBackedImagesList = computed(() => {
  const chunks = [];
  for (let i = 0; i < backedImagesList.value.length; i += 6) {
    chunks.push(backedImagesList.value.slice(i, i + 6));
  }
  return chunks;
});
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
