<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'meCollapse',
	componentName: 'meCollapse',
	data() {
		return {
			activeName: this.value
		}
	},
	props: {
		value: {},
		accordion: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value(val) {
			this.activeName = val
		},
		activeName(val) {
			this.$emit('input', val)
		}
	},
	created () {
    this.$on('item-click', this.handleItemClick)
  },
	mounted () {
	},
	methods: {
		handleItemClick(item) {
			if (this.accordion) {
				this.activeName = this.activeName == item.name ? '' : item.name
			} else {
				let indexx = this.activeName.findIndex(itemm => itemm == item.name)
				this.activeName = indexx == -1 ? this.activeName.concat(item.name) : this.activeName = this.activeName.splice(indexx, 1)
			}
		}
	}
}
</script>

<style scoped="scoped" lang="less">
</style>