import { Component } from 'react'
import '@taroify/icons/index.scss'
import '@taroify/core/index.scss'
import { initStore } from './store'

export default class extends Component {
  componentDidMount() {
    initStore()
  }

  // componentDidShow() {}

  // componentDidHide() {}

  // componentDidCatchError() {}

  render() {
    return this.props.children
  }
}
