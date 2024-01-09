import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import writer from '@/utils/router'
const home = () =>
    import ("@/components/Home");
const dashboard = () =>
    import ("@/views/index");
const main = () =>
    import ("@/views/main/index");
const about = () =>
    import ("@/views/about/index");
const bridge = () =>
    import ("@/views/bridge/index");

const privacyPolicy = () =>
    import ("@/views/privacyPolicy/index");
const terms = () =>
    import ("@/views/terms/index");

const routes = [{
        path: '/',
        component: home,
        children: [{
                path: '/',
                name: 'dashboard',
                component: main,
                meta: {
                    keepAlive: true,
                    title: 'Nebula Block'
                }
            },
            {
                path: '/about-us',
                name: 'aboutUs',
                component: about,
                meta: {
                    keepAlive: true,
                    title: 'About Us'
                }
            },
            {
                path: '/bridge',
                name: 'bridge',
                component: bridge,
                meta: {
                    keepAlive: true,
                    title: 'Bridge'
                }
            },
            {
                path: '/privacy-policy',
                name: 'privacy-policy',
                component: privacyPolicy
            },
            {
                path: '/terms',
                name: 'terms',
                component: terms
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: process.env.NODE_ENV === 'testnet' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     writer(to);
//     next();
// })

export default router