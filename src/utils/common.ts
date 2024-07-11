import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

export const throttle = (fn: any, delay = 500) => {
  let timer: any = null
  const that: any = this
  return (args: any) => {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(that, args)
      timer = null
    }, delay)
  }
}

export function sizeChange (bytes: any, unit: any) {
  if (bytes === 0) return unit ? `0 ${unit}` : '0 B'
  if (!bytes) return '-'
  const k = 1024 // or 1000
  const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = Math.floor(Math.log(bytes) / Math.log(k))
  const b = Math.floor(Math.log(bytes) / Math.log(k))
  if (unit && sizes.indexOf(unit) > -1) i += sizes.indexOf(unit)

  // if (Math.round((bytes / Math.pow(k, b))).toString().length > 3) i += 1
  return parseFloat((bytes / Math.pow(k, b)).toFixed(2)) + ' ' + sizes[i]
}

export function replaceFormat (value: any) {
  try {
    if (String(value) === '0') return '0'
    else if (!value) return '-'
    const intPartArr = String(value).split('.')
    const intPartFormat = intPartArr[0]
      .toString()
      .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    return intPartArr[1] ? `${intPartFormat}.${intPartArr[1].slice(0, 2)}` : intPartFormat
  } catch {
    return '-'
  }
}

export function timeFormat (data: any) {
  if (!data) return 0
  const d = data / 60 / 60
  return d < 0.001 ? 0 : d
}

export function millisecondsToHMS(ms: any) {
  let text : any = ''
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if(hours > 0) text += `${hours}h`
  if(minutes > 0) text += `${minutes}m`
  if(remainingSeconds > 0) text += `${remainingSeconds}s`
 
  return text;
}

export async function messageTip(type: any, message: any) {
  ElMessage({
    showClose: true,
    message,
    type,
  })
}
