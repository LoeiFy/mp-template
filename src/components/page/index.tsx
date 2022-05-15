import {
  FC, ReactNode, Children, useMemo, isValidElement, useEffect,
} from 'react'
import { View } from '@tarojs/components'
import {
  Loading, Toast, NavBar, ActionSheet,
} from '@antmjs/vantui'
import { useStore, emit } from '../../store'
import './index.less'

interface Header {
  title?: string,
  background?: string,
  color?: string,
}
interface PageProps {
  children?: ReactNode,
  loading?: boolean,
  bottomGap?: boolean | string,
  disableScroll?: boolean,
  header?: false | Header,
  background?: string,
}

const { screenHeight, safeArea } = wx.getSystemInfoSync()

const P: FC<PageProps> = ({
  children,
  loading,
  bottomGap = '#fff',
  disableScroll = false,
  header = false,
  background = '#fff',
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

  useEffect(() => {
    if (toast.open) {
      Toast.show({
        onClose: () => {
          emit({ toast: { ...toast, open: false } })
        },
        loadingType: 'spinner',
        message: toast.text,
        type: toast.type,
        forbidClick: toast.type === 'loading',
      })
    }
  }, [toast])

  if (loading) {
    return (
      <View className="base-loading-wrap">
        <Loading
          size={70}
          type="spinner"
          color="#1989fa"
          vertical
        >
          加载中...
        </Loading>
      </View>
    )
  }

  return (
    <View style={{ background }} className="base-container">
      {header ? <View style={{ height: safeArea.top }} /> : null }
      {
        header ? (
          <NavBar
            // style={{
            //   background: (header as Header).background || '#fff',
            //   color: (header as Header).color || '#323233',
            // }}
            title={(header as Header).title}
            leftArrow={pagesNum > 1}
            onClickLeft={onBack}
          />
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
      <Toast id="vanToast" />
      <ActionSheet
        show={actionSheet.open}
        onSelect={(node) => {
          emit({ actionSheet: { ...actionSheet, open: false, value: node.detail } })
        }}
        onClose={() => {
          emit({ actionSheet: { ...actionSheet, open: false } })
        }}
        onCancel={() => {
          emit({ actionSheet: { ...actionSheet, open: false } })
        }}
        title={actionSheet.header}
        actions={actionSheet.options}
        cancelText={actionSheet.cancel}
      >
        <View
          style={{
            height: bottomGap ? screenHeight - safeArea.bottom : 0,
            background: '#fff',
          }}
        />
      </ActionSheet>
    </View>
  )
}

export default P
