import { getSystemInfoSync } from '@tarojs/taro'
import { CommonEvent } from '@tarojs/components'

export const PLATFORM = process.env.TARO_ENV
export const ENV = process.env.NODE_ENV
export const SYSTEM = getSystemInfoSync()

export const stopPropagation = (e: CommonEvent) => e.stopPropagation()

export const preventDefault = (e: CommonEvent, isStopPropagation?: boolean) => {
  e.preventDefault()
  if (isStopPropagation) {
    stopPropagation(e)
  }
}

type UserInfo = WechatMiniprogram.GetUserProfileSuccessCallbackResult

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
