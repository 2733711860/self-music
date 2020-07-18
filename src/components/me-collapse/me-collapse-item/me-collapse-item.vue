<template>
	<div class="me_collapse" :class="{'active': show}">
		<div class="me_collapse_title" :style="{color : (disabled ? '#c8c9cc' : '#323233')}" @click="choose()">
			<div>
				<slot name="title_left">{{title}}</slot>
			</div>
			<slot name="title_right">
				<me-icon name="right" size="25" class="me_collapse_icon"></me-icon>
			</slot>
		</div>
		<div class="me_collapse_content" ref="collapse_f">
			<div class="me_collapse_content_t" ref="collapse_t">
				<slot>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meCollapseItem',
	data() {
		return {
		}
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		name: {
      type: [String, Number],
      default: () => {}
    },
    disabled: {
    	type: Boolean,
    	default: false
    }
	},
	computed: {
		show() {
			return this.$parent.activeName.indexOf(this.name) > -1
		}
	},
	watch: {
		show() {
			this.changeH()
		}
	},
	mounted() {
		if (this.$parent.accordion) {
			if (this.$parent.activeName == this.name) {
				this.changeH()
			}
		} else {
			if (this.$parent.activeName.findIndex(item => item == this.name) > -1) {
				this.changeH()
			}
		}
	},
	methods: {
		choose () {
			if (!this.disabled) {
				this.dispatch('meCollapse', 'item-click', this)
			}
		},

		changeH() {
			if (this.show) {
				this.$refs.collapse_f.style.height = this.$refs.collapse_t.clientHeight + 1 + 'px'
			} else {
				this.$refs.collapse_f.style.height = 0
			}
		},

		dispatch (componentName, eventName, params) {
      let parent = this.findParentComponentByName(componentName)
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },

		findParentComponentByName (componentName) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }
      return parent
    }
	}
}
</script>

<style scoped="scoped" lang="less">
.me_collapse_icon{
	transform: rotate(0deg);
  transition: transform .3s;
}
.active .me_collapse_icon{
	transform-origin:center center;
	transform: rotate(90deg);
	transition: transform .3s;
}
.me_collapse{
	color: #323233;
	background-color: white;
	position: relative;
	.me_collapse_title{
		height: 50px;
		padding: 0 10px;
		border-bottom: 1px solid #dcdee2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	}
	.me_collapse_content{
		overflow: hidden;
		height: 0;
		transition: height 0.3s ease-in-out;
		will-change: height;
		.me_collapse_content_t{
			padding: 10px;
			line-height: 1.5;
			color: #969799;
			border-bottom: 1px solid #dcdee2;
		}
	}
}
</style>