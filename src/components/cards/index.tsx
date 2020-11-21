import React, { FC } from 'react'

import { useStoreStateContext } from '../../store'
import { LoadingState } from '../../store/contracts/loading-state'
import { ShowMoreButton } from '../show-more-button'
import { Card } from './card'
import { useTickets } from './hooks/useTickets'
import styles from './index.module.css'

const Cards: FC = () => {
  const state = useStoreStateContext()

  const tickets = useTickets(state)

  if (!tickets.length && state.loadingState === LoadingState.LOADED) {
    return <div className={styles.notFound}>Здесь слишком недоперефильтровано, давайте проветрим?</div>
  }

  return (
    <>
      <ul className={styles.cardsList}>
        {tickets.slice(0, state.offset).map(ticket => (
          <li key={ticket.id} className={styles.listItem}>
            <Card
              price={ticket.price}
              carrier={ticket.carrier}
              segmentTo={ticket.segmentTo}
              segmentBack={ticket.segmentBack}
            />
          </li>
        ))}
      </ul>
      {state.offset < tickets.length ? (
        <div className={styles.buttonContainer}>
          <ShowMoreButton />
        </div>
      ) : null}
    </>
  )
}

export { Cards }
