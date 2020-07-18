<template>
	<div>
		<van-tabs v-model="nowTab" @change="tabChange()" sticky swipeable animated offset-top="40">
			<van-tab title="主页 " name="主页">
				<singer-desc :singerDescs="singerDescs"></singer-desc>
			</van-tab>
			<van-tab title="单曲 " name="单曲">
				<item-music
		  		v-for="(item, index) in formatMusicList"
		  		:key="index + 'new'"
		  		:musicDesc="item"
		  		@click.native="playThis(item, index)"></item-music>
			</van-tab>
			<van-tab title="专辑 " name="专辑">内容 1</van-tab>
			<van-tab title="视频 " name="视频">内容 1</van-tab>
		</van-tabs>
		
		
	</div>
</template>

<script>
import itemMusic from '@/pages/components/music-new/item-music.vue'
import singerDesc from '@/pages/components/singer-desc'
import { createSong } from '@/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		itemMusic, singerDesc
	},
	
	data () {
		return{
			musicList: [], // 单曲列表
			singerDescs: {}, // 歌手描述
			nowTab: '单曲'
		}
	},
	
	mounted() {
		this.getSingerSong()
	},

	computed: {
		formatMusicList() { // 格式处理后的音乐列表
      return this.musicList.map(song => this.fomatSong(song))
    }
	},
	
	methods: {
		async getSingerDesc () { // 歌手描述
			await this.$get(this.$api.getSingerDesc, {id: this.$route.query.id}).then(async data => {
				this.singerDescs = data
	    })
		},
		
		async getSingerSong () { // 歌手单曲
			await this.$get(this.$api.getSingerSong, {id: this.$route.query.id}).then(async data => {
				this.musicList = data.hotSongs
	    })
		},
		
		playThis (item, index) { // 点击播放
			this.startSong(item)
			this.setPlayList(this.formatMusicList) // 保存播放列表
		},
		
		tabChange () { // 标签切换
			if (this.nowTab == '主页') {
				this.getSingerDesc()
			} else if (this.nowTab == '单曲') {
				this.getSingerSong()
			}
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