import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'element-plus/theme-chalk/index.css'
import en from 'element-plus/es/locale/lang/en'
import commonFun from '@/utils/common'
import 'amfe-flexible'

var routed = '';
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.path != routed) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0
    }
    routed = to.path
    next()
})

const app = createApp(App)
app.config.globalProperties.$commonFun = commonFun
app.config.globalProperties.$contactUsLink = process.env.VUE_APP_BASE_CONTACTUS
app
    // .use(ElementPlus, {
    //         locale: en,
    //     })
    .use(i18n)
    .use(store)
    .use(router)
app.mount('#app')