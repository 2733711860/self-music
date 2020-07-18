<template>
	<div>
		<me-pagination
			v-model="page"
			items-per-page="10"
			total-items="100"
			pre-text="上一页"
			next-text="下一页"
			show-page-size="3"
			></me-pagination>
	</div>
</template>

<script>
export default {
	data () {
		return {
			page: '5'
		}
	}
}
</script>

<style>
</style>