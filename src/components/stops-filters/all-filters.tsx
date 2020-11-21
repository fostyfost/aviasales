import React, { FC, memo, useCallback, useMemo } from 'react'

import { useDispatch, useStoreStateContext } from '../../store'
import { ActionsMap } from '../../store/action-creators'
import { isAllStopsSelected } from '../../store/helpers/is-all-stops-selected'
import { Checkbox } from '../common/checkbox'

const AllFilters: FC = memo(() => {
  const dispatch = useDispatch()
  const stops = useStoreStateContext().stops

  const checked = useMemo(() => {
    return isAllStopsSelected(stops)
  }, [stops])

  const changeHandler = useCallback(() => {
    dispatch(ActionsMap.toggleAllStops())
  }, [dispatch])

  return <Checkbox id='stops-all' label='Все' onChange={changeHandler} checked={checked} />
})

export { AllFilters }
