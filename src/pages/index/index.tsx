import { FC } from 'react'
import { View } from '@tarojs/components'
import { Button } from '@taroify/core'
import { ArrowLeft, Replay, Arrow } from '@taroify/icons'
import api from '../../helpers/fetcher'
import { getUserInfo } from '../../helpers/wx'
import Page from '../../components/page'
import $ from '../../store/action'
import './index.less'

definePageConfig({
  // navigationStyle: 'custom', // 应该不需要
  navigationBarTitleText: '首页',
})

const T: FC = () => {
  const onDialog = () => {
    $.dialog({
      title: 'Dialog',
      content: 'Dialog Content',
      showCancel: true,
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
      options: [
        { name: '选项1', value: '0' },
        { name: '选项2', value: '1', disabled: true },
      ],
      header: '什么',
      cancel: 'cancel',
    }, (value, hash) => {
      console.log(value, hash)
    })
  }

  const onLoad = async () => {
    const res = await api.post()
    console.log(res.info)
  }

  return (
    <Page
      loading={false}
      // header={{ title: '首页' }}
    >
      <View style={{ height: 100 }}>Hello world!</View>
      <Button.Group variant="contained" color="primary" shape="round">
        <Button onClick={onDialog}> <ArrowLeft /> Dialog</Button>
        <Button onClick={onLoading}> <ArrowLeft /> Loading</Button>
        <Button onClick={onActionSheet}> <Replay /> ActionSheet</Button>
        <Button onClick={onToast}>Toast <Arrow /></Button>
      </Button.Group>
      <View id="page-bottom">
        <Button
          onClick={async () => {
            const res = await getUserInfo()
            console.log(res)
          }}
          // openType="getUserInfo"
        >AAA
        </Button>
        <Button onClick={onLoad}>Loading <Arrow /></Button>
      </View>
    </Page>
  )
}

export default T
