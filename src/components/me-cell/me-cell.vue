<template>
	<div>
		<div class="me_cell">
			<div class="me_cell_left">
				<me-icon :name="leftIcon"></me-icon>
				<div class="me_cell_left_con">{{name}}</div>
			</div>
			<div class="me_cell_right">
				<div class="me_cell_right_con">{{value}}</div>
				<me-icon :name="rightIcon" size="25"></me-icon>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meCell',
	props: {
		name: {
			type: String,
			default: '文本'
		},
		value: {
			type: String,
			default: '内容'
		},
		rightIcon: {
			type: String,
			default: ''
		},
		leftIcon: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
	.me_cell{
		display: flex;
		align-items: center;
		padding: 0 10px;
		border-bottom: 1px solid #DDDDDD;
		.me_cell_left{
			height: 40px;
			min-width: 30%;
			display: flex;
			align-items: center;
			.me_cell_left_con{
				margin-left: 8px;
			}
		}
		.me_cell_right{
			flex: 1;
			height: 40px;
			color: @font-color-light;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.me_cell_right_con{
				margin: 0 10px;
			}
		}
	}
</style>