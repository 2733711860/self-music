<template>
	<div>
		<div style="overflow-x: auto;" v-if="model=='origin'">
	    <ul class="steps">
	      <li
	        v-for="(item,index) in stepArray"
	        :key="item+index"
	        :class="[{active:currentVal===index+1}, (currentVal>index+1)&&showState ? 'complete':'nocomplete']"
	      >
	      	<div>{{item}}</div>
	      </li>
	    </ul>
	  </div>

	  <div class="me-steps" v-if="model=='dot'">
			<div v-bind:class="[stepArray.length==2 ? 'width-2' : stepArray.length==3?'width-3':'width-4', '']" v-for="(item,index) in stepArray" :key="index">
				<div v-if="errorStep<=0" class="width-100">
					<div class v-bind:class="[index<currentVal ? 'color-pick circle' : 'color-no-pick circle-no-border', '']"></div>
					<p v-show="index!=0" class="line-1" v-bind:class="[index<currentVal ? 'color-pick' : 'color-no-pick', '']"></p>
					<p v-show="index!=stepArray.length-1" class="line-2" v-bind:class="[index<currentVal-1 ? 'color-pick' : 'color-no-pick', '']"></p>
				</div>
				<div v-else class="width-100">
					<div class v-bind:class="[index<errorStep ? 'color-pick circle' : index==errorStep?'color-pick circle-error' :'color-no-pick circle-no-border', '']"></div>
					<p v-show="index!=0" class="line-1" v-bind:class="[index<errorStep ? 'color-pick' :index==errorStep?'color-error-pick-1' :'color-no-pick', '']"></p>
					<p v-show="index!=stepArray.length-1" class="line-2" v-bind:class="[index<errorStep-1 ? 'color-pick' :index==errorStep-1?'color-error-pick-2' :'color-no-pick', '']"></p>
				</div>
				<div class="width-100 mt-b">
					<p class="title">{{item}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'meStep',
	data () {
		return {
		}
	},

	props: {
		currentVal: { // 当前步骤
			type: Number,
			default: 0
		},
		stepArray: '', // 步骤列表
		model: {
			type: String,
			default: 'origin' // origin, dot
		},
		errorStep: { // 错误步骤
			type: Number,
			default: 0
		},
		showState: { // origin模式下是否显示完成状态
			type: Boolean,
			default: false
		}
	},

	watch: {
  }
}
</script>

<style scoped="scoped" lang="less">
	@import url("../../assets/css/index.less");
	.steps {
	  position: relative;
	  counter-reset: step; /*创建步骤数字计数器*/
	 	display: flex;
	 	white-space: nowrap;
	}
	/*步骤描述*/
	.steps li {
	  list-style-type: none;
	  text-align: center;
	  position: relative;
	}

	/*步骤数字*/
	.steps li:before {
	  display: block;
	  content: counter(step); /*设定计数器内容*/
	  counter-increment: step; /*计数器值递增*/
	  width: 32px;
	  height: 32px;
	  background-color: @me-active;
	  line-height: 32px;
	  border-radius: 32px;
	  color: @font-color-white;
	  text-align: center;
	  font-weight: 700;
	  margin: 0 auto 8px auto;
	}
	.complete:before{
		display: block;
	  content: "\2713" !important; /*设定计数器内容*/
	  width: 32px;
	  height: 32px;
	  background-color: @me-active;
	  line-height: 32px;
	  border-radius: 32px;
	  color: @font-color-white;
	  text-align: center;
	  font-weight: 700;
	  margin: 0 auto 8px auto;
	}

	/*连接线*/
	.steps li ~ li:after {
	  content: "";
	  width: 100%;
	  height: 2px;
	  background-color: @me-active;
	  position: absolute;
	  left: -50%;
	  top: 15px;
	  z-index: -1; /*放置在数字后面*/
	}

	/*将当前/完成步骤之前的数字及连接线变绿*/
	.steps li.active:before,
	.steps li.active:after {
	  background-color: @me-active;
	}
	.steps li div{
		overflow: hidden;
	}

	/*将当前/完成步骤之后的数字及连接线变灰*/
	.steps li.active ~ li:before,
	.steps li.active ~ li:after {
	  background-color: @me-bg-lighter;
	}
	.steps li div{
		width: 100px;
	}

	.me-steps {
		background: @me-bg-normal;
		display: flex;
		/*justify-content: space-evenly;*/
		align-items: flex-start;
		width: 100%;
		overflow: scroll;
		text-align: center;
		padding: 16px 0;
	}

	.line-1 {
		width: 50%;
		height: 2px;
		position: absolute;
		z-index: 0;
		left: 0;
		top: 3px;
	}

	.line-2 {
		width: 50%;
		height: 2px;
		position: absolute;
		z-index: 0;
		top: 3px;
		left: 50%;
	}

	.mt-b {
		margin-top: 10px;
	}

	.color-pick {
		background: @me-active;
	}

	.color-no-pick {
		background: @me-bg-lighter;
	}

	.color-error-pick-1 {
		background-image: linear-gradient(90deg, #b377f6 0%, #df3031 100%);
	}

	.color-error-pick-2 {
		background-image: linear-gradient( 90deg, @me-active 0%, #8091ff 60%, #b377f6 100%);
	}

	.width-100 {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.title {
		width: 100px;
	}

	.width-2 {
		width: 50%;
	}

	.width-3 {
		width: 33.33%;
	}

	.width-4 {
		width: 25%;
	}

	.circle {
		width: 8px;
		height: 8px;
		/*border: 2px solid #fff;*/
		border-radius: 50%;
		/*background: #007AFF;*/
		z-index: 9;
	}

	.circle-error {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #df3031;
		z-index: 9;
	}

	.circle-no-border {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		z-index: 9;
	}

	.circle-no-border::before {
		display: inline-block;
		content: "";
		width: 8px;
		height: 8px;
		background: @me-bg-lighter;
		position: absolute;
		top: -2px;
		z-index: 1;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
		border: 2px solid #fff;
	}

	.circle::after {
		display: inline-block;
		content: "";
		width: 12px;
		height: 12px;
		position: absolute;
		top: -2px;
		z-index: 1;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
	}

	.circle-error::after {
		display: inline-block;
		content: "";
		width: 12px;
		height: 12px;
		position: absolute;
		top: -2px;
		z-index: 1;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
	}
</style>