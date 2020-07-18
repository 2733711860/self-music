<template>
	<div>
		<div style="height: 40px;display: flex;justify-content: center;align-items: center;">剩余抽奖次数：{{lotteryTime}}</div>
		<me-lottery
			:list="list"
			:prize="prize"
			:lotteryTime="lotteryTime"
			@success="success"></me-lottery>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{ title: '谢谢参与' },
				{ title: '一等奖' },
				{ title: '二等奖' },
				{ title: '三等奖' },
				{ title: '四等奖' },
				{ title: '五等奖' },
				{ title: '六等级' },
				{ title: '七等奖' }
			], // 奖品列表
			prize: 6,
			lotteryTime: 2
		}
	},
	methods: {
		success() { // 抽奖成功回调
			this.lotteryTime--
			console.log('中奖结果：' + this.list[this.prize].title)
		}
	}
}
</script>

<style scoped="scoped">
</style>