import { FC } from 'react'
import { View } from '@tarojs/components'
import api from '../../helpers/fetcher'
import Page from '../../components/page'
import $ from '../../store/action'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页',
})

const T: FC = () => {
  const onDialog = () => {
    $.modal({
      title: 'Dialog',
      message: 'Dialog Content',
      showCancel: true,
      hash: '???',
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
      hash: '???',
      options: [
        { label: '选项1', value: '0' },
        { label: '选项2', value: '1', disabled: true },
      ],
      title: '什么',
      showCancel: true,
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
      // background="gray"
    >
      <View className="demo" style={{ height: 100, fontSize: 20 }}>Hello world!</View>
      <View onClick={onDialog}>???</View>
      {/* <Button.Group variant="contained" color="primary" shape="round"> */}
      {/* <Button type="primary" loading onClick={onDialog}>Dialog</Button>
      <Button onClick={onLoading}>Loading</Button>
      <Button onClick={onActionSheet}>ActionSheet</Button>
      <Button onClick={onToast}>Toast</Button> */}
      {/* </Button.Group> */}
      <View id="page-bottom">
        {/* <Button
          onClick={async () => {
            const res = await getUserInfo()
            console.log(res)
          }}
          // openType="getUserInfo"
        >AAA
        </Button>
        <Button onClick={onLoad}>Loading</Button> */}
      </View>
    </Page>
  )
}

export default T
