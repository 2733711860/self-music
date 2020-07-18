<template>
	<div style="display: flex;align-items: center;">
		<i
			:class="['fa', className]"
			:style="{fontSize:(size=='inherit' ? 'inherit' : size+'px')}"
			@click="iconFunc"
			>
			<slot></slot>
			</i>
	</div>
</template>

<script>
import {iconList} from './iconList.js'
export default {
	name: 'meIcon',
	data() {
		return{
			className: iconList[this.name]
		}
	},
	props: {
		name: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'inherit'
		}
	},
	methods: {
		iconFunc () {
			this.$emit('click')
		}
	}
}
</script>

<style scoped="scoped">
	.fa{
		position: relative;
	}
</style>