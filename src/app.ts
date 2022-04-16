import { Component } from 'react'
import { createStore } from './store'
import './app.less'

class App extends Component {

  componentDidMount () {
    createStore({ name: 'aaa', showToast: false })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
