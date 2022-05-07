import Nycticorax, { Connect, Dispatch } from 'nycticorax'

export type State = {
  toast: {
    open: boolean,
    type?: 'loading' | 'success' | 'fail',
    text: string,
  },
  dialog: {
    hash?: string,
    open: boolean,
    title?: string,
    content: string,
    showCancel?: boolean,
  },
  actionSheet: {
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
} = new Nycticorax<State>()

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
