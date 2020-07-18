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
                      :class="{'wheel-disabled-item':item.disabled}"
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
  import BScroll from 'better-scroll'
  const STATE_HIDE = 0
  const STATE_SHOW = 1

  export default {
    name: 'meCityPicker',
    data() {
      return {
        state: STATE_HIDE,
        selectedIndex: this.selectIndex,
        pickerData: []
      }
    },
    props: {
    	cityData: { // 选择数据
    		type: Array,
    		default: () => {}
    	},
    	title: { // 选择项标题
    		type: String,
    		default: ''
    	},
    	selectIndex: { // 选中的是第几个
    		type: Array,
    		default: () => [0, 0]
    	}
    },
    created () {
      this._loadPickerData(this.selectedIndex, undefined /* no prevSelectedIndex due to instantiating */)
    },
    methods: {
      _loadPickerData (newSelectedIndex, oldSelectedIndex) {
        let provinces
        let cities
        let qus
        if (!oldSelectedIndex) { // 第一次加载
          provinces = this.cityData.map(({ value, text }) => ({ value, text }))
          cities = this.cityData[newSelectedIndex[0]].children
          qus = cities[0].children
          this.pickerData = [provinces, cities, qus]
        } else { // 选择发生变化
        	if (newSelectedIndex !== oldSelectedIndex) {
        		cities = this.cityData[newSelectedIndex[0]].children
        		this.pickerData.splice(1, 1, cities) // 替换新的市
        		let city = this.cityData[newSelectedIndex[0]].children[newSelectedIndex[1]]
        		qus = city.children!=undefined ? city.children : []
        		this.pickerData.splice(2, 1, qus) // 替换新的区
        		this.$nextTick(() => {
        			this.wheels[1].refresh()
      			})
        	}
        }
      },
      _confirm() { // 确定
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
                	if (data!=undefined) return data[currentSelectedIndex[index]]
                  return ''
                })
        this.$emit('confirm', currentSelectedValue)
      },
      _cancel() { // 取消
        this.hide()
        this.$emit('cancel')
      },
      _isMoving() {
        return this.wheels.some((wheel) => {
          return wheel.pending
        })
      },
      show() { // 显示选择弹框
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
        const wheels = this.wheels
        if (!wheels[i]) {
          wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.selectedIndex[i],
              wheelWrapperClass: 'wheel-scroll',
              wheelItemClass: 'wheel-item'
            },
            probeType: 3
          })
          let prevSelectedIndex = this.selectedIndex
          let pickerData = this.pickerData
          wheels[i].on('scrollEnd', () => { // 选择发生变化时
            const currentSelectedIndex = wheels.map(wheel => wheel.getSelectedIndex())
            this._loadPickerData(currentSelectedIndex, prevSelectedIndex)
            prevSelectedIndex = currentSelectedIndex
            let nowSelectedValue =
                pickerData.map((data, index) => {
                	if (data!=undefined) return data[currentSelectedIndex[index]]
                  return ''
                })
            this.$emit('pickerChange', nowSelectedValue)
          })
        } else {
          this.wheels[i].refresh()
        }

        return this.wheels[i]
      },
      _diffSelectedIndex(newV, oldV) {

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
          top: 6px
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
