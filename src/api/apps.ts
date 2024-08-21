import { request } from '@/utils/request'

export function getCRMFormList(params: any) {
    return request({
        headers: {},
        url: import.meta.env.VITE_BASEAPI_CRM + 'crm_project/list',
        method: 'get',
        params
    })
}

export function getCategoryList() {
  return request({
      headers: {},
      url: import.meta.env.VITE_BASEAPI_CRM + 'crm_category/list',
      method: 'get'
  })
}

export function categorySearchList(params: any) {
  return request({
      headers: {},
      url: import.meta.env.VITE_BASEAPI_CRM + 'crm_project/search',
      method: 'get',
      params
  })
}

export function createCRMForm(data: any) {
    return request({
        headers: {
          "Content-Type": "form-data"
        },
        url: import.meta.env.VITE_BASEAPI_CRM + 'crm_project/create',
        method: 'post',
        data
    })
}