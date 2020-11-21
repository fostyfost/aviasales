import { Reducer } from 'react'

import { AVAILABLE_STOPS, DEFAULT_OFFSET_STEP } from '../constants'
import { toggleArrayValue } from '../utils/toggle-array-value'
import { ActionsUnion } from './action-creators'
import { ActionType } from './action-types'
import { State } from './contracts/state'
import { isAllStopsSelected } from './helpers/is-all-stops-selected'

export const reducer: Reducer<State, ActionsUnion> = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TICKETS: {
      return { ...state, tickets: state.tickets.concat(action.payload) }
    }

    case ActionType.SET_LOADING_STATE: {
      return { ...state, loadingState: action.payload }
    }

    case ActionType.SET_CURRENT_SORT: {
      return { ...state, currentSort: action.payload, offset: DEFAULT_OFFSET_STEP }
    }

    case ActionType.TOGGLE_STOP: {
      return { ...state, offset: DEFAULT_OFFSET_STEP, stops: toggleArrayValue<number>(state.stops, action.payload) }
    }

    case ActionType.TOGGLE_ALL_STOPS: {
      return { ...state, offset: DEFAULT_OFFSET_STEP, stops: isAllStopsSelected(state.stops) ? [] : AVAILABLE_STOPS }
    }

    case ActionType.SET_NEXT_OFFSET: {
      return { ...state, offset: state.offset + DEFAULT_OFFSET_STEP }
    }

    default: {
      return state
    }
  }
}
