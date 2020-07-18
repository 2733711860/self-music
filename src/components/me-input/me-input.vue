<template>
	<div>
		<div class="me_input">
			<div class="me_input_left">
				<span v-show="isMust" style="color: red;">*</span>
				<span>文本</span>
			</div>
			<div class="me_input_right">
				<input :type="type"
					:placeholder="placeholder"
					:disabled="disabled"
					:readonly="readonly"
					:maxlength="maxlength"
					:showClose="showClose"
					v-model="inputValue"
					:style="{textAlign: align}"
					@input="meInput"
					@focus="meFocus"
					@blur="meBlur"
				/>
				<me-icon name="close" class="clearBtn" v-if="inputValue!='' && showClose"
					@click="clearValue()"></me-icon>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meInput',

	data () {
		return {
			inputValue: ''
		}
	},

	props: {
		type: { // 输入框类型
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: '请输入文本'
		},
		disabled: { // 禁用输入框状态
			type: Boolean,
			default: false
		},
		readonly: { // 只读输入框
			type: Boolean,
			default: false
		},
		isMust: { // 是否必输，即是否显示*
			type: Boolean,
			default: false
		},
		align: { // 输入靠哪边对齐
			type: String,
			default: 'left'
		},
		maxlength: { // 输入框最大长度
			type: String,
			default: ''
		},
		showClose: { // 是否显示清除图标
			type: Boolean,
			default: false
		},
		value: {}
	},

	watch: {
    inputValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.inputValue = val
    }
  },

  mounted () {
  	this.inputValue = this.value
  },

	methods: {
		meFocus (el) { // 输入框获得焦点时触发，返回节点el
			this.$emit('meFocus', el)
		},

		meInput () { // 输入框内容变化时触发，返回输入框的值
			this.$emit('meChange', this.inputValue)
		},

		meBlur (el) { // 输入框失去焦点时触发，返回节点el
			this.$emit('meBlur', el)
		},

		clearValue () { // 清除输入框内容
			this.inputValue = ''
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../assets/css/index.less");
	.me_input{
		padding: 15px 8px;
		display: flex;
		align-items: center;
		background-color: @me-bg-normal;
		border-bottom: 1px solid #DDDDDD;
		.me_input_left{
			display: flex;
			align-items: center;
			min-width: 30%;
			text-align: left;
			padding-right: 5px;
		}
		.me_input_right{
			flex: 1;
			text-align: left;
			position: relative;
			input{
				width: 100%;
				padding-right: 20px;
				box-sizing: border-box; /*其他浏览器*/
				-webkit-box-sizing: border-box; /*谷歌*/
				-moz-box-sizing: border-box; /*火狐*/
				outline: none;
				border: none;
				background-color: @me-bg-normal;
			}
			.clearBtn{
				position: absolute;
				z-index: 2;
				right: 0;
				top: 50%;
				transform:translateY(-50%);
				color: @font-color-lighter;
				font-size: @font-size-lg;
			}
		}
	}
</style>