import { Component } from 'react'
import { View } from '@tarojs/components'
// import Popup from '../../components/ui/popup'
import Toast from '../../components/ui/toast'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'order',
  disableScroll: true,
})

class Index extends Component {
  state = {
    // open: false,
    message: '',
  }

  render() {
    // const { open } = this.state
    const { message } = this.state

    return (
      <View>
        <View onClick={() => this.setState({ message: 'Materialize To do this, call the M.toast() function programatically' })}>
          open
        </View>
        <View onClick={() => {
          this.setState({ message: 'Materialize' })
          setTimeout(() => {
            this.setState({ message: '' })
          }, 3000)
        }}
        >
          open2
        </View>
        <Toast
          type="fail"
          message={message}
          onClose={() => this.setState({ message: '' })}
        />
        {/* <Popup
          onClose={() => this.setState({ open: false })}
          open={open}
        >
          <View style={{ width: 100, height: 100, background: '#4994df' }} />
        </Popup> */}
      </View>
    )
  }
}

export default Index
