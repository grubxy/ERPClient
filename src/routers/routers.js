import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import {
  connect
} from 'react-redux'

import {
  Menu,
  Segment,
  Container,
  Image,
  Divider,
  List,
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
        <Link to="/flow">生产流程</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/construction">工单总览</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/staff">员工管理</Link>
      </Menu.Item>
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
      <Menu.Item>
        <Link to="/data">生产配置</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/manage">系统管理</Link>
      </Menu.Item>
    </Container>
  </Menu>
)

class Routes extends React.Component {
  componentWillMount = () => {

  }

  render = () => {
    const {
      authentication
    } = this.props

    return (
      <Router>
         <div>
          {authentication.loggedIn && <FixMenu/>}
          <Route path="/login" component={Login}/>
          <Container style={{ marginTop: '7em' }}>
            <GlobalPortal/>
            <PrivateRoute path="/data" component={BaseFlowData}/>
            <PrivateRoute path="/flow" component={Flow}/>
            <PrivateRoute path="/construction" component={Construction}/>
            <PrivateRoute path="/store" component={StoreHouse}/>
            <PrivateRoute path="/house" component={HouseInfo}/>
            <PrivateRoute path="/staff" component={StaffManage}/>
            <PrivateRoute path="/manage" component={Manage}/>
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
  }

}

const PrivateRoute = ({
component: Component,
...rest
}) => (<Route { ...rest
  }
  render = {
    props => (
      true ? (
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
  authentication: state.authentication
})

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(Routes)