// 格式化时间
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

// 字符串转为日期格式
export function toDate(strDate) {
  var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
  function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')')
  return date
}

/*
 * 获取n年前和m年后的日期
 * 10年前，n=-10
 * 10年后，n=10
 * */
export function getNyear(n, ndate) {
	var pre = ndate ? ndate : new Date()
	pre.setFullYear(pre.getFullYear() + n)
	return pre
}

/*
 * 获取n天前和m天后的日期
 * 7天前，n=-7
 * 7天后，n=7
 * */
export function getNday(n, ndate) {
	var pre = ndate ? ndate : new Date()
	pre.setDate(pre.getDate() + n)
	return pre
}
