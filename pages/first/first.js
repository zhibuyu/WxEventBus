// pages/first/first.js
var event = require('../../utils/event')//导入event
Page({

  /**
   * 页面的初始数据
   */
  data: {
     show_value:"待显示的文本"
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /**
     * 第一个参数：指定订阅的事件名
     * 第二个参数：对象
     * 第三个参数：指定订阅回调的方法
     */
    event.on("fistPageMessage", this, this.ReceiveMessage)
  },
  /**
     * 接收订阅回调的方法
     * @param evntdata 接收更新数据
     * @constructor
     */
  ReceiveMessage(evntdata) {
    var txtdata = evntdata.txtdata
    console.log("首页=接收更新数据===》", evntdata)
    this.setData(
      {
        show_value:txtdata
      }
    )
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //取消事件绑定
    event.remove("fistPageMessage", this)
  },
  onSecondCilck(){
    wx.navigateTo({
      url: '/pages/second/second',
    })
  }
})
