import { FC, ReactNode } from 'react'
import { View } from '@tarojs/components'
import {
  Toast, ActionSheet, Dialog, Button, Loading,
} from '@taroify/core'
import { useStore, emit } from '../../store'
import './index.less'

interface PageProps {
  children?: ReactNode,
  loading?: boolean,
  bottomGap?: boolean | string,
  disableScroll?: boolean,
}

const { screenHeight, safeArea } = wx.getSystemInfoSync()

const P: FC<PageProps> = ({
  children,
  loading,
  bottomGap = '#fff',
  disableScroll = false,
}) => {
  const { toast, actionSheet, dialog } = useStore('toast', 'actionSheet', 'dialog')

  if (loading) {
    return (
      <View className="base-loading-wrap">
        <Loading
          size={40}
          className="base-loading-color"
          type="spinner"
          direction="vertical"
        >
          加载中...
        </Loading>
      </View>
    )
  }

  return (
    <View className="base-container">
      <View
        className="base-content"
        style={{
          overflowY: disableScroll ? 'hidden' : 'auto',
        }}
      >
        {children}
      </View>
      <View
        style={{
          height: bottomGap ? screenHeight - safeArea.bottom : 0,
          background: bottomGap as string,
        }}
      />
      <Dialog
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
      </Dialog>
      <Toast
        // @ts-ignore
        backdrop
        type={toast.type}
        open={toast.open}
        position={toast.type ? undefined : 'bottom'}
        onClose={() => {
          if (toast.type !== 'loading') {
            emit({ toast: { ...toast, open: false } })
          }
        }}
      >
        {toast.text}
      </Toast>
      <ActionSheet
        open={actionSheet.open}
        onSelect={(node) => {
          emit({ actionSheet: { ...actionSheet, open: false, value: node.value } })
        }}
        onClose={() => {
          emit({ actionSheet: { ...actionSheet, open: false } })
        }}
      >
        {
          actionSheet.header ? <ActionSheet.Header>{actionSheet.header}</ActionSheet.Header> : null
        }
        {
          actionSheet.options.map((t) => (
            <ActionSheet.Action
              value={t.value}
              name={t.name}
              disabled={t.disabled}
              style={t.disabled ? { color: '#979798' } : {}}
            />
          ))
        }
        {
          actionSheet.cancel ? (
            <ActionSheet.Button
              onClick={() => emit({ actionSheet: { ...actionSheet, open: false } })}
              type="cancel"
            >
              {actionSheet.cancel}
            </ActionSheet.Button>
          ) : null
        }
      </ActionSheet>
    </View>
  )
}

export default P
