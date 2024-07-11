import { request } from '@/utils/request'

export function getExplorerStats() {
    return request({
        headers: {},
        url: import.meta.env.VITE_STATS + 'v2/stats',
        method: 'get'
    })
}

export function getExplorerCounters() {
    return request({
        headers: {},
        url: import.meta.env.VITE_STATS + 'v2/smart-contracts/counters',
        method: 'get'
    })
}

export function getGeneralFCP() {
  return request({
      headers: {},
      url: import.meta.env.VITE_BASEAPI + 'v2/stats/general',
      method: 'get'
  })
}

export function getOverViewFCP() {
  return request({
      headers: {},
      url: import.meta.env.VITE_BASEAPI + 'v2/cp/overview',
      method: 'get'
  })
}

export function getOverViewECP() {
  return request({
      headers: {},
      url: import.meta.env.VITE_UBIAPI + 'v2/stats',
      method: 'get'
  })
}


