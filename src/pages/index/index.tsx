import { FC } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@taroify/core'
import { ArrowLeft, Replay, Arrow } from '@taroify/icons'
// import api from '../../helpers/fetcher'
import Page from '../../components/page'
import { State, dispatch } from '../../store'
import { showDialog, showActionSheet, setLoading, $ } from '../../store/action'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页',
})

const ac: State['actionSheet'] = {
  options: [
    { name: '选项1', value: '0' },
    { name: '选项2', value: '1', disabled: true },
  ],
  open: true,
  header: '什么',
  cancel: 'cancel',
}

const T: FC = () => {
  const onDialog = () => {
    $.dialog({
      title: 'Dialog',
      content: 'Dialog Content',
      showCancel: true,
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

  return (
    <Page
      loading={false}
      onDialogOk={() => console.log('Dialog Confirm')}
      onActionSheetSelect={(node) => console.log(node)}
    >
      <View
        className="index"
      >
        <Text>Hello world!</Text>
        <Button.Group variant="contained" color="primary" shape="round">
          <Button onClick={onDialog}> <ArrowLeft /> Dialog</Button>
          <Button onClick={onLoading}> <ArrowLeft /> Loading</Button>
          <Button onClick={() => {
            // this.props.dispatch(setToast, 'fail', '????')
            // emit({ actionSheet: ac })
          }}
          > <Replay /> 刷新
          </Button>
          <Button onClick={onToast}>Toast <Arrow /></Button>
        </Button.Group>
      </View>
    </Page>
  )
}

export default T
