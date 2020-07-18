<template>
	<div>
		<!--轮播-->
		<music-banner></music-banner>
		
		<!--热门歌单-->
		<music-sheet></music-sheet>
		
		<!--热门榜单-->
		<music-rank></music-rank>
		
		<!--新歌速递-->
		<music-new></music-new>
	</div>
</template>

<script>
import musicBanner from '@/pages/components/music-banner'
import musicSheet from '@/pages/components/music-sheet'
import musicRank from '@/pages/components/music-rank'
import musicNew from '@/pages/components/music-new'
import Icon from '@/pages/components/icon'
export default {
	components: {
		musicBanner, musicSheet, Icon, musicRank, musicNew
	}
}
</script>

<style scoped="scoped" lang="less">
</style>