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
import {
  MultiTable
} from '../components/MultiTable'

const roles = [{
  key: 0,
  value: 0,
  text: '系统管理员'
}, {
  key: 1,
  value: 1,
  text: '流程管理员'
}, {
  key: 2,
  value: 2,
  text: '仓库管理员'
}]

const user = {
  content: [{
    username: 'admin',
    owner: '马云',
    role: '流程管理员',
    single_button: 'delete'
  }],
  headers: {
    username: {
      title: '账户名'
    },
    owner: {
      title: '所有者'
    },
    role: {
      title: '账户类型'
    },
    single_button: {
      title: ''
    }
  }
}

const panes = [{
  menuItem: '账户管理',
  render: () => {
    return (
      <Tab.Pane>
          <Button size='small' content='账户' color='teal' icon='add'/>
          <Modal open={false}>
          <Modal.Header>添加账户</Modal.Header>
          <Modal.Content>
            <Form size='large'>
              <Form.Group>
                <Form.Input label='账户名' name='username'/>
                <Form.Input label='密码' name='password'/>
                <Form.Dropdown label='权限' placeholder='role' search selection options={roles}/>
              </Form.Group>
              <Form.Group>
                <Form.Input label='使用者' name='owner'/>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button> 取消 </Button>
            <Button color='blue'> 确定 </Button>
          </Modal.Actions>
          </Modal>
          <MultiTable table={user}/>
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
        <Header.Content>系统管理</Header.Content>
        </Header>
         <Divider hidden/>
        <Divider clearing/>
        <Tab panes={panes}/>
      </Container>
    )
  }
}