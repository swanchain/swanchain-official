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
    import ("@/views/community/about/index");
const faucet = () =>
    import ("@/views/community/faucet/index");
const blockExplorer = () =>
    import ("@/views/community/blockExplorer/index");
const event = () =>
    import ("@/views/community/event/index");
const helpCenter = () =>
    import ("@/views/community/helpCenter/index");

const bridge = () =>
    import ("@/views/bridge/index");

const blog = () =>
    import ("@/views/blog/index");

const ecosystem = () =>
    import ("@/views/ecosystem/index");

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
                    title: 'Swan Chain | The Layer 2 Blockchain for AI Computing'
                }
            },
            {
                path: '/about-us',
                name: 'aboutUs',
                component: about,
                meta: {
                    keepAlive: true,
                    title: 'Swan Chain | About Us'
                }
            },
            {
                path: '/faucet',
                name: 'faucet',
                component: faucet,
                meta: {
                    keepAlive: true,
                    title: 'Faucet'
                }
            },
            {
                path: '/block-explorer',
                name: 'blockExplorer',
                component: blockExplorer,
                meta: {
                    keepAlive: true,
                    title: 'Block Explorer'
                }
            },
            {
                path: '/event',
                name: 'event',
                component: event,
                meta: {
                    keepAlive: true,
                    title: 'Event'
                }
            },
            {
                path: '/help-center',
                name: 'helpCenter',
                component: helpCenter,
                meta: {
                    keepAlive: true,
                    title: 'Help Center'
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
                path: '/blog',
                name: 'blog',
                component: blog,
                meta: {
                    keepAlive: true,
                    title: 'Blog'
                }
            },
            {
                path: '/ecosystem',
                name: 'ecosystem',
                component: ecosystem,
                meta: {
                    keepAlive: true,
                    title: 'Ecosystem'
                }
            },
            {
                path: '/privacy-policy',
                name: 'privacy-policy',
                component: privacyPolicy,
                meta: {
                    keepAlive: true,
                    title: 'Swan Chain | Privacy Policy'
                }
            },
            {
                path: '/terms',
                name: 'terms',
                component: terms,
                meta: {
                    keepAlive: true,
                    title: 'Swan Chain | Terms of Use'
                }
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