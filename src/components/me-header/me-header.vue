<template>
	<div class="me-header">
		<div class="header-left">
			<slot name="left" v-if="hasLeft">
				<me-icon name="left" @click="clickLeft"></me-icon>
			</slot>
		</div>
		<span class="header-center">{{title}}</span>
		<div class="header-right">
			<slot name="right" v-if="hasRight">
				<me-icon name="home" @click="clickRight"></me-icon>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meHeader',
	props: {
		title: { // 标题
			type: String,
			default: ''
		},
		hasLeft: { // 左边是否显示
			type: Boolean,
			default: false
		},
		hasRight: { // 右边是否显示
			type: Boolean,
			default: false
		}
	},
	methods: {
		clickLeft() { // 点击左边
			this.$emit('clickLeft')
			history.go(-1)
		},
		clickRight() { // 点击右边
			this.$emit('clickRight')
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
.me-header{
	display: flex;
	height: 50px;
	align-items: center;
	justify-content: space-between;
	background-color: @font-color-white;
	div{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header-left{
		width: 15%;
		font-size: 30px;
		color: @font-color-active;
	}
	.header-center{
		color: @font-color-normal;
		width: 70%;
		text-align: center;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.header-right{
		width: 15%;
		font-size: 23px;
		color: @font-color-active;
	}
}
</style>