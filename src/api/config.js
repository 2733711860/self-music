export default {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': null
  },
  timeout: 50000,
  emulateJSON: true,

  withCredentials: true,
  // Access-Control-Allow-Credentials: true
  // withCredentials: true,

  responseType: 'json', // default

  // 将upload事件注释掉，防止跨域状态下发起option请求
  // onUploadProgress: function(progressEvent) {
  // Do whatever you want with the native progress event
  // },
  // onDownloadProgress: function(progressEvent) {
  // 	// Do whatever you want with the native progress event
  // },
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  },
  maxRedirects: 5
  // default
}
