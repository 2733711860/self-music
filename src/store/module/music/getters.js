// 是否显示左侧菜单
export const showLeftMenu = state => state.showLeftMenu

// 播放列表
export const playlist = state => state.playlist

// 播放状态
export const playing = state => state.playing

// 历史记录
export const playHistory = state => state.playHistory

// 当前播放音乐
export const currentSong = state => state.currentSong

// 当前播放时长
export const currentTime = state => state.currentTime

// 播放模式
export const playMode = state => state.playMode

// 是否显示播放页面
export const showPlayer = state => state.showPlayer

// audio元素
export const audioEle = state => state.audio

// 是否显示播放CD
export const showCdPlayer = state => state.showCdPlayer

// 搜索历史
export const searchHistory = state => state.searchHistory

// 是否显示搜索页面
export const showSearch = state => state.showSearch

// 获取当前播放音乐的序号
export const currentIndex = (state) => {
  const { currentSong, playlist } = state
  return playlist.findIndex(({ id }) => id === currentSong.id)
}

// 获取下一首音乐
export const nextSong = (state, getters) => {
  const { playlist, playMode } = state
  if (playMode == 'sequence') { // 顺序模式
  	let nextIndex = getters.currentIndex + 1
  	if (nextIndex > playlist.length - 1) {
      nextIndex = 0
    }
  	return playlist[nextIndex]
  } else if (playMode == 'loop') { // 单曲循环
  	return playlist[getters.currentIndex]
  } else if (playMode == 'random') { // 随机
  	let nextIndex = getRandomIndex(playlist, getters.currentIndex)
  	return playlist[nextIndex]
  }
}

// 获取上一首音乐
export const prevSong = (state, getters) => {
  const { playlist, playMode } = state
  if (playMode == 'sequence') { // 顺序模式
  	let prevIndex = getters.currentIndex - 1
  	if (prevIndex < 0) {
      prevIndex = playlist.length - 1
    }
  	return playlist[prevIndex]
  } else if (playMode == 'loop') { // 单曲循环
  	return playlist[getters.currentIndex]
  } else if (playMode == 'random') { // 随机
  	let nextIndex = getRandomIndex(playlist, getters.currentIndex)
  	return playlist[nextIndex]
  }
}

function getRandomIndex(playlist, currentIndex) {
  // 防止无限循环
  if (playlist.length === 1) {
    return currentIndex
  }
  let index = Math.round(Math.random() * (playlist.length - 1))
  if (index === currentIndex) {
    index = getRandomIndex(playlist, currentIndex)
  }
  return index
}