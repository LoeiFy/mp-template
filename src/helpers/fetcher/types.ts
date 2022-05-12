import { Configs } from '@podiceps/core'
import { ApiNames } from './apis'

export type Response = {
  info: Record<string, any>,
  results: Record<string, any>[],
}

export type Apis = Configs<ApiNames>
