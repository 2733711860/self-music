import * as types from './mutation-types'

const mutations = {
  // 是否显示左侧菜单
  [types.SET_SHOWLEFTMENU](state, showLeftMenu) {
    state.showLeftMenu = showLeftMenu
  },

  // 播放列表
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist
  },

  // 当前播放音乐
  [types.SET_CURRENTSONG](state, song) {
    state.currentSong = song
  },

  // 播放状态
  [types.SET_PLAYING](state, playing) {
    state.playing = playing
  },

  // 历史记录
  [types.SET_PLAYHISTORY](state, playHistory) {
    state.playHistory = playHistory
  },

  // 当前播放时长
  [types.SET_CURRENTTIME](state, currentTime) {
    state.currentTime = currentTime
  },

  // 播放模式
  [types.SET_PLAYMODE](state, playMode) {
    state.playMode = playMode
  },

  // 是否显示播放页面
  [types.SET_SHOWPLAYER](state, showPlayer) {
    state.showPlayer = showPlayer
  },

  // audio元素
  [types.SET_AUDIO](state, audio) {
    state.audio = audio
  },

  // 是否显示播放CD
  [types.SET_SHOWCDPLAYER](state, showCdPlayer) {
    state.showCdPlayer = showCdPlayer
  },

  // 搜索历史
  [types.SET_SEARCHHISTORY](state, searchHistory) {
    state.searchHistory = searchHistory
  },

  // 是否显示搜索页面
  [types.SET_SHOWSEARCH](state, showSearch) {
    state.showSearch = showSearch
  },
}

export default mutations
