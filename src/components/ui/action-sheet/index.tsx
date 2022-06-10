import { View } from '@tarojs/components'
import Popup from '../popup'
import { prefix } from '../styles'
import { SYSTEM } from '../../../helpers/common'
// import './index.less'

const { screenHeight, safeArea } = SYSTEM

interface ActionSheetProps {
  open: boolean,
  title?: string,
  description?: string,
  options: {
    label: string,
    value: string | number,
  }[],
  showCancel?: boolean,
  onSelect?: (value: {
    label: string,
    value: string | number,
    [key: string]: any,
  }) => void,
  onClose?: () => void,
  onCancel?: () => void,
}

export default function ({
  open,
  title,
  description,
  options,
  showCancel = true,
  onSelect = () => null,
  onCancel = () => null,
  onClose = () => null,
}: ActionSheetProps) {
  return (
    <Popup
      placement="bottom"
      open={open}
      onClose={onClose}
    >
      <View className={`${prefix}actionsheet`}>
        <View className={`${prefix}actionsheet-title`}>{title}</View>
        <View className={`${prefix}actionsheet-description`}>{description}</View>
        <View className={`${prefix}actionsheet-line`} />
        <View className={`${prefix}actionsheet-options`}>
          {
            options.map((t) => (
              <View key={t.value} onClick={() => onSelect(t)}>{t.label}</View>
            ))
          }
        </View>
        {
          showCancel ? <View className={`${prefix}actionsheet-line`} /> : null
        }
        {
          showCancel ? <View onClick={onCancel} className={`${prefix}actionsheet-cancel`}>取消</View> : null
        }
        <View
          style={{
            height: screenHeight - (safeArea?.bottom || 0),
            background: '#fff',
          }}
        />
      </View>
    </Popup>
  )
}
