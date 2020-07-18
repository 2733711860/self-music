<template>
	<div class="me_rate">
		<me-icon
			v-if="xx.checked==true"
			:name="name"
			:style="{'fontSize': (size + 'px'), 'color': colorChecked}"
			:id="xx.num +'me_rate'"
			v-for="(xx,index) in list"
			:key="index"
			class="me_icon"
		>
			<me-icon
				v-if="xx.num == Math.floor(score)+1 && Math.floor(score) != score"
				:name="name"
				:style="{'fontSize': (size + 'px'), 'color': colorChecked, 'width': halfwidth + 'px'}"
				class="half_icon"
				></me-icon>
		</me-icon>
		<me-icon
			v-if="xx.checked==false"
			:name="name_no"
			:style="{'fontSize': (size + 'px'), 'color': colorUnChecked }"
			:id="xx.num +'me_rate'"
			v-for="(xx, index) in list"
			:key="index + '='"
			class="me_icon"
		>
			<me-icon
				v-if="xx.num == Math.floor(score)+1 && Math.floor(score) != score"
				:style="{'fontSize': (size + 'px'), 'color': colorChecked, 'width': halfwidth + 'px'}"
				:name="name"
				class="half_icon"
				></me-icon>
		</me-icon>
	</div>
</template>

<script>
import { hasClass } from '../me-index-list/dom'
export default {
	name: 'meRate',
	data() {
		return {
			name_no: this.name + 'no',
			score: this.value,
			list: [],
			halfwidth: this.size/2
		}
	},
	props: {
		size: { // 图标大小
			type: String,
			default: '30'
		},
		name: { // 图标名称
			type: String,
			default: 'like'
		},
		totalScore: { // 总分
			type: String,
			default: '5'
		},
		disabled: { // 是否禁用
			type: Boolean,
			default: false
		},
		colorChecked: { // 选中时图标颜色
			type: String,
			default: '#57a3f3'
		},
		colorUnChecked: { // 未选中时图标颜色
			type: String,
			default: '#c8c9cc'
		},
		allowHalf: { // 是否允许半选
			type: Boolean,
			default: false
		},
		value: {}
	},
	watch: {
		score(val) {
			this.$emit('input', val)
		},
		value(val) {
			this.score = val
		}
	},
	async mounted() {
		await this.changelist().then((res) => {
			this.list = res
		})
		this.$nextTick(() => {
			if (!this.disabled) {
				this.initRate()
			}
		})
	},
	methods: {
		initRate() {
			document.getElementsByClassName('me_rate')[0].addEventListener('click', async event => {
				if (event.target.classList.contains('fa')) { // 点击的是评分图标
					let result = event.offsetX/Number(this.size) > 0.5
					result = this.allowHalf ? result : true
					if (result) { // 点击超过一半， 直接一颗星
						this.score = event.target.parentNode.getAttribute('id').substring(0, 1)
					} else { // 点击小于一半，半颗星
						this.score = event.target.parentNode.getAttribute('id').substring(0, 1) - 0.5
					}
					await this.changelist().then((res) => {
						this.list = res
					})
				}
			})
		},
		changelist() {
			return new Promise(resolve => {
				let listt = []
				for(var i=0; i< this.totalScore; i++) {
					let itee = { num: i+1, checked: false}
					listt.push(itee)
				}
				listt.forEach(item => {
					item.checked = item.num <= this.score ? true : false
				})
				resolve(listt)
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.me_rate{
		display: flex;
		.me_icon{
			margin-right: 5px;
			.half_icon{
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				overflow: hidden;
			}
		}
	}
</style>