import React, { FC, memo, useCallback } from 'react'

import { useDispatch } from '../../store'
import { ActionsMap } from '../../store/action-creators'
import { Button } from '../common/button'
import styles from './index.module.css'

const ShowMoreButton: FC = memo(() => {
  const dispatch = useDispatch()

  const clickHandler = useCallback(() => {
    dispatch(ActionsMap.setNextOffset())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Button onClick={clickHandler} label={'test'}>
        Показать ещё
      </Button>
    </div>
  )
})

export { ShowMoreButton }
