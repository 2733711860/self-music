<template>
	<div class="lottery-box" id="app">
	  <div class="lottery">
	    <div class="lottery-item">
	      <div class="lottery-start">
	        <div :class="[{active: lotteryTime<=0}, 'box']" @click="startLottery">
	                  抽奖
	        </div>
	      </div>
	      <ul>
	      	<slot>
		        <li v-for="(item,i) in list" :class="i==index?'on':''">
		          <div class="box">
		            {{item.title}}
		          </div>
		        </li>
	      	</slot>
	      </ul>
	    </div>
	  </div>
	</div>
</template>

<script>
export default {
	name: 'meLottery',
	data () {
		return {
			index: -1, // 当前转动到哪个位置，起点位置
			count: 8, // 总共有多少个位置
			timer: 0, // 每次转动定时器
			speed: 200, // 初始转动速度
			times: 0, // 转动次数
			cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
			click: true, // 控制抽奖按钮转动过程中不可点击
		}
	},
	props: {
		list: { // 奖品列表
			type: Array,
			default: () => []
		},
		prize: { // 中奖的序列号
			type: Number,
			default: 0
		},
		lotteryTime: { // 抽奖次数
			type: Number,
			default: 0
		}
	},
	methods: {
		startLottery() { // 点击抽奖按钮
			if (!this.click || this.lotteryTime <= 0) { return }
			this.click = false
			this.startRoll()
		},

		startRoll() { // 开始转动
			this.times += 1 // 转动次数
			this.oneRoll() // 转动过程调用的每一次转动方法，这里是第一次调用初始化 ,第二次调用时，第1次的方法选中才能生效
			// 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
			if (this.times > this.cycle + 10 && this.prize === this.index) { // 中奖
				this.winPrice() // 中奖后操作
			} else {
				if (this.times < this.cycle) { // [0-50)
					this.speed -= 10 // 加快转动速度
				} else if (this.times > this.cycle + 10 && ((this.prize === 0 && this.index === 7) || this.prize === this.index + 1)) { // ？？这句话？？
					this.speed += 110 // 转动次数大于60，且中奖和当前差1个单位时开始大量减速， 为if为true的情况做准备(即显示中奖结果).
				} else {  // [51,60],确定中奖位置后至少减速10次
					this.speed += 20 // 以每次20的速度,一直减速到和中奖位置差1个位.
				}
				if (this.speed < 40) { this.speed = 40 }
				this.timer = setTimeout(this.startRoll, this.speed)
			}
		},

		oneRoll () { // 每一次转动
			let index = this.index // 当前转动到哪个位置
			const count = this.count // 总共有多少个位置
			index += 1
			if (index > count - 1) { index = 0 } // 转动的位置是0，1，2~7； 如果位置处于8，就重置为0。
			this.index = index // 转动1次,转动1个位置;
		},

		winPrice() { // 中奖后的操作
			clearTimeout(this.timer)  // 清除转动定时器，停止转动    其实我觉得不用清除定时器,只要不进入else,则没有定时器会生效.
			this.times = 0
			this.speed = 200
			this.click = true
			this.$emit('success')
		}
	}
}
</script>

<style scoped="scoped">
img {
  border: 0px;
}
ul, li {
  list-style-type: none;
}
.lottery-box {
  overflow: hidden;
}
.lottery {
  animation: changeBg .5s ease infinite;
  overflow: hidden;
  height: 375px;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes changeBg {
0% {
background-image:url(./img/k1.png);
}
100% {
background-image:url(./img/k2.png);
}
}
.lottery .lottery-item {
    height: 85%;
    width: 85%;
    position: relative;
}
.lottery .lottery-item ul{
	height: 100%;
}
.lottery .lottery-item ul li {
    width: 30%;
    height: 30%;
    position: absolute;
}
.lottery .lottery-item ul li:nth-child(2) {
    left: 35%;
}
.lottery .lottery-item ul li:nth-child(3) {
    left: 70%;
}
.lottery .lottery-item ul li:nth-child(4) {
    left: 70%;
    top: 35%;
}
.lottery .lottery-item ul li:nth-child(5) {
    left: 70%;
    top: 70%;
}
.lottery .lottery-item ul li:nth-child(6) {
    left: 35%;
    top: 70%;
}
.lottery .lottery-item ul li:nth-child(7) {
    left: 0;
    top: 70%;
}
.lottery .lottery-item ul li:nth-child(8) {
    left: 0;
    top: 35%;
}
.lottery .lottery-item ul li .box, .lottery .lottery-item .lottery-start .box {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, .4);
    border-radius: 5px;
}
.lottery .lottery-item ul li .box{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.lottery .lottery-item ul li.on .box {
    background-color: #DF3031;
}
.lottery .lottery-item ul li.on .box p {
    color: #fff;
}
.lottery .lottery-item .lottery-start {
    position: absolute;
    width: 30%;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.lottery .lottery-item .lottery-start .box {
    cursor: pointer;
    overflow: hidden;
    background-color: #DF3031;
}
.lottery .lottery-item .lottery-start .active {
    opacity: 0.5;
}
</style>