//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
       this.globalData.height = res.statusBarHeight
       this.globalData.navHeight = res.statusBarHeight + 46;
       // 获取可使用窗口宽度
       let clientHeight = res.windowHeight;
       // 获取可使用窗口高度
       let clientWidth = res.windowWidth;
       // 算出比例
       let ratio = 750 / clientWidth;
       // 算出高度(单位rpx)
       let height = clientHeight * ratio;
       // 设置高度
       this.globalData.windowHeight = height;
  }
   
})

},

  globalData: {
    navHeight: 0,
    windowHeight:0,
  }

})

