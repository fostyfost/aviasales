import { SearchResponse } from './contracts/search-response'

export const getSearchId = async (): Promise<string> => {
  const response = await fetch('https://front-test.beta.aviasales.ru/search')
  const data: SearchResponse = await response.json()
  return data.searchId
}
