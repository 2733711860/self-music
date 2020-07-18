<template>
	<van-swipe class="my-swipe" :autoplay="10000" :width="375" indicator-color="white">
	  <van-swipe-item v-for="(item, index) in banners" :key="index">
	  	<img :src="item.pic" class="banner_img" />
	  </van-swipe-item>
	</van-swipe>
</template>

<script>
export default{
	data () {
		return{
			banners: []
		}
	},
	
	mounted () {
		this.getBanner()
	},
	
	methods: {
		async getBanner () { // 轮播数据
			var u = navigator.userAgent, app = navigator.appVersion
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
			await this.$get(this.$api.getBanner, { type: isAndroid ? 1 : 2 }).then(async data => {
				this.banners = data.banners
	    })
		},
	}
}
</script>

<style scoped="scoped" lang="less">
.my-swipe{
	height: 140px;
	margin: 10px 10px 0 10px;
	.banner_img{
		width: 100%;
	}
}
</style>