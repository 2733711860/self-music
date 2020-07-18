<template>
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="--我也是有底线的--"
	  @load="onLoad">
  	<div class="item-singer" v-for="(item, index) in singerList" :key="index" @click="goDetail(item)">
			<div class="item-index">{{index + 1}}</div>
			<img v-lazy="item.img1v1Url + '?param=60y60'" />
			<div class="singer-cont">
				<div class="singer-name">{{item.name}}</div>
				<div class="singer-desc">
					<div>专辑{{item.albumSize}}</div>
					<div>单曲{{item.musicSize}}</div>
				</div>
			</div>
			<Icon :size="10" type="nolike" class="icon" />
		</div>
	</van-list>
</template>

<script>
import Icon from '@/pages/components/icon'
export default {
	components: {
		Icon
	},
	
	data () {
		return {
			loading: false,
      finished: false,
      currentPage: 0,
      singerList: []
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
			this.singerList = []
			this.currentPage = 0
			this.onLoad()
		},
		
		onLoad () {
			this.currentPage++
			this.searchF()
		},
		
		async searchF () { // 搜索接口
			let param = {
				keywords: this.keyWord,
				limit: 30,
				offset: (this.currentPage - 1) * 30,
				type: 100 // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
			}
  		await this.$get(this.$api.search, param).then(async data => {
  			this.loading = false // 加载状态结束
    		if (!data.result.hasMore) { // 没有更多数据啦
    			this.singerList = [...this.singerList, ...data.result.artists]
    			this.finished = true
	        return
	      }
		    if (this.currentPage != 1) {
		    	this.singerList = [...this.singerList, ...data.result.artists]
		    } else {
		    	this.singerList = data.result.artists
		    }
	    })
		},
		
		goDetail (singer) {
			this.$emit('closeSearch')
			this.$router.push({
				path: 'singerDetail',
				query: {
					id: singer.id
				}
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.item-singer{
		display: flex;
		align-items: center;
		padding: 10px;
		.item-index{
			padding: 0 5px;
		}
		img{
			width: 50px;
			height: 50px;
			border-radius: 100%;
			margin: 0 10px;
		}
		.singer-cont{
			flex: 1;
			overflow: hidden;
			.singer-name{
				font-size: 16px;
				line-height: 28px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.singer-desc{
				display: flex;
				font-size: 12px;
				color: rgba(0, 0, 0, 0.6);
				div{
					margin-right: 5px;
				}
			}
		}
		.icon{
			padding: 0 8px;
		}
	}
</style>