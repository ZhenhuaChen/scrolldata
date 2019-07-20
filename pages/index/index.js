//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		len:'',
		animation:[], 
	},
  //事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
		url: '../logs/logs'
		})
	},
	onLoad: function () {
		this.show_num(2345678)
		
	},
	show_num(n){
		var len = String(n).length;
		this.setData({
			len: len,
		})
		var char = String(n).split("")
		// h存储数字块高度
		var h = ''
		let self = this
		// 创造节点选择器
		wx.createSelectorQuery().select('.unit-num').boundingClientRect(function(rect){
			h = rect.height
			// 这里用数组存储所有动画 方便for循环出来的view绑定不同animation
			var animate = []
			for(var i=0;i<len;i++){
				animate[i] = wx.createAnimation()
				animate[i].top(-parseInt(h)*char[i]).step({
					duration:1500
				})
				// 这里数组变量赋值 
				var deletedtodo='animation['+i+']';
				self.setData({
					//输出动画
					[deletedtodo]: animate[i].export()
				})
			}
		}).exec()
	},
})
