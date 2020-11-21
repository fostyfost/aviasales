import { fetchWithRetry } from '../utils/fetch-with-retry'
import { TicketsResponse } from './contracts/tickets-response'

export const getTicketsWithSearchId = async (searchId: string): Promise<TicketsResponse> => {
  const response = await fetchWithRetry(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
  return await response.json()
}
