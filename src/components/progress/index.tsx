import './index.module.css'

import NProgress from 'nprogress'
import { FC, memo, useEffect } from 'react'

import { useStoreStateContext } from '../../store'
import { LoadingState } from '../../store/contracts/loading-state'

const Progress: FC = memo(() => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    return () => {
      NProgress.remove()
    }
  }, [])

  const isLoading = useStoreStateContext().loadingState === LoadingState.LOADING

  useEffect(() => {
    if (isLoading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [isLoading])

  return null
})

export { Progress }
