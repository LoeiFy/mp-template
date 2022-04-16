import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from "@taroify/core"
import { ArrowLeft, Replay, Arrow } from "@taroify/icons"
import Page from '../../components/page'
import { connect, Connect } from '../../store'
import './index.less'

class Index extends Component<Connect> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <Page>
        ???
      </Page>
    )
  }
}

export default connect('name')(Index)
