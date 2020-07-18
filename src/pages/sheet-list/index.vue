<template>
	<div class="list_page">
		<div class="rank_top">
			<!--背景设置-->
			<div class="dd_bg_pic" :style="{ backgroundImage: picUrl }"></div>
	    <div class="dd_bg_mask"></div>
	    
			<div class="rank_top_top">
				<img :src="playlist.coverImgUrl" />
				<div class="rank_msg">
					<div class="rank_name">{{playlist.name}}</div>
					<div class="rank_time">最近更新：{{ playlist.updateTime | dateFormatFun }}</div>
					<div class="rank_time">创建日期：{{ playlist.createTime | dateFormatFun }}</div>
					<div class="rank_time">{{playlist.description}}</div>
				</div>
			</div>
			<div class="rank_top_btn">
				<div class="item_btn">
					<Icon :size="10" type="share" />
					<div>分享</div>
				</div>
				<div class="item_btn">
					<Icon :size="10" type="down" />
					<div>下载</div>
				</div>
				<div class="item_btn">
					<Icon :size="10" type="comment" />
					<div>评论(1246)</div>
				</div>
				<div class="item_btn">
					<Icon :size="10" type="nolike" />
					<div>收藏(1246)</div>
				</div>
			</div>
		</div>
		
		<div>
			<item-music
				v-for="(item, index) in formatMusicList"
				:key="index + 'new'"
				:musicDesc="item"
				@click.native="playThis(item, index)"></item-music>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { createSong, dateFormatFun } from '@/utils'
import Icon from '@/pages/components/icon'
import itemMusic from '@/pages/components/music-new/item-music.vue'
export default {
	components:{
		Icon, itemMusic
	},

	data () {
		return {
			playlist: {},
			musicList: []
		}
	},
	
	computed: {
		picUrl() {
      return this.playlist.coverImgUrl
      	? `url(${this.playlist.coverImgUrl}?param=300y300)`
      	: "url("+require('@/assets/img/3.jpg')+")"
    },
    
    formatMusicList() { // 格式处理后的音乐列表
      return this.musicList.map(song => this.fomatSong(song))
    }
	},
	
	filters: {
    // 时间戳转日期
    dateFormatFun
  },
	
	mounted () {
		this.getListDetail()
	},
	
	methods: {
		async getListDetail () { // 歌单详情
			await this.$get(this.$api.getListDetail, { id: this.$route.query.id }).then(async data => {
				this.playlist = data.playlist
				this.getSongDetail(data.playlist)
	    })
		},
		
		async getSongDetail (playlist) { // 歌曲详情
			const trackIds = playlist.trackIds.map(({ id }) => id)
			await this.$get(this.$api.getSongDetail, { ids: trackIds.join(',') }).then(async data => {
				this.musicList = data.songs
	    })
		},
		
		playThis (item, index) { // 点击播放
			this.startSong(item)
			this.setPlayList(this.formatMusicList) // 保存播放列表
		},
		
		fomatSong (song) { // 音乐格式处理
			const {
        id,
        name,
        al: {
        	picUrl
        },
        ar,
        dt
      } = song
      return createSong({
        id,
        name,
        img: picUrl,
        artists: ar,
        duration: dt
      })
		},
		
		...mapMutations({
			setPlayList: 'SET_PLAYLIST',
		}),

		...mapActions(["startSong"])
	}
}
</script>

<style scoped="scoped" lang="less">
.list_page{
	height: 100%;
	.rank_top{
		height: 200px;
		display: flex;
		flex-flow: column;
		justify-content: center;
		position: relative;
		color: rgba(255, 255, 255, .9);
		.rank_top_btn{
			display: flex;
			justify-content: space-around;
			margin-top: 15px;
			.item_btn{
				font-size: 12px;
				display: flex;
				flex-flow: column;
				align-items: center;
			}
		}
		.rank_top_top{
			display: flex;
			align-items: center;
			padding: 0 10px;
			img{
				width: 110px;
				height: 110px;
				border-radius: 8px;
			}
			.rank_msg{
				flex: 1;
				padding: 0 10px;
				height: 110px;
				display: flex;
				flex-flow: column;
				justify-content: space-between;
				.rank_name{
					line-height: 25px;
				}
				.rank_time{
					color: rgba(255, 255, 255, .6);
					font-size: 12px;
					line-height: 16px;
					overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
				}
			}
		}
		/*背景*/
		.dd_bg_pic, .dd_bg_mask{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: -2;
		}
		.dd_bg_pic{
			z-index: -2;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 50%;
			transition: all 0.8s;
			-webkit-transition: all 0.8s;
			filter: blur(12px);
			-webkit-filter: blur(12px);
			opacity: .8;
		}
		.dd_bg_mask{
			opacity: .5;
			filter: none;
			background-color: rgba(46, 48, 48, 1);
		}
	}
}
</style>

