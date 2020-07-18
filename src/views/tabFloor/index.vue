<template>
	<div class="me-allpage">
		<me-tab
	  	v-model="selectedId"
	    :items="items"
	    @change="handleChange"></me-tab>

	    <div class="floor_box">
	    	<div class="floor_box_item" style="height: 200px;">1</div>
	    	<div class="floor_box_item" style="height: 300px;">2</div>
	    	<div class="floor_box_item" style="height: 400px;">3</div>
	    	<div class="floor_box_item" style="height: 500px;">4</div>
	    	<div class="floor_box_item" style="height: 400px;">5</div>
	    	<div class="floor_box_item" style="height: 300px;">6</div>
	    </div>

	    <!--返回顶部-->
			<div class="totop"><span>▲</span>Top</div>
	</div>
</template>

<script>
import floor from './floor.js'
export default {
	data () {
		return {
			selectedId: 0, // 默认选中哪个tab
			items: [ // tab列表
        {label: '天下第一'},
        {label: '天下第二'},
        {label: '宇宙第一'},
        {label: '宇宙第二'},
        {label: '超级英雄'},
        {label: '蜡笔小新'},
      ],
		}
	},
	mounted () {
		$('.floor_box').scroll(() => {
			var winH = $('.floor_box').height() // 滚动部分高度
			var iTop = $('.floor_box').scrollTop() //鼠标滚动的距离
			$('.floor_box>.floor_box_item').each((index, dom) => {
				if (Math.abs($(dom).offset().top) < $('.ly-tab').height() + 50) {
					if (!$('.ly-tab-list>a').eq(index).hasClass('active')) {
						$('.ly-tab-list>a').removeClass('active')
						$('.ly-tab-list>a').eq(index).addClass('active')
						this.selectedId = index
					}
				}
			})
		})
//		var obj = new floor('.totop','.ly-tab-list>a','.floor_box>.floor_box_item','.ly-tab','.floor_box')
//		obj.init()
	},
	methods: {
		watchScroll() {
			console.log(111)
		},

		handleChange(val, indexx) {
			if (!$('.ly-tab-list>a').eq(indexx).hasClass('active')) {
				$('.ly-tab-list>a').removeClass('active')
				$('.ly-tab-list>a').eq(indexx).addClass('active')
			}
			var t = 0
			for(var i=0; i<indexx; i++) {
				t = t + $('.floor_box>.floor_box_item').eq(i).height()
			}
			$('.floor_box').animate({
				"scrollTop": t
			}, 500)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.me-allpage{
	height: 100%;
	display: flex;
	flex-flow: column;
	overflow: hidden;
	.floor_box{
		flex: 1;
		overflow-y: auto;
		.floor_box_item{
			/*height: 100%;*/
			border-bottom: 1px solid #0086B3;
		}
	}
	.totop{
		width: 40px;
		height: 40px;
		text-align: center;
		background: darkred;
		position: fixed;
		bottom: 30px;
		right: 30px;
		cursor: pointer;
		border-radius: 5px;
		display: none;
		color:#fff;
	}
  .totop>span{
  	display: block;
  	line-height: 15px;
  	font-size: 12px;
  	color:#fff;
  }
}
</style>