import React, { createContext, Dispatch, FC, useContext, useReducer } from 'react'

import { DEFAULT_OFFSET_STEP } from '../constants'
import { ActionsUnion } from './action-creators'
import { LoadingState } from './contracts/loading-state'
import { Sort } from './contracts/sort'
import { State } from './contracts/state'
import { reducer } from './reducer'

const initialState: State = {
  tickets: [],
  loadingState: LoadingState.NEVER,
  currentSort: Sort.CHEAPEST,
  stops: [0],
  offset: DEFAULT_OFFSET_STEP,
}

const StoreStateContext = createContext<State | undefined>(undefined)
const StoreDispatchContext = createContext<Dispatch<ActionsUnion> | undefined>(undefined)

const StoreContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreDispatchContext.Provider value={dispatch}>
      <StoreStateContext.Provider value={state}>{children}</StoreStateContext.Provider>
    </StoreDispatchContext.Provider>
  )
}

const useStoreStateContext = () => {
  const context = useContext(StoreStateContext)

  if (context === undefined) {
    throw new Error('`useStoreStateContext` must be used within a `StoreStateContext`')
  }

  return context
}

const useDispatch = () => {
  const dispatch = useContext(StoreDispatchContext)

  if (dispatch === undefined) {
    throw new Error('`useDispatch` must be used within a `StoreDispatchContext`')
  }

  return dispatch
}

export { StoreContext, useDispatch, useStoreStateContext }
