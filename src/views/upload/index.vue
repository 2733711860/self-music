<template>
	<div>
		<viewer :images="imgList">
			<img v-for="(xx, index) in imgList" :src="xx.base64" :key="index" />
		</viewer>

		<me-upload
			:size="size"
			accept="image/*"
			:max-count="maxCount"
			:scale="scale"
			multiple
			@change="change"
			@oversize="oversize"
			@overcount="overcount">
			<!--这里可以自定义样式-->
		</me-upload>
	</div>
</template>

<script>
export default {
	data () {
		return {
			size: 1024*1024*0.1,
			maxCount: 2,
			scale: 0.25,
			imgList: []
		}
	},
	methods: {
		change(value) {
			this.imgList = value
			console.log(value)
		},
		oversize (val) {
			this.$msgBox('超过文件大小限制')
			console.log(val)
		},
		overcount() {
			this.$msgBox('超过文件上传个数限制')
		}
	}
}
</script>

<style scoped="scoped">
	img{
		width: 100px;
		height: 100px;
	}
</style>