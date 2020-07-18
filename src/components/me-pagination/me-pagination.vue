<template>
	<div class="me_pagination">
		<ul>
			<li :class="['me_pagination_pre', 'me_pagination_item', {me_pagination_pre_disabled: nowPage==1}]" @click="changePage(Number(nowPage) - 1)">{{prevText}}</li>
			<li :class="['me_pagination_page', 'me_pagination_item']" v-if="showPrevMore" @click="changePage(Number(nowPage) - 1)">...</li>
			<li :class="['me_pagination_page', 'me_pagination_item', {me_pagination_item_active: nowPage==xx}]" v-for="(xx, index) in pages" @click="changePage(xx)">{{xx}}</li>
			<li :class="['me_pagination_page', 'me_pagination_item']" v-if="showNextMore" @click="changePage(Number(nowPage) + 1)">...</li>
			<li :class="['me_pagination_next', 'me_pagination_item', {me_pagination_next_disabled: nowPage==pageCount}]" @click="changePage(Number(nowPage) + 1)">{{nextText}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'mePagination',
	data() {
		return{
			nowPage: Number(this.value), // 当前页
			pageCount: this.pageNum == '' ? (this.totalItems/(this.itemsPerPage)) : Number(this.pageNum),
		}
	},
	props: {
		itemsPerPage: { // 每页记录数
			type: [String, Number],
      default: () => '10'
		},
		totalItems: { // 总记录数
			type: [String, Number],
      default: () => {}
		},
		prevText: { // 上一页文字
			type: String,
			default: '上一页'
		},
		nextText: { // 下一页文字
			type: String,
			default: '下一页'
		},
		showPageSize: { // 显示的页码个数
			type: [String, Number],
      default: () => '3'
		},
		pageNum: { // 总页数
			type: [String, Number],
      default: () => ''
		},
		value: {}
	},
	mounted() {
	},
	watch: {
		value(val) {
			this.nowPage = Number(val)
		},
		nowPage(val) {
			this.$emit('input', val)
		},
	},
	computed: {
		pages () { // 当前页数列表
			let res = []
			let aaa = Math.floor(Number(this.showPageSize)/2)
			if (this.nowPage == 1) { // 第一页
				for (var i=1; i<Number(this.showPageSize)+1; i++) {
					res.push(i)
				}
			} else if (this.nowPage == this.pageCount) { // 最后一页
				res.push(this.nowPage)
				for (var i=1; i<Number(this.showPageSize); i++) {
					res.push(this.nowPage - i)
				}
			} else if (this.nowPage < this.pageCount && this.nowPage > 1) {
				res.push(this.nowPage)
				for (var i=1; i<aaa+1; i++) {
					if (this.nowPage - i < 1) {
						res.push(this.nowPage + i, this.nowPage + i + 1)
					} else if (this.nowPage + i > this.pageCount) {
						res.push(this.nowPage - i, this.nowPage - i - 1)
					} else {
						res.push(this.nowPage - i, this.nowPage + i)
					}
				}
			}
			res.sort(this.compare)
			return res
		},
		showNextMore () { // 是否显示后三点
			return ((Number(this.nowPage) + Math.floor(Number(this.showPageSize)/2)) < this.pageCount && this.pageCount > Number(this.showPageSize)) ? true : false
		},
		showPrevMore () { // 是否显示前三点
			return (Number(this.nowPage) - Math.floor(Number(this.showPageSize)/2) > 1 && this.pageCount > Number(this.showPageSize)) ? true : false
		}
	},
	methods: {
		changePage(page) {
			if (page >= 1 && page <= this.pageCount) {
				this.nowPage = page
			}
		},
		compare(x, y) {
			if (x < y) {
        return -1
	    } else if (x > y) {
        return 1
	    } else {
        return 0
	    }
		}
	}
}
</script>

<style scoped="scoped">
.me_pagination ul{
	display: flex;
	width: 100%;
	text-align: center;
}
.me_pagination_item{
	flex: 1;
	height: 40px;
	line-height: 40px;
	background-color: #fff;
	color: #1989fa;
	cursor: pointer;
	min-width: 33px;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
.me_pagination_item{
	border-right: 1px solid #ebedf0;
}
.me_pagination_item:last-child{
	border: none;
}
.me_pagination_item_active{
	background-color: #1989fa;
	color: #fff;
}
.me_pagination_pre, .me_pagination_next{
	padding: 0 4px;
}
.me_pagination_pre_disabled, .me_pagination_next_disabled{
	cursor: not-allowed;
	color: #646566;
	background-color: #f7f8fa;
	opacity: 0.5;
}
</style>