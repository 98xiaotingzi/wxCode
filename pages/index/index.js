Page({
  data: {
    coins: 25,
    currentLevel: 2,
    isStarting: false,
  },

  handleSettings() {
    wx.showToast({ title: '设置', icon: 'none' })
  },

  handleAction(event) {
    const { name } = event.currentTarget.dataset
    wx.showToast({ title: name, icon: 'none' })
  },

  handleStart() {
    if (this.data.isStarting) return
    this.setData({ isStarting: true })
    wx.showToast({ title: '游戏开始！', icon: 'none' })
    setTimeout(() => this.setData({ isStarting: false }), 800)
  },

  handleTab(event) {
    const { name } = event.currentTarget.dataset
    if (name !== '首页') {
      wx.showToast({ title: `${name}功能即将开放`, icon: 'none' })
    }
  },
})
