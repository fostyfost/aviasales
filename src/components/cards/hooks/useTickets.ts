import { useMemo } from 'react'

import { Sort } from '../../../store/contracts/sort'
import { State } from '../../../store/contracts/state'
import { Ticket } from '../../../store/contracts/ticket'

export const useTickets = (state: State) => {
  return useMemo(() => {
    const filteredTickets = Object.values(state.tickets).filter((ticket: Ticket): boolean => {
      return (
        state.stops.includes(ticket.segmentTo.stops.length) && state.stops.includes(ticket.segmentBack.stops.length)
      )
    })

    if (state.currentSort === Sort.CHEAPEST) {
      return filteredTickets.sort((left, right) => left.price - right.price)
    }

    if (state.currentSort === Sort.FASTEST) {
      return filteredTickets.sort((left, right) => left.totalDuration - right.totalDuration)
    }

    return filteredTickets
  }, [state.currentSort, state.stops, state.tickets])
}
