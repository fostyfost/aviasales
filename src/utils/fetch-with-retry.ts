import { DELAY_LENGTH, MAX_TRIES } from '../constants'
import { delay } from './delay'

export const fetchWithRetry = async (
  url: string,
  delayLength = DELAY_LENGTH,
  maxTries = MAX_TRIES,
): Promise<Response> => {
  try {
    const response = await fetch(url)

    if (maxTries === 1 || response.status < 400) {
      return response
    }

    await delay(delayLength)

    return await fetchWithRetry(url, delayLength, maxTries - 1)
  } catch (err) {
    if (maxTries === 1) {
      throw err
    }

    await delay(delayLength)

    return await fetchWithRetry(url, delayLength, maxTries - 1)
  }
}
