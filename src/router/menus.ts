export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home/home-index.vue')
  },
  {
    path: '/network',
    name: 'network',
    redirect: 'network',
    children: [
      {
        path: 'about-swan/:type',
        name: 'about',
        component: () => import('../views/network/about/about-index.vue'),
        meta: {
          keepAlive: true,
          title: 'About Swan'
        }
      },
      {
        path: 'swan-token',
        name: 'swanToken',
        component: () => import('../views/network/swanToken/swanToken-index.vue'),
        meta: {
          keepAlive: true,
          title: 'Swan Token'
        }
      },
      {
        path: 'swan-stats',
        name: 'swanStats',
        component: () => import('../views/network/swanStats/swanStats-index.vue'),
        meta: {
          keepAlive: true,
          title: 'Swan Stats'
        }
      }
    ]
  },
  {
    path: '/ecosystem',
    name: 'ecosystem',
    redirect: 'ecosystem',
    children: [
      {
        path: 'Apps',
        name: 'apps',
        component: () => import('../views/ecosystem/Apps/apps-index.vue'),
        meta: {
          keepAlive: true,
          title: 'APPs'
        }
      },
      {
        path: 'market-provider/Orchestrator',
        name: 'Orchestrator',
        component: () => import('../views/ecosystem/MarketingProvider/Orchestrator/Orchestrator-index.vue'),
        meta: {
          keepAlive: true,
          title: 'Orchestrator'
        }
      },
      {
        path: 'market-provider/ZK-Engine',
        name: 'ZK-Engine',
        component: () => import('../views/ecosystem/MarketingProvider/ZKEngine/ZKEngine-index.vue'),
        meta: {
          keepAlive: true,
          title: 'ZK Engine'
        }
      },
    ]
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/privacyPolicy/privacyPolicy-index.vue'),
    meta: {
        keepAlive: true,
        title: 'Swan Chain | Privacy Policy'
    }
  },
  {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/terms/terms-index.vue'),
      meta: {
          keepAlive: true,
          title: 'Swan Chain | Terms of Use'
      }
  },
  {
      path: '/about-us',
      name: 'aboutUs',
      component: () => import('../views/aboutUs/aboutUs-index.vue'),
      meta: {
          keepAlive: true,
          title: 'Swan Chain | About Us'
      }
  }
]
