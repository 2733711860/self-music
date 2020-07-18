<template>
	<div class="me_rollNotice">
		<div class="me_row" v-if="direction=='column'">
			<div class="item_notice" v-for="(xx, index) in list" :key="index">
				<span>{{xx.text}}</span>
			</div>
		</div>

		<marquee v-if="direction=='row'"
			:scrollamount="speed">
			<span v-html="rowText"></span>
		</marquee>
	</div>
</template>

<script>
export default {
	name: 'meRollNotice',
	data() {
		return{
			nowIndex: this.defaultIndex,
			jsq: '',
			rowText: '' // 横向滚动文字
		}
	},
	props: {
		defaultIndex: { // 默认显示
			type: String,
			default: '0'
		},
		list: { // 列表
			type: Array,
			default: () => []
		},
		disabled: { // 是否禁止滚动
			type: Boolean,
			default: false
		},
		time: { // 横向滚动多久切换下一个（竖向有效）
			type: String,
			default: '3000'
		},
		direction: { // 文字滚动方向
			type: String,
			default: 'row'
		},
		speed: { // 横向滚动速度(横向有效)
			type: Number,
			default: 5
		}
	},
	watch: {
		nowIndex() {
			if (this.nowIndex == this.list.length && this.direction == 'column') {
				this.nowIndex = 0
				document.getElementsByClassName('me_row')[0].style.transform = 'translate3d(0, 0px, 0)'
				document.getElementsByClassName('me_row')[0].style.transitionDuration = '0'
			}
		}
	},
	mounted() {
		if (this.list.length > 0) {
			this.$nextTick(() => {
				if (this.direction == 'column') {
					let height = document.getElementsByClassName('item_notice')[0].clientHeight
					document.getElementsByClassName('me_row')[0].style.transform = 'translate3d(0, -' + this.nowIndex*height + 'px, 0)'
					if (!this.disabled) {
						this.jsq = setInterval(() => {
							this.nowIndex++
							this.initNotice()
						}, this.time)
					}
				} else {
					this.list.forEach((item, index) => {
						if (index != 0) {
							this.rowText = this.rowText + '<span style="width: 80px;display:inline-block"></span>' + item.text
						} else {
							this.rowText = item.text
						}
					})
				}
			})
		}
	},
	methods: {
		initNotice() {
			let height = document.getElementsByClassName('item_notice')[0].clientHeight
			document.getElementsByClassName('me_row')[0].style.transform = 'translate3d(0, -' + this.nowIndex*height + 'px, 0)'
			document.getElementsByClassName('me_row')[0].style.transitionDuration = '500ms'
		}
	},
	destroyed() {
		clearInterval(this.jsq)
	}
}
</script>

<style scoped="scoped" lang="less">
.me_rollNotice{
	height: 40px;
	overflow: hidden;
	background: #FFFFFF;
	position: relative;
	marquee{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.me_row{
		height: inherit;
		.item_notice{
			padding: 0 10px;
			height: inherit;
			display: flex;
			align-items: center;
			span{
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				display: inline-block;
			}
		}
	}
}
</style>
