<template>
	<div class="hello">
		<me-swiper ref="swiper"
			@transtionend="getNum"
			autoPlay
			showIndicator
			swiperBtn
			interval='2500'
			duration='500'
			v-if="list.length>0">
			<slide v-for="(item,index) in list" :key='index' @click="clickMe">
				<img :src="item.img" />
			</slide>
		</me-swiper>
    <div class="button" @click="slideToClick">跳到第三张</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360'
					},
					{
						img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360'
					},
					{
						img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360'
					}
				]
			}
		},
		methods: {
			getNum(i) { // 每次轮播出发 参数表示轮播到第几个图片 在Swiper上添加
//				console.log(i)
			},
			clickMe() {
			},
			slideToClick() {
				this.$refs.swiper.slideTo(2)
			}
		}
	}
</script>

<style scoped>
	img {
		width: 100%;
	}

	.button {
		margin-top: 30px;
		position: relative;
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding-left: 14px;
		padding-right: 14px;
		box-sizing: border-box;
		font-size: 18px;
		text-align: center;
		text-decoration: none;
		color: #ffffff;
		line-height: 2.33333333;
		border-radius: 5px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		overflow: hidden;
		border-width: 0;
		width: 50%;
		padding: 0 30px 0 30px;
		outline: 0;
		-webkit-appearance: none;
		background-color: #26a2ff;
	}

	.button:active {
		opacity: 0.5;
		color: #333;
	}

	.button2 {
		margin-top: 100px;
	}
</style>