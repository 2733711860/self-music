<template>
	<div>
		<div class="checkbox01" v-for="(item, index) in options" :key="index">
			<input type="radio" name="radios" :id="item.value" :value="item" v-model="chooseValue" />
			<label :for="item.value">{{ item.text }}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meRadio',
	data () {
		return {
			chooseValue: ''
		}
	},

	props: {
		options: {
      type: Array,
      default: () => {
        return []
      }
   },
   value: {}
	},

	watch: {
    chooseValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.chooseValue = val
    }
  },

  mounted () {
  	this.chooseValue  = this.value
  }
}
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/index.less");
	.checkbox01{
		padding: 8px 0;
		display: flex;
		align-items: center;
	}
	.checkbox01 input[type="radio"]:checked+label::before {
		background-color: @me-active;
		/* 选中的背景颜色 */
		padding: 4px;
		background-clip: content-box;
	}
	.checkbox01 input[type='radio'] {
		position: absolute;
		clip: rect(0, 0, 0, 0);
		/* 第一种隐藏方式：剪切为0 */
		/* visibility: hidden; */
		/* 第二种隐藏方式：隐藏 */
	}
	.checkbox01 input[type=radio]+label::before {
		content: "\a0";
		/*不换行空格*/
		display: inline-block;
		vertical-align: 2px;
		width: 11px;
		height: 11px;
		margin-right: 8px;
		border-radius: 50%;
		border: 1px solid @me-active;
		text-indent: 2px;
		line-height: .65;
		/*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
		padding: 4px;
	}
</style>