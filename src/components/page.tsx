import { FC } from 'react'
import { View } from '@tarojs/components'
import { Toast } from '@taroify/core'
import { useStore, dispatch } from '../store'

const P: FC = ({ children }) => {
  const { toast } = useStore('toast')

  return (
    <View>
      {children}
      <Toast
        type={toast.type}
        open={toast.open}
        position={toast.type ? undefined : 'bottom'}
        onClose={() => {
          if (toast.type !== 'loading') {
            dispatch({ toast: { ...toast, open: false } })
          }
        }}
      >
        {toast.text}
      </Toast>
    </View>
  )
}

export default P
