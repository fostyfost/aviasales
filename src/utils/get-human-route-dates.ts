import { DEFAULT_LOCALE } from '../constants'

const options = {
  hour: '2-digit',
  minute: '2-digit',
}

export const getHumanRouteDates = (dateString: string, durationInMinutes: number): { from: string; to: string } => {
  const date = new Date(dateString)

  const from = date.toLocaleTimeString(DEFAULT_LOCALE, options)

  date.setUTCMinutes(durationInMinutes)

  const to = date.toLocaleTimeString(DEFAULT_LOCALE, options)

  return { from, to }
}
