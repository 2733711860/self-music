/**
 * @name  弹窗框
 */
import Vue from 'vue'
import msgBox from './me-msgBox.vue'

// 定义插件对象
const MessageBox = {}
let msgBoxNode = null // 存储loading节点元素
const MessageBoxInstance = Vue.extend(msgBox)

// vue的install方法，用于定义vue插件
MessageBox.install = function (options) {
  // 在Vue的原型上添加实例方法，以全局调用
	msgBoxNode = new MessageBoxInstance({
    data: {
      title: options.title || '提示',
      contentMsg: options.content || options,
      sureText: options.sureText || '确定',
      showCancel: options.sureText || false,
      cancelText: options.cancelText || '取消',
    }
  }).$mount()
  document.body.appendChild(msgBoxNode.$el)
  return msgBoxNode.showMsgBoxx()
    .then(val => {
			return Promise.resolve(val)
    }).catch(err => {
			return Promise.reject(err)
    })
}
export default MessageBox
