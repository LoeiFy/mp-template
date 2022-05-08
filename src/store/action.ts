import {
  DispatchType, State, dispatch, triggers,
} from './index'

const setLoading: DispatchType = async ({ emit }, open: boolean) => {
  emit({
    toast: {
      type: 'loading',
      open,
      text: '加载中...',
    },
  })
}

const setToast: DispatchType = async (
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

const showDialog: DispatchType = async (
  { emit },
  params: State['dialog'],
) => {
  emit({
    dialog: { ...params, open: true },
  })
}

const showActionSheet: DispatchType = async (
  { emit },
  params: State['actionSheet'],
) => {
  emit({
    actionSheet: { ...params, open: true },
  })
}

export default {
  async loading(open: boolean) {
    await dispatch(setLoading, open)
  },
  async dialog(
    params: Omit<State['dialog'], 'open'>,
    callback?: (confirmed?: boolean, hash?: string) => void,
  ) {
    triggers.dialog = callback
    await dispatch(showDialog, params)
  },
  async toast(message: string, type?: State['toast']['type']) {
    await dispatch(setToast, { type, message })
  },
  async actionsheet(
    params: Omit<State['actionSheet'], 'open'>,
    callback?: (value?: string | number, hash?: string) => void,
  ) {
    triggers.actionSheet = callback
    await dispatch(showActionSheet, params)
  },
}
