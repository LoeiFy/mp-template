import Nycticorax, { Connect, Dispatch } from 'nycticorax'

interface Option {
  value: string | number,
  label: string,
  [key: string]: any,
}

export type State = {
  toast: {
    type?: 'loading' | 'success' | 'fail',
    message: string,
  },
  modal: {
    confirmed?: boolean,
    hash?: string,
    open: boolean,
    title?: string,
    message: string,
    showCancel?: boolean,
    loading?: boolean,
  },
  actionSheet: {
    value?: Option,
    hash?: string,
    open: boolean,
    title?: string,
    description?: string,
    showCancel?: boolean,
    options: Option[],
  },
}

export type ConnectProps = Connect<State>

export type DispatchType = Dispatch<State>

export const {
  createStore,
  dispatch,
  emit,
  useStore,
  connect,
  subscribe,
  getStore,
} = new Nycticorax<State>()

export const triggers = {} as Record<string, ((...params: any) => void) | undefined>

subscribe(([key]) => {
  if (key === 'toast') {
    return
  }

  const next = getStore()[key]
  if (next.open) {
    return
  }
  if (key === 'actionSheet') {
    const { value, hash } = next as State['actionSheet']
    if (triggers.actionSheet) {
      triggers.actionSheet(value, hash)
      delete triggers.actionSheet
    }
  }
  if (key === 'modal') {
    const { confirmed, hash } = next as State['modal']
    if (triggers.modal) {
      triggers.modal(confirmed, hash)
      delete triggers.modal
    }
  }
})

export const initStore = () => {
  createStore({
    toast: {
      message: '',
    },
    modal: {
      open: false,
      message: '',
    },
    actionSheet: {
      open: false,
      options: [],
    },
  })
}
