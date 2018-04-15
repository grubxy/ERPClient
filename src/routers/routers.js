import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Production from '../Production'
import Construction from '../Construction'
import StoreHouse from '../StoreHouse'
import Pay from '../Pay'
import Manager from '../Manager'
import LoginPage from '../containers/Login'
import BaseFlowData from '../containers/BaseFlowData'
import {
  Menu,
  Segment,
  Container,
  Image,
  Divider,
  List
} from 'semantic-ui-react'


const auth = {
  isAuthenticated: true
}

const Routes = () => (
  <Router>
     <div>
      <Menu fixed={'top'} inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
            />
            百汇管理系统
          </Menu.Item>
          <Menu.Item>
            <Link to="/production">生产配置</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/manage">管理</Link>
          </Menu.Item>
        </Container>
      </Menu>
      <Route path="/login" component={LoginPage}/>
      <Container style={{ marginTop: '7em' }}>
        <PrivateRoute path="/production" component={BaseFlowData}/>
        <PrivateRoute path="/manage" component={Manager}/>
      </Container>
      {/*
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Image centered size='mini' src='/logo.png'/>
          <List horizontal inverted divided link>
            <List.Item as='a' href='#'></List.Item>
          </List>
        </Container>
      </Segment>
      */}
    </div>
  </Router>
)

const PrivateRoute = ({
  component: Component,
  ...rest
}) => ( < Route { ...rest
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