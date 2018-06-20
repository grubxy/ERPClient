import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import PropTypes from 'prop-types'
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
import {
  changeUserInput,
  dropdownUserInput,
  operateUserModal,
  addUser,
  delUser,
  initUser,
  activeUserPage
} from '../actions/manage'

const roles = [{
  key: 1,
  value: 2,
  text: '流程管理员'
}, {
  key: 2,
  value: 3,
  text: '仓库管理员'
}]

class Manage extends Component {
  componentDidMount = () => {
    const {
      onInit,
      table
    } = this.props

    onInit(table.size)
  }

  render = () => {

    const {
      onChange,
      onSelect,
      onModel,
      onAdd,
      onDel,
      model,
      table,
      onActiveUserPage
    } = this.props

    const panes = [{
      menuItem: '账户管理',
      render: () => {
        return (
          <Tab.Pane>
            <Button size='small' content='账户' color='teal' icon='add' onClick={()=>onModel(true)}/>
            <Modal open={model.open}>
            <Modal.Header>添加账户</Modal.Header>
            <Modal.Content>
              <Form size='large'>
                <Form.Group>
                  <Form.Input label='账户名' name='username' onChange={(e)=>onChange(e.target)}/>
                  <Form.Input label='密码' name='password' onChange={(e)=>onChange(e.target)}/>
                  <Form.Dropdown label='权限' placeholder='role' name='role' search selection options={roles} onChange={(e, {name, value})=>onSelect(name, value)}/>
                </Form.Group>
                <Form.Group>
                  <Form.Input label='使用者' name='owner'onChange={(e)=>onChange(e.target)}/>
                </Form.Group>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={()=>onModel(false)}> 取消 </Button>
              <Button color='blue' onClick={()=>onAdd(model, table)}> 确定 </Button>
            </Modal.Actions>
            </Modal>
            <MultiTable table={table} onAction={onDel} onActivePage={onActiveUserPage}/>
          </Tab.Pane>
        )
      }
    }]

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

const mapStateToProps = (state) => ({
  model: state.manage.userModal,
  table: state.manage.userTable
})

const mapDispatchToProps = {
  onChange: changeUserInput,
  onSelect: dropdownUserInput,
  onModel: operateUserModal,
  onAdd: addUser,
  onDel: delUser,
  onInit: initUser,
  onActiveUserPage: activeUserPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage)