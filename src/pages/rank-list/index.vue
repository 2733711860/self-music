<template>
	<div>
		<item-rank class="item-rank" 
			v-for="(item, index) in rankList" 
			:key="index + 'rank'" 
			:rankDesc="item"
			@click.native="goList(item)"></item-rank>
	</div>
</template>

<script>
import itemRank from '@/pages/components/music-rank/item-rank.vue'
export default {
	components: {
		itemRank
	},
	
	data () {
		return {
			rankList: []
		}
	},
	
	mounted () {
		this.getRankList()
	},
	
	methods: {
		async getRankList () { // 获取所有榜单
			await this.$get(this.$api.getTopListDetail).then(async data => {
				this.rankList = data.list
	    })
		},
		
		goList (sheet) {
			this.$router.push({
				path: '/sheetList',
				query: {
					id: sheet.id
				}
			})
		},
	}
}
</script>

<style scoped="scoped" lang="less">
.item-rank{
	margin: 10px;
}
</style>