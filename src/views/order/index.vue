<!--
	左滑组件：classname需要，hideclass需要，list需要，id也需要
-->
<template>
	<div>
		<me-slide :classname="classname" :hideclass="hideclass" :list="list">
			<div :class="classname" v-for="(item,index) in list" :id="index">
				<div class="slide-item">{{item.text}}</div>
				<div :class="hideclass">
					<div>编辑</div>
					<div @click="leftdelete(index)">删除</div>
				</div>
			</div>
		</me-slide>
	</div>
</template>
<script>
export default {
	data () {
		return{
			classname: 'slide-warp',
			hideclass: 'hideclass',
			list: [{
					text: "左滑删除1"
				},
				{
					text: "左滑删除2"
				},
				{
					text: "左滑删除3"
				}]
		}
	},
	mounted() {
	},
	methods: {
		leftdelete(index) {
			this.list.splice(index, 1)
		}
	}
}
</script>
<style scoped lang="less">
.slide-warp {
	position: relative;
	height: 65px;
	border-top: 1px solid #DEDC95;
	transition: all ease .2s;
	&:last-child {
		border-bottom: 1px solid #DEDC95;
	}
	.slide-item {
		width: 100%;
		height: 100%;
		line-height: 65px;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.hideclass {
		position: absolute;
		display: flex;
		right: -160px;
		top: 0;
		background: #e84747;
		color: #fff;
		width: 160px;
		height: 100%;
		line-height: 65px;
		text-align: center;
		font-size: 18px; //transition: all .5s ease;
		z-index: 1;
		div{
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-right: 1px solid #DDDDDD;
		}
		div:last-child{
			border: none;
		}
	}
}
</style>