import './index.module.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'
import { StoreContext } from './store'

ReactDOM.render(
  <StoreContext>
    <App />
  </StoreContext>,
  document.getElementById('root'),
)
