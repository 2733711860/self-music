<template>
  <ul class="footer flex jc-sa w100pc fixed bott0 bg-fff aic footer">
    <li class="item">
      <router-link to="/index" class="flex2 aic f20 yellow" active-class="active">
        <i class="icon-home iconfont f18 text"></i>
        <p class="mt-5 f12 text">首页</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/cart" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="shopping-cart-o"></van-icon>
        <p class="mt-5 text f12">购物车</p>
      </router-link>
    </li>
    <li class="item">
      <router-link to="/my" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="user-o"></van-icon>
        <p class="mt-5 text f12">我的</p>
      </router-link>
    </li>
     <li class="item">
      <router-link to="/demo" class="flex2 aic f20 text" active-class="active">
        <van-icon class="text" name="user-o"></van-icon>
        <p class="mt-5 text f12">例子</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  border-top: 1px solid #ebebeb;
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  bottom: 0;
  .text {
    color: #797d82;
  }
  .active .text {
    color: @red;
  }
}
</style>
