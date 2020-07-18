<template>
	<div class="sheet-page">
		<div class="title-div">
			<span>热门歌单</span>
			<div class="right" @click="goSheet()">
				<span>更多</span>
				<Icon :size="9" type="right" />
			</div>
		</div>
		<div class="sheet-div">
			<item-sheet 
				v-for="(item, index) in sheetList" 
				:key="index + 'sheet'" 
				:sheetMsg="item"
				@click.native="goList(item)"></item-sheet>
		</div>
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import itemSheet from './item-sheet.vue'
export default {
	components: {
		Icon, itemSheet
	},
	
	data () {
		return{
			sheetList: []
		}
	},
	
	mounted() {
		this.getPersonalized()
	},
	
	methods: {
		async getPersonalized () { // 歌单推荐
			await this.$get(this.$api.getPersonalized, { limit: 6 }).then(async data => {
				this.sheetList = data.result
	    })
		},
		
		goSheet () {
			this.$router.push({
				path: '/sheet'
			})
		},
		
		goList (sheet) {
			this.$router.push({
				path: '/sheetList',
				query: {
					id: sheet.id
				}
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.sheet-page{
	margin: 0 10px;
}
.sheet-div:after{
	content: '';
	width: 110px;
}
.sheet-div{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	div{
		margin-bottom: 10px;
	}
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
</style>