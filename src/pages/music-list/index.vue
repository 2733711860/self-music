<template>
	<div>
		<van-tabs v-model="nowTab" @change="tabChange()" sticky swipeable animated offset-top="40">
		  <van-tab v-for="(item, index) in tabs" :key="index" :title="item.title" :name="item.value">
		  	<item-music
		  		v-for="(item, index) in formatMusicList"
		  		:key="index + 'new'"
		  		:musicDesc="item"
		  		@click.native="playThis(item, index)"></item-music>
		  </van-tab>
		</van-tabs>
		
		
	</div>
</template>

<script>
import itemMusic from '@/pages/components/music-new/item-music.vue'
import { createSong } from '@/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		itemMusic
	},
	
	data () {
		return{
			musicList: [],
			tabs: [
				{ title: "全部", value: 0 },
	      { title: "华语", value: 7 },
	      { title: "欧美", value: 96 },
	      { title: "日本", value: 8 },
	      { title: "韩国", value: 16 }
      ],
      nowTab: 0
		}
	},
	
	mounted() {
		this.getTopSongs()
	},

	computed: {
		formatMusicList() { // 格式处理后的音乐列表
      return this.musicList.map(song => this.fomatSong(song))
    }
	},
	
	methods: {
		async getTopSongs () { // 新歌推荐
			await this.$get(this.$api.getTopSong, {type: this.nowTab}).then(async data => {
				this.musicList = data.data
	    })
		},
		
		tabChange () {
			this.musicList = []
			this.getTopSongs()
		},

		playThis (item, index) { // 点击播放
			this.startSong(item)
			this.setPlayList(this.formatMusicList) // 保存播放列表
		},

		fomatSong (song) { // 音乐格式处理
			const {
        id,
        name,
        artists,
        duration,
        mvid,
        album: { picUrl, name: albumName }
      } = song
      return createSong({
        id,
        name,
        artists,
        duration,
        albumName,
        img: picUrl,
        mvId: mvid
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