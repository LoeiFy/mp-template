import { Component } from 'react'
import Page from '../../components/page'
import { connect, Connect } from '../../store'
import './index.less'

definePageConfig({
  navigationBarTitleText: 'order',
})

class Index extends Component<Connect> {
  render() {
    return (
      <Page>
        ???
      </Page>
    )
  }
}

export default connect('name')(Index)
