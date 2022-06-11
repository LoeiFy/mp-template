import { FC } from 'react'
import { NoticeBar } from '@taroify/core'
import { VolumeOutlined } from '@taroify/icons'
import Page from '../../components/page'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'Order',
})

const T: FC = () => {
  console.log('next')

  return (
    <Page
      bottomGap="rgb(236, 249, 255)"
      background="rgb(236, 249, 255)"
    >
      <NoticeBar scrollable>
        <NoticeBar.Icon>
          <VolumeOutlined />
        </NoticeBar.Icon>
        在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
      </NoticeBar>
    </Page>
  )
}

export default T
