import { Component } from 'react'
import '@taroify/icons/index.scss'
import '@taroify/core/index.scss'
import { createStore } from './store'

export default class extends Component {
  componentDidMount() {
    createStore({ name: 'aaa', showToast: false })
  }

  // componentDidShow() {}

  // componentDidHide() {}

  // componentDidCatchError() {}

  render() {
    return this.props.children
  }
}
