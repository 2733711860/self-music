export default {
	nowYear: new Date().getFullYear(),
	nowMonth: new Date().getMonth() + 1,
	startDate: '',
	endDate: '',
	Fnian() { // 获取年
		return new Promise((resolve, resject) => {
			var date = new Date()
			var nian = date.getFullYear() // 获取当前年份
			let years = []
			let yearBe = nian- (nian - Number(this.startDate.split('-')[0])) // 开始年份
			let yearAf = nian + Number(this.endDate.split('-')[0]) - nian + 1 // 结束年份
			for(var i=yearBe; i<yearAf; i++) {
				let year = {
		      text: i,
		      value: i
		    }
				years.push(year)
			}
			resolve(years)
		})
	},

	Fmonth() { // 获取月
		return new Promise((resolve, reject) => {
			let months = []
			for(var i=1; i<13; i++) {
				if (i<10) {
					i = '0' + i
				}
				let month = {
		      text: i,
		      value: i
		    }
				months.push(month)
			}
			resolve(months)
		})
	},

	Fday() { // 获取日
		return new Promise((resolve, reject) => {
			let nowMonth = Number(this.nowMonth)
			let dayz = 31 // 设置每月31天
			if (nowMonth == '4' || nowMonth == '6' || nowMonth == '9' || nowMonth == '11') { // 每月30天
				dayz = 30
			} else if (nowMonth == '2') { // 二月
				if ((this.nowYear%4==0 && this.nowYear%100!=0) || this.nowYear%400==0) { // 闰年
					dayz = 29
				} else {
					dayz = 28
				}
			}
			let days = []
			for(var i=1; i<dayz+1; i++) {
				if (i<10) {
					i = '0' + i
				}
				let day = {
		      text: i,
		      value: i
		    }
				days.push(day)
			}
			resolve(days)
		})
	},

	Fhour() { // 获取时
		return new Promise((resolve, reject) => {
			let hours = []
			for(var i=1; i<25; i++) {
				if (i<10) {
					i = '0' + i
				}
				let hour = {
		      text: i,
		      value: i
		    }
				hours.push(hour)
			}
			resolve(hours)
		})
	},

	Fminute() { // 获取分
		return new Promise((resolve, reject) => {
			let minutes = []
			for(var i=1; i<61; i++) {
				if (i<10) {
					i = '0' + i
				}
				let minut = {
		      text: i,
		      value: i
		    }
				minutes.push(minut)
			}
			resolve(minutes)
		})
	},

	Fsecond() { // 获取分
		return new Promise((resolve, reject) => {
			let seconds = []
			for(var i=1; i<61; i++) {
				if (i<10) {
					i = '0' + i
				}
				let second = {
		      text: i,
		      value: i
		    }
				seconds.push(second)
			}
			resolve(seconds)
		})
	}
}
