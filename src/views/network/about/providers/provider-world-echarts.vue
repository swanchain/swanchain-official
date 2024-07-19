<template>
  <div class="world-container">
    <div class="world-buttom">
      <svg @click="resetMap" t="1717382052739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8179" width="18" height="18">
        <path d="M713.536 255.232l-58.624 72.192L960 355.712 868.8 64l-72.512 89.344A458.88 458.88 0 0 0 523.52 64C269.76 64 64 269.184 64 522.24c0 253.12 205.76 458.24 459.52 458.24a459.648 459.648 0 0 0 429.44-294.72 65.408 65.408 0 0 0-37.824-84.48 65.728 65.728 0 0 0-84.8 37.76A328.32 328.32 0 0 1 523.584 849.6c-181.312 0-328.32-146.56-328.32-327.36 0-180.736 147.008-327.296 328.32-327.296 69.376 0 135.232 21.504 189.952 60.288"
          fill="#ffffff" p-id="8180"></path>
      </svg>
      <svg @click="roamMap(0)" t="1717381974237" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6091" width="18" height="18">
        <path d="M580.722174 437.990403 580.722174 78.171384 436.794158 78.171384 436.794158 437.990403 76.975139 437.990403 76.975139 581.918419 436.794158 581.918419 436.794158 941.737438 580.722174 941.737438 580.722174 581.918419 940.542216 581.918419 940.542216 437.990403Z"
          fill="#ffffff" p-id="6092"></path>
      </svg>
      <svg @click="roamMap(1)" t="1717382018337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7130" width="18" height="18">
        <path d="M587.229378 437.990403 580.722174 437.990403 76.975139 437.990403 76.975139 581.918419 580.722174 581.918419 587.229378 581.918419 940.542216 581.918419 940.542216 437.990403Z" fill="#ffffff" p-id="7131"></path>
      </svg>
    </div>
    <!-- <div class="world-data font-18 font-bold flex flex-ai-center">
      ECP Numbers: <span class="color-red plr-10">{{ props.dataArrECP.length }}</span> &nbsp; FCP Numbers: <span class="color-green plr-10">{{ props.dataArrFCP.length }}</span></div> -->
    <div class='chart-world' id='chart-world' v-loading="resourcesLoad" element-loading-background="rgba(255, 255, 255, 0.8)"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import worldGeoJSON from '@/assets/js/world.json'
import type { IOption } from 'types/common'

let chart: any
function resetMap () {
  chart.setOption({
    geo: {
      center: undefined,
      zoom: 1.1
    }
  })
}
function roamMap (flag: any) {
  const currentZoom = chart.getOption().geo[0].zoom
  let increaseAmplitude = 1.1
  if (flag === 1) {
    increaseAmplitude = 0.8
    if (currentZoom < 1) increaseAmplitude = 1
  } else if (flag == 2) {
    increaseAmplitude = 0 //reset
  }
  chart.setOption({
    geo: {
      zoom: currentZoom * increaseAmplitude < 1 ? 1 : currentZoom * increaseAmplitude
    },
  })
}
function drawChart() {
  const el = document.getElementById('chart-world')
  if (el) {
    chart = echarts.init(el)
    window.addEventListener('resize', function () {
      chart.resize()
    })
    chart.setOption({
      roam: true,
      grid: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
      },
      toolbox: {
        orient: 'vertical',
        top: '2%',
        right: '2%',
        feature: {
          dataZoom: { show: false },
          restore: {
            show: false,
            textStyle: {
              color: 'transparent' // 文字颜色设置为透明
            },
            iconStyle: {
              borderColor: '#fff', // 边框颜色
              borderWidth: 2, // 边框宽度
              color: 'transparent' // 填充颜色
            },
            emphasis: {
              iconStyle: {
                borderColor: '#fff', // 边框颜色
                borderWidth: 2, // 边框宽度
                color: 'transparent' // 填充颜色
              }
            }
          },

          // 放大缩小按钮
          // zoom: { show: true },
        },
        textStyle: {
          color: '#fff',
        }
      },
      tooltip: {
        trigger: "item",
        formatter: function (val: any) {
          if (val.data && val.data.city) return val.data.city
          else return val.name
        },
        // show: false,
        padding: 5,
        textStyle: {
          fontSize: 12,
          lineHeight: 10,
          align: "left"
        }
      },
      legend: {
        orient: 'vertical',
        left: '1.5%',
        bottom: '1.5%',
        itemGap: 8,
        itemWidth: 12,
        itemHeight: 12,
        // icon: 'roundRect',
        icon: 'circle',
        // formatter: function (name) {
        //     return echarts.format.truncateText(name, 50);
        // },
        // 图例文本样式
        textStyle: {
          color: '#fff',
          fontSize: 14,
          fontFamily: 'gilroy-Medium',
          // lineHeight: 14,
          rich: {
            a: {
              verticalAlign: 'middle',
            },
          },
          padding: [0, 0, -2, -1]
        }
      },
      geo: {
        show: true,
        map: 'worldHq',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        // aspectScale: 0.75,
        roam: true, // 开启拖拽和缩放
        toolbox: {
          show: true,
          feature: {
            // 启用缩放工具
            dataZoom: {
              yAxisIndex: 'none'
            },
            // 启用还原工具
            restore: {},
            // 启用拖拽平移工具
            move: {}
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#4c5878',
            borderColor: '#404a63'
          },
          // emphasis: {
          //   areaColor: '#a467d1',
          //   label: {
          //     show: false
          //   }
          // }
        },
        emphasis: {
          focus: 'none'
        },
        silent: true,
        zoom: 1,
        scaleLimit: {
          min: 1 // 设置最小缩放倍数为1
        },
        // left: '5%',
        // right: '5%'
      },
      series: [
        {
          name: 'Computing providers',
          type: 'scatter',
          coordinateSystem: 'geo',
          itemStyle: {
            color: '#4881FC',
            shadowBlur: 2,
            shadowColor: 'transparent'
          },
          data: props.dataArrFCP,
          roam: true,
          symbolSize: 14,
          zlevel: 1
        },
        // {
        //   name: 'ECP',
        //   type: 'scatter',
        //   coordinateSystem: 'geo',
        //   itemStyle: {
        //     color: '#4881FC',
        //     shadowBlur: 2,
        //     shadowColor: 'transparent'
        //   },
        //   data: props.dataArrECP,
        //   roam: true,
        //   symbolSize: 14,
        //   zlevel: 1
        // }
      ]
    })
  }
}

const props = withDefaults(
  defineProps<{
    dataArrFCP?: IOption[]
    dataArrECP?: IOption[]
    resourcesLoad?: boolean
  }>(),
  {
    dataArrFCP: () => [],
    dataArrECP: () => [],
    resourcesLoad: false
  }
)

onMounted(async () => {
  echarts.registerMap('worldHq', worldGeoJSON as any)
  drawChart()
})

watch(() => props.dataArrFCP, () => drawChart())
watch(() => props.dataArrECP, () => drawChart())
</script>

<style scoped lang="less">
.world-container{
  position: relative;
  .world-buttom {
    position: absolute;
    right: 0.25rem;
    top: 0.32rem;
    z-index: 10;
    svg {
      display: block;
      cursor: pointer;
      &:nth-child(2) {
        margin: 7px 0 3px;
      }
    }
  }
  .world-data{
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 10;
    .color-red {
      color: #FF4444;
    }
    .color-green {
      color: #34B91F;
    }
  }
  .chart-world {
    width: 100%;
    height: 4.8rem;
    margin: 0;
    background-color: #1E2026;
    border-radius: 0.08rem;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }
}
</style>
