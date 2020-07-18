const state = {
  showLeftMenu: false, // 是否显示左侧菜单
  playlist: [], // 播放列表
  currentSong: {}, // 当前播放音乐
  playing: false, // 播放状态
  playHistory: [], // 历史记录
  currentTime: 0, // 当前播放时长
  playMode: 'sequence', // 播放模式：sequence：顺序；loop：单曲循环；random：随机
  showPlayer: false, // 是否显示播放页面
  showCdPlayer: false, // 是否显示播放CD
  audio: null,
  searchHistory: [], // 搜索历史
  showSearch: false, // 是否显示搜索页面
}

export default state
