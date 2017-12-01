import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

// Styles
import '../index.css'

// Components
import MainApp from '../components/MainApp'
import NoMatch from '../components/NoMatch'
import WCApp from '../components/WCApp'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={MainApp} />
      <Route path='/wintercamp' component={WCApp} />
      <Route path='/ilovewintercamp' component={WCApp} />
      <Route path='/wintercamp2018' component={WCApp} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App
