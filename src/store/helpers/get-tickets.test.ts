import { Dispatch } from 'react'

import { TicketsResponse } from '../../api/contracts/tickets-response'
import * as searchIdApi from '../../api/get-search-id'
import * as ticketsApi from '../../api/get-tickets-with-search-id'
import { ActionsMap, ActionsUnion } from '../action-creators'
import { LoadingState } from '../contracts/loading-state'
import { Ticket } from '../contracts/ticket'
import { getTickets } from './get-tickets'

const ticketsResponse: TicketsResponse = {
  stop: true,
  tickets: [
    {
      price: 38006,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-11-19T15:52:00.000Z',
          stops: ['HKG', 'SHA', 'DXB'],
          duration: 1813,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-12-09T04:39:00.000Z',
          stops: ['DXB', 'BKK'],
          duration: 960,
        },
      ],
    },
    {
      price: 45694,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2020-11-18T23:04:00.000Z',
          stops: ['KUL', 'HKG'],
          duration: 907,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2020-12-08T22:24:00.000Z',
          stops: ['DXB', 'BKK', 'IST'],
          duration: 1706,
        },
      ],
    },
  ],
}

const tickets: Ticket[] = [
  {
    carrier: 'S7',
    id: '1_0',
    price: 38006,
    segmentBack: {
      date: '2020-12-09T04:39:00.000Z',
      destination: 'MOW',
      duration: 960,
      origin: 'HKT',
      stops: ['DXB', 'BKK'],
    },
    segmentTo: {
      date: '2020-11-19T15:52:00.000Z',
      destination: 'HKT',
      duration: 1813,
      origin: 'MOW',
      stops: ['HKG', 'SHA', 'DXB'],
    },
    totalDuration: 2773,
  },
  {
    carrier: 'S7',
    id: '1_1',
    price: 45694,
    segmentBack: {
      date: '2020-12-08T22:24:00.000Z',
      destination: 'MOW',
      duration: 1706,
      origin: 'HKT',
      stops: ['DXB', 'BKK', 'IST'],
    },
    segmentTo: {
      date: '2020-11-18T23:04:00.000Z',
      destination: 'HKT',
      duration: 907,
      origin: 'MOW',
      stops: ['KUL', 'HKG'],
    },
    totalDuration: 2613,
  },
]

test('should set tickets state', async () => {
  const dispatch = jest.fn() as Dispatch<ActionsUnion>

  const spyOnGetSearchId = jest.spyOn(searchIdApi, 'getSearchId')
  spyOnGetSearchId.mockImplementationOnce(() => {
    return Promise.resolve('test-search-id')
  })

  const spyOnGetTicketsWithSearchId = jest.spyOn(ticketsApi, 'getTicketsWithSearchId')
  spyOnGetTicketsWithSearchId.mockImplementationOnce(() => Promise.resolve(ticketsResponse))

  await getTickets(dispatch)

  expect(dispatch).toHaveBeenCalledTimes(3)
  expect(dispatch).toHaveBeenNthCalledWith(1, ActionsMap.setLoadingState(LoadingState.LOADING))
  expect(dispatch).toHaveBeenNthCalledWith(2, ActionsMap.addTickets(tickets))
  expect(dispatch).toHaveBeenNthCalledWith(3, ActionsMap.setLoadingState(LoadingState.LOADED))
})
