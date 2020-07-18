<template>
	<span>
		<span :style="{ width: backDropSize, height: backDropSize }" class="backdrop" v-if="backdrop">
	    <i @click="onClick" :class="['iconfont', 'icon-component', 'icon-' + type, classname]" :style="iconstyle" />
	  </span>
	  <i @click="onClick" :class="['iconfont', 'icon-component', 'icon-' + type, classname]" :style="iconstyle" v-if="!backdrop" />
	</span>
</template>

<script>
import { toRem } from "@/utils"
export default {
	data () {
		return {
		}
	},
	
	computed: {
    classname() {
    	let cls = 'icon-color-' + this.color
    	return cls
    },
    iconstyle() {
    	const chromeMinSize = 12
    	// 支持小于12px
      const retStyle = { fontSize: toRem(this.size) }
    	if (this.size < chromeMinSize) {
        const ratio = this.size / chromeMinSize
        retStyle.transform = `scale(${ratio})`
      }
    	return retStyle
    },
    backDropSize() {
    	const backDropSizeRatio = 1
    	const backDropSizes = toRem(backDropSizeRatio * this.size)
      return backDropSizes
    }
	},
	
	props: {
    size: {
      type: Number,
      default: 16
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    },
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  
  methods: {
  	onClick(e) {
      this.$emit("click", e)
    },
  }
}
</script>

<style lang="less" scoped>
.backdrop {
  display: inline-block;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 550px){
  /* 手机端CSS代码 */
 	.backdrop:hover {
	  background: #e2e2e2;
	}
}

.icon-component {
  cursor: pointer;
}

.icon-color {
}
.icon-color-theme {
  color: #d33a31;
}
.icon-color-white {
  color: #fff;
}
.icon-color-shallow {
  color: #BEBEBE;
}
</style>