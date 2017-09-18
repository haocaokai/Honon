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
    shops : [
      {
        id:1,
        img: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/shops/shop_1.jpg',
        name:'第一个产品',
        des:'111111'
      },
      {
        id:2,
        img: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/shops/shop_1.jpg',
        name: '第2个产品',
        des: '222222'
      }
    ]
  }
})