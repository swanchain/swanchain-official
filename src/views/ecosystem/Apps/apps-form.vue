<template>
  <div class="app-form-container flex flex-ai-center flex-jc-center" v-if="props.formDialog">
    <div class="form card p-32 flex-column font-16">
      <div class="font-24 font-bold text-center color-light">Add Your App</div>
      <svg @click="close" class="pointer close-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3337 6.6665L6.66699 25.3332" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M25.3337 25.3332L6.66699 6.6665" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
      </svg>
      <img :src="addAppsImages" class="w-100 mt-24 mb-24" />
      <el-form ref="formRef" label-position="top" v-loading="form.loading" label-width="auto" :model="form" :rules="rules">
        <el-row :gutter="32">
          <el-col :span="24" :xs="24">
            <el-form-item prop="email">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Email Address:
                </div>
              </template>
              <el-input v-model="form.email" placeholder="Please add your email here" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="name">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Name:
                </div>
              </template>
              <el-input v-model="form.name" placeholder="Please add your Project name here" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="website">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Website:
                </div>
              </template>
              <el-input v-model="form.website" placeholder="Please add your Project Website here" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="website">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Category:
                </div>
              </template>
                <el-radio-group v-model="form.category" size="large">
                  <template v-for="(item, index) in form.categoryTag" :key="index">
                    <el-radio-button class="card-categories-tabs font-16" :label="item.name" :value="item.id" />
                  </template>
                </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item prop="description">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Description:
                </div>
              </template>
              <el-input v-model="form.description" :rows="2" type="textarea" placeholder="Please add your Project Description here" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="logo">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Logo:
                </div>
              </template>
              <div class="flex flex-ai-center">
                <div class="project-logo-url mr-16">
                  <img :src="projectImage.imgUrl" class="w-100" />
                  <!-- <svg class="pointer project-logo-url-btn" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 3H17L15 0H9L7 3H3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.31607 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.31607 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3ZM12 17C11.0111 17 10.0444 16.7068 9.22215 16.1573C8.3999 15.6079 7.75904 14.827 7.3806 13.9134C7.00216 12.9998 6.90315 11.9945 7.09607 11.0245C7.289 10.0546 7.7652 9.16373 8.46447 8.46447C9.16373 7.7652 10.0546 7.289 11.0245 7.09607C11.9945 6.90315 12.9998 7.00216 13.9134 7.3806C14.827 7.75904 15.6079 8.3999 16.1573 9.22215C16.7068 10.0444 17 11.0111 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17Z" fill="#DEE2E6"/>
                    <circle cx="12" cy="12" r="3" fill="#DEE2E6"/>
                  </svg> -->
                </div>

                <div class="project-logo-btn">
                  <xy-form-upload v-model:value="form.logo"></xy-form-upload>
                  <!-- <div class="color-light tip font-16 w-100 mb-8">Provide a link or upload your visual assets: File type .SVG or .PNG (at least 500 x 500 px).</div>
                  <div class="btn-choose font-16 color-light font-weight-6 p-8 pointer" @click="imageVisible=true">Choose File</div> -->
                </div>
              </div>
              <div class="font-12 color-danger" v-if="!projectImage.imgUrl">Please complete this required field.</div>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item prop="marketing_opt">
              <template #label>
                <div class="flex flex-ai-center font-16 font-bold2 color-light">
                  <span class="color-danger mr-8">*</span> Do you agree to receive marketing communications from Swan?
                </div>
              </template>
              <el-radio-group v-model="form.marketing_opt" class="ml-4">
                <el-radio :value="true"><span class="color-light">Yes</span></el-radio>
                <el-radio :value="false"><span class="color-light">No</span></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="flex flex-ai-center flex-jc-center">
        <div class="btn-primary font-16 font-weight-6 mt-8 ml-16 submit" @click="submitForm(formRef)">Submit</div>
      </div>
    </div>
  </div>

  <xy-logo :imageVisible="imageVisible" :optionImg="form.logoImg" @handImage="handImage"></xy-logo>
</template>

<script setup lang="ts">
import { createCRMForm, getCategoryList } from '@/api/apps'
import XyFormUpload from '@/base-ui/xy-form-upload.vue'
import XyLogo from '@/base-ui/xy-logo.vue'
import addAppsImages from '@/assets/img/apps/add-apps.jpg'
import { messageTip, base64ToFile } from '@/utils/common'

const router = useRouter()

const imageVisible = ref(false)
const projectImage = reactive({
  imgUrl: '',
  logo: ''
})
const formRef = ref(null)
const validateFile = (rule:any, value:any, callback:any) => {
  if (!form.logo) {
    callback(new Error("Please complete this required field."))
  } else {
    callback();
  }
}
const form = reactive({
  name: '',
  email: '',
  website: '',
  category: 6,
  logo: '',
  logoImg: '',
  description: '',
  marketing_opt: true,
  loading: false,
  categoryTag: []
})
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'Please complete this required field.', trigger: 'blur' }],
  email: [
    {
      required: true,
      message: 'Please complete this required field.',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ],
  website: [{ required: true, message: 'Please complete this required field.', trigger: 'blur' }],
  description: [{ required: true, message: 'Please complete this required field.', trigger: 'blur' }],
  logo: [
    { validator: validateFile, trigger: 'blur' }
  ]
})

function fileToBase64(file: any) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl || form.loading || !projectImage.imgUrl) return
  formEl.validate(async (valid:any) => {
    if (valid) {
      try{
        form.loading = true
        
        // const base64String = await fileToBase64(form.logo);
        // console.log(base64String)
        
        let formData = new FormData()
        const file = new File([projectImage.logo], projectImage.logo?.name)
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('website', form.website)
        formData.append('category', form.category)
        formData.append('logo', file)
        formData.append('description', form.description)
        formData.append('marketing_opt', form.marketing_opt?'1':'0')
        const createRes = await createCRMForm(formData)
        if(createRes?.status === "success" && createRes?.message) messageTip('success', createRes?.message)
        close()
      } catch {
        form.loading = false
      }
    } else {
      console.log('error submit!')
    }
  })
}

async function getCategoryData() { 
  try {
    form.loading = true
    const res = await getCategoryList()
    form.categoryTag = res?.data ?? []
  } catch {
    console.error
  } finally {
    form.loading = false
  }
}

function close() {
  emit('hardClose', false)
  form.loading = false
}

function handImage(dialog: boolean, uri: string) {
  imageVisible.value = dialog
  if(uri){
    projectImage.imgUrl = uri ?? ''
    const file = base64ToFile(uri, form.logo?.name ?? 'image.png')
    projectImage.logo = file
  }
}

const emit = defineEmits(['hardClose'])
const props = withDefaults(
  defineProps<{
    formDialog?: boolean
  }>(),
  {
    formDialog: false
  }
)

onMounted(() => {
  getCategoryData()
})

watch(() => form.logo, () => {
  form.logoImg = URL.createObjectURL(form.logo!)
  imageVisible.value = true
})
</script>

<style scoped lang="less">
.app-form-container{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-dark-opacity-20);
  z-index: 999;
  overflow-y: auto;
  .form{
    position: relative;
    width: 94%;
    min-width: 320px;
    max-width: 600px;
    padding: 0.24rem;
    margin: auto;
    border-radius: 0.32rem;
    background: #000 !important;
    box-shadow: 0 0 0.24rem #2e2e2e;
    *{
      line-height: 1;
    }
    .close-btn{
      position: absolute;
      right: 0.24rem;
      top: 0.24rem;
      width: 0.22rem;
      height: 0.22rem;
      z-index: 9;
      @media screen and (max-width: 600px) {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
    :deep(.el-form){
      .el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before{
        display: none;
      }
      .el-form-item{
        .el-form-item__content{
          .el-input, .el-textarea{
            border-radius: 0.12rem !important;
            .el-input__wrapper, .el-textarea__inner{
              background-color: var(--color-dark-black) !important;
              color: var(--color-light-opacity);
              .el-input__inner{
                color: inherit;
              }
            }
          }
          .el-radio-group{
            .card-categories-tabs{
              position: relative;height: auto;
              padding: 0.08rem 0.16rem;
              margin: 0 0.08rem 0.08rem 0;
              border: 0.02rem solid #9B9B9B;
              border-radius: 1rem;
              color: #9B9B9B;
              cursor: pointer;
              @media screen and (max-width: 768px) {
                padding: 0.1rem 0.24rem;
              }
              &.is-active, &:hover{
                border-color: var(--color-primary);
                color: var(--color-light);
                // box-shadow: 0 3px 13px  var(--color-primary);
              }
              .el-radio-button__inner{
                padding: 0;
                margin: 0;
                background-color: transparent;
                font-size: inherit;
                border: 0;
                color: inherit;
                box-shadow: none;
              }
            }
            .el-radio {
              &.is-checked{
                .el-radio__inner{
                  background: var(--color-primary);
                  border-color: var(--color-primary);
                }
              }
            }
          }
          .project-logo-url{
            position: relative;
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--color-dark-black);
            &-btn{
              position: absolute;
              left: 50%;
              bottom: 0.12rem;
              width: 0.24rem;
              transform: translate(-50%, 0);
              z-index: 9;
            }
          }
          .project-logo-btn{
            width: calc(100% - 1.36rem);
            .btn-choose {
              display: inline-block;
              padding: 0.12rem 0.24rem;
              background-color: var(--color-light);
              color: var(--color-dark-black);
              border-radius: 1rem;
              transition: all 0.2s;
              &:hover {
                background-color: var(--color-primary);
                color: var(--color-light);
                border-color: var(--color-primary);
              }
            }
          }
        }
      }
    }
    .submit {
      width: 2.82rem;
      padding: 0.15rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
