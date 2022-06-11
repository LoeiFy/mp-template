import { FC } from 'react'
import { Button } from '@taroify/core'
import api from '../../helpers/fetcher'
import { getUserInfo } from '../../helpers/common'
import Page from '../../components/page'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'Order',
})

const T: FC = () => {
  const onLoad = async () => {
    const res = await api.post()
    console.log(res.info)
  }

  return (
    <Page
      loading={false}
      bottomGap={false}
    >
      <Button.Group className="demo" variant="contained" color="primary" shape="round">
        <Button onClick={onLoad}>Fetcher</Button>
        <Button
          onClick={async () => {
            const res = await getUserInfo()
            console.log(res)
          }}
        >
          User
        </Button>
      </Button.Group>
    </Page>
  )
}

export default T
