import { request } from '@/utils/request'
import { currentNetwork } from '@/utils/storage'

export function getExplorerStats() {
    return request({
        headers: {},
        url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_STATS : import.meta.env.VITE_STATS_PROXIMA}v2/stats`,
        method: 'get'
    })
}

export function getExplorerCounters() {
    return request({
        headers: {},
        url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_STATS : import.meta.env.VITE_STATS_PROXIMA}v2/smart-contracts/counters`,
        method: 'get'
    })
}

export function getGeneralFCP() {
  return request({
      headers: {},
      url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_BASEAPI : import.meta.env.VITE_BASEAPI_PROXIMA}v2/stats/general`,
      method: 'get'
  })
}

export function getOverViewFCP() {
  return request({
      headers: {},
      url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_BASEAPI : import.meta.env.VITE_BASEAPI_PROXIMA}v2/cp/overview`,
      method: 'get'
  })
}

export function getOverViewArchivedFCP() {
  return request({
      headers: {},
      url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_BASEAPI : import.meta.env.VITE_BASEAPI_PROXIMA}v2/cp/overview_archived`,
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

export function getStatsCounters() {
  return request({
      headers: {},
      url: `${currentNetwork.value === 'Mainnet' ? import.meta.env.VITE_STATSEXPLORER : import.meta.env.VITE_STATSEXPLORER_PROXIMA}v1/counters`,
      method: 'get'
  })
}


