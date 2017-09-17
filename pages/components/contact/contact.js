Page({
  openMap: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        wx.openLocation({
          latitude: 40.0247389727, // 纬度，范围为-90~90，负数表示南纬
          longitude: 116.4384269714, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例 
          name: "朗能专卖店",
          address: "北五环建材市场"

        })
      }
    })
  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '13901203458',
    })
  }
})