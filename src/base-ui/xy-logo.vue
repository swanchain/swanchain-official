<template>
  <el-dialog v-model="props.imageVisible" :show-close="false" width="800" append-to-body destroy-on-close :modal="false" :close-on-click-modal="false" class="daliy-card">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header flex flex-ai-center flex-jc-center font-24 font-bold">
        <div :id="titleId" :class="titleClass">Project Logo</div>
        
        <svg @click="closeImage" class="pointer close-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3337 6.6665L6.66699 25.3332" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M25.3337 25.3332L6.66699 6.6665" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
      </div>
    </template>
    <el-row class="cropper-container mt-24 mb-24">
      <vueCropper style="width: 100%; height: 100%;" ref="cropper" :img="props.optionImg" :outputSize="option.outputSize"
        :outputType="option.outputType" :info="option.info" :canScale="option.canScale" :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight" :fixedBox="option.fixedBox"
        :fixed="option.fixed" :fixedNumber="option.fixedNumber" :canMove="option.canMove" :canMoveBox="option.canMoveBox"
        :original="option.original" :centerBox="option.centerBox" :infoTrue="option.infoTrue" :full="option.full"
        :enlarge="option.enlarge" :mode="option.mode">
      </vueCropper>
    </el-row>
    <div class="flex flex-ai-center flex-jc-center">
      <!-- <el-upload v-model:file-list="fileList" action="" :auto-upload="false" :show-file-list="false"
        :on-change="handleChange">
        <el-button type="primary">Upload</el-button>
      </el-upload>
      <el-button type="primary" class="ml-10 mr-10" plain @click="rotateLeft">旋转</el-button>
      <el-button type="primary" plain @click="rotateRight">向有旋转图片=》</el-button> -->
      <el-button type="primary" @click="getCropDataBase64">Done</el-button>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";

const cropper = ref()
let option = reactive({
  img: '', // 裁剪图片的地址 url 地址, base64, blob
  outputSize: 1, // 裁剪生成图片的质量
  outputType: 'png', // 裁剪生成图片的格式 jpeg, png, webp
  info: false, // 裁剪框的大小信息
  canScale: true, // 图片是否允许滚轮缩放
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 250, // 默认生成截图框宽度
  autoCropHeight: 250, // 默认生成截图框高度
  fixedBox: false, // 固定截图框大小 不允许改变
  fixed: true, // 是否开启截图框宽高固定比例，这个如果设置为true，截图框会是固定比例缩放的，如果设置为false，则截图框的狂宽高比例就不固定了
  fixedNumber: [1, 1], // 截图框的宽高比例 [ 宽度 , 高度 ]
  canMove: true, // 上传图片是否可以移动
  canMoveBox: true, // 截图框能否拖动
  original: false, // 上传图片按照原始比例渲染
  centerBox: true, // 截图框是否被限制在图片里面
  infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  full: true, // 是否输出原图比例的截图
  enlarge: '1', // 图片根据截图框输出比例倍数
  mode: 'contain' // 图片默认渲染方式 contain , cover, 100px, 100% auto
})

const rotateLeft = () => {
  cropper.value.rotateLeft()
}

const rotateRight = () => {
  cropper.value.rotateRight()
}

const emit = defineEmits(['handImage'])

const getCropDataBase64 = () => {
  cropper.value.getCropData((data: any) => {
    imgUrl.value = data
    emit('handImage', false, data)
  })
}

const closeImage = () => {
  emit('handImage', false)
}

const imgUrl = ref('')
const imgName = ref('')

const fileList = ref([])
const handleChange: UploadProps['onChange'] = (
  uploadFile: UploadFile
) => {
  imgName.value = uploadFile.raw?.name ?? 'image.png'
  option.img = URL.createObjectURL(uploadFile.raw!)
}


const props = withDefaults(
  defineProps<{
    imageVisible?: boolean,
    optionImg?:string
  }>(),
  {
    imageVisible: false,
    optionImg: ''
  }
)
</script>

<style lang="less">
.el-overlay-dialog{
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: var(--color-dark-opacity);
}
.daliy-card{
  width: 60%;
  min-width: 320px;
  max-width: 600px;
  min-height: 320px;
  padding: 0.24rem;
  margin: auto;
  background-color: var(--color-dark);
  border-radius: 0.32rem;
  box-shadow: 0 0 0.24rem #2e2e2e;
  .el-dialog__header {
    padding: 0;
    .my-header {
      position: relative;
      .close-btn{
        position: absolute;
        right: 0;
        top: 0;
        width: 0.22rem;
        height: 0.22rem;
        z-index: 9;
        @media screen and (max-width: 600px) {
          width: 0.32rem;
          height: 0.32rem;
        }
      }
      .el-dialog__title {
        font-size: inherit;
        color: inherit;
        line-height: 1.2;
        letter-spacing: 2px;
        text-shadow: 0 0 var(--color-light);
        @media screen and (max-width: 414px) {
          font-size: 14px;
          line-height: 1;
        }
      }
    }
  }
  .cropper-container{
    width: 100%;
    height: 320px;
  }
  .vue-cropper{
    background: var(--color-dark);
  }
  button{
    width: 35%;
    min-width: 200px;
    background-color: var(--color-primary);
    font-family: inherit;
    font-size: var(--font-16);
    border: 0;
    border-radius: 2rem;
    color: var(--color-light);
  }
}
</style>

