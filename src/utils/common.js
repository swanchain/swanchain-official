import store from '../store'
import axios from 'axios'
import {
  ElMessage
} from 'element-plus'
import {
  showLoading,
  hideLoading
} from '../plugins/loading.js'

async function sendRequest(apilink, type, jsonObject, api_token) {
  // axios.defaults.timeout = 600000
  axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.accessToken}`
  axios.defaults.headers.common['Content-Type'] = `application/x-www-form-urlencoded;charset=UTF-8`
  try {
    let response
    switch (type) {
      case 'post':
        response = await axios.post(apilink, jsonObject)
        return response.data
      case 'put':
        response = await axios.put(apilink, jsonObject)
        return response.data
      case 'get':
        response = await axios.get(apilink)
        return response.data
      case 'delete':
        response = await axios.delete(apilink, {
          data: jsonObject
        })
        return response.data
    }
  } catch (err) {
    console.error(err, err.response)
    messageTip('error', err.response ? err.response.data.detail || err.response.data.message : 'Request failed. Please try again later!')
    if (err.response) {
      if (err.response.status === 401) signOut()
      // The request has been sent, but the status code of the server response is not within the range of 2xx
      // console.log(err.response.data)
      // console.log(err.response.status)
      // console.log(err.response.headers)
      return err.response.data
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', err.message)
      return err
    }
  }
}

async function timeout(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

async function messageTip(type, text) {
  ElMessage({
    showClose: true,
    message: text,
    type: type
  })
}

function copyContent(text, tipCont) {
  var txtArea = document.createElement('textarea')
  txtArea.id = 'txt'
  txtArea.style.position = 'fixed'
  txtArea.style.top = '0'
  txtArea.style.left = '0'
  txtArea.style.opacity = '0'
  txtArea.value = text
  document.body.appendChild(txtArea)
  txtArea.select()

  try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Copying text command was ' + msg)
    if (successful) {
      messageTip('success', tipCont)
      return true
    }
  } catch (err) {
    console.log('Oops, unable to copy')
  } finally {
    document.body.removeChild(txtArea)
  }
  return false
}

function goLink(link) {
  if (!link) return
  window.open(link)
}

function contactUsMethod() {
  store.dispatch('setContactUs', true)
}

async function signOut() {
  // showLoading()
  if (store.state.accessToken) await sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/logout`, 'post', {})
  store.dispatch('setAccessToken', '')
  store.dispatch('setEmailAddress', '')
  // hideLoading()
}

async function categoryMethod(cId) {
  let dataList = []
  const language_id = store.state.languageNB === 'zh-cn' ? 26 : 36
  const categoryRes = await sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/product/default-variant-option-by-category/${cId}/lang/${language_id}?offset=0&limit=100`, 'get')
  if (categoryRes && categoryRes.status === "success") dataList = categoryRes.data || []
  return dataList
}

function hourMethod(num) {
  if (num) return parseFloat(num / 30 / 24).toFixed(4)
  else return '-'
}

function NumFormat(value) {
  if (String(value) === '0') return '0'
  else if (!value) return '-'
  var intPartArr = String(value).split('.')
  var intPartFormat = intPartArr[0]
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartArr[1] ? `${intPartFormat}.${intPartArr[1]}` : intPartFormat
}

function calculateDiffTime(startTime) {
  var endTime = Math.round(new Date() / 1000)
  var timeDiff = endTime - startTime
  var year = timeDiff > (86400 * 365) ? parseInt(timeDiff / 86400 / 365) : 0
  var month = timeDiff > (86400 * 30) ? parseInt(timeDiff / 86400 / 30) : 0
  var day = parseInt(timeDiff / 86400)
  var hour = parseInt((timeDiff % 86400) / 3600)
  var minute = parseInt((timeDiff % 3600) / 60)
  var m = parseInt((timeDiff % 60))
  if (year > 0) return `about ${year}${year > 1 ? ' years' : ' year'} ago`
  if (month > 0) return `${month} ${month > 1 ? ' months' : ' month'} ago`
  if (day > 0) return `${day} ${day > 1 ? ' days' : ' day'} ago`
  else if (hour > 0) return `${hour} ${hour > 1 ? ' hours' : ' hour'} ago`
  else if (minute > 0) return `${minute} ${minute > 1 ? ' minutes' : ' minute'} ago`
  else if (m > 0) return `${m} ${m > 1 ? ' seconds' : ' second'} ago`
  else return '-'
}

function hiddAddress(val) {
  if (val) return `${val.substring(0, 5)}...${val.substring(val.length - 5)}`
  else return '-'
}

function countUnit(bytes) {
  if (bytes === 0) return '0'
  if (!bytes) return '-'
  var k = 1000
  var sizes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  var i = Math.floor(Math.log(bytes) / Math.log(k))

  if (Math.round((bytes / Math.pow(k, i))).toString().length > 3) i += 1
  return parseInt((bytes / Math.pow(k, i))) + sizes[i]
}

function replaceFormat(value) {
  try {
    if (String(value) === '0') return '0'
    else if (!value) return '-'
    var intPartArr = String(value).split('.')
    var intPartFormat = intPartArr[0]
      .toString()
      .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    return intPartArr[1] ? `${intPartFormat}.${intPartArr[1].slice(0, 2)}` : intPartFormat
  } catch {
    return '-'
  }
}

export default {
  sendRequest,
  timeout,
  messageTip,
  copyContent,
  goLink,
  contactUsMethod,
  signOut,
  showLoading,
  hideLoading,
  categoryMethod,
  hourMethod,
  NumFormat,
  calculateDiffTime,
  hiddAddress,
  replaceFormat,
  countUnit
}