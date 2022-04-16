import Nycticorax, { Connect as CT } from 'nycticorax'

type State = {
  name: string,
  showToast: boolean,
}

export type Connect = CT<State>

export const {
  createStore,
  dispatch,
  useStore,
  connect,
} = new Nycticorax<State>()
