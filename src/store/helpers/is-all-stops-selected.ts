import { AVAILABLE_STOPS_AS_STRING } from '../../constants'

export const isAllStopsSelected = (stops: number[]) => {
  return [...stops].sort().join(',') === AVAILABLE_STOPS_AS_STRING
}
