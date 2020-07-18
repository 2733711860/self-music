<template>
	<div class="wh_slide" @click="clickSlide">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'slide',
	methods: {
		clickSlide() {
			this.$emit('click')
		}
	}
}
</script>

<style scoped="scoped">
	.wh_slide {
		width: 100%;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		z-index: 10;
		min-height: 100px;
	}

	.wh_slide img {
		display: block;
	}
</style>