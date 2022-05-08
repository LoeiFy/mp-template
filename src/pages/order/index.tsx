import { Component } from 'react'
import { View } from '@tarojs/components'
import Page from '../../components/page'
import { connect, ConnectProps } from '../../store'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'order',
  disableScroll: true,
})

class Index extends Component<ConnectProps> {
  render() {
    return (
      <Page>
        <View onClick={() => wx.navigateBack()}>uuu</View>
      </Page>
    )
  }
}

export default connect('toast')(Index)
