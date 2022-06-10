import {
  FC, ReactNode, Children, useMemo, isValidElement,
} from 'react'
import { View } from '@tarojs/components'
import { SYSTEM } from '../../helpers/common'
import { useStore, emit } from '../../store'
import Toast from '../ui/toast'
import ActionSheet from '../ui/action-sheet'
import './index.less'

interface PageProps {
  children?: ReactNode,
  loading?: boolean,
  bottomGap?: boolean | string,
  disableScroll?: boolean,
  background?: string,
}

const { screenHeight, safeArea } = SYSTEM

const P: FC<PageProps> = ({
  children,
  loading,
  bottomGap = '#fff',
  disableScroll = false,
  background = '#fff',
}) => {
  const { toast, actionSheet, modal } = useStore('toast', 'actionSheet', 'modal')

  const pageChildren = useMemo(() => {
    let bottom: ReactNode
    const others: ReactNode[] = []

    Children.forEach(children, (child) => {
      if (!isValidElement(child)) {
        others.push(child)
        return
      }
      if (child.props.id === 'page-bottom') {
        bottom = child
        return
      }
      others.push(child)
    })

    return { bottom, others }
  }, [children])

  if (loading) {
    return (
      <View className="base-loading-wrap">
        <View className="base-loading-spin" />
      </View>
    )
  }

  return (
    <View style={{ background }} className="base-container">
      <View className="base-content">
        <View
          className="page-main"
          style={{ overflowY: disableScroll ? 'hidden' : 'auto' }}
        >
          {pageChildren.others}
        </View>
        <View className="page-bottom">
          {pageChildren.bottom}
        </View>
      </View>
      <View
        style={{
          height: bottomGap ? screenHeight - (safeArea?.bottom || 0) : 0,
          background: bottomGap as string,
        }}
      />
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => emit({ toast: { ...toast, message: '' } })}
      />
      {/* <Dialog
        open={dialog.open}
        onClose={() => emit({ dialog: { ...dialog, open: false } })}
      >
        {dialog.title ? <Dialog.Header>{dialog.title}</Dialog.Header> : null}
        <Dialog.Content>{dialog.content}</Dialog.Content>
        <Dialog.Actions>
          {
            dialog.showCancel
              ? <Button onClick={() => emit({ dialog: { ...dialog, open: false } })}>取消</Button>
              : null
          }
          <Button
            onClick={() => {
              emit({ dialog: { ...dialog, open: false, confirmed: true } })
            }}
          >
            确认
          </Button>
        </Dialog.Actions>
      </Dialog> */}
      <ActionSheet
        open={actionSheet.open}
        onSelect={(value) => {
          emit({ actionSheet: { ...actionSheet, open: false, value } })
        }}
        onClose={() => {
          emit({ actionSheet: { ...actionSheet, open: false } })
        }}
        onCancel={() => {
          emit({ actionSheet: { ...actionSheet, open: false } })
        }}
        title={actionSheet.title}
        options={actionSheet.options}
        description={actionSheet.description}
      />
    </View>
  )
}

export default P
