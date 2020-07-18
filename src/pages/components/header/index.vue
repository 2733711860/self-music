<template>
	<div class="header">
		<Icon :size="10" type="left" v-if="!showPlayer" @click="goBack" />
		<Icon :size="10" type="down" v-if="showPlayer" @click="closePlayer" />
		<span>发现音乐</span>
		<Icon :size="10" type="search" @click="openSearch" />
	</div>
</template>

<script>
import Icon from '@/pages/components/icon'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	components: {
		Icon
	},

	computed: {
		...mapGetters([
      "showPlayer",
      "currentSong"
    ]),
	},

	methods: {
		closePlayer () {
			this.setShowPlayer(false)
		},

		goBack () {
			history.go(-1)
		},

		openSearch () {
			this.setShowSearch(true)
			this.setShowPlayer(false)
		},

		...mapMutations({
    	setShowPlayer: 'SET_SHOWPLAYER',
    	setShowSearch: 'SET_SHOWSEARCH'
    }),
	}
}
</script>

<style scoped="scoped" lang="less">
.header{
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
}
</style>