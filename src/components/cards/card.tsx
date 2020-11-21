import React, { FC, memo } from 'react'

import { TicketSegment } from '../../store/contracts/ticket'
import { buildIataSrc } from '../../utils/build-iata-src'
import { formatPrice } from '../../utils/format-price'
import styles from './card.module.css'
import { Segment } from './segment'

interface Props {
  price: number
  carrier: string
  segmentTo: TicketSegment
  segmentBack: TicketSegment
}

const Card: FC<Props> = memo(({ price, carrier, segmentTo, segmentBack }) => {
  return (
    <article className={styles.container}>
      <div className={`${styles.row} ${styles.head}`}>
        <div className={styles.col}>
          <span className={styles.price}>{formatPrice(price)} Р</span>
        </div>
        <div className={`${styles.col} ${styles.image}`}>
          <img src={buildIataSrc(carrier)} title={carrier} alt={carrier} width={99} height={36} loading='lazy' />
        </div>
      </div>
      <div className={styles.segmentsContainer}>
        <Segment
          date={segmentTo.date}
          duration={segmentTo.duration}
          origin={segmentTo.origin}
          destination={segmentTo.destination}
          stops={segmentTo.stops}
        />
        <Segment
          date={segmentBack.date}
          duration={segmentBack.duration}
          origin={segmentBack.origin}
          destination={segmentBack.destination}
          stops={segmentBack.stops}
        />
      </div>
    </article>
  )
})

export { Card }
