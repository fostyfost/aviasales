import React, { FC } from 'react'

import styles from './index.module.css'

interface Props {
  id: string
  label: string
  onChange: (...args: any[]) => any
  checked: boolean
}

const Checkbox: FC<Props> = ({ id, label, onChange, checked }) => {
  return (
    <>
      <input id={id} type='checkbox' onChange={onChange} checked={checked} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </>
  )
}

export { Checkbox }
