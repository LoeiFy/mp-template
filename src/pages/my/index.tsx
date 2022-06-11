import { FC } from 'react'
import Page from '../../components/page'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'Loading',
})

const T: FC = () => {
  console.log('loading')

  return (
    <Page
      loading
      bottomGap={false}
    >
      Loading
    </Page>
  )
}

export default T
