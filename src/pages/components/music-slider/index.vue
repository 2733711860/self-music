<template>
	<div class="musci_progre">
		<div v-if="currentSong.id" class="progress_time">{{ currentTime | format }}</div>
		<!--进度条拖动-->
	  <div ref="mmProgress" class="mmProgress" @click="barClick">
	    <div class="mmProgress-bar"></div>
	    <div ref="mmPercentProgress" class="mmProgress-outer"></div>
	    <div ref="mmProgressInner" class="mmProgress-inner">
	      <div class="mmProgress-dot" @mousedown="barDown" @touchstart.prevent="barDown"></div>
	    </div>
	  </div>
		<div v-if="currentSong.id" class="progress_time">{{ currentSong.durationSecond | format }}</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { format } from '@/utils'
const dotWidth = 10
export default {
  computed: {
		...mapGetters([
			'currentSong', // 当前音乐播放对象
			'currentTime',
			'audioEle'
		]),

		percent() { // 播放的进度百分比
      const { durationSecond } = this.currentSong
      return (Math.min(this.currentTime / durationSecond, 1) || 0)
    },
	},

	filters: {
    // 时间格式化
    format
  },

  data() {
    return {
      move: {
        status: false, // 是否可拖动
        startX: 0, // 记录最开始点击的X坐标
        left: 0 // 记录当前已经移动的距离
      }
    }
  },

  watch: {
    percent(newPercent) {
      if (newPercent >= 0 && !this.move.status) {
        const barWidth = this.$refs.mmProgress.clientWidth - dotWidth
        const offsetWidth = newPercent * barWidth
        this.moveSilde(offsetWidth)
      }
    },
    currentProgress(newValue) {
      let offsetWidth = this.$refs.mmProgress.clientWidth * newValue
      this.$refs.mmPercentProgress.style.width = `${offsetWidth}px`
    }
  },
  mounted() {
    this.$nextTick(() => {
    	if(this.currentSong.id == undefined) {
    		return
    	}
      this.bindEvents()
      const barWidth = this.$refs.mmProgress.clientWidth - dotWidth
      const offsetWidth = this.percent * barWidth
      this.moveSilde(offsetWidth)
    })
  },
  beforeDestroy() {
    this.unbindEvents()
  },
  methods: {
    // 添加绑定事件
    bindEvents() {
      document.addEventListener('mousemove', this.barMove, { passive: false })
      document.addEventListener('mouseup', this.barUp, { passive: false })

      document.addEventListener('touchmove', this.barMove, { passive: false })
      document.addEventListener('touchend', this.barUp, { passive: false })
    },
    // 移除绑定事件
    unbindEvents() {
      document.removeEventListener('mousemove', this.barMove, { passive: false })
      document.removeEventListener('mouseup', this.barUp, { passive: false })

      document.removeEventListener('touchmove', this.barMove, { passive: false })
      document.removeEventListener('touchend', this.barUp, { passive: false })
    },
    // 点击事件
    barClick(e) {
      let rect = this.$refs.mmProgress.getBoundingClientRect()
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, e.clientX - rect.left)
      )
      this.moveSilde(offsetWidth)
      this.commitPercent()
    },
    // 鼠标按下事件
    barDown(e) {
      this.move.status = true
      this.move.startX = e.clientX || e.touches[0].pageX
      this.move.left = this.$refs.mmProgressInner.clientWidth
    },
    // 鼠标/触摸移动事件
    barMove(e) {
      if (!this.move.status) {
        return false
      }
      e.preventDefault()
      let endX = e.clientX || e.touches[0].pageX
      let dist = endX - this.move.startX
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, this.move.left + dist)
      )
      this.moveSilde(offsetWidth)
      this.commitPercent()
    },
    // 鼠标/触摸释放事件
    barUp(e) {
      this.move.status = false
      // this.commitPercent()
    },
    // 移动滑块
    moveSilde(offsetWidth) {
      this.$refs.mmProgressInner.style.width = `${offsetWidth}px`
    },
    // 修改percent
    commitPercent() {
      let lineWidth = this.$refs.mmProgress.clientWidth - dotWidth
      let percent = this.$refs.mmProgressInner.clientWidth / lineWidth
      let nowTime = this.currentSong.durationSecond * percent
      this.audioEle.currentTime = nowTime
      this.setCurrentTime(nowTime)
    },
    
    ...mapMutations({
    	setCurrentTime: 'SET_CURRENTTIME'
    }),
  }
}
</script>

<style lang="less">
.musci_progre{
	display: flex;
}
.mmProgress {
  position: relative;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  flex: 1;
  .mmProgress-bar {
    height: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
  }
  .mmProgress-outer {
    position: absolute;
    /*top: 50%;*/
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    /*margin-top: -1px;*/
    background: rgba(255, 255, 255, 0.2);
  }
  .mmProgress-inner {
    position: absolute;
    /*top: 50%;*/
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    margin-top: -2px;
    background: rgba(255, 255, 255, 0.9);
    .mmProgress-dot {
      position: absolute;
      top: 50%;
      right: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 1);
      transform: translateY(-50%);
    }
  }
}
.progress_time{
	font-size: 12px;
}
</style>
