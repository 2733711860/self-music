<template>
  <div class="me_footr">
  	<ul class="footer flex jc-sa w100pc bott0 aic footer">
	    <li class="item">
	      <router-link to="/homePage" class="flex2 aic f20 yellow" active-class="active">
	        <van-icon class="text" name="wap-home-o" />
	        <p class="mt-5 f12 text">首页</p>
	      </router-link>
	    </li>
	    <li class="item">
	      <router-link to="/rankList" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="service-o"></van-icon>
	        <p class="mt-5 text f12">排行</p>
	      </router-link>
	    </li>
	    <li class="item">
      	<me-progress
      		:class="['pictop', {prog: playing}]"
	    		:percentage="percent"
	    		:strokeWidth="3"
	    		:width="50"
	    		trackColor="rgba(255, 255, 255, .3)"
	    		type="circle"
	    		strokeLinecap="round"
	    		@click.native="goPlayer">
	    		<img src="../../../assets/img/3.jpg" :class="['circleImg', {Rotation: playing}]" style="width: 42px;height: 42px;" />
	    	</me-progress>
	    </li>
	    <li class="item">
	      <router-link to="/singer" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="search"></van-icon>
	        <p class="mt-5 text f12">歌手</p>
	      </router-link>
	    </li>
	    <li class="item">
	      <router-link to="/userCenter" class="flex2 aic f20 text" active-class="active">
	        <van-icon class="text" name="user-o"></van-icon>
	        <p class="mt-5 text f12">我的</p>
	      </router-link>
	    </li>
	  </ul>
  </div>
</template>

<script>
import meProgress from '../me-progress'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		meProgress
	},

	data () {
		return{
		}
	},

	computed: {
		percent() { // 播放的进度百分比
      const { durationSecond } = this.currentSong
      return (Math.min(this.currentTime / durationSecond, 1) || 0)*100
    },

    ...mapGetters([
      "currentSong",
      "currentTime",
      "playing",
    ]),
	},

	methods: {
		goPlayer () {
    	this.setShowPlayer(true)
    },

    ...mapMutations({
    	setShowPlayer: 'SET_SHOWPLAYER'
    }),
	}
}
</script>

<style scoped lang="less">
.me_footr{
	height: 60px;
}
.footer {
  height: 60px;
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .07);
  .active .text {
    color: #1296db;
  }
}
.pictop{
	position: absolute;
	top: 5px;
	transition: all .3s;
	background: white;
}
.prog{
	top: -10px;
}
.item{
	width: 20%;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.circleImg{
	border-radius: 100%;
	opacity: .7;
}
.Rotation{
	-webkit-transform: rotate(360deg);
	animation: rotation 15s linear infinite;
	-moz-animation: rotation 15s linear infinite;
	-webkit-animation: rotation 15s linear infinite;
	-o-animation: rotation 15s linear infinite;
}
@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
}
</style>
