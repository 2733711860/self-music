<template>
	<div class="contnt-page">
		<music-header v-if="!$route.meta.hideTop"></music-header>

		<div class="page-body"  v-swiperight="swiperight">
			<router-view />
		</div>

		<!--底部播放器-->
  	<bottom-player v-if="!$route.meta.menuPlayer"></bottom-player>

  	<!--底部菜单-->
  	<bottom-menu v-if="$route.meta.menuPlayer"></bottom-menu>
	</div>
</template>

<script>
import musicHeader from '@/pages/components/header'
import bottomPlayer from '@/pages/components/bottom-player'
import bottomMenu from '@/pages/components/bottom-menu'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: { musicHeader, bottomPlayer, bottomMenu },

  computed: {
  },

  created() {
  },

  methods: {
  	swiperight() { // 左滑显示菜单
  		this.setShowLeftMenu(true)
  	},

  	...mapActions(['setShowLeftMenu'])
  }
}
</script>

<style scoped="scoped" lang="less">
.contnt-page{
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.page-body{
		flex: 1;
		overflow-y: auto;
	}
}
</style>