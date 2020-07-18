<template>
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="--我也是有底线的--"
	  @load="onLoad">
  	<div class="search-sheet">
			<item-sheet
					v-for="(item, index) in sheetList"
					:key="index + 'sheet'"
					:sheetMsg="item"
					@click.native="goList(item)"></item-sheet>
		</div>
	</van-list>
</template>

<script>
import itemSheet from '@/pages/components/music-sheet/item-sheet.vue'
export default {
	components: {
		itemSheet
	},
	
	data () {
		return {
			loading: false,
      finished: false,
      currentPage: 0,
      sheetList: []
		}
	},

	props: {
		keyWord: {
			type: String,
			default: ''
		}
	},

	methods: {
		searchFirs () { // 输入框重新录入
			console.log(9999)
			this.sheetList = []
			this.currentPage = 0
			this.onLoad()
		},
		
		onLoad () {
			console.log(888)
			this.currentPage++
			this.searchF()
		},
		
		async searchF () { // 搜索接口
			let param = {
				keywords: this.keyWord,
				limit: 30,
				offset: (this.currentPage - 1) * 30,
				type: 1000 // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
			}
  		await this.$get(this.$api.search, param).then(async data => {
  			this.loading = false // 加载状态结束
    		if (!data.result.hasMore) { // 没有更多数据啦
    			this.finished = true
	        return
	      }
		    if (this.currentPage != 1) {
		    	this.sheetList = [...this.sheetList, ...data.result.playlists]
		    } else {
		    	this.sheetList = data.result.playlists
		    }
	    })
		},
		
		goList (sheet) {
			this.$emit('closeSearch')
			this.$router.push({
				path: '/sheetList',
				query: {
					id: sheet.id
				}
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.search-sheet:after{
	content: '';
	width: 110px;
}
.search-sheet{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px;
	div{
		margin-bottom: 10px;
	}
}
</style>