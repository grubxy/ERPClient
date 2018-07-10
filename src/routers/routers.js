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

const FixMenu = () => (
  <Menu fixed={'top'} inverted>
    <Container fluid style={{padding:'0em 3em 0em 3em'}}>
      <Menu.Item as='a' header>
        <Image
        size = 'mini'
        src='/logo.png'
        style={{ marginRight: '1.5em' }}
        />
        百汇管理系统
      </Menu.Item>
      <Menu.Item>
        <Link to="/flow">生产流程</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/construction">工单总览</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/staff">员工管理</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/store">仓储管理</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/house">仓库配置</Link>
      </Menu.Item>
      {/*
      <Dropdown item simple text='仓储管理'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link style={{color:'black'}} to="/store">仓储管理</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link style={{color:'black'}} to="/house">仓库配置</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    */}
      <Menu.Item>
        <Link to="/data">生产配置</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/manage">系统管理</Link>
      </Menu.Item>
      <Menu.Item position='right'>
        <Link to ='/login'>退出</Link>
      </Menu.Item>
    </Container>
  </Menu>
)

const Home = () => (
  <div>
    <FixMenu/>
    <Container fluid style={{ marginTop: '7em',padding:'0em 3em 1em 3em' }}>
      <GlobalPortal/>
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