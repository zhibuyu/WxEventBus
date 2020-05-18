// pages/second/second.js
var event = require('../../utils/event')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  txtinput:function(e){
    var txtdata = e.detail.value
    console.log("输入的内容==》" + txtdata)
    this.setData({
      txtdata: txtdata
    })
    
  },
  SendTxtClick(){
    var txtdata = this.data.txtdata
    var evntdata = {
      txtdata: txtdata,
    }
    //第一个参数： 发送给指定的事件的名词，第二个参数：需要发送的数据
    event.emit("fistPageMessage", evntdata) //发送更新数据 
  }
})