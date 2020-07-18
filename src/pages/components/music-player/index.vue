<template>
	<transition name="slide">
		<div :class="['player', showPlayer ? 'show' : 'hide']">
			<music-header></music-header>
			<music-lyric
				class="page-lyric"
				v-if="!showCdPlayer"
				:nolyric="nolyric"
				:lyric="lyric"
				:lyricIndex="lyricIndex"></music-lyric>

			<music-cd-player
				class="page-lyric"
				v-if="showCdPlayer"
				:nolyric="nolyric"
				:lyric="lyric"
				:lyricIndex="lyricIndex"></music-cd-player>
			<bottom-operation></bottom-operation>

			<!--背景设置-->
			<div class="dd_bg_pic" :style="{ backgroundImage: picUrl }"></div>
	    <div class="dd_bg_mask"></div>
		</div>
	</transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import musicLyric from '../music-lyric'
import musicCdPlayer from '../music-cd-player'
import musicHeader from "../header"
import bottomOperation from "../bottom-operation"
import { lyricParser } from '@/utils'
export default {
	components: {
		musicLyric, musicHeader, bottomOperation, musicCdPlayer
	},

	data () {
		return {
			nolyric: false, // 没有歌词
			lyric: []
		}
	},

	computed: {
		picUrl() {
      return this.currentSong.id && this.currentSong.img
      	? `url(${this.currentSong.img}?param=300y300)`
      	: "url("+require('../../../assets/img/3.jpg')+")"
    },

    lyricIndex() { // 当前歌词下标
			return this.lyric ?
				this.lyric.findIndex((l, index) => {
					const nextLyric = this.lyric[index + 1]
					return(
						this.currentTime >= l.time &&
						(nextLyric ? this.currentTime < nextLyric.time : true)
					)
				}) :
				-1
		},

		...mapGetters([
      "showPlayer",
      "currentSong",
      "currentTime",
      "showCdPlayer"
    ]),
	},

	watch: {
		currentSong(newSong, oldSong) { // 监听歌曲发生变化，需要更新	歌词
			if(!newSong.id) {
				return
			}
			if(newSong.id === oldSong.id) {
				return
			}
			this.updateLyric()
		},
	},

	methods: {
		async updateLyric() { // 根据歌曲查询歌词
			await this.$get(this.$api.getLyric, { id: this.currentSong.id }).then(async data => {
				this.nolyric = !this.isDef(data.lrc) || !data.lrc.lyric
				if(!this.nolyric) {
					const {
						lyric
					} = lyricParser(data)
					this.lyric = lyric
				}
	    })
		},

		isDef(v) {
		  return v !== undefined && v !== null
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.slide-enter-active,
.slide-leave-active {
  transition: all 1.5s;
  transform: none;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.player{
	z-index: 100;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: white;
	overflow: hidden;
	overflow-y: auto;
	transition: transform 0.5s;
	color: white;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	.page-lyric{
		flex: 1;
	}
}
.player.hide {
	transform: translateY(105%);
}
.player.show {
	transform: none;
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
		filter: blur(10px);
		-webkit-filter: blur(10px);
		opacity: .8;
	}
	.dd_bg_mask{
		opacity: .5;
		filter: none;
		background-color: rgba(46, 48, 48, 1);
	}
</style>