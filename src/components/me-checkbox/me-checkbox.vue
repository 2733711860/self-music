<template>
	<div>
		<div class="checkbox_x" v-for="(item, index) in options" :key="index">
			<label><input type="checkbox" :value="item.value" v-model="chooseValue">{{item.text}}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meCheckbox',
	data () {
		return {
			chooseValue: []
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
  	this.chooseValue = this.value
  }
}
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/index.less");
	.checkbox_x label{
		display: flex;
		align-items: center;
		padding: 10px 0;
	}
	input[type="checkbox"] {
    width: 18px;
    height: 18px;
    line-height: 18px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    margin: 0 10px 0 0;
    position: relative;
	}
	input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: @me-bg-normal;
    width: 100%;
    height: 100%;
    border: 1px solid @me-active;
    border-radius: 4px;
	}
	input[type="checkbox"]:checked::before {
    content: "\2713";
    background-color: @me-bg-normal;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid @me-active;
    border-radius:4px;
    color: @me-active;
    font-weight: bold;
	}
</style>