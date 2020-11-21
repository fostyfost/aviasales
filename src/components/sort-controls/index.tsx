import React, { FC } from 'react'

import { ALLOWED_SORTS } from '../../constants'
import { useStoreStateContext } from '../../store'
import styles from './index.module.css'
import { SortButton } from './sort-button'

const SortControls: FC = () => {
  const currentSort = useStoreStateContext().currentSort

  return (
    <div className={styles.container}>
      {ALLOWED_SORTS.map(value => (
        <SortButton key={value} value={value} checked={value === currentSort} />
      ))}
    </div>
  )
}

export { SortControls }
