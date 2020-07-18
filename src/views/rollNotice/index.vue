<template>
	<div>
		<me-collapse v-model="activeName" accordion @input="change">
			<me-collapse-item title="标题一" name="1">
				<div slot="title_left">标题一111</div>
				代码是写出来给人看的，附带能在机器上运行
			</me-collapse-item>
			<me-collapse-item title="标题二" name="2">代码是写出来给人看的，附带能在机器上运行</me-collapse-item>
			<me-collapse-item title="标题三" name="3" disabled>代码是写出来给人看的，附带能在机器上运行</me-collapse-item>
		</me-collapse>
	</div>
</template>

<script>
export default {
	data() {
		return{
			activeName: '1'
		}
	},
	methods: {
		change(val) {
			console.log(val)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
</style>