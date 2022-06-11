import { FC } from 'react'
import { View } from '@tarojs/components'
import { Button } from '@taroify/core'
import { EyeOutlined } from '@taroify/icons'
import Page from '../../components/page'
import $ from '../../store/action'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页',
})

const T: FC = () => {
  const onModal = () => {
    $.modal({
      title: 'Dialog',
      message: 'Dialog Content',
      showCancel: true,
      hash: '1',
    }, (confirmed, hash) => {
      console.log(confirmed, hash)
    })
  }

  const onToast = () => {
    $.toast('Toast', 'success')
  }

  const onLoading = async () => {
    await $.loading(true)
    await new Promise((r) => setTimeout(r, 3000))
    $.loading(false)
  }

  const onActionSheet = () => {
    $.actionsheet({
      hash: '2',
      options: [
        { label: '选项1', value: '0' },
        { label: '选项2', value: '1' },
      ],
      title: '什么!!!',
      showCancel: false,
      bottomGap: false,
    }, (value, hash) => {
      console.log(value, hash)
    })
  }

  return (
    <Page
      loading={false}
      background="#f2f2f2"
      bottomGap={false}
    >
      <Button.Group className="demo" variant="contained" color="primary" shape="round">
        <Button onClick={onModal}>Dialog</Button>
        <Button onClick={onLoading}>Loading</Button>
        <Button onClick={onActionSheet}>ActionSheet</Button>
        <Button onClick={onToast}>Toast</Button>
      </Button.Group>
      <View id="page-bottom">
        <Button
          icon={<EyeOutlined />}
          onClick={() => {
            wx.navigateTo({ url: '/pages/next/index' })
          }}
          block
          shape="round"
          color="primary"
        >
          Next
        </Button>
      </View>
    </Page>
  )
}

export default T
