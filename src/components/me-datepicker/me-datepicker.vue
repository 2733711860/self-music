<template>
  <div class="container">
    <transition name="picker-fade">
      <div class="picker" v-show="state===1" @touchmove.prevent @click="_cancel">
        <transition name="picker-move">
          <div class="picker-panel" v-show="state===1" @click.stop>
            <div class="picker-choose border-bottom-1px">
              <span class="cancel" @click="_cancel">取消</span>
              <span class="confirm" @click="_confirm">确定</span>
              <h1 class="picker-title">{{title}}</h1>
            </div>
            <div class="picker-content">
              <div class="mask-top border-bottom-1px"></div>
              <div class="mask-bottom border-top-1px"></div>
              <div class="wheel-wrapper" ref="wheelWrapper">
                <div class="wheel" v-for="(data, index) in pickerData" :key="index">
                  <ul class="wheel-scroll">
                    <li
                      v-for="item in data" :key="item.value"
                      class="wheel-item">{{item.text}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="picker-footer"></div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
	import dates from './date.js'
	import { formatDate, getNyear, toDate } from './commonn.js'
  const STATE_HIDE = 0
  const STATE_SHOW = 1

  export default {
    name: 'meDatepicker',
    data() {
      return {
        state: STATE_HIDE,
        selectedIndex: [],
        pickerData: [],
        nowChoose: this.defaultTime, // 当前选择
        linshiTime: ''
      }
    },
    props: {
			defaultTime: { // 默认选择的时间
				type: String,
				default: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate())
			},
			startDate: { // 开始日期，默认10年前
				type: String,
				default: formatDate(getNyear(-10), 'yyyy-MM-dd')
			},
			endDate: { // 结束日期，默认10年后
				type: String,
				default: formatDate(getNyear(10), 'yyyy-MM-dd')
			},
			title: { // 标题
				type: String,
				default: ''
			},
			type: { // 时间格式，date、hour、minute、second、time、time_minute
				type: String,
				default: 'minute'
			}
    },
    created () {
    	let ttt = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss').split(' ')
			this.linshiTime = ttt[0] + '-' + ttt[1].replace(/:/g, '-')
    	dates.startDate = this.startDate
    	dates.endDate = this.endDate
    	this.init()
    },
    methods: {
    	init () {
    		let years, months, days, hours, minutes, seconds = []
	    	dates.nowYear = this.nowChoose.split('-')[0]
      	dates.nowMonth = this.nowChoose.split('-')[1]
	    	dates.Fnian().then(res => {
	    		years = res
	    		dates.Fmonth().then(ress => {
	    			months = ress
	    			dates.Fday().then(resss => {
	    				days = resss
	    				if (this.type == 'date') {
	    					this.secon(years, months, days, [], [], [])
	    				} else {
	    					dates.Fhour().then(hou => {
		    					hours = hou
		    					if (this.type == 'hour') {
		    						this.secon(years, months, days, hours, [], [])
		    					} else {
		    						dates.Fminute().then(min => {
		    							minutes = min
		    							if (this.type == 'minute') {
		    								this.secon(years, months, days, hours, minutes, [])
		    							} else {
		    								dates.Fsecond().then(sec => {
		    									seconds = sec
		    									this.secon(years, months, days, hours, minutes, seconds)
		    								})
		    							}
		    						})
		    					}
		    				})
	    				}
	    			})
	    		})
	    	})
    	},
    	secon(years, months, days, hours, minutes, seconds) {
				let yearIndex = years.findIndex(item => item.value == Number(this.linshiTime.split('-')[0]))
				let monthIndex = months.findIndex(item => item.value == Number(this.linshiTime.split('-')[1]))
				let dayIndex = days.findIndex(item => item.value == Number(this.linshiTime.split('-')[2]))
				let hourIndex = hours.findIndex(item => item.value == Number(this.linshiTime.split('-')[3]))
				let minuteIndex = minutes.findIndex(item => item.value == Number(this.linshiTime.split('-')[4]))
				let secondIndex = seconds.findIndex(item => item.value == Number(this.linshiTime.split('-')[5]))
				if (this.type == 'date') {
					this.selectedIndex = [yearIndex, monthIndex, dayIndex]
					this.pickerData = [years, months, days]
				} else if (this.type == 'hour') {
					this.selectedIndex = [yearIndex, monthIndex, dayIndex, hourIndex]
					this.pickerData = [years, months, days, hours]
				} else if (this.type == 'minute') {
					this.selectedIndex = [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex]
					this.pickerData = [years, months, days, hours, minutes]
				} else if (this.type == 'second') {
					this.selectedIndex = [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex, secondIndex]
					this.pickerData = [years, months, days, hours, minutes, seconds]
				}
				if (this.type == 'time') {
					this.selectedIndex = [hourIndex, minuteIndex, secondIndex]
					this.pickerData = [hours, minutes, seconds]
				}
				if (this.type == 'time_minute') {
					this.selectedIndex = [hourIndex, minuteIndex]
					this.pickerData = [hours, minutes]
				}
    	},
      _confirm() {
        if (this._isMoving()) {
          return
        }
        this.hide()

        const currentSelectedIndex = this.selectedIndex = this.wheels.map(wheel => {
          return wheel.getSelectedIndex()
        })

        const pickerData = this.pickerData
        const currentSelectedValue =
              pickerData.map((data, index) => {
                return data[currentSelectedIndex[index]].text
              }).join('-')
        let ataa = this.getTimeForm(currentSelectedValue)
        this.$emit('confirm', ataa)
      },
      _cancel() {
        this.hide()
        this.$emit('cancel')
      },
      _isMoving() {
        return this.wheels.some((wheel) => {
          return wheel.pending
        })
      },
      show() {
        if (this.state === STATE_SHOW) {
          return
        }
        this.state = STATE_SHOW

        if (!this.wheels) {
          this.$nextTick(() => {
            this.wheels = []
            let wheelWrapper = this.$refs.wheelWrapper
            for (let i = 0; i < this.pickerData.length; i++) {
              this._createWheel(wheelWrapper, i)
            }
          })
        } else {
          for (let i = 0; i < this.pickerData.length; i++) {
            this.wheels[i].enable()
            this.wheels[i].wheelTo(this.selectedIndex[i])
          }
        }
      },
      hide() {
        this.state = STATE_HIDE
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].disable()
        }
      },
      refresh() {
        this.$nextTick(() => {
          this.wheels.forEach((wheel, index) => {
            wheel.refresh()
          })
        })
      },
      _createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.selectedIndex[i],
              wheelWrapperClass: 'wheel-scroll',
              wheelItemClass: 'wheel-item'
            },
            probeType: 3
          })
          this.wheels[i].on('scrollEnd', () => {
          	const currentSelectedIndex = this.wheels.map(wheel => wheel.getSelectedIndex())
          	let pickerData = this.pickerData
          	this.nowChoose = pickerData.map((data, index) => {
          		if (data[currentSelectedIndex[index]] == undefined) {
								if (data[currentSelectedIndex[index]-1] == undefined) {
									if (data[currentSelectedIndex[index]-2] == undefined) {
										return data[currentSelectedIndex[index]-3].text
									}
									return data[currentSelectedIndex[index]-2].text
								}
          			return data[currentSelectedIndex[index]-1].text
          		}
              return data[currentSelectedIndex[index]].text
            }).join('-')
          	this.init()
            let ataa = this.getTimeForm(this.nowChoose)
            this.$emit('dateChange', ataa)
          })
        } else {
          this.wheels[i].refresh()
        }

        return this.wheels[i]
      },
      getTimeForm(tiime) {
      	let ata = ''
      	if (this.type == 'date') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{4})(\d{2})(\d{2})/g,'$1-$2-$3')
      		return ata
      	} else if (this.type == 'hour') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{4})(\d{2})(\d{2})(\d{2})/g,'$1-$2-$3 $4')
      	} else if (this.type == 'minute') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/g,'$1-$2-$3 $4:$5')
      	} else if (this.type == 'second') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,'$1-$2-$3 $4:$5:$6')
      	} else if (this.type == 'time') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{2})(\d{2})(\d{2})/g,'$1:$2:$3')
      	} else if (this.type == 'time_minute') {
      		ata = tiime.replace(/-/g, '').replace(/(\d{2})(\d{2})/g,'$1:$2')
      	}
      	return ata
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  /* reset */
  ul
    list-style none
    padding 0

  .example-list
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    margin: 2rem

    .example-item
      background-color white
      padding: 0.8rem
      border: 1px solid rgba(0, 0, 0, .1)
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1)
      text-align: center
      margin-bottom: 1rem
      flex: 1
      &.placeholder
        visibility: hidden
        height: 0
        margin: 0
        padding: 0

  .picker
    position: fixed
    left: 0
    top: 0
    z-index: 100
    width: 100%
    height: 100%
    overflow: hidden
    text-align: center
    font-size: 14px
    background-color: rgba(51, 51, 51, .8)
    &.picker-fade-enter, &.picker-fade-leave-active
      opacity: 0
    &.picker-fade-enter-active, &.picker-fade-leave-active
      transition: all .3s ease-in-out

    .picker-panel
      position: absolute
      z-index: 600
      bottom: 0
      width: 100%
      height: 273px
      background: white
      &.picker-move-enter, &.picker-move-leave-active
        transform: translate3d(0, 273px, 0)
      &.picker-move-enter-active, &.picker-move-leave-active
        transition: all .3s ease-in-out
      .picker-choose
        position: relative
        height: 50px
        color: #999
        background-color: #fbfbfb
        .picker-title
          margin: 0
          line-height: 50px
          font-weight: normal
          text-align: center
          font-size: 18px
          color: #333
        .confirm, .cancel
          position: absolute
          padding: 16px
          font-size: 14px
        .confirm
          right: 0
          color: #20a0ff
          &:active
            color: #5aaaff
        .cancel
          left: 0
          &:active
            color: #c2c2c2
      .picker-content
        position: relative
        top: 20px
        .mask-top, .mask-bottom
          z-index: 10
          width: 100%
          height: 68px
          pointer-events: none
          transform: translateZ(0)
        .mask-top
          position: absolute
          top: 0
          background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))
        .mask-bottom
          position: absolute
          bottom: 1px
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))
      .wheel-wrapper
        display: flex
        padding: 0 16px
        .wheel
          -ms-flex: 1 1 0.000000001px
          -webkit-box-flex: 1
          -webkit-flex: 1
          flex: 1
          -webkit-flex-basis: 0.000000001px
          flex-basis: 0.000000001px
          width: 1%
          height: 173px
          overflow: hidden
          font-size: 18px
          .wheel-scroll
            padding: 0
            margin-top: 68px
            line-height: 36px
            list-style: none
            .wheel-item
              list-style: none
              height: 36px
              overflow: hidden
              white-space: nowrap
              color: #333
              &.wheel-disabled-item
                opacity: .2;
    .picker-footer
      height: 20px
</style>
