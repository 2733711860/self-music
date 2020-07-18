<template>
	<div class="shuru">
		<input type="text" class="me_input" v-model="value" @focus="focus" />
		<div class="me_tishi" v-for="xx in showList" v-if="value!='' && isFocus" @click="choose(xx)">{{xx}}</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
      list: [ // 初始化列表
      	"小张", "小苏", "小杨", "老张", "老苏", "老杨", "老爷爷", "小妹妹", "老奶奶", "大鹏", "大明", "大鹏展翅", "你好", "hello", "hi"
      ],
      showList: [], // 用于展示
      value: '小张', // 输入框的值
      isFocus: false
		}
	},
	watch: {
		value(newData, oldData) {
			if (newData != oldData) {
				this.getData()
			}
		}
	},
	mounted() {
		window.addEventListener('click', (e) => {
			if (!e.target.classList.contains('me_tishi') && !e.target.classList.contains('me_input')) {
				this.isFocus = false
			}
		})
	},
	methods: {
		focus() { // 获取焦点
			this.isFocus = true
			this.getData()
		},
		getData() { // 过滤数据
			let arrayy = []
			this.list.forEach(item => {
				if (item.indexOf(this.value) > -1) {
					arrayy.push(item)
				}
			})
			this.showList = arrayy
		},
		choose(xx) {
			this.value = xx
			this.isFocus = false
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.shuru{
	padding: 20px 0;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
}
.me_input{
	width: 300px;
	height: 30px;
	line-height: 30px;
	background-color: white;
	border: 1px solid #969896;
}
.me_tishi{
	width: 302px;
	height: 30px;
	line-height: 30px;
	background-color: white;
	border: 1px solid #969896;
}
</style>