const Main = () => import('@/view/main')
const Login = () => import('@/view/login/login.vue')
const reset = () => import('@/view/login/reset.vue')
const Home = () => import('@/view/home/home.vue')
const Error401 = () => import('@/view/error-page/401.vue')
const Error500 = () => import('@/view/error-page/500.vue')
const Error404 = () => import('@/view/error-page/404.vue')

export const routerMap = {
  Main,
  Login, Home,
  reset,
  Error401,
  Error500,
  Error404
}
const data = [
  {
    title: '初始页面',
    path: 'statistics',
    icon: 'md-analytics',
    meta: {
      access: ['admin', 'paas_admin'],
      hideInMenu: false,
      notCache: true
    },
    component: () => import('@/view/home/home.vue')
  },
  // {
  //   title: '广告管理',
  //   path: 'statistics',
  //   icon: 'md-analytics',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/home.vue')
  // },
  // {
  //   title: '用户管理',
  //   path: 'statistics',
  //   icon: 'md-analytics',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/home.vue')
  // },
  // {
  //   title: '兼职管理',
  //   path: 'statistics',
  //   icon: 'md-analytics',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/home.vue')
  // },
  // {
  //   title: '兼职类型',
  //   path: 'statistics',
  //   icon: 'md-analytics',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/home.vue')
  // },
  // {
  //   title: '文章管理',
  //   path: 'statistics',
  //   icon: 'md-analytics',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/home.vue')
  // },
  // {
  //   title: '首页设置',
  //   path: 'homeSet',
  //   icon: 'md-cog',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/home/homeSet.vue')
  // },
  // {
  //   title: '平台管理',
  //   path: 'paasList',
  //   icon: 'ios-ionic-outline',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/paas/paasList.vue')
  // },
  // {
  //   title: '流量渠道',
  //   path: 'recommend',
  //   icon: 'ios-contacts',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/recommend/list.vue')
  // },
  // {
  //   title: '平台客户',
  //   path: 'paasClients',
  //   icon: 'ios-people',
  //   meta: {
  //     access: ['paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/paas/clients.vue')
  // },
  // {
  //   title: '我的提现',
  //   path: 'paasDeposit',
  //   icon: 'logo-usd',
  //   meta: {
  //     access: ['paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/paas/deposit.vue')
  // },
  // {
  //   title: '我的同工',
  //   path: 'paasWorker',
  //   icon: 'md-contacts',
  //   meta: {
  //     access: ['paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/paas/worker.vue')
  // },
  // {
  //   title: '用户权限',
  //   path: 'authorization',
  //   icon: 'ios-paw',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/authorization/list.vue')
  // },
  // {
  //   title: '用户推荐',
  //   path: 'referres',
  //   icon: 'logo-yen',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/referres/list.vue')
  // },
  // {
  //   title: '用户列表',
  //   path: 'userlist',
  //   icon: 'ios-contact',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: false
  //   },
  //   component: () => import('@/view/users/list.vue')
  // },
  // {
  //   title: '用户充值',
  //   path: 'userPay',
  //   icon: 'logo-usd',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/userPay/list.vue')
  // },
  // {
  //   title: '用户订单',
  //   path: 'orders',
  //   icon: 'ios-paper',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/orders/list.vue')
  // },
  // {
  //   title: '红娘服务',
  //   path: 'redlove',
  //   icon: 'md-contacts',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/redlove/list.vue')
  // },
  // {
  //   title: '实名认证',
  //   path: 'authentication',
  //   icon: 'ios-card',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/authentication/list.vue')
  // },
  // {
  //   title: '认证申请',
  //   path: 'beloved',
  //   icon: 'md-clipboard',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/beloved/list.vue')
  // },
  // {
  //   title: '审核头像',
  //   path: 'auditPhoto',
  //   icon: 'md-clipboard',
  //   meta: {
  //     access: ['admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/auditPhoto/list.vue')
  // },
  // {
  //   title: '活动列表',
  //   path: 'activityList',
  //   icon: 'ios-wine',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false
  //   },
  //   component: () => import('@/view/activity/list.vue')
  // },
  // {
  //   title: '用户反馈',
  //   path: 'feedbacks',
  //   icon: 'md-chatbubbles',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/users/feedbacks.vue')
  // },
  // {
  //   title: '投诉列表',
  //   path: 'complain',
  //   icon: 'md-bonfire',
  //   meta: {
  //     access: ['admin', 'paas_admin'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/users/complain.vue')
  // },
  // {
  //   title: '我的客户',
  //   path: 'client',
  //   icon: 'ios-people',
  //   meta: {
  //     access: ['matcher', 'worker'],
  //     hideInMenu: false,
  //     notCache: true
  //   },
  //   component: () => import('@/view/client/list.vue')
  // },
  // {
  //   title: '服务跟进',
  //   path: 'myService',
  //   icon: 'logo-sass',
  //   meta: {
  //     access: ['admin', 'matcher', 'worker'],
  //     hideInMenu: false
  //   },
  //   component: () => import('@/view/myService/list.vue')
  // }
]
const setRouter = () => {
  const routerList = []
  for (let item of data) {
    routerList.push(
      {
        path: '/',
        name: '_' + item.path,
        component: routerMap['Main'],
        meta: item.meta,
        children: [
          {
            path: '/' + item.path,
            name: item.path,
            meta: {
              access: item.meta.access,
              icon: item.icon,
              title: item.title,
              notCache: false,
            },
            component: item.component
          }
        ]
      }
    )
  }
  return routerList
}
export const staticRouters = [
  {path: '/login', name: 'login', meta: {title: 'Login - 登录', hideInMenu: true}, component: routerMap['Login']},
  {path: '/reset', name: 'reset', meta: {title: 'Login - 修改密码', hideInMenu: true}, component: routerMap['reset']},
  {path: '/401', name: 'error_401', meta: {hideInMenu: true}, component: routerMap['Error401']},
  {path: '/500', name: 'error_500', meta: {hideInMenu: true}, component: routerMap['Error500']},
  {path: '*', name: 'error_404', meta: {hideInMenu: true}, component: routerMap['Error404']},
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    meta: {notCache: true, hideInMenu: true},
    component: routerMap['Main'],
    children: [{
      path: '/home',
      name: 'home',
      meta: {notCache: true, hideInMenu: true, title: '首页'},
      component: routerMap['Home']
    }]
  },
  ...setRouter(),
  {
    path: '/',
    name: '二级页面',
    meta: {
      icon: 'logo-windows',
      title: 'admin',
      access: ['admin', 'paas_admin', 'matcher', 'worker'],
      // notCache: "true",
      hideInMenu: true
    },
    component: routerMap['Main'],
    children: [
      // {
      //   path: 'member_detail/:id',
      //   name: 'member_detail',
      //   meta: {
      //     title: '会员详情',
      //     hideInMenu: true
      //   },
      //   component: () => import('@/view/activity/member_detail.vue')
      // }
    ]
  }
]





