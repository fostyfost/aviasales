import { ActionType } from './action-types'
import { LoadingState } from './contracts/loading-state'
import { Sort } from './contracts/sort'
import { Ticket } from './contracts/ticket'

interface Action<T = any> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

export const ActionsMap = {
  addTickets(payload: Ticket[]): ActionWithPayload<ActionType.ADD_TICKETS, Ticket[]> {
    return { type: ActionType.ADD_TICKETS, payload }
  },
  setLoadingState(payload: LoadingState): ActionWithPayload<ActionType.SET_LOADING_STATE, LoadingState> {
    return { type: ActionType.SET_LOADING_STATE, payload }
  },
  setCurrentSort(payload: Sort): ActionWithPayload<ActionType.SET_CURRENT_SORT, Sort> {
    return { type: ActionType.SET_CURRENT_SORT, payload }
  },
  toggleStop(payload: number): ActionWithPayload<ActionType.TOGGLE_STOP, number> {
    return { type: ActionType.TOGGLE_STOP, payload }
  },
  toggleAllStops(): Action<ActionType.TOGGLE_ALL_STOPS> {
    return { type: ActionType.TOGGLE_ALL_STOPS }
  },
  setNextOffset(): Action<ActionType.SET_NEXT_OFFSET> {
    return { type: ActionType.SET_NEXT_OFFSET }
  },
}

export type ActionsUnion = ReturnType<typeof ActionsMap[keyof typeof ActionsMap]>
