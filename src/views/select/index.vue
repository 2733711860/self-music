<template>
	<div>
		<div style="display: flex;">
			<me-select
				v-model="chooseValue"
				:selectList="list"
				@change="change"></me-select>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{ text: '天下第一', value: '1' }, { text: '射雕英雄传', value: '2' },
				{ text: '笑傲江湖', value: '3' }, { text: '大唐双龙传', value: '4' },
				{ text: '神雕侠侣', value: '5' }, { text: '天龙八部', value: '6' },
				{ text: '连城诀', value: '7' }, { text: '鹿鼎记', value: '8' }
			],
			chooseValue: '3'
		}
	},
	mounted () {
	},
	methods: {
		change(val) {
			console.log(val)
		}
	}
}
</script>

<style scoped="scoped">
</style>