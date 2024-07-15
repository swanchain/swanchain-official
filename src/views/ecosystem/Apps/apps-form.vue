<template>
  <div class="app-form-container flex flex-ai-center flex-jc-center" v-if="props.formDialog">
    <div class="form card p-32 flex-column font-16">
      <div class="font-24 font-bold color-light mb-16">Get your project on Optimism’s Apps page</div>
      <el-form ref="formRef" label-position="top" v-loading="form.loading" label-width="auto" :model="form" :rules="rules">
        <el-row :gutter="32">
          <el-col :span="24" :xs="24">
            <el-form-item prop="email">
              <template #label>
                <div class="flex flex-ai-center font-16 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Email
                </div>
              </template>
              <el-input v-model="form.email" placeholder="Please add your email" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="name">
              <template #label>
                <div class="flex flex-ai-center font-16 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Name
                </div>
              </template>
              <el-input v-model="form.name" placeholder="Please your project's name" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="website">
              <template #label>
                <div class="flex flex-ai-center font-16 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Website
                </div>
              </template>
              <el-input v-model="form.website" placeholder="Please enter your project's website URL" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item prop="description">
              <template #label>
                <div class="flex flex-ai-center font-16 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Description
                </div>
              </template>
              <el-input v-model="form.description" :rows="2" type="textarea" placeholder="Please add a brief description" />
            </el-form-item>
          </el-col>
          <el-col :span="24" :xs="24">
            <el-form-item prop="logo">
              <template #label>
                <div class="flex flex-ai-center font-16 capitalize color-light">
                  <span class="color-danger mr-8">*</span> Project Logo
                </div>
              </template>
              <xy-form-upload v-model:value="form.logo"></xy-form-upload>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item prop="marketing_opt">
              <template #label>
                <div class="flex flex-ai-center font-16 color-light">
                  <span class="color-danger mr-8">*</span> Do you agree to receive marketing communications from Optimism?
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
      <div class="flex flex-ai-center flex-jc-between">
        <div class="btn-plain font-20 font-bold mt-8 submit" @click="close">Cancel</div>
        <div class="btn-primary font-20 font-bold mt-8 ml-16 submit" @click="submitForm(formRef)">Submit</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createCRMForm } from '@/api/apps'
import XyFormUpload from '@/base-ui/xy-form-upload.vue'
import { toPage } from '@/hooks/router'

const router = useRouter()

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
  logo: '',
  description: '',
  marketing_opt: true,
  loading: false
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

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid:any) => {
    if (valid) {
      try{
        form.loading = true
        console.log('form:', form)
        const formData = {
          'name': form.name,
          'email': form.email,
          'website': form.website,
          'description': form.description,
          'logo': form.logo,
          'marketing_opt': form.marketing_opt
        }
        // let formData = new FormData()
        // formData.append('name', form.name)
        // formData.append('email', form.email)
        // formData.append('website', form.website)
        // formData.append('logo', form.logo)
        // formData.append('description', form.description)
        // formData.append('marketing_opt', form.marketing_opt)
        const createRes = await createCRMForm(formData)
        close()
      } catch {
        form.loading = false
      }
    } else {
      console.log('error submit!')
    }
  })
}

function close() {
  emit('hardClose', false)
  form.loading = false
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
</script>

<style scoped lang="less">
.app-form-container{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow-y: auto;
  .form{
    width: 50%;
    min-height: 320px;
    max-width: 600px;
    padding: 0.24rem 0.32rem;
    margin: auto;
    border-radius: 0.16rem;
    background: #1e2026 !important;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.72);
    :deep(.el-form){
      .el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label-wrap>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk).asterisk-left>.el-form-item__label:before{
        display: none;
      }
      .el-form-item{
        .el-form-item__content{
          .el-input, .el-textarea{
            border-radius: 0.12rem !important;
          }
        }
      }
    }
    .submit {
      width: 100%;
      padding: 0.12rem 0;
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
