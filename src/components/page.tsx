import { FC } from 'react'
import { View } from '@tarojs/components'
import { Toast, ActionSheet } from '@taroify/core'
import { useStore, dispatch } from '../store'

const P: FC = ({ children }) => {
  const { toast, actionSheet } = useStore('toast', 'actionSheet')

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
      <ActionSheet
        open={actionSheet.open}
        onSelect={(v) => dispatch({
          actionSheet: { ...actionSheet, value: v.value, open: false },
        })}
        onClose={() => {
          dispatch({ actionSheet: { ...actionSheet, open: false } })
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
              onClick={() => dispatch({ actionSheet: { ...actionSheet, open: false } })}
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
