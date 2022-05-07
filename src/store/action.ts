import { DispatchType, State, dispatch } from './index'

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

export const showDialog: DispatchType = async (
  { emit },
  params: State['dialog'],
) => {
  emit({
    dialog: { ...params, open: true },
  })
}

export const showActionSheet: DispatchType = async (
  { emit },
  params: State['actionSheet'],
) => {
  emit({
    actionSheet: { ...params, open: true },
  })
}

export const $ = {
  async loading(open: boolean) {
    await dispatch(setLoading, open)
  },
  async dialog(params: Omit<State['dialog'], 'open'>) {
    await dispatch(showDialog, params)
  },
  async toast(message: string, type?: State['toast']['type']) {
    await dispatch(setToast, { type, message })
  },
}
