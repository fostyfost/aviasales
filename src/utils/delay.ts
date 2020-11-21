import { DELAY_LENGTH } from '../constants'

export function delay(delayLength: number = DELAY_LENGTH): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delayLength)
  })
}
