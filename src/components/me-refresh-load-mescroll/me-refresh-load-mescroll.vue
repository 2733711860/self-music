<template>
	<div style="height: 100%;">
		<mescroll-vue ref="mescroll" :up="mescrollUp" style="height: 100%;">
			<div id="dataList" class="data-list" v-cloak>
				<div class="item_msg" v-for="(xx, index) in dataList" :key="index">
					{{xx}}
				</div>
			</div>
		</mescroll-vue>
	</div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
	name: 'meRefreshLoadMescroll',
	components: {
    MescrollVue // 注册mescroll组件
  },
  data () {
  	return {
  		mescrollDown: {},
  		mescrollUp: { // 上拉加载的配置
  			callback: this.upCallback, // 上拉回调（返回两个参数page, mescroll）
  			page: {
  				num: 0,
  				size: 10
  			},
  			empty: {
          warpId: 'dataList',
          icon: require('./empty.png'),
          tip: "暂无相关数据~",
//        btntext: '去逛逛 >', // 按钮,默认""
//        btnClick () { // 点击按钮的回调,默认null
//          alert('点击了按钮,具体逻辑自行实现')
//        }
        },
//      toTop: { // 回到顶部
//      	src: require('./totop.png'),
//      	offset: 300 // 列表滚动300px才显示回到顶部按钮
//      }
  		},
  		dataList: [] // 列表数据
  	}
  },
  methods: {
  	upCallback (page, mescroll) {
			this.getData(page).then((res) => {
				// 如果是第一页需手动置空列表
        if (page.num === 1) this.dataList = []
				// 把请求到的数据添加到列表
				this.dataList.push(...res)
				// 数据渲染成功后,隐藏下拉刷新的状态
				this.$nextTick(() => {
          mescroll.endSuccess(res.length)
        })
			}).catch(() => {
				// 联网失败的回调,隐藏下拉刷新和上拉加载的状态
				mescroll.endErr()
			})
  	},

  	async getData (page) {
  		return new Promise(async (resolve, reject) => {
  			await setTimeout(() => {
//				resolve([])
					if (page.num == 1) {
						resolve(Array.from({ length: page.size }, (value, index) => `第${page.num}页的数据${index},点我(｡･ω･)ﾉﾞ`))
					} else {
						resolve([])
					}
  			}, 2000)
  		})
  	}
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
    // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    next()
  }
}
</script>

<style scoped="scoped">
	.item_msg{
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #DDDDDD;
	}
</style>

<style lang="less">
	.mescroll-empty{
		padding-top: 50%;
	}
</style>