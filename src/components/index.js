// 引入组件
import meSwitch from './me-switch'
import meRadio from './me-radio'
import meCheckbox from './me-checkbox'
import meStep from './me-step'
import meIcon from './me-icon'
import meInput from './me-input'
import mePopup from './me-popup'
import mePicker from './me-picker'
import meDoublePicker from './me-double-picker'
import meCityPicker from './me-city-picker'
import meCell from './me-cell'
import meDatepicker from './me-datepicker'
import meRefreshLoad from './me-refresh-load'
import meRefreshLoadMescroll from './me-refresh-load-mescroll'
import meTab from './me-tab'
import meSlide from './me-slide'
import meIndexList from './me-index-list'
import meSlider from './me-slider'
import meTree from './me-tree'
import meSwiper from './me-swiper'
import slide from './me-swiper/slide'
import meSign from './me-sign'
import meUpload from './me-upload'
import meDropDown from './me-drop-down'
import meSelect from './me-select'
import meTextarea from './me-textarea'
import meHeader from './me-header'
import meRate from './me-rate'
import meRollNotice from './me-roll-notice'
import meCollapse from './me-collapse'
import meCollapseItem from './me-collapse/me-collapse-item'
import mePagination from './me-pagination'
import meProgress from './me-progress'
import meTable from './me-table'
import meLottery from './me-lottery'
import meLotteryTurn from './me-lottery-turn'

// 定义组件集合
const components = {
  meSwitch,
  meRadio,
  meCheckbox,
  meStep,
  meIcon,
  meInput,
  mePopup,
  mePicker,
  meDoublePicker,
  meCityPicker,
  meCell,
  meDatepicker,
  meRefreshLoad,
  meRefreshLoadMescroll,
  meTab,
  meSlide,
  meIndexList,
  meSlider,
  meTree,
  meSwiper,
  slide,
  meSign,
  meUpload,
  meDropDown,
  meSelect,
  meTextarea,
  meHeader,
  meRate,
  meRollNotice,
  meCollapse,
	meCollapseItem,
	mePagination,
	meProgress,
	meTable,
	meLottery,
	meLotteryTurn
}

// 全局注册组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出
components.install = install
export default components
