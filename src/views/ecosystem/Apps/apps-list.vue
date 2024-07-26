<template>
  <div class="card w-100">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="10" :md="8" :lg="6">
        <div class="card-categories mb-48">
          <div class="card-input flex-column flex-jc-center font-16 mb-16 w-100">
            <el-input
              v-model="tabsInput"
              placeholder="Search"
              clearable
              :prefix-icon="Search"
              @input="() => searchProvider()"
            />
          </div>

          <div class="w-100">
            <template v-for="(item, index) in crmForm.categoryTag" :key="index">
              <a :href="`#${item.name}`" class="w-100 card-categories-tabs font-14 font-bold color-subtitle mb-8 pointer">{{ item.name }} ({{ item.project_cnt }})</a>
            </template>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="14" :md="16" :lg="18">
        <div class="font-24 font-bold mb-16" v-if="!crmForm.searchLoad">Featured</div>
        <el-row :gutter="21" v-if="!crmForm.searchLoad">
          <template v-for="(item, index) in listFeatured" :key="index">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" class="mb-16 pointer" @click="openPage(item.link)">
              <div class="card-item border-radius-16 font-16">
                <div class="card-item-logo flex flex-jc-between flex-ai-start mb-16">
                  <div class="flex flex-ai-center">
                    <xy-icon :name="item.label as EIcon" class="icon" :width="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" :height="windowSize === EWindowSize.XS ? '44px' : '0.64rem'" radius="4rem" pointer></xy-icon>
                  </div>
                </div>
                <div class="card-item-title font-16 font-bold">{{ item.title }}</div>
                <div class="card-item-btn flex">
                  <div class="font-12 website">{{item.domain}}</div>
                </div>
                <div class="card-item-content font-14 line-4">{{ item.content }}</div>
              </div>
            </el-col>
          </template>
        </el-row>

        <template v-for="(value, key) in crmForm.testData" :key="key">
          <div class="font-24 font-bold mt-16 mb-16" :id="key">{{key}}</div>
          <el-row :gutter="16" v-loading="crmForm.loading" element-loading-text="Loading...">
            <template v-for="(item, index) in value.list" :key="index">
              <el-col v-show="value.show_all?true:index<6" :xs="24" :sm="12" :md="8" :lg="8" class="mb-16 pointer" @click="openPage(item.website)">
                <div class="card-item border-radius-16 font-16">
                  <div class="card-item-logo flex flex-jc-between flex-ai-start mb-16">
                    <div class="flex flex-ai-center font-18 font-bold">
                      <img :src="item.logo" class="card-item-logo-img mr-10" alt="logo" />
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="card-item-content font-14 line-2">{{ item.description }}</div>
                </div>
              </el-col>
            </template>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" class="mb-16 pointer" v-if="!crmForm.searchLoad && (value.list && value.list.length>6)">
              <div class="flex flex-ai-center flex-jc-right">
                <div class="view-btn btn font-16 flex flex-ai-center" @click="value.show_all = !value.show_all">
                  {{ !value.show_all ? `View all (${value.list_projects_cnt})` : 'View Less' }}
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import XySwiperTag from '@/base-ui/xy-swiper-tag.vue'
import XyIcon from '@/base-ui/xy-icon.vue'
import { EIcon } from '@/constant/icon'
import { windowSize } from '@/hooks/layout'
import { EWindowSize } from '@/constant/common'
import { categorySearchList, getCRMFormList, getCategoryList } from '@/api/apps';
import { openPage } from '@/hooks/router';
import { Search } from '@element-plus/icons-vue'
import { ELINK } from '@/constant/envLink';
import { debounce, throttle } from '@/utils/common'

const tabsInput = ref('')
const listFeatured = ref([
  {
    title: 'Lagrange',
    link: ELINK.LAGRANGE,
    label: 'Lagrange',
    domain: 'lagrangedao.org',
    content:
      'Lagrange DAO provides data sharing and analytic spaces for Decentralized Science (DeSci).'
  },
  {
    title: 'Multi-Chain Storage',
    link: ELINK.MCS,
    label: 'MCS',
    domain: 'multichain.storage',
    content:
      'Multi-Chain Storage (MCS) is a revolutionary storage service works with multiple blockchain networks.'
  },
  {
    title: 'Superbridge',
    link: ELINK.Superbridge,
    label: 'Superbridge',
    domain: 'superbridge.app',
    content:
      'With Superbridge you can bridge Ether and other tokens into and out of any supported rollup. '
  },
  {
    title: 'Chainnode',
    link: ELINK.CHAINNODE,
    label: 'Chainnode',
    domain: 'chainnode.io',
    content:
      'Chainnode offers lightning-fast downloads of the most recent snapshots.'
  }
])

const crmForm = reactive({
  loading: false,
  categoryLoad: false,
  categoryTag: [],
  testData: {},
  searchLoad: false
})

async function getListData() { 
  try {
    crmForm.searchLoad = false
    crmForm.loading = true
    const params = {
      limit: 1000,
      offset:0
    }
    const res = await getCRMFormList(params)
    crmForm.testData = res?.data ?? {}
  } catch {
    console.error
  } finally {
    crmForm.loading = false
  }
}

async function getCategoryData() { 
  try {
    crmForm.categoryLoad = true
    const res = await getCategoryList()
    crmForm.categoryTag = res?.data ?? []
  } catch {
    console.error
  } finally {
    crmForm.categoryLoad = false
  }
}

const searchProvider = debounce(() => {
  if (tabsInput.value) searchData()
  else getListData()
}, 700)
    
async function searchData() { 
  try {
    crmForm.searchLoad = true
    crmForm.loading = true
    const params = {
      limit: 10,
      score: 65,
      name: tabsInput.value
    }
    const res = await categorySearchList(params)
    if (res?.data) {
      crmForm.testData = {}
      const keyData = `${res?.list_projects_cnt ?? 0} results for matching "${tabsInput.value}"`
      const results = {
        list: res?.data ?? [],
        list_projects_cnt: res?.list_projects_cnt ?? 0
      }
      crmForm.testData[keyData] = results
    }
  } catch {
    console.error
    crmForm.searchLoad = false
  } finally {
    crmForm.loading = false
  }
}

function getID (key:string) {
  const PageId = document.querySelector('#' + key)
  if(!PageId) return
  const moduleID = document.querySelector('#module-container')
  moduleID.scrollTo({
    top: PageId.offsetTop ?? 0,
    behavior: 'smooth'
  })
}
onMounted(() => {
  getListData()
  getCategoryData()
})
</script>

<style scoped lang="less">
.card {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  min-height: 2rem;
  margin: 0.32rem 0 1.5rem;
  color: var(--color-light);
  .view-btn{
    padding: 0.06rem 0.24rem;
    svg {
      width: 6px;
    }
  }
  &-item {
    position: relative;
    height: 100%;
    padding: 0.16rem;
    background-color: #1E2026;
    .website{
      color: #A9B9CC;
    }
    &-logo {
      &-img{
        display: block;
        width: auto;
        width: 0.41rem;
        height: 0.41rem;
        border-radius: 2rem;
        @media screen and (max-width: 768px) {
          width: 32px;
          height: 32px;
        }
      }
    }
    &-date {
      position: relative;
      padding-left: 0.2rem;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        width: 0.12rem;
        height: 0.12rem;
        margin-top: -0.06rem;
        background-color: var(--color-primary);
        border-radius: 0.12rem;
      }
    }
    &-btn {
      .btn {
        padding: 0.05rem 0.16rem;
        background: #343a40;
        border: 0;
      }
    }
  }
  &-categories{
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
    :deep(&-tabs) {
      position: relative;
      display: block;
      width: 100%;
      padding: 0.09rem 0;
      text-decoration: none;
      &:hover{
        color: var(--color-primary);
      }
    }
  }
  &-input{
    :deep(.el-input) {
      width: 100%;
      margin: 0;
      .el-input__wrapper{
        height: auto !important;
        padding: 0.08rem 0.16rem;
        background-color: var(--color-dark-black) !important;
        font-family: inherit;
        font-size: inherit;
        border-radius: 1rem;
        .el-input__inner{
          color: var(--color-light-opacity);
        }
        .el-input__icon{
          font-size: 18px;
        }
        svg{
          color: var(--color-light) !important;
        }
      }
    }
  }
}
</style>
