import { FC } from 'react'
import { View } from '@tarojs/components'
import {
  Toast, ActionSheet, Dialog, Button,
} from '@taroify/core'
import { useStore, emit } from '../store'

const P: FC = ({ children }) => {
  const { toast, actionSheet, dialog } = useStore('toast', 'actionSheet', 'dialog')

  return (
    <View>
      {children}
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
            onClick={() => emit({ dialog: { ...dialog, open: false, confirmed: true } })}
          >
            确认
          </Button>
        </Dialog.Actions>
      </Dialog>
      <Toast
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
        onSelect={(v) => emit({
          actionSheet: { ...actionSheet, value: v.value, open: false },
        })}
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
