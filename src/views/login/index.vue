<template>
  <div style="height: 100%;display: flex;flex-flow: column;">
  	<me-tab
	  	v-model="selectedId"
	    :items="items"
	    :options="options"
	    @change="handleChange"></me-tab>

		<div class="home">
	    <me-refresh-load
	      ref="scroll"
	      :update-data="[list]"
	      :refresh-data="[]"
	      class="content"
	      @pullingDown="loadRefresh"
	      @pullingUp="loadMore">
	      <ul>
	        <li
	          v-for="(item, index) in list"
	          :key="index"
	          style="height: 40px;"
	        >
	          {{ item }}
	          <i class="allow-right-icon"></i>
	        </li>
	      </ul>
	    </me-refresh-load>
	  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { timeout } from '../../components/me-refresh-load/Scroll/utils'
export default {
	data () {
		return {
			selectedId: 0, // 默认选中哪个tab
			items: [ // tab列表
        {label: '天下第一'},
        {label: '天下第二'},
        {label: '宇宙第一'},
        {label: '宇宙第二'},
        {label: '超级英雄'},
        {label: '蜡笔小新'},
      ],
			options: { // 属性
        activeColor: '#1d98bd', // 激活状态下字体color以及border-bottom-color
        lineWidth: 1 // active下横线的高度， 默认为1px
     },
     list: [],
     page: 1,
     pageSize: 20
		}
	},
  async mounted () {
    await this.loadRefresh()
  },
	methods: {
		async handleChange (item, index) {
			this.$refs.scroll.autoPullDownRefresh() // 手动触发下拉刷新
		},
		// 加载刷新数据
    async loadRefresh () {
      const data = await this._fetchList()
			data.length < this.pageSize ? this.$refs.scroll.update(true) : this.page++ // 判断是否已达最后一页?如果已是最后一页，可调用this.$refs.scroll.update(true)关闭上拉
      // 初始化数据
      this.list = data
      this.page = 1
    },
    // 加载更多数据
    async loadMore () {
      const page = this.page + 1
      const data = await this._fetchList(page)

      this.list.push(...data)
      data.length < this.pageSize ? this.$refs.scroll.update(true) : this.page++ // 判断是否已达最后一页?如果已是最后一页，可调用this.$refs.scroll.update(true)关闭上拉
    },

    // 模拟一个异步获取列表操作
    async _fetchList (page = 1, pageSize = this.pageSize) {
      try {
        await timeout(1000)
        if (page < 3) {
          // 模拟数据返回
          if (this.items[this.selectedId].label == '天下第二') {
          	return []
          }
          return Array.from({ length: pageSize }, (value, index) => `第${page}页的数据${this.items[this.selectedId].label + (index+1)}`)
        } else {
          // 模拟已到达最后一页时的数据返回
          return Array.from({ length: pageSize / 2 }, (value, index) => `最后一页,第${page}页的数据${this.items[this.selectedId].label + (index+1)}`)
        }
      } catch (e) {
        return false
      }
    }
	}
}
</script>

<style scoped="scoped">
	.content{
	flex: 1;
	background-color: @me-bg-light;
	overflow: hidden;
	box-sizing: border-box;
}
.home{
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	width: 100%;
	flex: 1;
	overflow: hidden;
}
.content ul li{
	background: #fff;
	height: 44px;
	line-height: 44px;
	text-align: center;
	border-bottom: 1px solid #eee;
	position: relative;
}
</style>

