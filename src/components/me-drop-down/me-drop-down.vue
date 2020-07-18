<template>
	<div style="width: 100%;position: relative;">
		<div class="me_dropdown" :id="linid" :class="{'active': show}">
			<div class="me_dropdown_va" @click="toggle()">
				<div></div>
				<div>{{chooseText}}</div>
				<me-icon name="select-down" class="me_dropdown_va_icon"></me-icon>
			</div>
			<div class="dropdown_content" ref="dropdown_content" :style="{'height': '0', 'left': cont_left}">
				<div class="drop_item" :class="{'selectActive': item.value==chooseValue}" v-for="item in droplist" @click="choosethis(item)">{{item.text}}</div>
		  </div>
		</div>

	  <div class="me_overlay" :style="{'height': overlayHeight, 'left': cont_left}" v-if="show" @click="toggle"></div>
	</div>
</template>

<script>
export default {
	name: 'meDropDown',
	data () {
		return {
			linid: (new Date()).getTime(),
			show: false,
			overlayHeight: '',
			cont_left: '0',
			chooseValue: '',
			chooseText: ''
		}
	},
	props: {
		droplist: {
			type: Array,
			default: () => []
		},
		disable: {
			type: Boolean,
			default: false
		},
		value: {}
	},
	watch: {
		chooseValue(val) {
			this.$emit('input', val)
			this.$emit('change', val)
		},
		value(val) {
			this.chooseValue = val
		}
	},
	created () {
		document.addEventListener('click', (e) => {
			if (this.show) {
				var box = document.getElementById(this.linid)
				if (!box.contains(e.target)) {
					this.show = false
					this.$refs.dropdown_content.style.height = 0
				}
			}
		})
	},
	mounted () {
		this.chooseValue = this.value
		this.chooseText = this.droplist.filter(item => item.value == this.chooseValue).length > 0 ? this.droplist.filter(item => item.value == this.chooseValue)[0].text : '请选择'
		let topdiv = document.getElementsByClassName('me_dropdown_va')[0]
		let toTop = topdiv.getBoundingClientRect().top // 距离可视区域顶部尽力
		let toleft = this.$refs.dropdown_content.getBoundingClientRect().left
		this.cont_left = (0 - toleft) + 'px'
		this.overlayHeight = document.body.clientHeight - topdiv.clientHeight - toTop + 'px'
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
					this.$refs.dropdown_content.style.height = dropdownHieght + 'px'
				} else {
					this.$refs.dropdown_content.style.height = 0
				}
			}
		},
		choosethis(item) {
			this.toggle()
			this.chooseValue = item.value
			this.chooseText = item.text
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/index.less");
.me_dropdown {
  position: relative;
  width: 100%;
  height: 50px;
}
.me_overlay{
	position: absolute;
	z-index: 10;
	width: 100vw;
	background: @me-bg-overlay;
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
  width: 100vw;
  max-height: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transition: all .2s;
}
.active .dropdown_content{
	overflow-y: auto;
}
.me_dropdown_va_icon{
	 transform: rotate(0deg);
	 transition: transform .2s;
}
.active .me_dropdown_va_icon{
	transform-origin:center center;
	transform: rotate(180deg);
	transition: transform .2s;
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