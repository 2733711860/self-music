<template>
	<div class="item-rank">
		<div class="rank-left">
			<div class="title">{{rankDesc.name}}</div>
			<div class="item-music" v-for="(item, index) in rankDesc.tracks" :key="index + 'tracks'">
				{{index + 1}}.{{item.first}} - {{item.second}}
			</div>
		</div>
		<div class="rank-right">
			<img :src="rankDesc.coverImgUrl" />
			<Icon :size="8" type="pause" class="icon" color="white" />
		</div>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
export default{
	components: {
		Icon
	},
	
	props: {
		rankDesc: {
			type: Object,
			default: {}
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.item-rank{
	background-color: rgba(0, 0, 0, .03);
	display: flex;
	justify-content: space-between;
	border-radius: 5px;
	.rank-left{
		flex: 1;
		padding: 0 10px;
		overflow: hidden;
		.title{
			font-size: 14px;
			font-weight: 550;
			line-height: 35px;
		}
		.item-music{
			font-size: 12px;
			line-height: 20px;
			color: rgba(0, 0, 0, .6);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	.rank-right{
		width: 100px;
		position: relative;
		img{
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
		.icon{
			position: absolute;
			bottom: 5px;
			right: 5px;
		}
	}
}
</style>