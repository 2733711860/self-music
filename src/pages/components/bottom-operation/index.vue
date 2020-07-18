<template>
	<div :class="['play-bottom', {disable: !currentSong.id}]">
		<music-slider></music-slider>
		
		<div class="bottom_lyric">
			<div class="music_mode">
				<Icon :size="10" :type="playMode" @click="changeModel" />
			</div>
			<div class="bottom_button">
				<Icon :size="10" type="previous" @click="preSong" />
				<Icon :size="14" :type="playing ? 'play' : 'pause'" class="playbtn" @click="play" />
				<Icon :size="10" type="next" @click="nexSong" />
			</div>
			<div>
				<Icon :size="10" type="list" @click="showPlayPopup" />
			</div>
		</div>
		
		<playing-list v-model="showPopup" :playlist="playlist"></playing-list>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Icon from '@/pages/components/icon'
import musicSlider from '@/pages/components/music-slider'
import playingList from '@/pages/components/play-list'
export default {
	components: {
		Icon, musicSlider, playingList
	},

	data () {
		return {
			modeShow: false,
			showPopup: false // 显示播放列表
		}
	},

	computed: {
		...mapGetters([ 'nextSong', 'prevSong', 'currentSong', 'playing', 'playlist', 'playMode' ])
	},

	methods: {
		preSong () {
			this.startSong(this.prevSong)
		},
		
		nexSong () {
			this.startSong(this.nextSong)
		},
		
		play () {
			if (!this.currentSong.id) {
        return
      }
      this.setPlaying(!this.playing)
		},
		
		showPlayPopup () { // 播放列表
    	this.showPopup = !this.showPopup
    },
    
    changeModel () { // 修改播放模式
    	if (this.playMode == 'sequence') { // 当前为顺序播放，则修改为单曲循环
    		this.setPlayMode('loop')
    		this.$toast.show('单曲循环')
    	} else if (this.playMode == 'loop') { // 当前为单曲循环，则修改为随机播放
    		this.setPlayMode('random')
    		this.$toast.show('随机播放')
    	} else {
    		this.setPlayMode('sequence')
    		this.$toast.show('顺序播放')
    	}
    },

		...mapMutations({
			setPlaying: 'SET_PLAYING',
			setPlayMode: 'SET_PLAYMODE'
    }),
    
    ...mapActions(["startSong"])
	}
}
</script>

<style scoped="scoped" lang="less">
.play-bottom{
	padding: 15px;
	.bottom_lyric{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		.bottom_button{
			display: flex;
			align-items: center;
			.playbtn{
				margin: 0 10px;
			}
		}
		.music_mode{
			position: relative;
		}
	}
}
.disable{
	pointer-events: none; /*阻止用户的点击动作产生任何效果*/
  opacity: 0.6;
}
</style>