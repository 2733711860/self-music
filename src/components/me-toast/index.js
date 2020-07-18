import Vue from 'Vue'
import ToastComponent from './me-toast.vue'

const Toast = {}
let showToast = false // 存储loading显示状态
let toastNode = null // 存储loading节点元素
const ToastConstructor = Vue.extend(ToastComponent)

Toast.install = function (Vue, options) {
  // 参数
  var opt = {
    duration: '3000'
  }
  for (var property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = function (tips, type) {
    if (type === 'hide') {
      toastNode.isShowToast = showToast = false
    } else {
      if (showToast) {
        // 如果toast还在，则不再执行
        return
      }
      toastNode = new ToastConstructor({
        data: {
          isShowToast: showToast,
          content: tips
        }
      })
      toastNode.$mount() // 挂在实例，为了获取下面的toastNode.$el
      document.body.appendChild(toastNode.$el)
      toastNode.isShowToast = showToast = true
      setTimeout(function () {
        toastNode.isShowToast = showToast = false
      }, opt.duration)
    }
  };

  ['show', 'hide'].forEach(function (type) {
    Vue.prototype.$toast[type] = function (tips) {
      return Vue.prototype.$toast(tips, type)
    }
  })
}
export default Toast
