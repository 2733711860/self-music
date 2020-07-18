<template>
		<div class="delete-content" id="delete-content">
			<slot></slot>
		</div>
</template>
<script>
export default {
	name: 'meSlide',
	data() {
		return {
			allwidth: 0
		}
	},
	props: {
		list: {
			type: Array,
			default: () => {
        return []
      }
		},
		classname: {
			type: String,
			default: 'slide-warp'
		},
		hideclass: {
			type: String,
			default: 'hideclass'
		}
	},
	async mounted() {
		await this.init()
		this.allwidth = this.allwidth / (this.list.length)
		this.$nextTick(() => {
			this._initSlideDelete()
		})
	},
	watch: {
		list() {
			this.closeLeft()
		}
	},
	methods: {
		init () {
			let aa = document.getElementsByClassName(this.hideclass)
			for(var i=0;i <aa.length; i++) {
				this.allwidth = this.allwidth + aa[i].clientWidth
			}
		},
		_initSlideDelete() {
			let _this= this
			let initX // 触摸位置
			let moveX // 滑动时的位置
			let X = 0 // 移动距离
			let objX = 0 // 目标对象位置
			window.addEventListener('touchstart', function(event) {
				let obj = event.target.parentNode
				if(obj.className === _this.classname) {
					initX = event.targetTouches[0].pageX
					objX =
						obj.style.WebkitTransform
						.replace(/translateX\(/g, '')
						.replace(/px\)/g, '') * 1
				}
				if(objX === 0) { // 左移
					window.addEventListener('touchmove', function(event) {
						let obj = event.target.parentNode
						_this.closeLeft(obj.getAttribute('id')) // 移动时关闭其他的左滑
						if(obj.className === _this.classname) {
							moveX = event.targetTouches[0].pageX
							X = moveX - initX
							if(X >= 0) {
								obj.style.WebkitTransform = 'translateX(' + 0 + 'px)'
							} else if(X < 0) {
								let l = Math.abs(X)
								if(l > _this.allwidth) {
									l = _this.allwidth
									obj.style.WebkitTransform = 'translateX(' + -l + 'px)'
								} else {
									obj.style.WebkitTransform = 'translateX(' + -l + 'px)'
								}
							}
						}
					})
				} else if(objX < 0) { // 右移
					window.addEventListener('touchmove', function(event) {
						let obj = event.target.parentNode
						if(obj.className === _this.classname) {
							moveX = event.targetTouches[0].pageX
							X = moveX - initX
							if(X >= 0) {
								let r = -_this.allwidth + Math.abs(X)
								obj.style.WebkitTransform = 'translateX(' + r + 'px)'
								if(r > 0) {
									r = 0
									obj.style.WebkitTransform = 'translateX(' + r + 'px)'
								}
							} else {
								// 向左滑动
								obj.style.WebkitTransform = 'translateX(' + -_this.allwidth + 'px)'
							}
						}
					})
				}
			})
			window.addEventListener('touchend', function(event) { // 移动结束
				let obj = event.target.parentNode
				if(obj.className === _this.classname) {
					objX =
						obj.style.WebkitTransform
						.replace(/translateX\(/g, '')
						.replace(/px\)/g, '') * 1
					if(objX > -40) {
						obj.style.WebkitTransform = 'translateX(' + 0 + 'px)'
						objX = 0
					} else {
						obj.style.WebkitTransform = 'translateX(' + -_this.allwidth + 'px)'
						objX = -_this.allwidth
					}
				}
			})
			window.addEventListener('click', function(event) { // 点击关闭左移
				let obj = event.target.parentNode
				if(obj.className === _this.classname) {
					objX =
						obj.style.WebkitTransform
						.replace(/translateX\(/g, '')
						.replace(/px\)/g, '') * 1
						obj.style.WebkitTransform = 'translateX(' + 0 + 'px)'
						objX = 0
				}
			})
		},
		closeLeft(domid) { // 关闭其他左滑
			let allDom = document.getElementById('delete-content').childNodes
			allDom.forEach((item, index) => {
				if (domid != index) {
					item.style.WebkitTransform =
						'translateX(' + 0 + 'px)'
				}
			})
		}
	}
}
</script>
<style scoped lang="less">
.delete-content {
	overflow: hidden;
}
</style>