import { FC } from 'react'
import { View } from '@tarojs/components'
// import { Button } from '@taroify/core'
import { Button } from '@antmjs/vantui'
import api from '../../helpers/fetcher'
import { getUserInfo, loading, toast } from '../../helpers/wx'
import Page from '../../components/page'
import $ from '../../store/action'
import './index.less'

definePageConfig({
  // navigationStyle: 'custom',
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
    // $.toast('Toast', 'success')
    // toast({ title: '不显示图标，此时 title 文本最多可显示两行，1.9.0及以上版本支持', icon: 'none', mask: true })
    const a = loading('加载中...')
    setTimeout(a, 3000)
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
      // background="gray"
    >
      <View className="demo" style={{ height: 100, fontSize: 20 }}>Hello world!</View>
      {/* <Button.Group variant="contained" color="primary" shape="round"> */}
      <Button type="primary" loading onClick={onDialog}>Dialog</Button>
      <Button onClick={onLoading}>Loading</Button>
      <Button onClick={onActionSheet}>ActionSheet</Button>
      <Button onClick={onToast}>Toast</Button>
      {/* </Button.Group> */}
      <View id="page-bottom">
        <Button
          onClick={async () => {
            const res = await getUserInfo()
            console.log(res)
          }}
          // openType="getUserInfo"
        >AAA
        </Button>
        <Button onClick={onLoad}>Loading</Button>
      </View>
    </Page>
  )
}

export default T
