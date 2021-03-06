import { Component } from 'react'
import { initStore } from './store'
import { login } from './helpers/fetcher'
import './components/ui/styles/index.less'

export default class extends Component {
  async componentDidMount() {
    initStore()

    await wx.login()
    login()
  }

  // componentDidShow() {}
  // componentDidHide() {}
  // componentDidCatchError() {}

  render() {
    return this.props.children
  }
}
