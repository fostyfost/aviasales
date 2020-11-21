import React, { FC } from 'react'

import styles from './index.module.css'

interface Props {
  label: string
  onClick: (...args: any[]) => any
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button type='button' onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export { Button }
