<template>
	<div style="width: 100%;">
		<div class="me_dropdown" :class="{'active': show}">
			<div class="me_dropdown_va" @click="toggle()">
				<div></div>
				<div>{{chooseText}}</div>
				<me-icon name="select-down" class="me_dropdown_va_icon"></me-icon>
			</div>
			<div class="dropdown_content" ref="dropdown_content" :style="{'height': '0', 'top': bottheig}">
				<slot>
					<div class="drop_item" :class="{'selectActive': selectValue==item.value}" v-for="(item) in selectList" @click="choosethis(item)">{{item.text}}</div>
				</slot>
		  </div>
		</div>

	  <div class="me_overlay" v-if="show" @click="toggle"></div>
	</div>
</template>

<script>
export default {
	name: 'meSelect',
	data () {
		return {
			show: false,
			selectValue: this.value,
			chooseText: this.selectList.filter(item => item.value == this.value)[0] ? this.selectList.filter(item => item.value == this.value)[0].text : '请选择',
			bottheig: 'auto'
		}
	},
	props: {
		selectList: { // 选项列表
			type: Array,
			default: () => {}
		},
		disable: {
			type: Boolean,
			default: false
		},
		value: {}
	},
	watch: {
		selectValue (val) {
			this.$emit('input', val)
			this.$emit('change', val)
		},
		value (val) {
			this.selectValue = val
		}
	},
	mounted () {
	},
	methods: {
		async toggle () {
			if (!this.disable) {
				let dropdownHieght = 0
				let allDom = document.getElementsByClassName('dropdown_content')[0].childNodes
				await allDom.forEach((item, index) => {
					dropdownHieght = dropdownHieght + item.clientHeight
				})
				this.show = !this.show
				if (this.show) {
//					let toTop = document.getElementsByClassName('me_dropdown_va')[0].getBoundingClientRect().top // 距离可视区域顶部距离
//					let toBott = document.body.clientHeight - toTop - document.getElementsByClassName('me_dropdown_va')[0].clientHeight
//					if (toBott < document.body.clientHeight/3) {
//						this.bottheig = (-(200)) + 'px'
//					} else {
//						this.bottheig = 'auto'
//					}
					this.$refs.dropdown_content.style.height = dropdownHieght + 'px'
				} else {
					this.$refs.dropdown_content.style.height = 0
				}
			}
		},
		choosethis(item) {
			this.selectValue = item.value
			this.chooseText = item.text
			this.toggle()
		}
	}
}
</script>

<style scoped="scoped">
.me_dropdown {
  position: relative;
  width: 100%;
  height: 50px;
}
.me_overlay{
	position: absolute;
	z-index: 10;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
}
.me_dropdown_va{
	height: 100%;
	padding: 0 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #DDDDDD;
}
.dropdown_content {
  position: absolute;
  z-index: 11;
  overflow: hidden;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  width: 100%;
  max-height: 200px;
  transition: all .3s;
}
.active .dropdown_content{
	overflow-y: auto;
}
.me_dropdown_va_icon{
	 transform: rotate(0deg);
	 transition: transform .3s;
}
.active .me_dropdown_va_icon{
	transform-origin:center center;
	transform: rotate(180deg);
	transition: transform .3s;
}
.drop_item{
	padding: 15px 5px;
	border-bottom: 1px solid #DFDFDF;
}
.drop_item:nth-last-child{
	border: none;
}
.selectActive{
	background-color: rgba(0, 0, 0, .06);
}
</style>