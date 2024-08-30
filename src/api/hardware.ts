import { request } from '@/utils/request'

export function getCPMachinesList() {
    return request({
        headers: {},
        url: import.meta.env.VITE_LAGRANGE + 'cp/machines',
        method: 'get'
    })
}