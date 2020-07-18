<template lang="html">
  <div v-if="isShowToast" class="toast-container" @touchmove.prevent>
    <!-- 这里content为双花括号 -->
    <span class="toast-msg">{{content}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowToast: true,
      content: ''
    }
  }
}
</script>

<style scoped lang="less">
@import url("../../assets/css/index.less");
.toast-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.toast-msg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  border-radius: 5px;
  background: @me-bg-shadow;
  color: @font-color-white;
  z-index: 100;
}
</style>
