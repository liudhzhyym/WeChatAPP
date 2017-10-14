// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "my",
  /**
   * 页面的初始数据
   */

  data: {
    loading: false,
    hasUserInfo: false,
    showBadge: false,
    login:'登录',
    meList: [
      {
        text: '借入的图书',
        icon: '../assets/img/iconfont-dingdan.png',
        url: ''
      },
      {
        text: '借出的图书',
        icon: '../assets/img/iconfont-help.png',
        url: ''
      },
      {
        text: '预约的图书',
        icon: '../assets/img/iconfont-icontuan.png',
        url: ''
      },
      {
        text: '飘流的图书',
        icon: '../assets/img/iconfont-kefu.png',
        url: ''
      },
      {
        text: '曾经拥有的图书',
        icon: '../assets/img/iconfont-tuihuo.png',
        url: ''
      },
    ],
  },


  


  getUserInfo: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
      that.setData({
        loading:true,
        login:'正在登录，请稍等ヾ(≧∇≦*)ゝ',
      })
    } else {
      _getUserInfo()
    }
    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      loading: false,
      login: '登录',
      userInfo: {}
    })
  }
  

})

