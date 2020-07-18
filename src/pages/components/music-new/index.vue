<template>
	<div>
		<div class="title-div">
			<span>新歌速递</span>
			<div class="right" @click="goMusicList">
				<span>更多</span>
				<Icon :size="9" type="right" />
			</div>
		</div>
		<item-music
			v-for="(item, index) in formatMusicList"
			:key="index + 'new'"
			:musicDesc="item"
			@click.native="playThis(item, index)"></item-music>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import itemMusic from './item-music.vue'
import { createSong } from '@/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		Icon, itemMusic
	},

	data () {
		return{
			musicList: []
		}
	},

	mounted() {
		this.getNewSongs()
	},

	computed: {
		formatMusicList() { // 格式处理后的音乐列表
      return this.musicList.map(song => this.fomatSong(song))
    }
	},

	methods: {
		async getNewSongs () { // 新歌推荐
			await this.$get(this.$api.getNewSongs).then(async data => {
				this.musicList = data.result
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
        song: {
          mvid,
          artists,
          album: { blurPicUrl },
          duration
        }
      } = song
      return createSong({
        id,
        name,
        img: blurPicUrl,
        artists,
        duration,
        mvId: mvid
      })
		},
		
		goMusicList () {
			this.$router.push({
				path: '/musicList'
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
.title-div{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	span{
		font-weight: 550;
	}
	.right{
		display: flex;
		align-items: center;
		font-size: 12px;
		span{
			font-weight: normal;
		}
	}
}
</style>