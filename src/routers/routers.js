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
import {
  Menu,
  Segment,
  Container
} from 'semantic-ui-react'


const auth = {
  isAuthenticated: true
}

const Routes = () => (
  <Router>
     <div>
      <Segment>
      <Container>
      <Menu secondary>
        <Menu.Item>
          <Link to="/production">生批次总览</Link>
        </Menu.Item>
         <Menu.Item>
          <Link to="/construction">施工总览</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/pay">工资总览</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/store">仓库总览</Link>
        </Menu.Item>
         <Menu.Item>
          <Link to="/manager">管理信息</Link>
        </Menu.Item>
      </Menu>
      </Container>
      </Segment>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute path="/production" component={Production}/>
      <PrivateRoute path="/construction" component={Construction}/>
      <PrivateRoute path="/pay" component={Pay}/>
      <PrivateRoute path="/store" component={StoreHouse}/>
      <PrivateRoute path="/manager" component={Manager}/>
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