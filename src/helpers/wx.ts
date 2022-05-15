type UserInfo = WechatMiniprogram.GetUserProfileSuccessCallbackResult
type Toast = WechatMiniprogram.ShowToastOption

export const getUserInfo = () => new Promise<UserInfo>((resolve, reject) => {
  wx.getSetting({
    fail(e) {
      reject(e)
    },
    success(setting) {
      if (!setting.authSetting['scope.userInfo']) {
        reject()
        return
      }
      wx.getUserProfile({
        success(res) {
          resolve(res)
        },
        fail(e) {
          reject(e)
        },
        desc: '完善用户信息',
      })
    },
  })
})

export const loading = (title: string) => {
  wx.showLoading({
    title,
    mask: true,
  })
  return wx.hideLoading
}

export const toast = (options: Toast) => {
  wx.showToast(options)
}
