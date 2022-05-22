import { Component } from 'react'
import { View } from '@tarojs/components'
import Popup from '../../components/ui/popup'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'order',
  disableScroll: true,
})

class Index extends Component {
  state = {
    open: false,
  }

  render() {
    const { open } = this.state

    return (
      <View>
        <View onClick={() => this.setState({ open: true })}>
          open
        </View>
        <Popup
          onClose={() => this.setState({ open: false })}
          open={open}
        >
          <View style={{ width: 100, height: 100, background: '#4994df' }} />
        </Popup>
      </View>
    )
  }
}

export default Index
