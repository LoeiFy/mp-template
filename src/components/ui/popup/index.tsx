import { ReactNode } from 'react'
import { View } from '@tarojs/components'
import Transition from '../transition'
import { prefix } from '../styles'
import './index.less'

interface PopupProps {
  open: boolean,
  background?: string,
  onClose?: () => void,
  placement?: 'center' | 'bottom',
  children: ReactNode,
}

export default function ({
  open,
  onClose = () => null,
  background = 'rgba(0, 0, 0, .5)',
  placement = 'center',
  children,
}: PopupProps) {
  const transitionNames = {
    center: 'fade',
    bottom: 'slide-up',
  }

  return (
    <View>
      <Transition
        name="fade"
        in={open}
      >
        <View
          style={{ background }}
          className={`${prefix}popup`}
          onClick={onClose}
        />
      </Transition>
      <Transition
        name={transitionNames[placement] as 'fade'}
        in={open}
      >
        <View
          className={`${prefix}popup-${placement}`}
        >
          {children}
        </View>
      </Transition>
    </View>
  )
}
