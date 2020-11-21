import { fireEvent, render, screen } from '@testing-library/react'
import React, { Dispatch } from 'react'

import { App } from './app'
import { StoreContext } from './store'
import { ActionsMap, ActionsUnion } from './store/action-creators'
import { LoadingState } from './store/contracts/loading-state'
import { Ticket } from './store/contracts/ticket'
import * as storeHelper from './store/helpers/get-tickets'

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

test('should render cards with provided state', () => {
  const spyOnGetTickets = jest.spyOn(storeHelper, 'getTickets')
  spyOnGetTickets.mockImplementationOnce(async (dispatch: Dispatch<ActionsUnion>) => {
    dispatch(ActionsMap.toggleAllStops())
    dispatch(ActionsMap.addTickets(tickets))
    dispatch(ActionsMap.setLoadingState(LoadingState.LOADED))
  })

  render(
    <StoreContext>
      <App />
    </StoreContext>,
  )

  expect(screen.getByText('38 006 Р')).toBeInTheDocument()
  expect(screen.getByText('45 694 Р')).toBeInTheDocument()

  expect(screen.getAllByAltText('S7').length).toBe(2)

  expect(screen.getAllByText('MOW – HKT').length).toBe(2)
  expect(screen.getAllByText('HKT – MOW').length).toBe(2)

  expect(screen.getByText('18:52 – 00:13')).toBeInTheDocument()
  expect(screen.getByText('07:39 – 23:00')).toBeInTheDocument()
  expect(screen.getByText('02:04 – 17:07')).toBeInTheDocument()
  expect(screen.getByText('01:24 – 05:26')).toBeInTheDocument()

  expect(screen.getByText('30ч 13м')).toBeInTheDocument()
  expect(screen.getByText('16ч 0м')).toBeInTheDocument()
  expect(screen.getByText('15ч 7м')).toBeInTheDocument()
  expect(screen.getByText('28ч 26м')).toBeInTheDocument()

  expect(screen.getByText('HKG, SHA, DXB')).toBeInTheDocument()
  expect(screen.getByText('DXB, BKK')).toBeInTheDocument()
  expect(screen.getByText('KUL, HKG')).toBeInTheDocument()
  expect(screen.getByText('DXB, BKK, IST')).toBeInTheDocument()
})

test('should filter', () => {
  const spyOnGetTickets = jest.spyOn(storeHelper, 'getTickets')
  spyOnGetTickets.mockImplementationOnce(async (dispatch: Dispatch<ActionsUnion>) => {
    dispatch(ActionsMap.toggleAllStops())
    dispatch(ActionsMap.addTickets(tickets))
    dispatch(ActionsMap.setLoadingState(LoadingState.LOADED))
  })

  render(
    <StoreContext>
      <App />
    </StoreContext>,
  )

  const checkbox = screen.getByLabelText('Все')

  expect(checkbox).toBeInTheDocument()
  // @ts-ignore
  expect(checkbox.checked).toBe(true)
  fireEvent.click(checkbox)
  // @ts-ignore
  expect(checkbox.checked).toBe(false)

  expect(screen.getByText(/недоперефильтровано/)).toBeInTheDocument()
})
