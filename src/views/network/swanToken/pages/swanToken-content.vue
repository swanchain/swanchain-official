<template>
  <div v-for="item in anchor" :key="item.title" class="an-content" :id="item.targetId">
    <div v-if="item.mainTitleText" class="font-30 font-bold mt-32">{{ item.mainTitleText }}</div>
    <div v-else-if="item.title" class="font-24 font-bold mt-32 mb-16">{{ item.title }}</div>
    <div v-for="(it, i) in item.content" :key="i" class="font-14 p" v-html="it"></div>
    <ul v-if="item.ul" class="an-content-ul">
      <template v-for="(liChild, liIndex) in item.ul" :key="liIndex">
        <li class="font-14">
          <b class="font-bold mr-8">{{ liChild.title }}</b>{{ liChild.content }}
        </li>
      </template>
    </ul>
    <div v-if="item.contentUl">
      <template v-for="(cChild, c) in item.contentUl" :key="c">
        <div class="font-14 p" v-html="cChild.t"></div>
        <ul v-if="cChild.ul" class="an-content-ul mt-10 mb-16">
          <template v-for="(liChild, liIndex) in cChild.ul" :key="liIndex">
            <li class="font-14">
              <b class="font-bold mr-8">{{ liChild.title }}</b>
              <span v-html="liChild.content"></span>
            </li>
          </template>
        </ul>
        <div v-if="cChild.text" class="mt-10 mb-16">
          <template v-for="(it, i) in cChild.text" :key="i">
            <div class="font-14 p" v-html="it"></div>
          </template>
        </div>
        <div v-if="cChild.images" class="mt-10 mt-16 mb-16 c-images">
          <template v-for="(imageSrc, iSrc) in cChild.images" :key="iSrc">
            <img :src="imageSrc" />
          </template>
        </div>
        <div v-if="cChild.tableList" class="mt-10 mb-16">
          <el-table :data="tableData" style="width: 100%" empty-text="No Data">
            <el-table-column prop="day" label="Day" min-width="100">
              <template #default="scope">
                <div>{{scope.row.day ?? '-'}}</div>
              </template>
            </el-table-column>
            <el-table-column prop="daily_ubi" label="Daily UBI (y)" min-width="100">
              <template #default="scope">
                <div>{{scope.row.daily_ubi ?? '-'}}</div>
              </template>
            </el-table-column>
            <el-table-column prop="cumulative_ubi" label="Cumulative UBI" min-width="100">
              <template #default="scope">
                <div>{{scope.row.cumulative_ubi ?? '-'}}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </div>
    <img v-if="item.image" :src="item.image" class="w-100 mt-16" />

    <!-- <figures v-if="item.targetId === 'Token-Figures'"></figures>
    <buying v-if="item.targetId === 'Buying-SWANETH'"></buying> -->
  </div>
</template>

<script setup lang="ts">
import { getGithubToken } from '@/api/swanToken';
import { anchor } from '../config'
// import figures from './swanToken-figures.vue'
// import buying from './swanToken-buying.vue'


// async function getGithubData() {
//   try {
//     const res = await getGithubToken()
//     console.log(res)
//   } catch {
//     console.error
//   }
// }

const tableData = ref([
  {
    day: '1',
    daily_ubi: '19,966.03',
    cumulative_ubi: '19,966.03'
  },
  {
    day: '30',
    daily_ubi: '54,549.22',
    cumulative_ubi: '1,261,976.56'
  },
  {
    day: '60',
    daily_ubi: '64,262.68',
    cumulative_ubi: '3,062,143.25'
  },
  {
    day: '90',
    daily_ubi: '69,246.55',
    cumulative_ubi: '5,072,341.49'
  },
  {
    day: '120',
    daily_ubi: '71,941.60',
    cumulative_ubi: '7,194,431.61'
  },
  {
    day: '150',
    daily_ubi: '73,261.06',
    cumulative_ubi: '9,375,212.61'
  },
  {
    day: '180',
    daily_ubi: '73,666.56',
    cumulative_ubi: '11,581,013.65'
  },
  {
    day: '210',
    daily_ubi: '73,430.22',
    cumulative_ubi: '13,788,817.87'
  },
  {
    day: '240',
    daily_ubi: '72,728.28',
    cumulative_ubi: '15,982,188.47'
  },
  {
    day: '270',
    daily_ubi: '71,682.24',
    cumulative_ubi: '18,149,084.82'
  },
  {
    day: '300',
    daily_ubi: '70,379.70',
    cumulative_ubi: '20,280,565.34'
  },
  {
    day: '330',
    daily_ubi: '68,885.86',
    cumulative_ubi: '22,369,958.88'
  },
  {
    day: '360',
    daily_ubi: '67,250.50',
    cumulative_ubi: '24,412,305.58'
  },
  {
    day: '390',
    daily_ubi: '65,512.29',
    cumulative_ubi: '26,403,963.32'
  },
  {
    day: '420',
    daily_ubi: '63,701.70',
    cumulative_ubi: '28,342,321.28'
  },
  {
    day: '450',
    daily_ubi: '61,843.01',
    cumulative_ubi: '30,225,585.83'
  },
  {
    day: '480',
    daily_ubi: '59,955.70',
    cumulative_ubi: '32,052,616.78'
  },
  {
    day: '510',
    daily_ubi: '58,055.51',
    cumulative_ubi: '33,822,799.99'
  },
  {
    day: '540',
    daily_ubi: '56,155.17',
    cumulative_ubi: '35,535,946.61'
  },
  {
    day: '570',
    daily_ubi: '54,265.01',
    cumulative_ubi: '37,192,212.48'
  },
  {
    day: '600',
    daily_ubi: '52,393.39',
    cumulative_ubi: '38,792,032.93'
  },
  {
    day: '630',
    daily_ubi: '50,547.09',
    cumulative_ubi: '40,336,069.55'
  },
  {
    day: '660',
    daily_ubi: '48,731.55',
    cumulative_ubi: '41,825,166.37'
  },
  {
    day: '690',
    daily_ubi: '46,951.10',
    cumulative_ubi: '43,260,313.71'
  },
  {
    day: '720',
    daily_ubi: '45,209.18',
    cumulative_ubi: '44,642,617.97'
  }
])

onMounted(() => {
  // getGithubData()
})
</script>

<style scoped lang="less">
.an-content{
  img{
    display: block;
    border-radius: 0.1rem;
  }
  .p {
    line-height: 1.6;
    i {
      font-family: 'gilroy-Regular';
    }
  }
  &-ul{
    list-style: disc;
    li{}
  }
  .c-images {
    background-color: var(--color-light);
    border-radius: 0.1rem;
    img {
      width: 90%;
      max-width: 970px;
      margin: auto;
    }
  }
  :deep(.el-table) {
    tr {
      td, th {
        padding: 0.06rem 0.06rem 0.06rem 0.14rem !important;
      }
      td {
        .cell {
          font-size: var(--font-14);
        }
      }
    }
  }
}
</style>
