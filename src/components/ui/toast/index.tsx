import { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import Popup from '../popup'
import { prefix } from '../styles'
// import './index.less'

interface ToastProps {
  type?: 'loading' | 'success' | 'fail',
  message: string,
  onClose: () => void,
}

export default function ({
  type,
  message,
  onClose,
}: ToastProps) {
  const [show, setShow] = useState(false)
  const timer = useRef<NodeJS.Timeout>()

  const onHide = () => {
    if (type === 'loading') {
      return
    }

    if (timer.current) {
      clearTimeout(timer.current)
    }
    onClose()
  }

  useEffect(() => {
    setShow(!!message)

    if (message && type !== 'loading') {
      timer.current = setTimeout(() => {
        setShow(false)
        onClose()
      }, 3000)
    }
  }, [message, type, onClose])

  return (
    <Popup
      background="transparent"
      open={show}
      onClose={onHide}
    >
      <View onClick={onHide} className={`${prefix}toast`}>
        <View className={`${prefix}toast-${type || 'text'}`}>
          {message}
        </View>
      </View>
    </Popup>
  )
}
