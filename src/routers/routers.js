import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom'
import {
  connect
} from 'react-redux'

import {
  Menu,
  Container,
  Image
} from 'semantic-ui-react'


import BaseFlowData from '../containers/BaseFlowData'
import Flow from '../containers/Flow'
import Construction from '../containers/Construction'
import StoreHouse from '../containers/StoreHouse'
import HouseInfo from '../containers/HouseInfo'
import StaffManage from '../containers/StaffManage'
import Manage from '../containers/Manage'
import GlobalPortal from '../containers/GlobalPortal'
import Login from '../containers/Login'
import FixMenu from '../containers/FixMenu'

const Home = () => (
  <div>
    <FixMenu/>
    <Container fluid style={{ marginTop: '7em',padding:'0em 3em 1em 3em' }}>
      <Route path="/data" component={BaseFlowData}/>
      <Route path="/flow" component={Flow}/>
      <Route path="/construction" component={Construction}/>
      <Route path="/store" component={StoreHouse}/>
      <Route path="/house" component={HouseInfo}/>
      <Route path="/staff" component={StaffManage}/>
      <Route path="/manage" component={Manage}/>
    </Container>
  </div>
)


class Routes extends React.Component {
  componentDidMount = () => {

  }

  render = () => {
    return (
      <Router>
         <div>
         <GlobalPortal/>
         <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/" component={Home}/>
         </Switch>
        </div>
      </Router>
    )
  }

}

const PrivateRoute = ({
component: Component,
...rest
}) => (<Route exact { ...rest
  }
  render = {
    props => (
       localStorage.getItem('token') ? (
        <Component {...props}/>): (<Redirect to = {
          {
            pathname: '/login',
            state: {
              from: props.location
            }
          }
        }
        />)
)
}
/>
)

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)