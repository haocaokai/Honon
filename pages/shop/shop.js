var app = getApp();
Page({
	data: {
		
	},
	onLoad: function (options) {
		var shopId = options.id;
		for (var i = 0; i < app.globalData.shops.length; ++i) {
			if (app.globalData.shops[i].id == shopId) {
				this.setData({
					shop: app.globalData.shops[i]
				});
				break;
			}
		}
	}
});