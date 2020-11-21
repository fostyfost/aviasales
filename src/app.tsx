import React, { useEffect } from 'react'

import styles from './app.module.css'
import { Cards } from './components/cards'
import { Progress } from './components/progress'
import { SortControls } from './components/sort-controls'
import { StopsFilters } from './components/stops-filters'
import { useDispatch } from './store'
import { getTickets } from './store/helpers/get-tickets'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getTickets(dispatch)
  }, [dispatch])

  return (
    <>
      <Progress />
      <div className={styles.sidebar}>
        <StopsFilters />
      </div>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <SortControls />
        </div>
        <Cards />
      </div>
    </>
  )
}

export { App }
