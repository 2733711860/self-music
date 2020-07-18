<template>
	<div class="rank-page">
		<div class="title-div">
			<span>热门榜单</span>
			<div class="right" @click="toRank">
				<span>更多</span>
				<Icon :size="9" type="right" />
			</div>
		</div>
		<item-rank class="item-rank" 
			v-for="(item, index) in rankList" 
			:key="index + 'rank'" 
			:rankDesc="item"
			@click.native="goList(item)"></item-rank>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import itemRank from './item-rank.vue'
export default {
	components: {
		Icon, itemRank
	},
	
	data () {
		return{
			rankList: []
		}
	},
	
	mounted() {
		this.getRankList()
	},
	
	methods: {
		async getRankList () { // 获取所有榜单
			await this.$get(this.$api.getTopListDetail).then(async data => {
				this.rankList = data.list.slice(0, 2)
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
		
		toRank () {
			this.$router.push({
				path: '/rankList'
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.rank-page{
	margin: 0 10px;
}
.title-div{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	span{
		font-weight: 550;
	}
	.right{
		display: flex;
		align-items: center;
		font-size: 12px;
		span{
			font-weight: normal;
		}
	}
}
.item-rank{
	margin-bottom: 10px;
}
</style>