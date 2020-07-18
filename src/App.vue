<template>
  <div id="app">
  	<content-page></content-page>

  	<!--左侧目录-->
  	<left-menu></left-menu>

  	<audio
      :src="currentSong.url"
      @canplay="ready"
      @ended="end"
      @timeupdate="updateTime"
      @error="geterror"
      ref="audio"
    ></audio>

    <!--播放页面-->
  	<music-player></music-player>

  	<!--搜索页面-->
  	<music-search></music-search>
  </div>
</template>

<script>
import contentPage from '@/pages/content-page'
import leftMenu from '@/pages/components/left-menu'
import musicPlayer from '@/pages/components/music-player'
import musicSearch from '@/pages/components/search'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "app",

  components: { contentPage, leftMenu, musicPlayer, musicSearch },

  computed: {
  	...mapGetters([
      "currentSong",
      "currentTime",
      "playing",
      "playMode",
      "nextSong",
      "prevSong",
      "audioEle"
    ]),
  },

  watch: {
    currentSong (newSong, oldSong) {
      if (!newSong.id) { // 清空了歌曲
        this.audioEle.pause()
        this.audioEle.currentTime = 0
        return
      }
      if (oldSong && newSong.id === oldSong.id) { // 单曲循环
        this.setCurrentTime(0)
        this.audioEle.currentTime = 0
        this.play()
        return
      }
      this.songReady = false
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.play()
      }, 1000)
    },
    playing (newPlaying) {
      this.$nextTick(() => {
        newPlaying ? this.play() : this.pause()
      })
    },
//  currentTime (val) {
//  	this.audioEle.currentTime = val
//  }
  },

  data () {
  	return {
  		songReady: false,
  	}
  },

  created() {
  	// 设置audio元素
    this.$nextTick(() => {
    	this.setAudio(this.$refs.audio) // 设置audio元素
    })
  },

  methods: {
  	ready() { // 播放器准备就绪
      this.songReady = true
    },

    end () { // 当前播放结束，自动下一首
      this.next()
    },

    pause() { // 播放暂停
      this.audioEle.pause()
    },

    updateTime(e) { // 播放时间变化
      const time = e.target.currentTime
      this.setCurrentTime(time)
    },

    geterror () { // 播放出错，自动下一首
    	this.startSong(this.nextSong)
    },

    next() { // 下一首
      if (this.songReady) {
        this.startSong(this.nextSong)
      }
    },

    async play() {
      if (this.songReady) {
        try {
          await this.audioEle.play()
        } catch (error) { // 播放出错，自动下一首

        }
      }
    },

    ...mapMutations({
    	setCurrentTime: 'SET_CURRENTTIME',
    	setAudio: 'SET_AUDIO'
    }),

    ...mapActions(["startSong"])
  }
};
</script>

<style lang="less">
	@import url("./assets/css/index.less");
</style>



