// pages/Main/Main.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    booksList: [
      {
        bookName: "《有一种候鸟》",
        userName: "------杨竣然",
        showSentences: [
          "梦里我听见莫扎特有似天籁的音乐，随颤动的水纹与微风，一波波传来，推动着一艘船。",
          "我爱父亲，也爱母亲。不过，是两种不同的爱：对父亲是敬仰和认同；对母亲，在原始的亲情里掺杂着些疏离与叛逆的情结。"
        ]
      },
      {
        bookName: "《当年的体温》",
        userName: "-----王开岭",
        showSentences: [
          "如果不相信灵魂不死，我们何以堪受这样的悲拗与绝望。",
          "庄稼在那儿，庄稼不能不回去------这是本分，是骨子里的基因，是祖祖辈辈的规矩。",
          "哭和泪不同。放声大哭，是灵魂能量的一次迸溅，一次肆意的井喷。"
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onAddSentenceClick: function (position) {
    var that = this;
    wx.showActionSheet({
      itemList: ['拍一拍', '读一读', '写一写'],
      itemColor: '#000000',
      success: function (res) {
        switch (res.tapIndex) {
          case 0:
            // go to camera
            that.showCamera();
            break;
          case 1:
            // go to talk
            // not good
            that.showWorking();
            break;
          case 2:
            // go to write
            // not good
            that.showWorking();
            break;
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onAddBookClick: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['扫描条形码添加书籍'],
      itemColor: '#000000',
      success: function (res) {
        that.showWorking();
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  showWorking: function () {
    wx.showToast({
      title: '此功能正在开发中',
      icon: '',
      image: '../../icons/working.png',
      duration: 1000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  showCamera: function () {
    wx.navigateTo({
      url: '../Camera/Camera',
      success: function () {
      },
      fail:function() {
        wx.showToast({
          title: '失败',
          icon: '',
          image: '../../icons/working.png',
          duration: 1000,
          mask: true,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
  }
})