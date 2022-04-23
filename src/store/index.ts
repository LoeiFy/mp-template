import Nycticorax, { Connect, Dispatch } from 'nycticorax'

export type State = {
  toast: {
    open: boolean,
    type?: 'loading' | 'success' | 'fail',
    text: string,
  },
  actionSheet: {
    unique: string,
    open: boolean,
    cancel?: string,
    value?: string | number,
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
  useStore,
  connect,
} = new Nycticorax<State>()

export const initStore = () => {
  createStore({
    toast: {
      open: false,
      text: '',
    },
    actionSheet: {
      open: false,
      unique: '',
      options: [],
    },
  })
}
