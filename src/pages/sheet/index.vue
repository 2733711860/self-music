<template>
	<div class="list_page">
		<div class="page_content">
			<div class="item_dev">
				<van-tabs v-model="nowTab" @change="tabChange()" sticky swipeable animated offset-top="40">
				  <van-tab v-for="(item, index) in tabs" :key="index" :title="item.name" :name="index">
				  	<van-list
				  	  v-model="loading"
				  	  :finished="finished"
				  	  finished-text="--我也是有底线的--"
				  	  @load="onLoad">
			  	  	<div class="sheet-div">
								<item-sheet 
									v-for="(item, index) in sheetList" 
									:key="index + 'sheet'" 
									:sheetMsg="item"
									@click.native="goSheet(item)"></item-sheet>
							</div>
				  	</van-list>
				  </van-tab>
				</van-tabs>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import itemSheet from '@/pages/components/music-sheet/item-sheet.vue'
export default {
	components:{
		itemSheet
	},

	data () {
		return {
			sheetList: [],
			currentPage: 0,
			limit: 50,
			loading: false,
      finished: false,
      tabs: [],
      nowTab: 0
		}
	},
	
	computed: {
	},
	
	mounted () {
		this.getCatlist()
	},
	
	methods: {
		async getCatlist () { // 歌单分类
			await this.$get(this.$api.getCatlist).then(async data => {
				this.tabs = data.sub
				this.tabs.unshift({
					name: '全部'
				})
	    })
		},
		
		async getPlaylists () { // 歌单
			await this.$get(this.$api.getPlaylists, {
				limit: this.limit,
				offset: (this.currentPage) * this.limit,
				cat: this.tabs[this.nowTab].name
			}).then(async data => {
				this.loading = false // 加载状态结束
    		if (data.playlists.length == 0) { // 没有更多数据啦
    			this.finished = true
	        return
	      }
		    if (this.currentPage != 0) {
		    	this.sheetList = [...this.sheetList, ...data.playlists]
		    } else {
		    	this.sheetList = data.playlists
		    }
	    })
		},
		
		tabChange () {
			this.currentPage = 0
			this.getPlaylists()
		},
		
		onLoad () {
			this.currentPage++
			this.getPlaylists()
		},
		
		goSheet (sheet) {
			this.$router.push({
				path: '/sheetList',
				query: {
					id: sheet.id
				}
			})
		},
	}
}
</script>

<style scoped="scoped" lang="less">
.list_page{
	height: 100%;
	.page_content{
		.item_dev{
			.sheet-div:after{
				content: '';
				width: 110px;
			}
			.sheet-div{
				display: flex;
				flex-wrap: wrap;
				padding: 10px;
				justify-content: space-between;
				div{
					margin-bottom: 10px;
				}
			}
		}
	}
	.me_top{
		height: 40px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(0, 0, 0, .05);
	}
}
</style>

