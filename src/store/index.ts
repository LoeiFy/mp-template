import Nycticorax, { Connect, Dispatch } from 'nycticorax'

export type State = {
  toast: {
    open: boolean,
    type?: 'loading' | 'success' | 'fail',
    text: string,
  },
  dialog: {
    confirmed?: boolean,
    hash?: string,
    open: boolean,
    title?: string,
    content: string,
    showCancel?: boolean,
  },
  actionSheet: {
    value?: string | number,
    hash?: string,
    open: boolean,
    cancel?: string,
    header?: string,
    options: {
      value: string | number,
      name: string,
      disabled?: boolean,
    }[],
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
  if (key === 'dialog') {
    const { confirmed, hash } = next as State['dialog']
    if (triggers.dialog) {
      triggers.dialog(confirmed, hash)
      delete triggers.dialog
    }
  }
})

export const initStore = () => {
  createStore({
    toast: {
      open: false,
      text: '',
    },
    dialog: {
      open: false,
      content: '',
    },
    actionSheet: {
      open: false,
      options: [],
    },
  })
}
