<template>
  <el-upload v-model:file-list="fileList" ref="upload" class="upload font-14" action="" :limit="limit" :on-exceed="handleExceed" :on-change="handleChange" :auto-upload="false" :show-file-list="!!value">
    <!-- <template #tip>
      <div v-if="tips" class="el-upload__tip color-info font-16">{{ tips }}</div>
    </template> -->
    <template #trigger>
      <div v-if="tips" class="color-light tip font-14 w-100 mb-8">{{ tips }}</div>
      <div class="btn-choose font-16 color-light font-weight-6 p-8">{{ label }}</div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const props = withDefaults(
  defineProps<{
    value: any
    limit?: number
    label?: string
    tips?: string
  }>(),
  {
    limit: 1,
    label: 'Choose File',
    tips: 'Provide a link or upload your visual assets: File type .SVG or .PNG (at least 500 x 500 px).'
  }
)

const emits = defineEmits(['update:value', 'change'])

const fileList = ref(props.value ? [props.value] : [])

const upload = ref<UploadInstance>()
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

function handleChange(e: any) {
  console.log('e:',e)
  emits('update:value', e.raw)
  emits('change', e)
}

// function submitUpload() {
//   upload.value!.submit()
// }

// defineExpose({ upload: submitUpload })
</script>

<style lang="less" scoped>
.upload {
  width: 100%;
  padding: 0 0.14rem;
  :deep(.el-upload) {
    flex-wrap: wrap;
    justify-content: flex-start;
    .tip{
      line-height: 1.1;
    }
  }
}
.btn-choose {
  padding: 0.12rem 0.24rem;
  background-color: var(--color-light);
  color: var(--color-dark-black);
  border-radius: 1rem;
  transition: all 0.2s;
}
.btn-choose:hover {
  background-color: var(--color-primary);
  color: var(--color-light);
  border-color: var(--color-primary);
}
@media screen and (max-width: 768px) {
  .upload {
    padding: 10px 11px;
  }
}
</style>
<style>
.el-upload-list__item-name{
  font-size: inherit;
}
</style>