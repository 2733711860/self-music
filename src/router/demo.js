export default [
  {
    path: '/demo',
    name: 'demo',
    component: resolve => {
      require(['@/views/demo.vue'], resolve)
    },
    meta: {
      title: 'demo'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: resolve => {
      require(['@/views/cart/index.vue'], resolve)
    },
    meta: {
      title: '刷新加载'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => {
      require(['@/views/index/index.vue'], resolve)
    },
    meta: {
      title: '刷新加载'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['@/views/login/index.vue'], resolve)
    },
    meta: {
      title: 'tab'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: resolve => {
      require(['@/views/order/index.vue'], resolve)
    },
    meta: {
      title: '左滑删除'
    }
  },
  {
    path: '/my',
    name: 'my',
    component: resolve => {
      require(['@/views/my/index.vue'], resolve)
    },
    meta: {
      title: '索引列表'
    }
  },
  {
    path: '/progress',
    name: 'progress',
    component: resolve => {
      require(['@/views/progress/index.vue'], resolve)
    },
    meta: {
      title: '树形图'
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: resolve => {
      require(['@/views/swiper/index.vue'], resolve)
    },
    meta: {
      title: '轮播图'
    }
  },
  {
    path: '/lazyPicture',
    name: 'lazyPicture',
    component: resolve => {
      require(['@/views/lazyPicture/index.vue'], resolve)
    },
    meta: {
      title: '图片懒加载'
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: resolve => {
      require(['@/views/upload/index.vue'], resolve)
    },
    meta: {
      title: '文件上传'
    }
  },
  {
    path: '/dropDown',
    name: 'dropDown',
    component: resolve => {
      require(['@/views/dropDown/index.vue'], resolve)
    },
    meta: {
      title: '下拉菜单'
    }
  },
  {
    path: '/select',
    name: 'select',
    component: resolve => {
      require(['@/views/select/index.vue'], resolve)
    },
    meta: {
      title: '选择'
    }
  },
  {
    path: '/rollNotice',
    name: 'rollNotice',
    component: resolve => {
      require(['@/views/rollNotice/index.vue'], resolve)
    },
    meta: {
      title: '折叠面板'
    }
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: resolve => {
      require(['@/views/pagination/index.vue'], resolve)
    },
    meta: {
      title: '分页'
    }
  },
  {
    path: '/table',
    name: 'table',
    component: resolve => {
      require(['@/views/table/index.vue'], resolve)
    },
    meta: {
      title: '表格'
    }
  },
  {
    path: '/lottery',
    name: 'lottery',
    component: resolve => {
      require(['@/views/lottery/index.vue'], resolve)
    },
    meta: {
      title: '抽奖'
    }
  },
  {
    path: '/lotteryTurn',
    name: 'lotteryTurn',
    component: resolve => {
      require(['@/views/lotteryTurn/index.vue'], resolve)
    },
    meta: {
      title: '转盘抽奖'
    }
  },
  {
    path: '/tabFloor',
    name: 'tabFloor',
    component: resolve => {
      require(['@/views/tabFloor/index.vue'], resolve)
    },
    meta: {
      title: '楼层导航'
    }
  }
]
