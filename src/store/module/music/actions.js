import * as types from './mutation-types'
import {post, get, patch, put} from '@/api/http.js'
import api from '@/api'

// 是否显示左侧菜单
export const setShowLeftMenu = function({ commit }, showLeftMenu) {
  commit(types.SET_SHOWLEFTMENU, showLeftMenu)
}

// 历史记录
export const setSearchHistory = function({ commit, state }, keyWord) {
	const { searchHistory } = state
	if (searchHistory.findIndex(item => item.searchWord == keyWord) == -1) {
		searchHistory.push({
			searchWord: keyWord
		})
	}
  commit(types.SET_SEARCHHISTORY, searchHistory)
}

// 开始播放前准备
export const startSong = function({ commit, state }, rawSong) {
	// 浅拷贝一份 改变引用
  // 1.不污染元数据
  // 2.单曲循环为了触发watch
  const song = Object.assign({}, rawSong)

  // 歌曲图片处理
  if (!song.img) {
    if (song.albumId) {
    	get(api.getAlbum, { id: song.albumId }).then(async data => {
    		console.log(data)
//  		song.img = await getSongImg(song.id, song.albumId)
	    })
    }
  }

  commit('SET_CURRENTSONG', song) // 保存当前播放音乐
	commit('SET_PLAYING', true) // 保存播放状态

	// 历史记录处理
  const { playHistory } = state
  const playHistoryCopy = playHistory.slice()
  const findedIndex = playHistoryCopy.findIndex(({ id }) => song.id === id)
  if (findedIndex !== -1) { // 如果历史记录列表已存在，则删除旧那一项, 插入到最前面
    playHistoryCopy.splice(findedIndex, 1)
  }
  playHistoryCopy.unshift(song)
  commit('SET_PLAYHISTORY', playHistoryCopy)
}
