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
  chunks.push(partneredImagesList.value.slice(0, 6));
  chunks.push(partneredImagesList.value.slice(6, 20));
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
