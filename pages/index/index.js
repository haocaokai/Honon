//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/img1.jpg',
      '../../images/img2.jpg',
    ],
    proUrls:[
      // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3188493008,3316920831&fm=27&gp=0.jpg',
      // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3572232574,1664278525&fm=27&gp=0.jpg'
    ],
    title : '所有产品',
    shops:app.globalData.shops,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
    
  },
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
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13901203458',
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
