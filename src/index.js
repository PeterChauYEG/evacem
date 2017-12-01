import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// components
import App from './components/App'

// services
import registerServiceWorker from './registerServiceWorker'

// styles
import './index.css'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
)

registerServiceWorker()
