import Vue from 'vue'
//import CryptoJS from 'crypto-js'

/*
 * 回到顶部
 *
 * */
export function scrollToTop(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

/*
 * 回到底部
 *
 * */
export function scrollToBottom(){
	document.body.scrollTop = document.documentElement.scrollHeight;
}

//图片base64转码
export function getBase64(img){
    function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
        var canvas = document.createElement("canvas");
        canvas.width = width ? width : img.width;
        canvas.height = height ? height : img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }

    var image = new Image();
    image.crossOrigin = '';//anonymous
    image.src = img;
    var deferred=$.Deferred();
    if(img){
        image.onload =function (){
            deferred.resolve(getBase64Image(image));//将base64传给done上传处理
        }
        return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
    }
}

//加密
//export function encrypt(word, keyStr){
//  keyStr = keyStr ? keyStr : 'cpic1234cpic5678';
//  var key  = CryptoJS.enc.Utf8.parse(keyStr);
//  var srcs = CryptoJS.enc.Utf8.parse(word);
//  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
//  return encrypted.toString();
//}
//
////解密
//export function decrypt(word, keyStr){
//  keyStr = keyStr ? keyStr : 'cpic1234cpic5678';
//  var key  = CryptoJS.enc.Utf8.parse(keyStr);
//  var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
//  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
//}

//返回浏览器版本
export function getExplorerInfo(){
    let explorer = window.navigator.userAgent.toLowerCase();
    // ie
    if (explorer.indexOf("msie") >= 0) {
        let ver = explorer.match(/msie ([\d.]+)/)[1];
        return {
            type: "IE",
            version: ver
        };
    }
    // firefox
    else if (explorer.indexOf("firefox") >= 0) {
        let ver = explorer.match(/firefox\/([\d.]+)/)[1];
        return {
            type: "Firefox",
            version: ver
        };
    }
    // Chrome
    else if (explorer.indexOf("chrome") >= 0) {
        let ver = explorer.match(/chrome\/([\d.]+)/)[1];
        return {
            type: "Chrome",
            version: ver
        };
    }
    // Opera
    else if (explorer.indexOf("opera") >= 0) {
        let ver = explorer.match(/opera.([\d.]+)/)[1];
        return {
            type: "Opera",
            version: ver
        };
    }
    // Safari
    else if (explorer.indexOf("Safari") >= 0) {
        let ver = explorer.match(/version\/([\d.]+)/)[1];
        return {
            type: "Safari",
            version: ver
        };
    }
}

//判断是否移动设备
export function isMobile() {
    if (typeof this._isMobile === 'boolean') {
        return this._isMobile;
    }
    let screenWidth = this.getScreenWidth();
    let fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport ||
        rendererModel.runningExperiments.fixviewport;
    let fixViewPortsExperimentRunning = fixViewPortsExperiment &&
        (fixViewPortsExperiment.toLowerCase() === "new");
    if (!fixViewPortsExperiment) {
        if (!this.isAppleMobileDevice()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
    }
    let isMobileScreenSize = screenWidth < 600;
    let isMobileUserAgent = false;
    this._isMobile = isMobileScreenSize && this.isTouchScreen();
    return this._isMobile;
}

//判断是否移动设备访问
export function isMobileUserAgent() {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}

//判断是否苹果移动设备访问
export function isAppleMobileDevice() {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

//判断是否安卓移动设备访问
export function isAndroidMobileDevice() {
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}

//获取页面高度
export function getPageHeight() {
    let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ?
        a :
        g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

//获取页面scrollLeft
export function getPageScrollLeft() {
    return document.documentElement.scrollLeft || document.body.scrollLeft;
}

//获取页面宽度
export function getPageWidth() {
    let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ?
        a :
        g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

//获取页面scrollTop
export function getPageScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

//获取页面可视高度
export function getPageViewHeight() {
    let d = document,
        a = d.compatMode == "BackCompat" ?
        d.body :
        d.documentElement;
    return a.clientHeight;
}

//localStorage本地储存的方法
export const storage = {
	set(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	get(key){
		return JSON.parse(localStorage.getItem(key));
	},
	remove(key){
		localStorage.removeItem(key);
	},
	clear(){
		localStorage.clear();
	}
}

//cookie存储
export const cookie = {
	setCookie(name, value, expiredays){
		var exdate = new Date();
    exdate.setDate(exdate.getDate() + (expiredays || 30));
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exdate.toGMTString();
	},
	getCookie(name){
		var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
	},
	delCookie(name){
		this.setCookie(name, "", -1);
	}
}

/**
	* 获取URL参数
	* @param url 地址
	* @returns 例：getUrlPrmt("http://www.baidu.com?id=1&nam=张三&uid=12345654321&type=1,2,3")，结果{id: "1", nam: "张三", uid: "12345654321", type: "1,2,3"}
*/
export function getUrlPrmt(url) {
	url = url ? url : window.location.href;
	let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
	for (var i = 0, _len = _arrS.length; i < _len; i++) {
		let pos = _arrS[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		let name = _arrS[i].substring(0, pos), value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
		_rs[name] = value;
	}
	return _rs;
}

/***********************************************表单验证****************************************************/

/*
 *验证只能为数字
 *
 */
export function checkNumber(obj){
	var reg = /^[0-9]+$/;
	if(obj!=""&&!reg.test(obj)){
		alert('只能输入数字！');
		return false;
	}
}

/*
 * 只能是英文字母和数字
 */
export function checkZmOrNum(zmnum){
	var zmnumReg=/^[0-9a-zA-Z]*$/;
	if(zmnum!=""&&!zmnumReg.test(zmnum)){
		alert("只能输入是字母或者数字,请重新输入");
		return false;
	}
}

/**
 *  将小数字符串精确到指定位数
 * @param num string 字符串类型的小数
 * @param index int 精确到小数点第几位
 */
export function roundFloat (num, index) {
  return Number(num).toFixed(index)
}

/*
 * 返回浮点数
 * 例子：toThousands('123,456')   结果：123456
 */
export function numberFormat(num){
	var x = num.split(',');
  return parseFloat(x.join(""));
}

/**
	* 检测密码强度
	* @param str 字符串
	* @returns 1：密码弱 2：密码中等 3：密码强 4：密码很强
*/
export function checkPwd(str) {
	var nowLv = 0;
	if (str.length < 6) {
		return nowLv
	}
	;
	if (/[0-9]/.test(str)) {
		nowLv++
	}
	;
	if (/[a-z]/.test(str)) {
		nowLv++
	}
	;
	if (/[A-Z]/.test(str)) {
		nowLv++
	}
	;
	if (/[\.|-|_]/.test(str)) {
		nowLv++
	};
	return nowLv;
}

//千分位显示，常用于价格（三位一个逗号）
//例子：toThousands('123456')   结果：123,456
export function toThousands(num) {
    return parseFloat(num).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
}

//电子邮件校验
export function checkEmail(str) {
    if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g.test(str)){
        return false
    }
    return true
}
// 电子邮箱校验
export function isEmail (mail) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  if (filter.test(mail)) {
    return true
  } else {
    return false
  }
}

/**
 * 校验正整数
 * @param num
 * @returns {boolean}
 */
export function checkPositiveInteger(num) {
    if (!( /^[1-9]\d*$/.test(num))) {
        return false;
    } else {
        return true;
    }
}

/**
 * 校验(手机号,url链接等），正则表达式
 * @param num
 * @returns {boolean}
 *
 * 1、url链接：/^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/
 * 2、手机号：
 * 		（1）中国手机号(宽松), 只要是13,14,15,16,17,18,19开头即可：/^((\+|00)86)?1[3-9]\d{9}$/
 * 		（2）中国手机号(严谨), 根据工信部2019年最新公布的手机号段：/^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/
 * 3、email地址：/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
 * 4、国内座机号码，如: 0341-86091234：/\d{3}-\d{8}|\d{4}-\d{7}/
 * 5、身份证号(18或15位数字)：/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
 * 6、护照（包含香港、澳门）：/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/
 * 7、帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合：/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
 * 8、纯数字：/^\d{1,}$/
 * 9、是否qq号格式正确：/^[1-9][0-9]{4,10}$/
 * 10、是否由数字和字母组成：/^[A-Za-z0-9]+$/
 * 11、纯英文字母：/^[a-zA-Z]+$/
 * 12、纯中文汉字：/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
 * 13、ip-v4：/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
 * 14、微信号：/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/
 * 15、中国邮政编码：/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
 * 16、不能包含字母：/^[^A-Za-z]*$/
 */
export function checkMobile(num) {
  if (!( /^1[345789]\d{9}$/.test(num))) {
    return false;
  } else {
    return true;
  }
}

/*************************************************时间相关操作***********************************************/
//日期加上天数得到新的日期
//dateTemp 需要参加计算的日期，days要添加的天数，返回新的日期，日期格式：YYYY-MM-DD
export function getNewDay(dateTemp, days) {
  var dateTemp = dateTemp.split("-");
  var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式
  var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
  var rDate = new Date(millSeconds);
  var year = rDate.getFullYear();
  var month = rDate.getMonth() + 1;
  if (month < 10) month = "0" + month;
  var date = rDate.getDate();
  if (date < 10) date = "0" + date;
  return (year + "-" + month + "-" + date);
}

/*
 *比较两个日期的大小
 * 调用：var current_time = "2007-2-2 7:30";
 * 			 var stop_time = "2007-1-31 8:30";
 * 			 compareDate(current_time,stop_time)
 */
export function compareDate(d1,d2) {
	return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
}

//格式化时间
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/**
* 字符串转换为日期格式
* @param value 字符串数据(例如:2013-02-27)
* @return 日期对象
*/
export function strToDate(strDate) {
	var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
	function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
	return date;
}

/**
 * 年月日 和'-' '/' 的相互转化
 */
export function exeTime(str,x){
	if(str!=null&&str!=""){
		if(str.indexOf(x)!=-1){
		var dateArr=str.split(x);
		var year=dateArr[0];
		var month=dateArr[1];
		var date=dateArr[2];
		return (year+"年"+month+"月"+date+"日");
		}else if(str.indexOf('年')!=-1){
			var dateArr=str.split("年");
			var year=dateArr[0];
			var dateArr2=dateArr[1].split("月");
			var month=dateArr2[0];
			var date=new Date(year,month,0).getDate();
			return (year+x+month+x+date);
		}

	}
}

// 时间戳转日期型
//time:时间戳
//fmt:日期格式
export function dateFormatFun(time,fmtt){
	let fmt = fmtt ? fmtt : 1;
  if (time > 0) {
    switch (fmt) {
      case 1:
        return formatDate(new Date(time), 'yyyy-MM-dd');
      case 2:
        return formatDate(new Date(time), 'yyyy-MM-dd hh:mm');
      case 3:
        return formatDate(new Date(time), 'MM月dd日 hh:mm');
      case 4:
        return formatDate(new Date(time), 'yyyy-MM-dd hh:mm:ss');
      case 5:
        return formatDate(new Date(time), 'hh:mm');
      case 6:
        return formatDate(new Date(time), 'hh:mm:ss');
      default:
        return formatDate(new Date(time), 'yyyy-MM-dd');
    }
  }
}

//获得两个日期之间相差的天数
export function getDays(date1, date2) {
	var date1Str = date1.split("-");//将日期字符串分隔为数组,数组元素分别为年.月.日  
	//根据年 . 月 . 日的值创建Date对象  
	var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
	var date2Str = date2.split("-");
	var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
	var t1 = date1Obj.getTime();
	var t2 = date2Obj.getTime();
	var dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数  
	var minusDays = Math.floor(((t2 - t1) / dateTime));//计算出两个日期的天数差  
	var days = Math.abs(minusDays);//取绝对值  
	return days;
}

/**
* 倒计时（默认开始时间为当前时间）
* @param endTime 结束时间
* @returns 例：剩余时间1天 16小时 45 分钟41 秒
*/
export function getEndTime(endTime, startDate){
	if (!startDate) {
		startDate=new Date(); //开始时间，当前时间
	}
	var endDate=new Date(endTime); //结束时间，需传入时间参数
	var t=endDate.getTime()-startDate.getTime(); //时间差的毫秒数
	var d=0,h=0,m=0,s=0;
	if(t>=0){
		d=Math.floor(t/1000/3600/24);
		h=Math.floor(t/1000/60/60%24);
		m=Math.floor(t/1000/60%60);
		s=Math.floor(t/1000%60);
		return d+"天"+h+"小时 "+m+"分钟"+s+"秒";
	} else {
		return '时间已到';
	}
}

export function getEndTime2(endTime, startDate){
	if (!startDate) {
		startDate=new Date(); //开始时间，当前时间
	}
	var endDate=new Date(endTime); //结束时间，需传入时间参数
	var t=endDate.getTime()-startDate.getTime(); //时间差的毫秒数
	var days=0,hours=0,minutes=0,seconds=0;
	if(t>=0){
		days=Math.floor(t/1000/3600/24);
		hours=Math.floor(t/1000/60/60%24) < 10 ? ('0' + Math.floor(t/1000/60/60%24)) : Math.floor(t/1000/60/60%24);
		minutes=Math.floor(t/1000/60%60) < 10 ? ('0' + Math.floor(t/1000/60%60)) : Math.floor(t/1000/60%60);
		seconds=Math.floor(t/1000%60) < 10 ? ('0' + Math.floor(t/1000%60)) : Math.floor(t/1000%60);
		return {
			days, hours, minutes, seconds
		};
	}
}

/**********************************************身份证相关操作**********************************************/
/*
 *根据身份证号码获取出生日期
 *
 */
export function getBirth(idCard){
	var birthday = "";
	if(idCard != null && idCard != ""){
	    if(idCard.length == 15){
	        birthday = "19"+idCard.slice(6,12);
	    } else if(idCard.length == 18){
	        birthday = idCard.slice(6,14);
	    }
	    birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");
	    //通过正则表达式来指定输出格式为:1990-01-01
	}
	return birthday;
}

/*
 *根据身份证号码获取性别
 * 性别是根据身份证的倒数第二位来判断的，奇数为男生，偶数为女生
 */
export function getSex(idCard){
	var sexStr = '';
	if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
	    sexStr = '男';
	}
	else {
	    sexStr = '女';
	}
	return sexStr;
}

/*
 *根据身份证号获取年龄
 * 15位身份证号码：第7、8位为出生年份(两位数)，第9、10位为出生月份，第11、12位代表出生日;
 * 18位身份证号码：第7、8、9、10位为出生年份(四位数)，第11、第12位为出生月份，第13、14位代表出生日期，第17位代表性别，奇数为男，偶数为女。
 *
 */
export function getAge(identityCard){
	var len = (identityCard + "").length;
	var strBirthday = "";
	if (len == 18){//处理18位的身份证号码从号码中得到生日和性别代码
	  strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
	}
	if (len == 15) {
    var birthdayValue='';
    birthdayValue = identityCard.charAt(6)+identityCard.charAt(7);
    if(parseInt(birthdayValue)<10){
        strBirthday = "20" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }else{
        strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }
	}
	//时间字符串里，必须是“/”
	var birthDate = new Date(strBirthday);
	var nowDateTime = new Date();
	var age = nowDateTime.getFullYear() - birthDate.getFullYear();
	//再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
	if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
	    age--;
	}
	return age;
}

/**
 * 校验身份证
 * @param num
 * @returns {boolean}
 */
export function checkIdCard(num) {
    var idcard = num;
    var regex1 = /^[1-9][0-7]\d{4}((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229))\d{3}(\d|X|x)?$/;
    switch (idcard.length) {
        case  11:    //港澳居民通行证
            var regex3=/^(H|M)\d{10}$/;
            if(regex3.test(idcard))
                return true;
            else
            return false;
            break;
        case 15:
            if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
                var regex2 = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
            } else {
                var regex2 = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
            }

            if(regex2.test(idcard))
                return true;
            else
            return false;
            break;
        case 18:
            if(regex1.test(idcard)){
                var S = (parseInt(idcard.charAt(0)) + parseInt(idcard.charAt(10))) * 7 +
                    (parseInt(idcard.charAt(1)) + parseInt(idcard.charAt(11))) * 9 +
                    (parseInt(idcard.charAt(2)) + parseInt(idcard.charAt(12))) * 10 +
                    (parseInt(idcard.charAt(3)) + parseInt(idcard.charAt(13))) * 5 +
                    (parseInt(idcard.charAt(4)) + parseInt(idcard.charAt(14))) * 8 +
                    (parseInt(idcard.charAt(5)) + parseInt(idcard.charAt(15))) * 4 +
                    (parseInt(idcard.charAt(6)) + parseInt(idcard.charAt(16))) * 2 +
                    parseInt(idcard.charAt(7)) * 1 +
                    parseInt(idcard.charAt(8)) * 6 +
                    parseInt(idcard.charAt(9)) * 3;
                var Y = S % 11;
                var M = "F";
                var JYM = "10X98765432";
                M = JYM.substr(Y, 1);
                /*判断校验位*/
                if (M == idcard.charAt(17).toUpperCase()) {
                    //alert(Errors[0]+"18");
                    return true;
                } else {
                    return false;
                }
            }else{
                return false;
            }
            break;
        default:
            return false;
    }
}

/**************************************************字符串相关*********************************************/
/**
	* 字符串替换
	* @param str 字符串
	* @param aFindText 要替换的字符
	* @param aRepText 替换成什么
*/
export function replaceAll(str,aFindText,aRepText){
	raRegExp = new RegExp(aFindText,"g") ;
	return str.replace(raRegExp,aRepText);
}

/**
* 查找某个字符或字符串在另一个字符串中出现的次数
* @param str 字符串
* @param strSplit 要查找的字符或字符串
* @returns {Number} 返回出现的次数
* 例：countStr("klsdjflds","s") 返回2
*/
export function countStr(str,strSplit){
	return str.split(strSplit).length-1
}

/**
* 去除字符串空格
* @param str 要处理的字符串
* @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
*/
export function strTrim(str,type){
	switch (type){
		case 1:return str.replace(/\s+/g,"");
		case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
		case 3:return str.replace(/(^\s*)/g, "");
		case 4:return str.replace(/(\s*$)/g, "");
		default:return str;
	}
}

/**
* 字母大小写切换
* @param str 要处理的字符串
* @param type 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
*/
export function strChangeCase(str,type){
	switch (type) {
		case 1:
			return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
				return v1.toUpperCase() + v2.toLowerCase();
			});
		case 2:
			return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
				return v1.toLowerCase() + v2.toUpperCase();
			});
		case 3:
			return ToggleCase(str);
		case 4:
			return str.toUpperCase();
		case 5:
			return str.toLowerCase();
		default:
			return str;
	}
}
function ToggleCase(str) {
	var itemText = ""
	str.split("").forEach(
		function (item) {
			if (/^([a-z]+)/.test(item)) {
			itemText += item.toUpperCase();
			}
			else if (/^([A-Z]+)/.test(item)) {
			itemText += item.toLowerCase();
			}
			else{
			itemText += item;
			}
		}
	);
	return itemText;
}

/*************************************************数组相关***************************************************/
/**
* 删除数组中指定元素
* @param arr 数组
* @param val 删除的元素
*/
export function removeByValue (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      arr.splice(i, 1)
      break
    }
  }
}

/**
* 数组去重
* 用的是Array的from方法
* @param arr 数组
* @returns 去重后的数组
*/
export function removeRepeatArray(arr){
	return Array.from(new Set(arr))
}

//数组去重方法2
export function removeRepeatArray2(arr){
	for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
	            //如果第一个等于第二个，splice方法删除第二个
	            arr.splice(j,1);
	            j--;
            }
        }
    }
    return arr;
}

/**
* 将数组乱序输出
* @param arr 数组
* @returns 打乱后的数组
*/
export function upsetArr(arr){
	return arr.sort(function(){ return Math.random() - 0.5});
}

/**
* 数组filter（搜索功能）
* @param arr 数组
* @param query 关键字
*/
export function filterItems(arr,query){
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
	})
}

/**
	* 获取数组的最大值，最小值，只针对数字类型的数组
	* @param arr 数组
	* @param type 0：最小值，1：最大值
	* @returns
*/
export function compareArr(arr,type){
	if(type==1){
		return Math.max.apply(null,arr);
	}else{
		return Math.min.apply(null,arr);
	}
}

/**
* 得到数组的和，只针对数字类型数组
* @param arr 数组
* @returns sumText 和
*/
export function sumArr(arr){
	var sumText=0;
	for(var i=0,len=arr.length;i<len;i++){
		sumText+=arr[i];
	}
	return sumText;
}

/**
* 返回某个元素在数组中出现的次数
* @param arr 数组
* @param ele 要查找的元素
* @returns {Number} 出现的次数
*/
export function getEleCount(arr, ele) {
	var num = 0;
	for (var i = 0, len = arr.length; i < len; i++) {
		if (ele == arr[i]) {
			num++;
		}
	}
	return num;
}

/**
* 简单数组排序，针对数字数组
* @param type 1：降序，0：升序
*/
export function sortArr(arr,type){
	if(type==1){ //降序
		arr.sort(function(a,b){
			return b-a ;
		}) ;
	}else{
		arr.sort(function(a,b){
			return a-b ;
		}) ;
	}
	return arr ;
}

/**
* 简单数组排序(根据数组中的某个元素)
* @param type 1：降序，0：升序
* @param count 数组中的某个元素
*/
export function sortArr1Item(arr,type,count){
	if(type==1){
		//降序
		arr.sort(function (n1, n2) {
			return n2.count - n1.count
		});
	}else{
		//升序
		arr=arr.reverse();
	}
	return arr ;
}

/*
* 数组的差集  交集  补集  并集
* @param arr1  arr2 数组
* @param type 1-差集   2-交集   3-补集  4-并集
*/
export function handleArr(arr1,arr2,type){
	switch (type){
		case 1:return arr1.filter(function(v){ return arr2.indexOf(v) == -1 });
		case 2:return arr1.filter(function(v){ return arr2.indexOf(v) > -1 });
		case 3:return arr1.filter(function(v){ return !(arr2.indexOf(v) > -1) }).concat(arr2.filter(function(v){ return !(arr1.indexOf(v) > -1)}));
		case 4:return arr1.concat(arr2.filter(function(v){ return !(arr1.indexOf(v) > -1)}));
		default:return '';
	}
}

/**
* 数组中出现次数最多的元素
* @param arr 数组
*/
export function maxCountElement(arr) {  
   var obj={};
   for(var i=0;i<arr.length;i++){  
       var key=arr[i];  
       if(obj[key]){
           obj[key]++;  
       }else{  
           obj[key]=1;
       }  
   }  
   var maxCount=0;
   var maxElement=arr[0];
   var eq = [];
   for(var key in obj){  
       if(maxCount < obj[key]){  
           maxCount=obj[key]; 
           maxElement=key;  
           eq.length=0;
       }else if(maxCount === obj[key]){  
           eq.push(key);
       }
   }  
   if(eq.length > 0){
       for(var j=0;j<eq.length;j++){
   	       maxElement+='，'+eq[j];
   	   }
   }
   return "该数组中出现次数最多的元素:"+maxElement+"-----出现了:"+maxCount+"次";  
}

  /**
   * 将数值四舍五入后格式化.
   * @param num 数值(Number或者String)
   * @param cent 要保留的小数位(Number)
   * @param isThousand 是否需要千分位 0:不需要,1:需要(数值类型);
   * @return 格式的字符串,如'1,234,567.45'
   * @type String
   */
export function formatNumber(num,cent,isThousand) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num)) num = "0";
	if(isNaN(cent)) cent = 0;
	cent = parseInt(cent);
	cent = Math.abs(cent);
	if(typeof isThousand == 'boolean') isThousand = isThousand?"1":"0";
	if(isNaN(isThousand))isThousand = 0;
	isThousand = parseInt(isThousand);
	if(isThousand < 0)isThousand = 0;
	if(isThousand >=1)isThousand = 1;
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*Math.pow(10,cent)+0.50000000001);
	var cents = num%Math.pow(10,cent);
	num = Math.floor(num/Math.pow(10,cent)).toString();
	cents = cents.toString();
	while(cents.length<cent) cents = "0" + cents;
	if(isThousand == 0) return (cent==0)?(((sign)?'':'-') + num):(((sign)?'':'-') + num + '.' + cents);
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	return (cent==0)?(((sign)?'':'-') + num):(((sign)?'':'-') + num + '.' + cents);
}

//获取url参数
export function getUrlKey(name) {
	let resut = (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')
	resut = resut.replace(/ /g, '+')
  return decodeURIComponent(resut) || null
}

export function breadthQuery(tree, id) { // 递归遍历树
  var stark = [];
  stark = stark.concat(tree);
  while(stark.length) {
    var temp = stark.shift();
    if(temp.children) {
      stark = stark.concat(temp.children);
    }
    if(temp.dirId == id) {
      return temp;
    }
  }
}

function addWan(integer, number, mutiple, decimalDigit) {
    var me = this;
    var digit = getDigit(integer);
    if (digit > 3) {
        var remainder = digit % 8;
            if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’
            remainder = 4;
        }
        return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
    } else {
        return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
    }
}
function getDigit(integer) {
    var digit = -1;
    while (integer >= 1) {
        digit++;
        integer = integer / 10;
    }
    return digit;
}
export function addChineseUnit(number, decimalDigit) { // 数字添加单位
    var me = this;
    decimalDigit = decimalDigit == null ? 2 : decimalDigit;
    var integer = Math.floor(number);
    var digit = getDigit(integer);;
    // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
    var unit = [];
    if (digit > 3) {
        var multiple = Math.floor(digit / 8);
        if (multiple >= 1) {
            var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
            unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
            for (var i = 0; i < multiple; i++) {
                unit.push('亿');
            }
            return unit.join('');
        } else {
            return addWan(integer, number, 0, decimalDigit);
        }
    } else {
        return number;
    }
}
