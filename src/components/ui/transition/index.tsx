import { CSSTransition } from 'react-transition-group'
import { TransitionChildren } from 'react-transition-group/Transition'
import { prefix } from '../styles'
import './index.less'

interface TransitionProps {
  name: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right',
  in: boolean,
  timeout?: number,
  children: TransitionChildren,
}

export default function (props: TransitionProps) {
  return (
    <CSSTransition
      in={props.in}
      timeout={props.timeout || 300}
      unmountOnExit
      classNames={`${prefix}transition-${props.name}`}
    >
      {props.children}
    </CSSTransition>
  )
}
