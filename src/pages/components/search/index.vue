<template>
	<transition name="slide">
		<div :class="['player', showSearch ? 'show' : 'hide']">
			<div class="search-page">
				<div class="search-div">
					<div class="input-div">
						<Icon :size="10" type="search" />
						<input type="text" class="search-inp" v-model="keyWord" @keyup.enter="goSearch" />
					</div>
					<div @click="closeSearch">取消</div>
				</div>

				<div class="search-content">
					<div class="no-search" v-if="!hasResult">
						<search-suggest name="热门搜索" :list="hotSearchList" @startSearch="startSearch"></search-suggest>
						<search-suggest name="搜索历史" :list="searchHistory" @startSearch="startSearch"></search-suggest>
					</div>

					<div class="search-result" v-if="hasResult">
						<van-tabs v-model="nowTab" sticky swipeable animated offset-top="50">
							<van-tab title="单曲 " name="1">
								<search-song :keyWord="keyWord" ref="songC" v-if="nowTab == '1'"></search-song>
							</van-tab>
							<van-tab title="歌手 " name="100">
								<search-singer :keyWord="keyWord" @closeSearch="closeSearch" ref="singerC" v-if="nowTab == '100'"></search-singer>
							</van-tab>
							<van-tab title="歌单 " name="1000">
				  	  	<search-sheet :keyWord="keyWord" @closeSearch="closeSearch" ref="sheetC" v-if="nowTab == '1000'"></search-sheet>
							</van-tab>
							<van-tab title="视频" name="1014">内容 1</van-tab>
						</van-tabs>
					</div>
				</div>
				
				<!--底部播放器-->
  			<bottom-player></bottom-player>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import searchSuggest from '@/pages/components/search-suggest'
import searchSong from './search-song'
import searchAlbum from './search-album'
import searchMv from './search-mv'
import searchSheet from './search-sheet'
import searchSinger from './search-singer'
import searchVideo from './search-video'
import Icon from '@/pages/components/icon'
import bottomPlayer from '@/pages/components/bottom-player'
export default {
	components: {
		searchSuggest, Icon, searchSong, searchAlbum, searchMv, searchSheet, searchSinger, searchVideo, bottomPlayer
	},

	data () {
		return {
			hotSearchList: [], // 热搜列表
			keyWord: '', // 搜索关键字
			hasResult: false, // 是否有搜索结果
			nowTab: 1, // 标签
		}
	},

	computed: {
		...mapGetters([
      "showSearch",
      "searchHistory"
    ]),
	},

	mounted () {
		this.getSearchHot()
	},

	methods: {
		async getSearchHot () { // 热搜列表
			await this.$get(this.$api.searchHot).then(async data => {
				this.hotSearchList = data.data
	    })
		},
		
		startSearch (val) { // 历史记录、热搜
			this.keyWord = val
			this.goSearch()
		},

		goSearch () { // 搜索接口
			this.hasResult = true
			this.setSearchHistory(this.keyWord)
			setTimeout(() => {
				if (this.nowTab == '1') {
					this.$refs.songC.searchFirs()
				} else if (this.nowTab == '1000') {
					this.$refs.sheetC.searchFirs()
				} else if (this.nowTab == '100') {
					this.$refs.singerC.searchFirs()
				}
			}, 50)
		},

		closeSearch () { // 关闭搜索
			this.keyWord = ''
			this.hasResult = false
			this.setShowSearch(false)
		},

		...mapMutations({
    	setShowSearch: 'SET_SHOWSEARCH'
    }),

    ...mapActions(["setSearchHistory"])
	}
}
</script>

<style scoped="scoped" lang="less">
.slide-enter-active,
.slide-leave-active {
  transition: all 1.5s;
  transform: none;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.player{
	z-index: 100;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: white;
	overflow: hidden;
	overflow-y: auto;
	transition: transform 0.5s;
	color: white;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	.page-lyric{
		flex: 1;
	}
}
.player.hide {
	transform: translateY(-100%);
}
.player.show {
	transform: none;
}

.search-page{
	height: 100%;
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.search-div{
		height: 50px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		.input-div{
			height: 30px;
			flex: 1;
			display: flex;
			align-items: center;
			background: rgba(0, 0, 0, .04);
			border-radius: 20px;
			padding: 0 10px 0 5px;
			margin: 0 10px 0 5px;
			.search-inp{
				height: 100%;
				flex: 1;
				border: none;
				outline: none;
				background: none;
				padding-right: 5px;
			}
		}
	}
	.search-content{
		flex: 1;
		overflow-y: auto;
		.no-search{
			padding: 10px;
		}
	}
}
</style>