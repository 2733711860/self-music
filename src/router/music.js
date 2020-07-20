export default [
	{
    path: '*',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: resolve => {
      require(['@/pages/homePage'], resolve)
    },
    meta: {
      title: '首页',
      menuPlayer: true
    }
  }, {
    path: '/sheet',
    name: 'sheet',
    component: resolve => {
      require(['@/pages/sheet'], resolve)
    },
    meta: {
      title: '歌单',
      menuPlayer: false
    }
  }, {
    path: '/sheetList',
    name: 'sheetList',
    component: resolve => {
      require(['@/pages/sheet-list'], resolve)
    },
    meta: {
      title: '歌单详情',
      menuPlayer: false
    }
  }, {
    path: '/rankList',
    name: 'rankList',
    component: resolve => {
      require(['@/pages/rank-list'], resolve)
    },
    meta: {
      title: '榜单',
      menuPlayer: true
    }
  }, {
    path: '/musicList',
    name: 'musicList',
    component: resolve => {
      require(['@/pages/music-list'], resolve)
    },
    meta: {
      title: '音乐列表',
      menuPlayer: false
    }
  }, {
    path: '/userCenter',
    name: 'userCenter',
    component: resolve => {
      require(['@/pages/user-center'], resolve)
    },
    meta: {
      title: '用户中心',
      menuPlayer: true
    }
  }, {
    path: '/singer',
    name: 'singer',
    component: resolve => {
      require(['@/pages/singer'], resolve)
    },
    redirect: '/singer/singerList',
    children: [
    	{
    		path: 'singerList',
		    name: 'singerList',
		    component: resolve => {
		      require(['@/pages/singer/singer-list.vue'], resolve)
		    },
		    meta: {
		      title: '歌手',
     		  menuPlayer: true
		    }
    	}, {
    		path: 'singerDetail',
		    name: 'singerDetail',
		    component: resolve => {
		      require(['@/pages/singer/singer-detail.vue'], resolve)
		    },
		    meta: {
		      title: '歌手详情',
      		menuPlayer: false
		    }
    	}
    ]
  }
]
