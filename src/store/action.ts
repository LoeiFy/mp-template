import { DispatchType, State } from './index'

export const setLoading: DispatchType = async ({ emit }, open: boolean) => {
  emit({
    toast: {
      type: 'loading',
      open,
      text: '加载中...',
    },
  })
}

export const setToast: DispatchType = async (
  { emit },
  params: {
    type: State['toast']['type'],
    message: string,
  },
) => {
  emit({
    toast: {
      type: params.type,
      open: true,
      text: params.message,
    },
  })
}
