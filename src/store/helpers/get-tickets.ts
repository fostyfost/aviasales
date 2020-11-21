import { Dispatch } from 'react'

import { getSearchId } from '../../api/get-search-id'
import { getTicketsWithSearchId } from '../../api/get-tickets-with-search-id'
import { DELAY_LENGTH } from '../../constants'
import { delay } from '../../utils/delay'
import { ActionsMap, ActionsUnion } from '../action-creators'
import { LoadingState } from '../contracts/loading-state'

export const getTickets = async (dispatch: Dispatch<ActionsUnion>) => {
  let stop = false

  dispatch(ActionsMap.setLoadingState(LoadingState.LOADING))

  let loop = 0

  const generateId = (index: number): string => {
    return `${loop}_${index}`
  }

  try {
    const searchId = await getSearchId()

    while (!stop) {
      const response = await getTicketsWithSearchId(searchId)

      loop += 1

      dispatch(
        ActionsMap.addTickets(
          response.tickets.map((rawTicket, index) => {
            const { segments, ...rest } = rawTicket

            const [segmentTo, segmentBack] = segments

            return {
              ...rest,
              id: generateId(index),
              // Заранее посчитаем общую продолжительность
              // полётов для более быстрой и удобной сортировки
              totalDuration: segmentTo.duration + segmentBack.duration,
              segmentTo,
              segmentBack,
            }
          }),
        ),
      )

      stop = response.stop

      if (response.stop) {
        dispatch(ActionsMap.setLoadingState(LoadingState.LOADED))
      } else {
        await delay(DELAY_LENGTH)
      }
    }
  } catch (error) {
    console.warn(error)
    dispatch(ActionsMap.setLoadingState(LoadingState.LOADED))
  }
}
