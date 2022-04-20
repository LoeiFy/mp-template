import Nycticorax, { Connect, Dispatch } from 'nycticorax'

export type State = {
  toast: {
    open: boolean,
    type?: 'loading' | 'success' | 'fail',
    text: string,
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
