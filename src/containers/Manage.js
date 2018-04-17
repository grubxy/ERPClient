import React, {
  Component
} from 'react'
import {
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Search,
  Button,
  Modal,
  Form,
  Tab
} from 'semantic-ui-react'
import TableWithAction from '../components/TableWithAction'

const staff = {
  content: [],
  headers: {
    mcode: {
      title: '员工'
    },
    name: {
      title: '电话号码'
    },
    status: {
      title: '在职状态'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

const user = {
  content: [],
  headers: {
    mcode: {
      title: '账户名'
    },
    name: {
      title: '账户类型'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

const panes = [{
  menuItem: '员工管理',
  render: () => {
    return (
      <Tab.Pane>
        <Button size='small' content='员工' color='teal' icon='add'/>
        <TableWithAction table={staff}/>
      </Tab.Pane>
    )
  }
}, {
  menuItem: '账户管理',
  render: () => {
    return (
      <Tab.Pane>
          <Button size='small' content='账户' color='teal' icon='add'/>
          <TableWithAction table={user}/>
        </Tab.Pane>
    )
  }
}]


export default class Manage extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>管理</Header.Content>
        </Header>
         <Divider hidden/>
        <Divider clearing/>
        <Tab panes={panes}/>
      </Container>
    )
  }
}