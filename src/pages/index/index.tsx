import { FC, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@taroify/core'
import { ArrowLeft, Replay, Arrow } from '@taroify/icons'
// import api from '../../helpers/fetcher'
import Page from '../../components/page'
import { useStore, dispatch, State } from '../../store'
// import { setLoading, setToast } from '../../store/action'
import './index.less'

definePageConfig({
  navigationBarTitleText: '首页???',
})

const ac: State['actionSheet'] = {
  unique: 'aaa',
  options: [
    { name: '选项1', value: '0' },
    { name: '选项2', value: '1', disabled: true },
  ],
  open: true,
  header: '什么',
  cancel: 'cancel',
}

const T: FC = () => {
  const { actionSheet } = useStore('actionSheet')

  useEffect(() => {
    console.log(actionSheet)
  }, [actionSheet])

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
            // this.props.dispatch(setToast, 'fail', '????')
            dispatch({ actionSheet: ac })
          }}
          > <Replay /> 刷新
          </Button>
          <Button>下一步 <Arrow /></Button>
        </Button.Group>
      </View>
    </Page>
  )
}

export default T
