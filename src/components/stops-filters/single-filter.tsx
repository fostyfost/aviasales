import React, { FC, memo, useCallback } from 'react'

import { StopsValueToLabelMap } from '../../constants'
import { useDispatch } from '../../store'
import { ActionsMap } from '../../store/action-creators'
import { Checkbox } from '../common/checkbox'

const SingleFilter: FC<{ value: number; checked: boolean }> = memo(({ value, checked }) => {
  const dispatch = useDispatch()

  const changeHandler = useCallback(() => {
    dispatch(ActionsMap.toggleStop(value))
  }, [dispatch, value])

  return (
    <Checkbox id={`stops-${value}`} label={StopsValueToLabelMap[value]} onChange={changeHandler} checked={checked} />
  )
})

export { SingleFilter }
