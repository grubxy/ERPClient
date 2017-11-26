import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import App from '../App';
import LoginPage from '../containers/Login'

const auth = {
  isAuthenticated: true
}

const Routes = () => (
  <Router>
     <div>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute path="/app" component={App}/>
    </div>
  </Router>
)

const PrivateRoute = ({
  component: Component,
  ...rest
}) => ( < Route {...rest
  }
  render = {
    props => (
      auth.isAuthenticated ? (
        <Component {...props}/>
      ) : ( < Redirect to = {
          {
            pathname: '/login',
            state: {
              from: props.location
            }
          }
        }
        />
      )
    )
  }
  />
)

export default Routes