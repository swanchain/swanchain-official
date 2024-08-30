<template>
  <div class="menu-pc flex flex-ai-center flex-jc-right" v-if="windowSize !== EWindowSize.XS">
    <el-menu mode="horizontal" :ellipsis="false" background-color="transparent" color="#fff" text-color="#fff" popper-class="dropdown-popper" class="dropdown-popper font-14" unique-opened router>
      <template v-for="item in menus" :key="item.value">
        <el-sub-menu v-if="item?.children?.length" :index="item.value">
          <template #title><div class="menu font-14 flex flex-ai-center">{{ item.label }}</div></template>
          <template v-for="it in item.children" :key="it.value">
            <el-sub-menu v-if="it?.children?.length" :index="it.value">
              <template #title><div class="font-14 flex flex-ai-center">{{ it.label }}</div></template>
              <el-menu-item v-for="itChild in it.children" :key="itChild.value" :index="itChild.value" @click="changeMenu(itChild)">                
                <div class="font-14 flex flex-ai-center pointer">
                  {{ itChild.label }}

                  <svg v-if="itChild.link" class="ml-8" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                  </svg>
                </div>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="it.value" @click="changeMenu(it)">
              <div class="font-14 flex flex-ai-center pointer">
                  {{ it.label }}

                  <svg v-if="it.link" class="ml-8" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M13.333 6.66669V2.66669H9.33301" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path d="M13.3333 2.66669L6 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                  </svg>
                </div>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="item.value" @click="changeMenu(item)">
          <span class="font-14">{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="console font-14 font-bold ml-32 pointer" @click="openPage(ELINK.SWANCONSOLE)">Console</div>
  </div>

  <el-menu v-else background-color="transparent" color="#fff" popper-class="menu-popper" class="menu-popper font-14" collapse unique-opened router>
    <el-sub-menu index="menu">
      <template #title>
        <el-icon size="24" class="mr-30">
          <Menu :class="light ? 'color-dark' : 'color-light'"></Menu>
        </el-icon>
      </template>
      <template v-for="item in menus" :key="item.value">
        <el-sub-menu v-if="item?.children?.length" :index="item.value">
          <template #title>{{ item.label }}</template>
          <!-- <el-menu-item v-for="it in item.children" :key="it.value" :index="it.value">
            {{ it.label }}
          </el-menu-item> -->
          <template v-for="it in item.children" :key="it.value">
            <el-sub-menu v-if="it?.children?.length" :index="it.value">
              <template #title>{{ it.label }}</template>
              <el-menu-item v-for="itChild in it.children" :key="itChild.value" :index="itChild.value">
                {{ itChild.label }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="it.value" @click="changeMenu(it)">
              <div class="font-14 flex flex-ai-center pointer">
                {{ it.label }}

                <svg v-if="it.link" class="ml-8" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                  <path d="M13.333 6.66669V2.66669H9.33301" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                  <path d="M13.3333 2.66669L6 10" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
              </div>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="item.value" @click="changeMenu(item)">
          <div class="font-14 flex flex-ai-center pointer">
            {{ item.label }}
            
            <svg v-if="item.link" class="ml-8" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3332 8.00002V12.6667C13.3332 13.0347 13.0346 13.3334 12.6665 13.3334H3.33317C2.96512 13.3334 2.6665 13.0347 2.6665 12.6667V3.33335C2.6665 2.9653 2.96512 2.66669 3.33317 2.66669H7.99984" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M13.333 6.66669V2.66669H9.33301" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M13.3333 2.66669L6 10" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
          </div>
        </el-menu-item>
      </template>
      <li class="el-menu-item">
        <div class="console font-bold color-dark">Console</div>
      </li>
    </el-sub-menu>
  </el-menu>

  <!-- <el-dropdown v-else>
    <el-icon color="#fff" size="24" class="mr-30"><Menu></Menu></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <template v-for="item in menus" :key="item.value">
          <el-dropdown-item :index="item.value" @click="changeMenu(item)">
            {{ item.label }}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown> -->
</template>

<script setup lang="ts">
import { EWindowSize } from '@/constant/common'
import { windowSize } from '@/hooks/layout'
import { menus, activeMenuPath } from '@/hooks/menus'
import { openPage, toPage } from '@/hooks/router'
import type { IOption } from 'types/common';
import { ELINK } from '../../constant/envLink';

defineProps<{
  light?: boolean
}>()

const router = useRouter()
function changeMenu(item: IOption) {
  if (item.link) {
    openPage(item.link)
  } else {
    activeMenuPath.value = item.value
    toPage(router, item.value)
  }
}
</script>

<style scoped lang="less">
.menu {
  margin: 0 0.12rem;
  cursor: pointer;
}
.console {
  padding: 0.08rem 0.11rem;
  background: url(../../assets/img/mask-group.png) no-repeat center;
  background-size: 100% 100%;
}
// .menu:hover {
//   color: var(--color-primary);
// }
// .menu.active {
//   color: var(--color-primary);
// }
.menu-popper {
  // top: 1rem !important;
}

.menu-pc{
  width: 100%;
  :deep(.dropdown-popper){
    height: 20px;
    border: 0;
    .el-sub-menu, .el-menu-item {
      &.is-active{}
      .el-sub-menu__title{
        padding: 0;
        margin: 0 0 0 0.32rem;
        color: var(--color-light) !important;
        border: 0 !important;
        .menu{
          padding: 0 0.2rem 0 0;
          margin: 0;
        }
        .el-sub-menu__icon-arrow{
          right: 0;
        }
      }
    }
    .el-menu-item{
      padding: 0;
      margin: 0 0 0 0.32rem;
      background-color: transparent !important;
      color: var(--color-light) !important;
      border: 0 !important;
      // &:hover{
      //   border-bottom: 0.02rem solid var(--color-primary) !important;
      // }
    }
  }
}
</style>
