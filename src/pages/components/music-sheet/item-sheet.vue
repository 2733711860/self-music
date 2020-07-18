<template>
	<div class="item-sheet">
		<div class="sheet-pic">
			<img v-lazy="sheetMsg.picUrl ? (sheetMsg.picUrl + '?param=140y140') : sheetMsg.coverImgUrl" />
			<div class="pic-msg">
				<Icon :size="8" type="pause2" />
				<span>{{sheetMsg.playCount | addChineseUnit}}</span>
			</div>
		</div>
		
		<div class="sheet-desc">{{sheetMsg.name}}</div>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import { addChineseUnit } from '@/utils'
export default {
	components: {
		Icon
	},
	
	filters: {
		addChineseUnit
	},
	
	props: {
		sheetMsg: {
			type: Object,
			default: {}
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.item-sheet{
	width: 110px;
	.sheet-pic{
		width: 100%;
		height: 110px;
		position: relative;
		img{
			width: 100%;
			height: 100%;
			border-radius: 5px;
		}
		.pic-msg{
			position: absolute;
			width: 100%;
			height: 30px;
			padding: 0 5px;
			background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .7));
			bottom: 0;
			display: flex;
			align-items: center;
			color: white;
			font-size: 12px;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
		}
	}
	
	.sheet-desc{
		font-size: 12px;
		line-height: 18px;
		overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
	}
}
</style>