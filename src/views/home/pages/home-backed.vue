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
import powerPage01 from '@/assets/img/Backed/Backed-01.png'
import powerPage02 from '@/assets/img/Backed/Backed-02.png'
import powerPage03 from '@/assets/img/Backed/Backed-03.png'
import powerPage04 from '@/assets/img/Backed/Backed-04.png'
import powerPage05 from '@/assets/img/Backed/Backed-05.png'
import powerPage06 from '@/assets/img/Backed/Backed-06.png'
import powerPage07 from '@/assets/img/Backed/Backed-07.png'
import powerPage08 from '@/assets/img/Backed/Backed-08.png'

interface BackedImage {
  url: string;
}

const backedImagesList = ref<BackedImage[]>([]);

onMounted(async () => {
  try {
    const response = [
  {
    "url": powerPage01
  },
  {
    "url": powerPage02
  },
  {
    "url": powerPage03
  },
  {
    "url": powerPage04
  },
  {
    "url": powerPage05
  },
  {
    "url": powerPage06
  },
  {
    "url": powerPage07
  },
  {
    "url": powerPage08
  }
]

    backedImagesList.value = response
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
      max-width: 25%;
      flex: 0 0 25%;
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
