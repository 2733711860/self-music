<template>
	<div :class="['left_slide_center_nav', {'show' : showPopu}]">
    <!--蒙层-->
    <div class="center_mask" @click="closePopup"></div>
    <div :class="['center_content', 'center_content_' + position]">
    	<slot></slot>
    </div>
</div>
</template>

<script>
/*可从上、下、左、右、中间五个方位弹出来：position取值为：left、top、right、bottom、center*/
export default {
	name: 'mePopup',
	data () {
		return {
			showPopu: false
		}
	},
	props: {
		position: {
			type: String,
			default: 'right'
		},
		value: false
	},
	watch: {
		showPopu (val) {
      this.$emit('input', val)
    },
		value (val) {
			if (val) {
				document.body.setAttribute('style', 'overflow: hidden;')
			} else {
				document.body.setAttribute('style', 'overflow: auto;')
			}
			this.showPopu = val
		}
	},
	mounted () {
		this.showPopu = this.value
	},
	methods: {
		closePopup () {
			this.showPopu = false
			this.$emit('close')
		},
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
/**蒙层*/
.left_slide_center_nav{
	width: 100%;
	position: relative;
}
.left_slide_center_nav .center_mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: @me-bg-overlay;
  z-index: 1000;
  display: none;
}

/**内容*/
.left_slide_center_nav .center_content {
  position: fixed;
  transition: all .4s;
  -moz-transition: all .4s;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  -os-transition: all .4s;
  z-index: 1001;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);*/
  overflow-y: scroll;
  background: @me-bg-normal;
}

/**显示蒙层和内容 使用父级.show样式控制*/
.left_slide_center_nav.show .center_mask {
  display: block;
}

/*左侧弹出*/
.left_slide_center_nav .center_content_left{
	-os-transform: translateX(-100%);
  transform: translateX(-100%);
  width: 70%;
  left: 0;
  top: 0;
  bottom: 0;
}
.left_slide_center_nav.show .center_content_left {
  -os-transform: translateX(0);
  transform: translateX(0);
}

/*右侧弹出*/
.left_slide_center_nav .center_content_right{
	-os-transform: translateX(100%);
  transform: translateX(100%);
  width: 70%;
  right: 0;
  top: 0;
  bottom: 0;
}
.left_slide_center_nav.show .center_content_right {
  -os-transform: translateX(0);
  transform: translateX(0);
}

/*上部弹出*/
.left_slide_center_nav .center_content_top{
	-os-transform: translateY(-100%);
  transform: translateY(-100%);
  left: 0;
  right: 0;
  top: 0;
}
.left_slide_center_nav.show .center_content_top {
  -os-transform: translateY(0);
  transform: translateY(0);
}

/*底部弹出*/
.left_slide_center_nav .center_content_bottom{
	-os-transform: translateY(100%);
  transform: translateY(100%);
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
}
.left_slide_center_nav.show .center_content_bottom {
  -os-transform: translateY(0);
  transform: translateY(0);
}

/*中间弹出*/
.left_slide_center_nav .center_content_center{
	left: 50%;
	top: 50%;
	height: 0;
	transform: translate(-50%, -50%);
}
.left_slide_center_nav.show .center_content_center {
  left: 50%;
	top: 50%;
	height: auto;
	transform: translate(-50%, -50%);
}
</style>