<template>
  <div style="position: relative;height: 100%;">
  	<div class="music">
	    <ul id="waves" class="movement">
	      <li class="li1"><span class="ani-li"></span></li>
	      <li class="li2"><span class="ani-li"></span></li>
	      <li class="li3"><span class="ani-li"></span></li>
	    </ul>
	    <div class="music-state"></div>
	  </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
 .music {
  width: .5rem;
  height: 100%;
  position: absolute;
}

 #waves {
  height: .28rem;
  position: absolute;
}

 #waves li {
  position: relative;
  float: left;
  height: 100%;
  width: 2.5px;
  overflow: hidden;
  margin-right: 2.5px;
}

 #waves li span {
  position: absolute;
  bottom: 0;
  display: block;
  height: 100%;
  width: 2.5px;
  background: rgb(25, 137, 250);
}

 #waves .li1 span {
  animation: waves 0.6s linear 0s infinite alternate;
  -webkit-animation: waves 0.6s linear 0s infinite alternate;
}

 #waves .li2 span {
  animation: waves 0.9s linear 0s infinite alternate;
  -webkit-animation: waves 0.9s linear 0s infinite alternate;
}

 #waves .li3 span {
  animation: waves 1s linear 0s infinite alternate;
  -webkit-animation: waves 1s linear 0s infinite alternate;
}

@-webkit-keyframes waves {
  10% {
    height: 20%;
  }
  20% {
    height: 60%;
  }
  40% {
    height: 40%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 50%;
  }
}

@keyframes waves {
  10% {
    height: 20%;
  }
  20% {
    height: 60%;
  }
  40% {
    height: 40%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 50%;
  }
}
</style>