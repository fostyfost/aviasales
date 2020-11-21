import { LoadingState } from './loading-state'
import { Sort } from './sort'
import { Ticket } from './ticket'

export interface State {
  tickets: Ticket[]
  loadingState: LoadingState
  currentSort: Sort
  stops: number[]
  offset: number
}
