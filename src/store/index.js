import Vue from 'vue'
import Vuex from 'vuex'
import music from './module/music'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'
console.log(music)

const dataState = createPersistedState({ // 需要放入缓存的
//	storage: window.sessionStorage,
	reducer(state) {
    return {
	    playHistory: state.music.playHistory,
	    searchHistory: state.music.searchHistory
    }
  }
})

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    music: music
  },
  plugins: debug ? [createLogger(), dataState] : [dataState]
})
