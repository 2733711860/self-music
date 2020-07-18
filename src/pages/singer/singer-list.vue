<template>
	<div class="singer-page">
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
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
export default {
	components: {
		Icon
	},

	data () {
		return {
			currentPage: 0,
			limit: 30,
			loading: false,
      finished: false,
			singerList: []
		}
	},

	mounted () {
	},

	methods: {
		async getSinger () {
			await this.$get(this.$api.getSinger, {
				limit: this.limit,
				offset: (this.currentPage - 1) * this.limit
			}).then(async data => {
				this.loading = false // 加载状态结束
    		if (!data.more) { // 没有更多数据啦
    			this.singerList = [...this.singerList, ...data.artists]
    			this.finished = true
	        return
	      }
		    if (this.currentPage != 1) {
		    	this.singerList = [...this.singerList, ...data.artists]
		    } else {
		    	this.singerList = data.artists
		    }
	    })
		},

		onLoad () {
			this.currentPage++
			this.getSinger()
		},

		goDetail (item) {
			this.$router.push({
				path: 'singerDetail',
				query: {
					id: item.id
				}
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.singer-page{
	height: 100%;
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
}
</style>