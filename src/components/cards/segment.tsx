import React, { FC, memo } from 'react'

import { StopsValueToLabelMap } from '../../constants'
import { getHumanDuration } from '../../utils/get-human-duration'
import { getHumanRouteDates } from '../../utils/get-human-route-dates'
import cardStyles from './card.module.css'
import styles from './segment.module.css'

interface Props {
  date: string
  duration: number
  origin: string
  destination: string
  stops: string[]
}

const Segment: FC<Props> = memo(({ date, duration, origin, destination, stops }) => {
  const routeDates = getHumanRouteDates(date, duration)
  const humanDuration = getHumanDuration(duration)

  return (
    <div className={cardStyles.row}>
      <div className={cardStyles.col}>
        <div className={`${styles.text} ${styles.key}`}>
          {origin} &ndash; {destination}
        </div>
        <div className={`${styles.text} ${styles.value}`}>
          {routeDates.from} &ndash; {routeDates.to}
        </div>
      </div>

      {humanDuration ? (
        <div className={cardStyles.col}>
          <div className={`${styles.text} ${styles.key}`}>В пути</div>
          <div className={`${styles.text} ${styles.value}`}>{humanDuration}</div>
        </div>
      ) : null}

      <div className={cardStyles.col}>
        <div className={`${styles.text} ${styles.key}`}>{StopsValueToLabelMap[stops.length]}</div>
        {stops.length ? <div className={`${styles.text} ${styles.value}`}>{stops.join(', ')}</div> : null}
      </div>
    </div>
  )
})

export { Segment }
