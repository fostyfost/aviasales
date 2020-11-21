import React, { FC } from 'react'

import { AVAILABLE_STOPS } from '../../constants'
import { useStoreStateContext } from '../../store'
import { AllFilters } from './all-filters'
import styles from './index.module.css'
import { SingleFilter } from './single-filter'

const SingleFilters: FC = () => {
  const stops = useStoreStateContext().stops

  return (
    <>
      {AVAILABLE_STOPS.map(value => (
        <SingleFilter key={value} value={value} checked={stops.includes(value)} />
      ))}
    </>
  )
}

const StopsFilters: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Количество пересадок</div>
      <AllFilters />
      <SingleFilters />
    </div>
  )
}

export { StopsFilters }
