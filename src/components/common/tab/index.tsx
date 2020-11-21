import React, { FC } from 'react'

import styles from './index.module.css'

interface Props {
  id: string
  label: string
  name: string
  onChange: (...args: any[]) => any
  checked: boolean
}

const Tab: FC<Props> = ({ id, label, name, onChange, checked }) => {
  return (
    <>
      <input id={id} type='radio' name={name} onChange={onChange} checked={checked} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </>
  )
}

export { Tab }
