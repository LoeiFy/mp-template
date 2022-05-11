import {
  FC, ReactNode, Children, useMemo, isValidElement,
} from 'react'
import { View } from '@tarojs/components'
import {
  Toast, ActionSheet, Dialog, Button, Loading, Navbar,
} from '@taroify/core'
import { ArrowLeft } from '@taroify/icons'
import { useStore, emit } from '../../store'
import './index.less'

interface Header {
  title?: string,
  background?: string,
  color?: string,
  bordered?: boolean,
}
interface PageProps {
  children?: ReactNode,
  loading?: boolean,
  bottomGap?: boolean | string,
  disableScroll?: boolean,
  header?: false | Header,
}

const { screenHeight, safeArea } = wx.getSystemInfoSync()

const P: FC<PageProps> = ({
  children,
  loading,
  bottomGap = '#fff',
  disableScroll = false,
  header = false,
}) => {
  const { toast, actionSheet, dialog } = useStore('toast', 'actionSheet', 'dialog')
  const pagesNum = getCurrentPages().length

  const onBack = () => {
    wx.navigateBack()
  }

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
      {header ? <View style={{ height: safeArea.top }} /> : null }
      {
        header ? (
          <Navbar
            style={{
              background: (header as Header).background || '#fff',
              color: (header as Header).color || '#323233',
            }}
            title={(header as Header).title}
            bordered={(header as Header).bordered}
          >
            {
            pagesNum > 1 ? (
              <Navbar.NavLeft onClick={onBack}>
                <ArrowLeft
                  style={{
                    fontSize: 16,
                    color: (header as Header).color || '#323233',
                  }}
                />
              </Navbar.NavLeft>
            ) : null
            }
          </Navbar>
        ) : null
      }
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
        <View
          style={{
            height: bottomGap ? screenHeight - safeArea.bottom : 0,
          }}
        />
      </ActionSheet>
    </View>
  )
}

export default P
