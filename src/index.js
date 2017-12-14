import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as firebase from 'firebase'

// components
import App from './components/App'

// services
import registerServiceWorker from './registerServiceWorker'

// styles
import './index.css'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
)

registerServiceWorker()

// initialize firebase
firebase.initializeApp(config)
