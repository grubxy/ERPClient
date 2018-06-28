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
  Image,
  Dropdown
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
    <Container fluid>
      <Menu.Item as='a' header>
        <Image
        size='mini'
        src='/logo.png'
        style={{ marginRight: '1.5em' }}
        />
        百汇管理系统
      </Menu.Item>
      <Menu.Item>
        <Link to="/home/flow">生产流程</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/home/construction">工单总览</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/home/staff">员工管理</Link>
      </Menu.Item>
      <Dropdown item simple text='仓储管理'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link style={{color:'black'}} to="/home/store">仓储管理</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link style={{color:'black'}} to="/home/house">仓库配置</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Link to="/home/data">生产配置</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/home/manage">系统管理</Link>
      </Menu.Item>
    </Container>
  </Menu>
)

const Home = () => (
  <div>
    <FixMenu/>
    <Container fluid style={{ marginTop: '7em',padding:'0em 3em 1em 3em' }}>
      <GlobalPortal/>
      <Route path="/home/data" component={BaseFlowData}/>
      <Route path="/home/flow" component={Flow}/>
      <Route path="/home/construction" component={Construction}/>
      <Route path="/home/store" component={StoreHouse}/>
      <Route path="/home/house" component={HouseInfo}/>
      <Route path="/home/staff" component={StaffManage}/>
      <Route path="/home/manage" component={Manage}/>
    </Container>
  </div>
)


class Routes extends React.Component {
  componentWillMount = () => {

  }

  render = () => {
    const {
      loggedIn
    } = this.props

    return (
      <Router>
         <div>
         <Switch>
          <Route exact path="/" component={Login}/>
          <PrivateRoute path="/home" component={Home} isLoggin={loggedIn}/>
          <Redirect to ="/"/>
         </Switch>
        </div>
      </Router>
    )
  }

}

const PrivateRoute = ({
component: Component,
isLoggin: isLoggin,
...rest
}) => (<Route exact { ...rest
  }
  render = {
    props => (
      isLoggin ? (
        <Component {...props}/>): (<Redirect to = {
          {
            pathname: '/',
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