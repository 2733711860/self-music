export function createSong(song) {
  const { id, name, img, artists, duration, albumId, albumName,mvId, ...rest } = song
  return {
    id,
    name,
    img,
    artists,
    duration,
    albumName,
    url: `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`,
    artistsText: genArtistisText(artists),
    durationSecond: duration / 1000,
    // 专辑 如果需要额外请求封面的话必须加上
    albumId,
    // mv的id 如果有的话 会在songTable组件中加上mv链接。
    mvId,
    ...rest
  }
}

export function genArtistisText(artists) {
  return (artists || []).map(({ name }) => name).join('/')
}

// 时间格式化
export function format(value) {
  let minute = Math.floor(value / 60)
  let second = Math.floor(value % 60)
  return `${addZero(minute)}:${addZero(second)}`
}
// 补0函数
export function addZero(s) {
  return s < 10 ? '0' + s : s
}