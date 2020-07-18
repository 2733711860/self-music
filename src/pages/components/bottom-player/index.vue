<template>
	<div class="me_footr">
  	<me-progress
  		:class="['pictop', {prog: playing}]"
  		:percentage="percent"
  		:strokeWidth="3"
  		:width="50"
  		trackColor="rgba(0, 0, 0, .07)"
  		type="circle"
  		strokeLinecap="round"
  		@click.native="goPlayer">
  		<img :src="picUrl" :class="['circleImg', {Rotation: playing}]" style="width: 42px;height: 42px;" />
  	</me-progress>
  	<div class="me_footer_desc">
  		<div class="music_name">{{currentSong.name}}</div>
  		<div class="music_user">{{currentSong.artistsText}}</div>
  	</div>
  	<div :class="['me_footer_icon', {disable: !currentSong.id}]">
  		<Icon :size="10" :type="playing ? 'play2' : 'pause2'" @click="togglePlaying" />
  		<Icon :size="10" type="next" @click="next" />
  		<Icon :size="10" type="list" @click="showPlayPopup" />
  	</div>
		
		<playing-list v-model="showPopup" :playlist="playlist"></playing-list>
  </div>
</template>

<script>
import Icon from '@/pages/components/icon'
import playingList from '@/pages/components/play-list'
import meProgress from '../me-progress'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		Icon, meProgress, playingList
	},
	
	computed: {
		percent() { // 播放的进度百分比
      const { durationSecond } = this.currentSong
      return (Math.min(this.currentTime / durationSecond, 1) || 0) * 100
    },
    
    picUrl() {
      return this.currentSong.id && this.currentSong.img
      	? `${this.currentSong.img}?param=100y100`
      	: ""+require('../../../assets/img/3.jpg')
    },

		...mapGetters([
      "playing",
      "currentSong",
      "currentTime",
      "nextSong",
      "playlist"
    ]),
	},

	data () {
		return{
			showPopup: false // 显示播放列表
		}
	},

	methods: {
		togglePlaying() { // 切换播放状态
      if (!this.currentSong.id) {
        return
      }
      this.setPlaying(!this.playing)
    },

    next () { // 下一首
    	this.startSong(this.nextSong)
    },

    goPlayer () { // 播放器
    	this.setShowSearch(false)
    	this.setShowPlayer(true)
    },
    
    showPlayPopup () { // 播放列表
    	this.showPopup = !this.showPopup
    },

    ...mapMutations({
    	setPlaying: 'SET_PLAYING',
    	setShowPlayer: 'SET_SHOWPLAYER',
    	setShowSearch: 'SET_SHOWSEARCH'
    }),

    ...mapActions(["startSong"])
	}
}
</script>

<style scoped lang="less">
.me_footr{
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	color: rgba(0, 0,0, .8);
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, .07);
	position: relative;
	.disable{
		pointer-events: none; /*阻止用户的点击动作产生任何效果*/
    opacity: 0.6;
	}
	.pictop{
		position: absolute;
		top: 5px;
		transition: all .3s;
		background: white;
	}
	.prog{
		top: -10px;
	}
	.me_footer_desc{
		flex: 1;
		overflow-y: hidden;
		padding: 0 20px 0 70px;
		line-height: 26px;
		font-size: 16px;
		.music_user{
			font-size: 12px;
			line-height: 18px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.music_name{
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.me_footer_icon{
		display: flex;
		justify-content: space-between;
		width: 90px;
		color: rgb(25, 137, 250);
		.iconsize{
			font-size: 22px;
		}
	}
}
.circleImg{
	border-radius: 100%;
	opacity: .7;
}
.Rotation{
	-webkit-transform: rotate(360deg);
	animation: rotation 15s linear infinite;
	-moz-animation: rotation 15s linear infinite;
	-webkit-animation: rotation 15s linear infinite;
	-o-animation: rotation 15s linear infinite;
}
@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
}
.flex2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px
}
.disable{
	pointer-events: none; /*阻止用户的点击动作产生任何效果*/
  opacity: 0.6;
}
</style>