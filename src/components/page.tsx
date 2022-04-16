import { FC } from 'react'
import { View } from '@tarojs/components'
import { Toast } from '@taroify/core'
import { useStore, dispatch } from '../store'

const P: FC = ({ children }) => {
  const { showToast } = useStore('showToast')

  return (
    <View>
      <View>
        <Toast type='loading' open={showToast} position='bottom' onClose={() => dispatch({ showToast: false })}>toast</Toast>
      </View>
      {children}
    </View>
  )
}

export default P
