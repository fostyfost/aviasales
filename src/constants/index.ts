import { Sort } from '../store/contracts/sort'

export const DELAY_LENGTH = 100

export const MAX_TRIES = 5

export const ALLOWED_SORTS = Object.values(Sort)

export const MAX_STOPS = 3

export const AVAILABLE_STOPS = Array.from({ length: MAX_STOPS + 1 }).map((_, index) => index)

export const AVAILABLE_STOPS_AS_STRING = AVAILABLE_STOPS.join(',')

export const DEFAULT_OFFSET_STEP = 5

export const StopsValueToLabelMap: Record<string | number, string> = {
  '0': 'Без пересадок',
  '1': '1 пересадка',
  '2': '2 пересадки',
  '3': '3 пересадки',
}

export const DEFAULT_LOCALE = 'ru-RU'
