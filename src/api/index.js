/**
 * Created by chenyb on 22/10/18.
 * API命名配置列表
 * 命名规则：驼峰式命名方式，动词放前面，名词放后面，
 * 如:addFeatures
 * API命名变量不要太过长
 */
import config from '../config'
let baseUrl
switch (process.env.NODE_ENV) {
  // 生产环境
  case 'production':
    baseUrl = config.baseUrl.pro
    break
  // 预生产环境
  case 'testing':
    baseUrl = config.baseUrl.tes
    break
  default:
    // 开发环境或测试环境
    baseUrl = config.baseUrl.dev
    break
}
export { baseUrl }
export default {
  // **系统管理**开始
  getBanner: baseUrl + '/banner', // 轮播图
  getPersonalized: baseUrl + '/personalized', // 推荐歌单
  getNewSongs: baseUrl + '/personalized/newsong', // 推荐新音乐
  getTopSong: baseUrl + '/top/song', // 新音乐
  getPlaylists: baseUrl + '/top/playlist', // 获取歌单
  getTopPlaylists: baseUrl + '/top/playlist/highquality', // 精品歌单
  getSimiPlaylists: baseUrl + '/simi/playlist', // 获取相似歌单
  getCatlist: baseUrl + '/playlist/catlist', // 获取歌单分类
  getListDetail: baseUrl + '/playlist/detail', // 获取歌单详情
  getSongDetail: baseUrl + '/song/detail', // 获取音乐详情
  getLyric: baseUrl + '/lyric', // 获取歌词
  getTopList: baseUrl + '/toplist', // 获取所有榜单
  getTopListDetail: baseUrl + '/toplist/detail', // 获取所有榜单内容摘要
  getTop_list: baseUrl + '/top/list', // 获取热门歌曲
  search: baseUrl + '/search', // 搜索
  searchHot: baseUrl + '/search/hot/detail', // 热搜列表（简略）
  getAlbum: baseUrl + '/album', // 获取专辑内容
  getSinger: baseUrl + '/top/artists', // 热门歌手
  getSingerDesc: baseUrl + '/artist/desc', // 歌手描述
  getSingerSong: baseUrl + '/artists', // 歌手单曲
  getSingerMv: baseUrl + '/artist/mv', // 歌手MV
  getSingerAlbum: baseUrl + '/artist/album', // 歌手专辑

  likelist: baseUrl + '/likelist', // 喜欢音乐列表
  like: baseUrl + '/like', // 喜欢音乐
  login: baseUrl + '/login/cellphone', // 手机登陆
  mailLogin: baseUrl + '/login', // 邮箱登陆
  loginState: baseUrl + '/login/status', // 登录状态
  getUserDetail: baseUrl + '/user/detail', // 用户详情
  getUserSubcount: baseUrl + '/user/subcount', // 用户信息 , 歌单，收藏，mv, dj 数量
  getUserPlaylist: baseUrl + '/user/playlist', // 用户歌单
}
