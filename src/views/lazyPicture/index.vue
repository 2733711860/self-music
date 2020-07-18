<template>
	<div>
		<div class="itempic">
			<viewer :images="imgList">
				<img v-for="(xx, index) in imgList" :src="xx" :key="index" />
			</viewer>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			imgList: [
				 "https://picsum.photos/375/200?image=100",
				 "https://picsum.photos/375/200?image=1000",
				 "https://picsum.photos/375/200?image=101",
				 "https://picsum.photos/375/200?image=1011",
				 "https://picsum.photos/375/200?image=1029",
				 "https://picsum.photos/375/200?image=1038",
				 "https://picsum.photos/375/200?image=1043",
				 "https://picsum.photos/375/200?image=1044",
			]
		}
	}
}
</script>

<style scoped="scoped">
	.itempic{
		width: 100%;
		height: 200px;
	}
	img{
		width: 100%;
		height: 200px;
	}
</style>