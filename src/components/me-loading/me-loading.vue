<!--
	circle
	arrow-circle
	circle-side
	rectangle // 这个模式最好不要和文字一起使用
	ball-scale
	ball-rotate
	ball-pulse
	heart
	satellite
-->
<template lang="html">
	<div class="loading-container" v-if="isShowLoading">
		<div class="loading-box">
      <div :data-loader="dataLoader"></div>
      <div class="loading-txt" v-if="content && dataLoader!='heart'">{{content}}</div>
    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      isShowLoading: true,
      content: '',
      dataLoader: 'circle'
    }
  }
}
</script>

<style scoped lang="less">
@import url("../../assets/css/index.less");
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.loading-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: @me-bg-shadow;
}
.loading-img {
  width: 40px;
  height: 40px;
  animation: rotating 1s linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.loading-txt {
  display: flex;
  justify-content: center;
  align-items: center;
  color: @font-color-white;
  margin-top: 20px;
}
</style>

<style scoped="scoped">
	[data-loader=circle] {
	width: 30px;
	height: 30px;
	-webkit-animation: circle infinite .75s linear;
	-moz-animation: circle infinite .75s linear;
	-o-animation: circle infinite .75s linear;
	animation: circle infinite .75s linear;
	border: 2px solid #fff;
	border-top-color: transparent;
	border-radius: 100%
}

@-webkit-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@-moz-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@-o-keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@keyframes circle {
	0% {
		-webkit-transform: rotate(0);
		-ms-transform: rotate(0);
		-o-transform: rotate(0);
		transform: rotate(0)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

/*circle-side*/
[data-loader='circle-side']
{
    position: relative;

    width: 30px;
    height: 30px;

    -webkit-animation: circle infinite .75s linear;
       -moz-animation: circle infinite .75s linear;
         -o-animation: circle infinite .75s linear;
            animation: circle infinite .75s linear;

    border: 2px solid #fff;
    border-top-color: rgba(0, 0, 0, .2);
    border-right-color: rgba(0, 0, 0, .2);
    border-bottom-color: rgba(0, 0, 0, .2);
    border-radius: 100%;
}

/*arrow-circle*/
[data-loader='arrow-circle']
{
    position: relative;
    width: 30px;
    height: 30px;
    -webkit-animation: arrow-circle infinite .75s linear;
       -moz-animation: arrow-circle infinite .75s linear;
         -o-animation: arrow-circle infinite .75s linear;
            animation: arrow-circle infinite .75s linear;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 100%;
}
[data-loader='arrow-circle']:before,
[data-loader='arrow-circle']:after
{
    position: absolute;
    top: 19px;
    left: -3px;
    content: '';
    -webkit-transform: rotate(-30deg);
        -ms-transform: rotate(-30deg);
         -o-transform: rotate(-30deg);
            transform: rotate(-30deg);
    border-top: 5px solid #fff;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
}
[data-loader='arrow-circle']:after
{
    top: 0;
    left: 17px;
    -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
         -o-transform: rotate(150deg);
            transform: rotate(150deg);
}
@-webkit-keyframes arrow-circle
{
    0%
    {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    100%
    {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0);
    }
}

@-moz-keyframes arrow-circle
{
    0%
    {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    100%
    {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0);
    }
}

@-o-keyframes arrow-circle
{
    0%
    {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    100%
    {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0);
    }
}

@keyframes arrow-circle
{
    0%
    {
        -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    100%
    {
        -webkit-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0);
    }
}

/*ball-scale*/
[data-loader='ball-scale']
{
    width: 50px;
    height: 50px;

    -webkit-animation: ball-scale infinite linear .75s;
       -moz-animation: ball-scale infinite linear .75s;
         -o-animation: ball-scale infinite linear .75s;
            animation: ball-scale infinite linear .75s;

    border-radius: 100%;
    background-color: #fff;
}
@-webkit-keyframes ball-scale
{
    0%
    {
        -webkit-transform: scale(.1);
            -ms-transform: scale(.1);
             -o-transform: scale(.1);
                transform: scale(.1);

        opacity: 1;
    }
    100%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);

        opacity: 0;
    }
}

@-moz-keyframes ball-scale
{
    0%
    {
        -webkit-transform: scale(.1);
            -ms-transform: scale(.1);
             -o-transform: scale(.1);
                transform: scale(.1);

        opacity: 1;
    }
    100%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);

        opacity: 0;
    }
}

@-o-keyframes ball-scale
{
    0%
    {
        -webkit-transform: scale(.1);
            -ms-transform: scale(.1);
             -o-transform: scale(.1);
                transform: scale(.1);

        opacity: 1;
    }
    100%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);

        opacity: 0;
    }
}

@keyframes ball-scale
{
    0%
    {
        -webkit-transform: scale(.1);
            -ms-transform: scale(.1);
             -o-transform: scale(.1);
                transform: scale(.1);

        opacity: 1;
    }
    100%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);

        opacity: 0;
    }
}

/*ball-rotate*/
[data-loader='ball-rotate']
{
    position: relative;

    width: 12px;
    height: 12px;

    -webkit-animation: ball-rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;
       -moz-animation: ball-rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;
         -o-animation: ball-rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;
            animation: ball-rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;

    border-radius: 100%;
    background-color: #fff;

    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
}
[data-loader='ball-rotate']:before,
[data-loader='ball-rotate']:after
{
    position: absolute;

    width: 12px;
    height: 12px;
    margin: 1px;

    content: '';

    opacity: .8;
    border-radius: 100%;
    background-color: #fff;
}
[data-loader='ball-rotate']:before
{
    top: 0;
    left: -28px;
}
[data-loader='ball-rotate']:after
{
    top: 0;
    left: 25px;
}
@-webkit-keyframes ball-rotate
{
    0%
    {
        -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
             -o-transform: rotate(0deg) scale(1);
                transform: rotate(0deg) scale(1);
    }
    50%
    {
        -webkit-transform: rotate(180deg) scale(.6);
            -ms-transform: rotate(180deg) scale(.6);
             -o-transform: rotate(180deg) scale(.6);
                transform: rotate(180deg) scale(.6);
    }
    100%
    {
        -webkit-transform: rotate(360deg) scale(1);
            -ms-transform: rotate(360deg) scale(1);
             -o-transform: rotate(360deg) scale(1);
                transform: rotate(360deg) scale(1);
    }
}
@-moz-keyframes ball-rotate
{
    0%
    {
        -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
             -o-transform: rotate(0deg) scale(1);
                transform: rotate(0deg) scale(1);
    }
    50%
    {
        -webkit-transform: rotate(180deg) scale(.6);
            -ms-transform: rotate(180deg) scale(.6);
             -o-transform: rotate(180deg) scale(.6);
                transform: rotate(180deg) scale(.6);
    }
    100%
    {
        -webkit-transform: rotate(360deg) scale(1);
            -ms-transform: rotate(360deg) scale(1);
             -o-transform: rotate(360deg) scale(1);
                transform: rotate(360deg) scale(1);
    }
}
@-o-keyframes ball-rotate
{
    0%
    {
        -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
             -o-transform: rotate(0deg) scale(1);
                transform: rotate(0deg) scale(1);
    }
    50%
    {
        -webkit-transform: rotate(180deg) scale(.6);
            -ms-transform: rotate(180deg) scale(.6);
             -o-transform: rotate(180deg) scale(.6);
                transform: rotate(180deg) scale(.6);
    }
    100%
    {
        -webkit-transform: rotate(360deg) scale(1);
            -ms-transform: rotate(360deg) scale(1);
             -o-transform: rotate(360deg) scale(1);
                transform: rotate(360deg) scale(1);
    }
}
@keyframes ball-rotate
{
    0%
    {
        -webkit-transform: rotate(0deg) scale(1);
            -ms-transform: rotate(0deg) scale(1);
             -o-transform: rotate(0deg) scale(1);
                transform: rotate(0deg) scale(1);
    }
    50%
    {
        -webkit-transform: rotate(180deg) scale(.6);
            -ms-transform: rotate(180deg) scale(.6);
             -o-transform: rotate(180deg) scale(.6);
                transform: rotate(180deg) scale(.6);
    }
    100%
    {
        -webkit-transform: rotate(360deg) scale(1);
            -ms-transform: rotate(360deg) scale(1);
             -o-transform: rotate(360deg) scale(1);
                transform: rotate(360deg) scale(1);
    }
}

/*rectangle*/
[data-loader='rectangle']
{
    position: relative;
    width: 5px;
    height: 25px;
    -webkit-animation: rectangle infinite 1s ease-in-out -.2s;
       -moz-animation: rectangle infinite 1s ease-in-out -.2s;
         -o-animation: rectangle infinite 1s ease-in-out -.2s;
            animation: rectangle infinite 1s ease-in-out -.2s;

    background-color: #fff;
}
[data-loader='rectangle']:before,
[data-loader='rectangle']:after
{
    position: absolute;
    width: 5px;
    height: 15px;
    content: '';
    background-color: #fff;
}
[data-loader='rectangle']:before
{
    left: -20px;
    -webkit-animation: rectangle infinite 1s ease-in-out -.4s;
       -moz-animation: rectangle infinite 1s ease-in-out -.4s;
         -o-animation: rectangle infinite 1s ease-in-out -.4s;
            animation: rectangle infinite 1s ease-in-out -.4s;
}
[data-loader='rectangle']:after
{
    right: -20px;
    -webkit-animation: rectangle infinite 1s ease-in-out;
       -moz-animation: rectangle infinite 1s ease-in-out;
         -o-animation: rectangle infinite 1s ease-in-out;
            animation: rectangle infinite 1s ease-in-out;
}
@-webkit-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 15px;
        -webkit-box-shadow: 0 0 #fff;
                box-shadow: 0 0 #fff;
    }
    40%
    {
        height: 25px;
        -webkit-box-shadow: 0 -20px #fff;
                box-shadow: 0 -20px #fff;
    }
}
@-moz-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 15px;

        -webkit-box-shadow: 0 0 #fff;
                box-shadow: 0 0 #fff;
    }
    40%
    {
        height: 25px;

        -webkit-box-shadow: 0 -20px #fff;
                box-shadow: 0 -20px #fff;
    }
}
@-o-keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 15px;

        -webkit-box-shadow: 0 0 #fff;
                box-shadow: 0 0 #fff;
    }
    40%
    {
        height: 25px;

        -webkit-box-shadow: 0 -20px #fff;
                box-shadow: 0 -20px #fff;
    }
}
@keyframes rectangle
{
    0%,
    80%,
    100%
    {
        height: 15px;

        -webkit-box-shadow: 0 0 #fff;
                box-shadow: 0 0 #fff;
    }
    40%
    {
        height: 25px;

        -webkit-box-shadow: 0 -20px #fff;
                box-shadow: 0 -20px #fff;
    }
}

/*ball-pulse*/
[data-loader='ball-pulse']
{
    position: relative;

    width: 15px;
    height: 15px;
}
[data-loader='ball-pulse']:before,
[data-loader='ball-pulse']:after
{
    position: absolute;

    display: inline-block;

    width: 15px;
    height: 15px;

    content: '';

    border-radius: 100%;
    background-color: #fff;
}
[data-loader='ball-pulse']:before
{
    left: -15px;

    -webkit-animation: ball-pulse infinite .75s -.4s cubic-bezier(.2, .68, .18, 1.08);
       -moz-animation: ball-pulse infinite .75s -.4s cubic-bezier(.2, .68, .18, 1.08);
         -o-animation: ball-pulse infinite .75s -.4s cubic-bezier(.2, .68, .18, 1.08);
            animation: ball-pulse infinite .75s -.4s cubic-bezier(.2, .68, .18, 1.08);
}
[data-loader='ball-pulse']:after
{
    right: -15px;

    -webkit-animation: ball-pulse infinite .75s cubic-bezier(.2, .68, .18, 1.08);
       -moz-animation: ball-pulse infinite .75s cubic-bezier(.2, .68, .18, 1.08);
         -o-animation: ball-pulse infinite .75s cubic-bezier(.2, .68, .18, 1.08);
            animation: ball-pulse infinite .75s cubic-bezier(.2, .68, .18, 1.08);
}
@-webkit-keyframes ball-pulse
{
    0%
    {
        transform: scale(1);

        opacity: 1;
    }
    50%
    {
        transform: scale(.1);

        opacity: .6;
    }
    100%
    {
        transform: scale(1);

        opacity: 1;
    }
}
@-moz-keyframes ball-pulse
{
    0%
    {
        transform: scale(1);

        opacity: 1;
    }
    50%
    {
        transform: scale(.1);

        opacity: .6;
    }
    100%
    {
        transform: scale(1);

        opacity: 1;
    }
}
@-o-keyframes ball-pulse
{
    0%
    {
        transform: scale(1);

        opacity: 1;
    }
    50%
    {
        transform: scale(.1);

        opacity: .6;
    }
    100%
    {
        transform: scale(1);

        opacity: 1;
    }
}
@keyframes ball-pulse
{
    0%
    {
        transform: scale(1);

        opacity: 1;
    }
    50%
    {
        transform: scale(.1);

        opacity: .6;
    }
    100%
    {
        transform: scale(1);

        opacity: 1;
    }
}

/*heart*/
[data-loader='heart']
{
    position: relative;
    width: 100px;
    height: 90px;
    -webkit-animation: heart infinite .85s linear;
       -moz-animation: heart infinite .85s linear;
         -o-animation: heart infinite .85s linear;
            animation: heart infinite .85s linear;
}
[data-loader='heart']:before,
[data-loader='heart']:after
{
    position: absolute;
    top: 20px;
    left: 50px;

    width: 30px;
    height: 50px;

    content: '';
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
       -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
         -o-transform-origin: 0 100%;
            transform-origin: 0 100%;

    -moz-border-radius: 30px 30px 0 0;
         border-radius: 30px 30px 0 0;
    background: #fff;
}
[data-loader='heart']:after
{
    left: 20px;

    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
       -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
         -o-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
}
@-webkit-keyframes heart
{
    0%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
    50%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);
    }
    100%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
}
@-moz-keyframes heart
{
    0%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
    50%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);
    }
    100%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
}
@-o-keyframes heart
{
    0%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
    50%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);
    }
    100%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
}
@keyframes heart
{
    0%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
    50%
    {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
             -o-transform: scale(1);
                transform: scale(1);
    }
    100%
    {
        -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
             -o-transform: scale(.8);
                transform: scale(.8);
    }
}

/*satellite*/
[data-loader='satellite']
{
    position: relative;

    width: 48px;
    height: 48px;

    animation: satellite 3s infinite linear;

    border: 1px solid #fff;
    border-radius: 100%;
}
[data-loader='satellite']:before,
[data-loader='satellite']:after
{
    position: absolute;
    left: 0;

    width: 15px;
    height: 15px;

    content: '';

    border-radius: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px #fff;
            box-shadow: 0 0 10px #fff;
}
[data-loader='satellite']:after
{
    right: 0;

    width: 24px;
    height: 24px;
    margin: 12px;
}

@-webkit-keyframes satellite
{
    from
    {
        -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
             -o-transform: rotate(0) translateZ(0);
                transform: rotate(0) translateZ(0);
    }
    to
    {
        -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
             -o-transform: rotate(360deg) translateZ(0);
                transform: rotate(360deg) translateZ(0);
    }
}
@-moz-keyframes satellite
{
    from
    {
        -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
             -o-transform: rotate(0) translateZ(0);
                transform: rotate(0) translateZ(0);
    }
    to
    {
        -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
             -o-transform: rotate(360deg) translateZ(0);
                transform: rotate(360deg) translateZ(0);
    }
}
@-o-keyframes satellite
{
    from
    {
        -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
             -o-transform: rotate(0) translateZ(0);
                transform: rotate(0) translateZ(0);
    }
    to
    {
        -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
             -o-transform: rotate(360deg) translateZ(0);
                transform: rotate(360deg) translateZ(0);
    }
}
@keyframes satellite
{
    from
    {
        -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
             -o-transform: rotate(0) translateZ(0);
                transform: rotate(0) translateZ(0);
    }
    to
    {
        -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
             -o-transform: rotate(360deg) translateZ(0);
                transform: rotate(360deg) translateZ(0);
    }
}
</style>
