import { DispatchType, State } from './index'

export const setLoading: DispatchType = ({ dispatch }, open: boolean) => {
  dispatch({
    toast: {
      type: 'loading',
      open,
      text: '加载中...',
    },
  })
}

export const setToast: DispatchType = (
  { dispatch },
  type: State['toast']['type'],
  message: string,
) => {
  dispatch({
    toast: {
      type,
      open: true,
      text: message,
    },
  })
}
