import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';
import LoginForm from './loginLayout'

const Routes = () => (
  <Router>
     <div>
      <Route path="/login" component={LoginForm}/>
      <Route path = "/app" component={App}/>
    </div>
  </Router>
)

export default Routes