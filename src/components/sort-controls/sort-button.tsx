import React, { FC, memo, useCallback } from 'react'

import { useDispatch } from '../../store'
import { ActionsMap } from '../../store/action-creators'
import { Sort } from '../../store/contracts/sort'
import { Tab } from '../common/tab'

const ValueToLabelMap = {
  [Sort.CHEAPEST]: 'Самый дешевый',
  [Sort.FASTEST]: 'Самый быстрый',
}

const SortButton: FC<{ value: Sort; checked: boolean }> = memo(({ value, checked }) => {
  const dispatch = useDispatch()

  const changeHandler = useCallback(() => {
    dispatch(ActionsMap.setCurrentSort(value))
  }, [dispatch, value])

  return (
    <Tab id={`sort-${value}`} label={ValueToLabelMap[value]} name='sort' onChange={changeHandler} checked={checked} />
  )
})

export { SortButton }
