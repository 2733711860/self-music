<template>
	<div>
		<input type="checkbox" :class="[{wordC: needWord}, 'switch_1']" v-model="checked" :disabled="disabled">
	</div>
</template>

<script>
export default{
	name: 'meSwitch',
	data () {
    return {
      checked: false
    }
  },
  props: {
    value: {},
    needWord: { // 按钮里是否有文字
    	type: Boolean,
    	default: false
    },
    disabled: {
    	type: Boolean,
    	default: false
    }
  },
  watch: {
    checked (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.checked = val
    }
  },
  mounted () {
  	this.checked  = this.value
  }
}
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/index.less");
	input[type="checkbox"].switch_1{
		font-size: 30px;
		-webkit-appearance: none;
		   -moz-appearance: none;
		        appearance: none;
		width: 3.5em;
		height: 1.5em;
		border-radius: 3em;
		border: 1px solid #ddd;
		background: @me-bg-normal;
		position: relative;
		cursor: pointer;
		outline: none;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
  }

  input[type="checkbox"].switch_1:checked{
		background: @me-active;
  }
  input[type="checkbox"].wordC:after{
  	content: "否" !important;
  }
  input[type="checkbox"].wordC:checked:after{
		content: "是" !important;
  }

  input[type="checkbox"].switch_1:after{
		position: absolute;
		content: "";
		color: @font-color-light;
		text-align: center;
		width: 1.5em;
		height: 1.5em;
		line-height: 1.5em;
		border-radius: 50%;
		background: @me-bg-normal;
		-webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
		        box-shadow: 0 0 .25em rgba(0,0,0,.3);
		-webkit-transform: scale(.7);
		        transform: scale(.7);
		left: 0;
		-webkit-transition: all .2s ease-in-out;
		transition: all .2s ease-in-out;
  }

  input[type="checkbox"].switch_1:checked:after{
		left: calc(100% - 1.5em);
  }
</style>