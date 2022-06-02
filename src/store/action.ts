import {
  DispatchType, State, dispatch, triggers,
} from './index'

const setLoading: DispatchType = async ({ emit }, open: boolean) => {
  emit({
    toast: {
      type: 'loading',
      message: open ? '加载中...' : '',
    },
  })
}

const setToast: DispatchType = async (
  { emit },
  params: {
    type?: 'success' | 'fail',
    message: string,
  },
) => {
  emit({
    toast: {
      type: params.type,
      message: params.message,
    },
  })
}

const showDialog: DispatchType = async (
  { emit },
  params: State['modal'],
) => {
  emit({
    modal: { ...params, open: true },
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
  async modal(
    params: Omit<State['modal'], 'open'>,
    callback?: (confirmed?: boolean, hash?: string) => void,
  ) {
    triggers.modal = callback
    await dispatch(showDialog, params)
  },
  async toast(message: string, type?: 'success' | 'fail') {
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
