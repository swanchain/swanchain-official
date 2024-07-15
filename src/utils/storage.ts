import { EStorage } from '@/constant/storage'

export const token = ref(getToken())
export const isLogin = computed(() => !!token.value)

export function removeStorage(key: string) {
  localStorage.removeItem(key)
}

export function clearStorage() {
  token.value = ''
  localStorage.clear()
}

export function clearLoginInfo() {
  token.value = ''
  removeStorage(EStorage.TOKEN)
}

export function setToken(tok: string) {
  token.value = tok
  localStorage.setItem(EStorage.TOKEN, tok)
}

export function getToken() {
  return localStorage.getItem(EStorage.TOKEN) ?? ''
}

export function setAccountInfo(accountInfo: { account: string; password: string }) {
  localStorage.setItem(EStorage.ACCOUNT_INFO, JSON.stringify(accountInfo))
}

export function getAccountInfo() {
  const accountInfo = localStorage.getItem(EStorage.ACCOUNT_INFO)
  return accountInfo ? JSON.parse(accountInfo) : { account: '', password: '' }
}
