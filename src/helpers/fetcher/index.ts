import Podiceps from '@podiceps/core'
import apis from './apis'
import { authMiddleware } from './middleware'
import { Response, Apis } from './types'

export { login, logout } from './middleware'

const podiceps = new Podiceps<Apis, Response>(apis, {
  baseURL: 'https://randomuser.me',
})

podiceps.use([authMiddleware])

podiceps.fetcher = (config) => new Promise((resolve, reject) => {
  wx.request({
    url: (config.baseURL || '') + config.path,
    method: config.method as any,
    data: config.data,
    header: config.headers,
    success(res) {
      resolve(res.data as Response)
    },
    fail(e) {
      reject(e)
    },
  })
})

export default podiceps.create()
