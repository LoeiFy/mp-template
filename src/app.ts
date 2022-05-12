import { Component } from 'react'
import '@taroify/icons/index.scss'
import '@taroify/core/index.scss'
import { initStore } from './store'
import { login } from './helpers/fetcher'

export default class extends Component {
  async componentDidMount() {
    initStore()

    await wx.login()
    await new Promise((r) => setTimeout(r, 3000))
    login()
  }

  // componentDidShow() {}

  // componentDidHide() {}

  // componentDidCatchError() {}

  render() {
    return this.props.children
  }
}
