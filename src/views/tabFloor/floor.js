/*
 totop  //返回顶部按钮
 fixedevery   // 左侧固定导航的每一项
 louceng  //模块的每一项
 header   //头部
 scrollBox  // 滚动的元素
 */
function floor(totop, fixedevery, louceng, header, scrollBox) {
	this.totop = totop;
	this.fixedevery = fixedevery;
	this.louceng = louceng;
	this.header = header;
	this.scrollBox = scrollBox;
}
floor.prototype = {
	init: function() {
		this.start();
		this.totopClick();
		this.fixedeveryClick();
	},
	start: function() {
		var that = this;
		$(that.scrollBox).scroll(function() {
			var winH = $(that.scrollBox).height();
			var iTop = $(that.scrollBox).scrollTop(); //鼠标滚动的距离
			if(iTop > $(that.header).height()) { // 页面滚动高度大于顶部的高度
				$(that.totop).fadeIn(); // 显示回到顶部按钮
				$(that.louceng).each(function() {
					if(Math.abs($(this).offset().top) < $(that.header).height() + 50) { // 当前模块到顶部的距离小于模块的一半
						if (!$(that.fixedevery).eq($(this).index()).hasClass('active')) {
							$(that.fixedevery).removeClass('active');
							$(that.fixedevery).eq($(this).index()).addClass('active');
							let data = $(this).index()
						}
					}
				})
			} else {
				$(that.totop).fadeOut();
			}
		});
	},
	totopClick: function() { // 回到顶部
		var that = this;
		$(that.totop).click(function() {
			$(that.scrollBox).animate({
				"scrollTop": 0
			}, 500)
		})
	},
	fixedeveryClick: function() { // 点击左侧导航
		var that = this;
		$(that.fixedevery).click(function() {
			var t = 0
			for(var i=0; i<$(this).index(); i++) {
				t = t + $(that.louceng).eq(i).height()
			}
			$(that.scrollBox).animate({
				"scrollTop": t
			}, 500);
		});
	}
}

export default floor