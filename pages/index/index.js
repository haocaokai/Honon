//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'开关',
        url:'dishes'
      },
      {
        name:'灯具',
        url:'take',
        isSplot:true
      },
      {
        name:'其他1',
        url:'out'
      },
      {
        name:'其他2',
        url:'bill'
      },
      {
        name:'其他3',
        url:'bill',
        isSplot:true
      },
      {
        name:'其他4',
        url:'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
