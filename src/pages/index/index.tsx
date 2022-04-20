import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@taroify/core'
import { ArrowLeft, Replay, Arrow } from '@taroify/icons'
// import api from '../../helpers/fetcher'
import Page from '../../components/page'
import { connect, ConnectProps } from '../../store'
import { setLoading, setToast } from '../../store/action'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页???',
})

class Index extends Component<ConnectProps> {
  componentDidMount() { }

  componentWillUnmount() { }

  // componentDidShow() { }

  // componentDidHide() { }

  render() {
    return (
      <Page>
        <View
          className="index"
        >
          <Text>Hello world!</Text>
          <Button.Group variant="contained" color="primary" shape="round">
            <Button> <ArrowLeft /> 上一步</Button>
            <Button onClick={() => {
              // this.props.dispatch(setLoading, true)
              this.props.dispatch(setToast, 'fail', '????')
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

export default connect('toast')(Index)
