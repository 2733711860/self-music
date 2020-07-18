<template>
  <div class="all_gn">
  	<!--header-->
  	<me-header title="demo"
  		hasLeft
  		hasRight></me-header>

  	<!--loading-->
    <div class="item" @click="showLoading">loading</div>

    <!--toast-->
    <div class="item" @click="showToast">toast</div>

    <!--messageBox-->
    <div class="item" @click="showMsgBox">messageBox</div>

		<!--开关switch-->
    <me-switch class="item" v-model="switchValue"></me-switch>

    <!--单选-->
    <me-radio class="item" :options='options' v-model='radioValue'></me-radio>

    <!--多选-->
    <meCheckbox class="item" :options="checkboxList" v-model='checkboxValue'></meCheckbox>

    <!--步骤条-->
    <div class="item">
    	<me-step :currentVal='steps' :stepArray='stepList'
	    	model="dot"></me-step>
	    <me-step :currentVal='steps' :stepArray='stepList'
	    	model="origin"></me-step>
    </div>

    <!--图标-->
    <me-icon class="item" name="right" size="30" @click="click"></me-icon>

    <!--input输入框-->
    <me-input type="text" class="item"
    	placeholder="请输入姓名"
    	v-model="inputvalue"
    	isMust
    	align="left"
    	maxlength="50"
    	showClose
    	@meChange='change'
    	@meFocus="meFocus"
    	@meBlur="meBlur"
    ></me-input>

    <!--文本框-->
    <div class="item">
    	<me-textarea
    		v-model="textareValue"
    		isCount
    		maxNum='30'
    		placeholder="请输入"
    		@input="textareaInput"></me-textarea>
    </div>

    <!--弹出层popup-->
    <div class="item">
    	<div @click="showPopup=!showPopup">popup</div>
    	<me-popup v-model='showPopup' position="center">可从上、下、左、右、中间五个方位弹出来：position取值为：left、top、right、bottom、center</me-popup>
    </div>

    <!--picker-->
    <div class="item">
    	<div @click="showPickerData2">一列选择</div>
    	<me-picker
        ref="picker"
        :pickerData="data1"
        title="选择标题"
        @confirm="confirm"
        @cancel="cancel"
        @pickerChange="pickerChange">
			</me-picker>
    </div>

    <!--两列picker-->
    <div class="item">
    	<div @click="showPickerData">多列选择</div>
    	<me-double-picker
    		ref="doublePicker"
    		:pickerData="pickerData"
    		title="多列选择"
    		@pickerChange="doublepickerChange"
    		@confirm="doubleconfirm"
    		@cancel="doublecancel"></me-double-picker>
    </div>

    <!--省市区选择-->
    <div class="item">
    	<div @click="showPickerData3">省市区选择</div>
    	<me-city-picker
    		ref="cityPicker"
    		:cityData="pickerData2"
    		title="省市区选择"
    		@pickerChange="citypickerChange"
    		@confirm="cityconfirm"
    		@cancel="citycancel"></me-city-picker>
    </div>

    <!--单元格-->
    <div class="item">
    	<me-cell name="姓名" value="李世民"></me-cell>
    	<me-cell name="朝代" value="唐朝" rightIcon="right"></me-cell>
    	<me-cell name="朝代" value="唐朝" leftIcon="user"></me-cell>
    </div>

    <!--时间选择-->
    <div class="item">
    	<div @click="chooseDate">时间选择</div>
    	<me-datepicker
    		ref="datepicker"
    		defaultTime="2020-01-19"
    		title="时间选择"
    		type="date"
    		startDate="2009-01-01"
    		endDate="2025-12-31"
    		@confirm="dateConfirm"
    		@cancel="dateCancel"
    		@dateChange="dateChange"></me-datepicker>
    </div>

    <!--上拉刷新下拉加载-->
    <div class="item" @click="$router.push({path: '/index'})">上拉刷新下拉加载</div>

    <!--上拉刷新下拉加载-->
    <div class="item" @click="$router.push({path: '/cart'})">基于mescroll上拉刷新下拉加载</div>

    <!--tab-->
    <div class="item" @click="$router.push({path: '/login'})">tab</div>

    <!--左滑删除-->
    <div class="item" @click="$router.push({path: '/order'})">左滑删除</div>

    <!--滑块-->
    <div class="item">
    	<div>滑块当前值：{{slidervalue}}</div>
    	<me-slider
	  		v-model="slidervalue"
	  		:min="0"
	  		:max="100"
	  		showTip="never"
	  		@input="sliderinput"
	  		@onChange="sliderchange"></me-slider>
    </div>

    <!--进度条-->
    <div class="item">
    	<me-progress
    		:percentage="70"
    		type="line"
    		strokeLinecap="round"></me-progress>
    	<me-progress
    		:percentage="70"
    		type="circle"
    		strokeLinecap="round"></me-progress>
    </div>

    <!--树形图-->
    <div class="item" @click="$router.push({path: '/progress'})">树形图</div>

    <!--轮播图-->
    <div class="item" @click="$router.push({path: '/swiper'})">轮播图</div>

    <!--图片懒加载-->
    <div class="item" @click="$router.push({path: '/lazyPicture'})">图片懒加载</div>

    <!--签字组件-->
    <div class="item" @click="toSign">签字</div>
    <me-sign ref="tosign"></me-sign>

    <!--接口调用实例-->
    <div class="item" @click="getAxios">接口调用实例</div>

    <!--mock调用实例-->
    <div class="item" @click="getMock">mock调用实例</div>

    <!--图片上传-->
    <div class="item" @click="$router.push({path: '/upload'})">图片上传</div>

    <!--select选择-->
    <div class="item" @click="$router.push({path: '/select'})">select选择</div>

    <!--dropdown-->
    <div class="item" @click="$router.push({path: '/dropDown'})">dropdown</div>

    <!--评分-->
    <div class="item">
    	<div>评分</div>
    	<me-rate v-model = 'score' allowHalf totalScore='6' @input="changerate"></me-rate>
    </div>

    <!--公告栏-->
    <div class="item">
    	<div>公告栏</div>
    	<me-roll-notice
				:list="list"
				defaultIndex="0"
				time="3000"
				direction="column"></me-roll-notice>
    </div>

    <!--折叠面板-->
    <div class="item" @click="$router.push({path: '/rollNotice'})">折叠面板</div>

    <!--分页-->
    <div class="item" @click="$router.push({path: '/pagination'})">分页</div>

    <!--表格-->
    <div class="item" @click="$router.push({path: '/table'})">表格</div>

    <!--九宫格抽奖-->
    <div class="item" @click="$router.push({path: '/lottery'})">九宫格抽奖</div>

    <!--转盘抽奖-->
    <div class="item" @click="$router.push({path: '/lotteryTurn'})">转盘抽奖</div>

    <!--楼层导航-->
    <div class="item" @click="$router.push({path: '/tabFloor'})">楼层导航</div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{text: '天下第一'}, {text: '神雕侠侣'}, {text: '射雕英雄传'}
			],
			switchValue: false, // 开关默认值
			radioValue: '', // 单选值
			options: [ { text: '中国', value: '1' }, {text: '日本', value: '2'} ], // 单选列表
			checkboxList: [ { text: '中国', value: '1' }, { text: '日本', value: '2' } ], // 多选列表
			checkboxValue: [], // 多选值
			steps: 2, // 当前步骤数
			stepList: ["苏妲己苏妲己", "姜子牙", "哪吒", "杨戬", '孙悟空', '武庚', '雷震子'], // 步骤列表
			inputvalue: '张三',
			textareValue: '',
			showPopup: false,
			score: '3',
			picker:{
				title: '我问问',
        data:[],
        name:'1111',
        pickerClass:'',
        anchor:[]
			},
			data1: [
        {
          value:'1',
          text:'test1'
      	},
        {
          value:'2',
          text:'test2'
        },
        {
          value:'3',
          text:'test3'
        }
    	],
    	data3: [
        {
          value:'1',
          text:'test1'
      	},
        {
          value:'2',
          text:'test2'
        },
        {
          value:'3',
          text:'test3'
        }
    	],
    	data2: [
        {
          value:'1',
          text:'test1',
          children:[
            {
            	value:'1',
            	text:'test1'
            }
          ]
        },
        {
          value:'2',
          text:'test2',
          children:[
            {
            	value:'2',
            	text:'test2'
            },
            {
            	value:'3',
            	text:'test3'
            },
            {
            	value:'4',
            	text:'test4'
            }
          ]
        },
        {
          value:'3',
          text:'test3',
          children:[
            {
            	value:'3',
            	text:'test3'
            }
          ]
        }
    	],
    	pickerData: [],
    	pickerData2: [
		    {
		      text: '北京市',
		      value: '110000',
		      children: [
		        {
		          text: "北京市",
		          value: '110100',
		          children: [
		          	{
		          		text: '城东',
		          		value: '110101',
		          	}
		          ]
		        }
		      ]
		    },
		    {
		      text: '天津市',
		      value: '120000',
		      children: [
		        {
		          text: "天津市",
		          value: '120000'
		        }
		      ]
		    },
		    {
		      text: '河北省',
		      value: '130000',
		      children: [
		        {
		          text: '石家庄市',
		          value: '130100'
		        },
		        {
		          text: '唐山市',
		          value: '130200'
		        },
		        {
		          text: '秦皇岛市',
		          value: '130300'
		        },
		        {
		          text: '邯郸市',
		          value: '130400'
		        },
		        {
		          text: '邢台市',
		          value: '130500'
		        },
		        {
		          text: '保定市',
		          value: '130600'
		        },
		        {
		          text: '张家口市',
		          value: '130700'
		        },
		        {
		          text: '承德市',
		          value: '130800'
		        }
		      ]
		    },
		    {
		      text: '山西省',
		      value: '140000',
		      children: [
		        {
		          text: '太原市',
		          value: '140100',
		          children: [
			          {
				          text: '太原市1',
				          value: '1401001'
				        },
				        {
				          text: '太原市2',
				          value: '1401002'
				        },
		          ]
		        },
		        {
		          text: '大同市',
		          value: '140200',
		          children: [
			          {
				          text: '大同市1',
				          value: '1402001'
				        },
				        {
				          text: '大同市2',
				          value: '1402002'
				        },
		          ]
		        },
		        {
		          text: '阳泉市',
		          value: '140300'
		        },
		        {
		          text: '长治市',
		          value: '140400'
		        },
		        {
		          text: '晋城市',
		          value: '140500'
		        },
		        {
		          text: '朔州市',
		          value: '140600'
		        },
		        {
		          text: '晋中市',
		          value: '140700'
		        }
		      ]
		    }
		  ],
		  slidervalue: 7,
		}
	},
	watch: {
    switchValue (val) { // 监听开关变化
    	console.log(this.switchValue)
    },
    radioValue (val) { // 监听单选值变化
    	console.log(this.radioValue)
    },
    checkboxValue (val) { // 监听多选值变化
    	console.log(this.checkboxValue)
    },
    inputvalue() {
    	console.log(this.inputvalue)
    }
  },
	methods: {
		showLoading() {
//			this.$loading.show({
//				text: '加载中...',
//				spinnerType: 'satellite'
//			})
			this.$loading.show('加载中...')
			setTimeout(() => {
				this.$loading.hide()
			}, 3000)
		},

		showToast() {
			this.$toast.show('hello world')
		},

		showMsgBox() {
			this.$msgBox({
				title: '警告',
				content: '请输入姓名！',
				sureText: '同意',
				showCancel: true,
				cancelText: '不同意'
			}).then(() => {
				console.log('同意')
			}).catch(() => {
				console.log('不同意')
			})
		},

		click () { // 图标点击时触发的方法
		},

		change(value) { // 输入框值变化时
//			console.log(value)
		},

		textareaInput(val) {
			console.log(val)
		},

		meFocus (el) { // 输入框获得焦点时
//			console.log(el)
		},

		meBlur (el) { // 输入框失去焦点时触发
//			console.log(el)
		},
    showPickerData2() {
      this.$refs.picker.show()
    },
    cancel() {
    },
    confirm(val) {
    	console.log(val)
    },
    pickerChange(val) {
    	console.log(val)
    },
    showPickerData() {
    	this.pickerData = [this.data2, this.data1, this.data3]
			this.$refs.doublePicker.show()
    },
    doublepickerChange(val) {
    	console.log(val)
    },
    doubleconfirm(val) {
    	console.log(val)
    },
    doublecancel() {
    },
    showPickerData3() {
    	this.$refs.cityPicker.show()
    },
    citypickerChange(val) {
    	console.log(val)
    },
    cityconfirm(val) {
    	console.log(val)
    },
    citycancel() {
    },
    chooseDate() {
    	this.$refs.datepicker.show()
    },
    dateConfirm(val) {
    	console.log(val)
    },
    dateCancel() {
    },
    dateChange(val) {
    	console.log(val)
    },
    sliderinput(value) { // 滑块实时变化
//		console.log(value)
  	},
  	sliderchange(value) { // 滑块松开滑块时触发
  		console.log(value)
  	},
  	toSign () {
  		this.$refs.tosign.sign('张三', 'zs', 'zs').then(data => {
  			console.log(data)
  		})
  	},
  	async getAxios () {
  		let param = {
	  		idx: '1'
	  	}
	  	await this.$get(this.$api.top_list, param).then(data => {
				console.log(data)
	    })
  	},
  	async getMock () {
  		await this.$post(this.$api.mockTest).then(data => {
				console.log(data)
	    })
  	},
  	changerate(val) {
  		console.log(val)
  	}
	}
}
</script>

<style lang="less" scoped>
.all_gn{
	.item{
		width: 85%;
		padding: 10px;
		margin: 10px auto;
		text-align: center;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, .8);
	}
}
</style>