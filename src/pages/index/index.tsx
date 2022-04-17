import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, Toast } from '@taroify/core'
import { ArrowLeft, Replay, Arrow } from '@taroify/icons'
// import api from '../../helpers/fetcher'
import Page from '../../components/page'
import { connect, Connect } from '../../store'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页???',
})

class Index extends Component<Connect> {
  componentDidMount() { }

  componentWillUnmount() { }

  // componentDidShow() { }

  // componentDidHide() { }

  render() {
    return (
      <Page>
        <Toast open position="bottom">toast???</Toast>
        <View
          onClick={() => {
            this.props.dispatch({ name: 'bbb' })
          }}
          className="index"
        >
          <Text>Hello world!</Text>
          <View>{this.props.name}</View>
          <Button.Group variant="contained" color="primary" shape="round">
            <Button> <ArrowLeft /> 上一步</Button>
            <Button onClick={() => {
              this.props.dispatch({ showToast: true })
            }}
            > <Replay /> 刷新
            </Button>
            <Button>下一步 <Arrow /></Button>
          </Button.Group>
        </View>
      </Page>
    )
  }
}

export default connect('name')(Index)
