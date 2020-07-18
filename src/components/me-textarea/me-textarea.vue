<template>
	<div class="me_textarea">
		<textarea ref="textarea"
			:style="{'height': height, 'min-height': minHeight, 'max-height': maxHeight}"
			v-model="textValue"
			class="textarea"
			:maxlength="maxNum"
			:placeholder="placeholder"
			:disabled="disabled"
			@focus="focus"
			@change="change"
			@blur="blur"
			@input="input"></textarea>
		<div class="me_count" v-if="isCount">{{nowNum}}/{{maxNum}}</div>
	</div>
</template>

<script>
import calcTextareaHeight from './calcTextareaHeight.js'
export default {
	name: 'meTextarea',
	data() {
		return{
			nowNum: this.value.length, // 当前字数
			height: '',
			textValue: this.value
		}
	},
	props: {
		minHeight: { // 最小高度
			type: String,
			default: '50px'
		},
		maxHeight: { // 最大高度
			type: String,
			default: '100px'
		},
		maxNum: { // 最多字数
			type: String,
			default: '20'
		},
		placeholder: {
			type: String,
			default: ''
		},
		isCount: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: {}
	},
	watch: {
		textValue(val) {
			this.getHeight()
			this.nowNum = this.textValue.length
			this.$emit('input', val)
		},
		value(val) {
			this.textValue = val
		}
	},
	methods: {
		getHeight() {
			this.height = calcTextareaHeight(this.$refs.textarea, 1, null).height
		},
		focus() { // 获得焦点时
			this.$emit('focus', this.textValue)
		},
		change() { // 输入框值发生变化，且失去焦点时
			this.$emit('change', this.textValue)
		},
		blur() { // 失去焦点
			this.$emit('blur', this.textValue)
		},
		input() { // 输入框的值发生变化时
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
	.me_textarea{
		display: flex;
		flex-flow: column;
		border: 1px solid #D3D3D3;
		.textarea{
			outline: none;
			padding: 8px 12px;
			background-color: @me-bg-normal;
			border: none;
			line-height: 22px;
		}
	}
	.me_count{
		padding: 5px 10px;
		text-align: right;
		background-color: @me-bg-normal;
		color: @font-color-lighter;
	}
</style>