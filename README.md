# WxEventBus


- **项目结构**
<img src="https://github.com/zhibuyu/WxEventBus/blob/master/show_pics/architecture.png?raw=true" width="280"/> 

</br>

- **使用**
在需要接受其他页面（页面First）消息的所在页的 onLoad 生命周期中订阅 “fistPageMessage” 事件，
 
`     /**
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
      `
 并添加一个接收订阅回调的方法
   `/**
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
   },`


在需要发送变更数据的页面（页面Second），发布 “fistPageMessage” 事件,同时携带发送的数据。

` //第一个参数： 发送给指定的事件的名词，第二个参数：需要发送的数据
 event.emit("fistPageMessage", evntdata) //发送更新数据 `

当页面First销毁前，必须取消之前的订阅时间绑定

` //取消事件绑定
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //取消事件绑定
    event.remove("fistPageMessage", this)
  },
  `
