import { Component } from 'react'
import { View } from '@tarojs/components'
// import Popup from '../../components/ui/popup'
import Toast from '../../components/ui/toast'
import Modal from '../../components/ui/modal'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'order',
  disableScroll: true,
})

class Index extends Component {
  state = {
    open: false,
    message: '',
  }

  render() {
    const { open } = this.state
    const { message } = this.state

    return (
      <View>
        <View onClick={() => this.setState({ open: true })}>
          open
        </View>
        <View className="line" />
        <View className="el">
          white-space: pre-wrap;
          /* stylelint-disable */
          /* autoprefixer: ignore next */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -moz-box-orient: vertical;
          -webkit-line-clamp: $lines;
          /* stylelint-enable */
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
          type="loading"
          message={message}
          onClose={() => this.setState({ message: '' })}
        />
        {/* <Popup
          onClose={() => this.setState({ open: false })}
          open={open}
        >
          <View style={{ width: 100, height: 100, background: '#4994df' }} />
        </Popup> */}
        <Modal
          // title="标题是事实"
          open={open}
          loading
          message="代码是写出来给人看的，附带能在机器上运行"
        />
      </View>
    )
  }
}

export default Index
