import { request } from '@/utils/request'

export function getCRMFormList(params: any) {
    return request({
        headers: {},
        url: import.meta.env.VITE_APPSAPI + 'crm_project/list',
        method: 'get',
        params
    })
}

export function createCRMForm(data: any) {
    return request({
        headers: {
          "Content-Type": "form-data"
        },
        url: import.meta.env.VITE_APPSAPI + 'crm_project/create',
        method: 'post',
        data
    })
}