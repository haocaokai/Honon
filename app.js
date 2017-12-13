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
        img: '../../images/1.jpg',
        name:'流光溢彩（方）',
        trait: '简约唯美，经典品质',
        area: '客厅，卧室，书房',
        material: '五金 + 进口亚克力',
        area2: '8 ~ 30平方米',
        power: '90W/81W/32W/30W'
      },
      {
        id: 2,
        img: '../../images/2.jpg',
        name: '流光溢彩（圆）',
        trait: '简约唯美，经典品质',
        area: '客厅，卧室，书房',
        material: '五金 + 进口亚克力',
        area2: '8 ~ 30平方米',
        power: '90W/81W/32W/30W'
      },
    ]
  }
})