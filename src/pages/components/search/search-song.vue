<template>
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="--我也是有底线的--"
	  @load="onLoad">
  	<div class="search-song">
			<item-music
				v-for="(item, index) in formatMusicList"
				:key="index + 'new'"
				:musicDesc="item"
				@click.native="playThis(item, index)"></item-music>
		</div>
	</van-list>
</template>

<script>
import itemMusic from '@/pages/components/music-new/item-music.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { createSong } from '@/utils'
export default {
	components: {
		itemMusic
	},

	data () {
		return {
			loading: false,
      finished: false,
      currentPage: 0,
      musicList: []
		}
	},

	props: {
		keyWord: {
			type: String,
			default: ''
		}
	},

	computed: {
		formatMusicList() { // 格式处理后的音乐列表
      return this.musicList.map(song => this.fomatSong(song))
    }
	},

	methods: {
		playThis (item, index) { // 点击播放
			this.startSong(item)
			this.setPlayList(this.formatMusicList) // 保存播放列表
		},
		
		searchFirs () { // 输入框重新录入
			this.musicList = []
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
				type: 1 // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
			}
  		await this.$get(this.$api.search, param).then(async data => {
  			this.loading = false // 加载状态结束
    		this.getSongDetail(data.result.songs).then(list => {
    			if (!data.result.hasMore) { // 没有更多数据啦
	    			this.musicList = [...this.musicList, ...list]
	    			this.finished = true
		        return
		      }
    			if (this.currentPage != 1) {
    				this.musicList = [...this.musicList, ...list]
    			} else {
    				this.musicList = list
    			}
    		})
    		
	    })
		},
		
		async getSongDetail (playlist) { // 歌曲详情，从而获取音乐图片链接
			return new Promise(async (resolve, reject) => {
				const trackIds = playlist.map(({ id }) => id)
				await this.$get(this.$api.getSongDetail, { ids: trackIds.join(',') }).then(data => {
					resolve(data.songs)
		    })
				
			})
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

<style>
</style>