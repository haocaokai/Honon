//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function(){
    console.log('onShow');
  },
  onHide: function(){
    console.log('onHide');
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData : {
    "shops": [
      {
        "id": 1,
        "img": "../../images/img/images/1.jpg",
        "name": "流光溢彩（方）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "81W / 90W"
      },
      {
        "id": 2,
        "img": "../../images/img/images/2.jpg",
        "name": "流光溢彩（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "81W / 90W"
      },
      {
        "id": 3,
        "img": "../../images/img/images/3.jpg",
        "name": "异域风情",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "26W"
      },
      {
        "id": 4,
        "img": "../../images/img/images/4.jpg",
        "name": "春暖花开",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "26"
      },
      {
        "id": 5,
        "img": "../../images/img/images/5.jpg",
        "name": "同心结",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W / 60W"
      },
      {
        "id": 6,
        "img": "../../images/img/images/6.jpg",
        "name": "如意吉祥",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "32W / 90W"
      },
      {
        "id": 7,
        "img": "../../images/img/images/7.jpg",
        "name": "丽悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 8,
        "img": "../../images/img/images/8.jpg",
        "name": "天悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 9,
        "img": "../../images/img/images/9.jpg",
        "name": "星悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 10,
        "img": "../../images/img/images/10.jpg",
        "name": "璞玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 81W"
      },
      {
        "id": 11,
        "img": "../../images/img/images/11.jpg",
        "name": "曲美",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝合金",
        "power": "36W / 81W"
      },
      {
        "id": 12,
        "img": "../../images/img/images/12.jpg",
        "name": "金苹果",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "36W / 81W"
      },
      {
        "id": 13,
        "img": "../../images/img/images/13.jpg",
        "name": "蓝精灵",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "28W"
      },
      {
        "id": 14,
        "img": "../../images/img/images/14.jpg",
        "name": "白玉兰",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "28W"
      },
      {
        "id": 15,
        "img": "../../images/img/images/15.jpg",
        "name": "瑞雪",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 16,
        "img": "../../images/img/images/16.jpg",
        "name": "瑞月",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "32W / 90W"
      },
      {
        "id": 17,
        "img": "../../images/img/images/17.jpg",
        "name": "瑞玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "32W / 90W"
      },
      {
        "id": 18,
        "img": "../../images/img/images/18.jpg",
        "name": "瑞彩",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 19,
        "img": "../../images/img/images/19.jpg",
        "name": "丽悦",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 25平方米",
        "material": "五金 + 进口亚克力 + 铝型材",
        "power": "32W / 90W"
      },
      {
        "id": 20,
        "img": "../../images/img/images/20.jpg",
        "name": "和氏璧",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 亚克力 + PC",
        "power": "24W / 36W"
      },
      {
        "id": 21,
        "img": "../../images/img/images/21.jpg",
        "name": "木棉花",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 亚克力 + 水晶",
        "power": "90W"
      },
      {
        "id": 22,
        "img": "../../images/img/images/22.jpg",
        "name": "花好月圆",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 亚克力",
        "power": "30W / 72W"
      },
      {
        "id": 23,
        "img": "../../images/img/images/23.jpg",
        "name": "花叶",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "90W"
      },
      {
        "id": 23,
        "img": "../../images/img/images/24.jpg",
        "name": "花蕾",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 亚克力 + 水晶装饰材质",
        "power": "100W"
      },
      {
        "id": 24,
        "img": "../../images/img/images/25.jpg",
        "name": "心相印",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 亚克力 + 水晶，颜色丰富",
        "power": "108W"
      },
      {
        "id": 25,
        "img": "../../images/img/images/26.jpg",
        "name": "朗韵(LN-XT84)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "84W"
      },
      {
        "id": 26,
        "img": "../../images/img/images/27.jpg",
        "name": "朗韵(LN-XT60)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "60W"
      },
      {
        "id": 27,
        "img": "../../images/img/images/28.jpg",
        "name": "朗韵(LN-XT132)",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + ABS",
        "power": "132W"
      },
      {
        "id": 28,
        "img": "../../images/img/images/29.jpg",
        "name": "蝴蝶",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "铁艺烤漆 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 29,
        "img": "../../images/img/images/30.jpg",
        "name": "海豚",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 15平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 30,
        "img": "../../images/img/images/31.jpg",
        "name": "海陵",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 81W"
      },
      {
        "id": 31,
        "img": "../../images/img/images/32.jpg",
        "name": "致炫",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶",
        "power": "56W / 90W"
      },
      {
        "id": 32,
        "img": "../../images/img/images/33.jpg",
        "name": "飘逸",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 108W"
      },
      {
        "id": 33,
        "img": "../../images/img/images/34.jpg",
        "name": "丽影",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 81W"
      },
      {
        "id": 34,
        "img": "../../images/img/images/35.jpg",
        "name": "致炫",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶",
        "power": "56W / 90W"
      },
      {
        "id": 35,
        "img": "../../images/img/images/36.jpg",
        "name": "心影LED吊线灯",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "30W"
      },
      {
        "id": 36,
        "img": "../../images/img/images/37.jpg",
        "name": "幻影LED吊线灯",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "72W"
      },
      {
        "id": 37,
        "img": "../../images/img/images/38.jpg",
        "name": "雀彩耀辉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "30W / 56W / 72W"
      },
      {
        "id": 38,
        "img": "../../images/img/images/39.jpg",
        "name": "繁花璀璨",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 64W / 90W"
      },
      {
        "id": 39,
        "img": "../../images/img/images/40.jpg",
        "name": "时空叠影",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "56W / 72W / 108W"
      },
      {
        "id": 40,
        "img": "../../images/img/images/41.jpg",
        "name": "时空之光",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 64W / 90W / 108W"
      },
      {
        "id": 41,
        "img": "../../images/img/images/42.jpg",
        "name": "典娜之美",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 48W / 72W"
      },
      {
        "id": 42,
        "img": "../../images/img/images/43.jpg",
        "name": "凌空繁星",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 48W"
      },
      {
        "id": 42,
        "img": "../../images/img/images/44.jpg",
        "name": "金澜韵玉",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 43,
        "img": "../../images/img/images/45.jpg",
        "name": "秋之密语",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 32W / 36W / 90W"
      },
      {
        "id": 44,
        "img": "../../images/img/images/46.jpg",
        "name": "秋之琉璃",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 45,
        "img": "../../images/img/images/47.jpg",
        "name": "田园之绚",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W / 36W / 56W / 90W"
      },
      {
        "id": 46,
        "img": "../../images/img/images/48.jpg",
        "name": "田园之绚",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 30平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "45W / 120W / 156W"
      },
      {
        "id": 47,
        "img": "../../images/img/images/49.jpg",
        "name": "繁星光雨",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "36W / 56W / 90W"
      },
      {
        "id": 48,
        "img": "../../images/img/images/50.jpg",
        "name": "雀之灵动（方）",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 25平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 49,
        "img": "../../images/img/images/51.jpg",
        "name": "雀之灵动（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 50,
        "img": "../../images/img/images/52.jpg",
        "name": "星语星愿",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 51,
        "img": "../../images/img/images/53.jpg",
        "name": "方怡平静（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 20平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "28W / 32W"
      },
      {
        "id": 52,
        "img": "../../images/img/images/54.jpg",
        "name": "方怡平静（方）",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 20平方米",
        "material": "五金 + 进口亚克力 + 水晶装饰",
        "power": "36W / 64W / 90W / 108W"
      },
      {
        "id": 53,
        "img": "../../images/img/images/55.jpg",
        "name": "流金岁月",
        "area": "客厅、卧式、书房",
        "area2": "15 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      }, {
        "id": 54,
        "img": "../../images/img/images/56.jpg",
        "name": "沁溢花香（方）",
        "area": "客厅、卧式、书房",
        "area2": "12 ~ 22平方米",
        "material": "五金 + 进口亚克力",
        "power": "48W / 56W / 90W"
      },
      {
        "id": 55,
        "img": "../../images/img/images/57.jpg",
        "name": "沁溢花香（圆）",
        "area": "客厅、卧式、书房",
        "area2": "8 ~ 20平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 56,
        "img": "../../images/img/images/58.jpg",
        "name": "恋恋风情",
        "area": "客厅、卧式、书房",
        "area2": "10 ~ 18平方米",
        "material": "五金 + 进口亚克力",
        "power": "28W / 32W"
      },
      {
        "id": 57,
        "img": "../../images/img/images/59.jpg",
        "name": "简方",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "6W / 9W"
      },
      {
        "id": 58,
        "img": "../../images/img/images/60.jpg",
        "name": "光影",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "6W / 9W"
      },
      {
        "id": 59,
        "img": "../../images/img/images/61.jpg",
        "name": "光虹",
        "area": "客厅、卧式、书房",
        "area2": "2 ~ 5平方米",
        "material": "五金镀铬 + 亚克力",
        "power": "12W / 18W"
      },
      {
        "id": 60,
        "img": "../../images/img/images/62.jpg",
        "name": "方雅",
        "material": "五金烤漆",
        "power": "3W"
      },
      {
        "id": 61,
        "img": "../../images/img/images/63.jpg",
        "name": "缇香/尚香",
        "material": "五金烤漆",
        "power": "3W / 9W"
      },
      {
        "img": "../../images/img/images/64.jpg",
        "img": "",
        "name": "亭翠",
        "material": "五金烤漆",
        "power": "3W"
      },
      {
        "img": "../../images/img/images/65.jpg",
        "img": "",
        "name": "奢丽",
        "material": "五金烤漆",
        "power": "8W"
      },

    ]
  }
})