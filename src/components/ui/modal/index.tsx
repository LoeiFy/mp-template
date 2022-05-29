import { View } from '@tarojs/components'
import Popup from '../popup'
import { prefix } from '../styles'
import './index.less'

interface ModalProps {
  open: boolean,
  loading?: boolean,
  title?: string,
  message: string,
  showCancel?: boolean,
  onCancel?: () => void,
  onConfirm?: () => void,
  onClose?: () => void,
}

export default function ({
  open,
  title,
  message,
  loading = false,
  showCancel = true,
  onCancel = () => null,
  onConfirm = () => null,
  onClose = () => null,
}: ModalProps) {
  const onButton = (type: string) => {
    if (loading) {
      return
    }
    if (type === 'cancel') {
      onCancel()
    }
    if (type === 'confirm') {
      onConfirm()
    }
    if (type === 'close') {
      onClose()
    }
  }

  return (
    <Popup
      open={open}
      onClose={() => onButton('close')}
    >
      <View className={`${prefix}modal`}>
        <View className={`${prefix}modal-title`}>{title}</View>
        <View className={`${prefix}modal-message`}>{message}</View>
        <View className={`${prefix}modal-line`} />
        <View className={`${prefix}modal-actions`}>
          {
            showCancel ? <View onClick={() => onButton('cancel')} className={`${prefix}modal-cancel`}>取消</View> : null
          }
          <View onClick={() => onButton('confirm')} className={`${prefix}modal-confirm ${loading ? `${prefix}modal-loading` : ''}`}>确定</View>
        </View>
      </View>
    </Popup>
  )
}
