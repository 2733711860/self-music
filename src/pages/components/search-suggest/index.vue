<template>
	<div class="search-suggest">
		<span class="title">{{name}}</span>
		<div class="suggest-list">
			<span v-for="(item, index) in list" :key="index + item.searchWord" @click="getSearch(item.searchWord)">{{item.searchWord}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: '历史记录'
		},
		list: {
			type: Array,
			default: () => []
		}
	},
	
	methods: {
		getSearch (val) {
			this.$emit('startSearch', val)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.search-suggest{
	.title{
		font-weight: 550;
		padding: 10px 0;
		display: inline-block;
		color: #333;
	}
	.suggest-list{
		display: flex;
		flex-wrap: wrap;
		span{
			color: rgba(0, 0, 0, .5);
			font-size: 13px;
			padding: 2px 5px;
			border: 1px solid rgba(0, 0, 0, .5);
			border-radius: 4px;
			margin: 0 10px 10px 0;
		}
	}
}
</style>