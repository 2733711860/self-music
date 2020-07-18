<template>
	<div>
		<div style="display: flex;">
			<me-drop-down
				v-model="choosevalue1"
				:droplist="droplist1"
				@change="change"></me-drop-down>
			<me-drop-down
				v-model="choosevalue2"
				:droplist="droplist2"
				@change="change"></me-drop-down>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			choosevalue1: '',
			choosevalue2: '',
			droplist1: [
				{ text: '天下第一', value: '1'}, { text: '射雕英雄传', value: '2'},
				{ text: '神雕侠侣', value: '3'}, { text: '鹿鼎记', value: '4'},
			],
			droplist2: [
				{ text: '大唐双龙传', value: '1'}, { text: '侠客行', value: '2'},
				{ text: '雪山飞狐', value: '3'}, { text: '东邪西毒', value: '4'},
			]
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