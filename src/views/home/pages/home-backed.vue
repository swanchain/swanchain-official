<template>
  <div class="carousel-container page-body w-100 pt-48 pb-16">
    <div class="card-title linear-title font-24 font-bold text-center mb-32">Backed By</div>
    <el-row class="row-bg" :gutter="32" justify="center" v-for="(row, rowIndex) in chunkedBackedImagesList" :key="rowIndex">
      <template v-for="(item, index) in row" :key="index">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" class="mb-32 flex">
          <img :src="item.url" class="funders-img" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface BackedImage {
  url: string;
}

const backedImagesList = ref<BackedImage[]>([]);

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASEAPI_CRM + 'crm_backed/list'); 
    const data = await response.json();

    backedImagesList.value = data.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});

const chunkedBackedImagesList = computed(() => {
  const chunks = [];
  for (let i = 0; i < backedImagesList.value.length; i += 4) {
    chunks.push(backedImagesList.value.slice(i, i + 4));
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
