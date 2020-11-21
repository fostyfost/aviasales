import { DEFAULT_LOCALE } from '../constants'

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat(DEFAULT_LOCALE).format(price)
}
