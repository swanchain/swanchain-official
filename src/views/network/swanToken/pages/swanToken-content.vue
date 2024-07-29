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
}
</style>
