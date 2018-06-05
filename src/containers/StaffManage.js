import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
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
  addStaff,
  operateStaffModal,
  changeInputStaff,
  initStaffManage
} from '../actions/staffmanage'

class StaffManage extends Component {
  componentWillMount = () => {
    const {
      initStaffManage
    } = this.props

    initStaffManage()
  }

  render = () => {

    const {
      staffTable,
      staffModal,
      onStaffModal,
      onStaffChange,
      onAddStaff,
      scheduleTable,
      staffSalaryTable
    } = this.props

    const panes = [{
      menuItem: '排产查询',
      render: () => {
        return (
          <Tab.Pane>
          <MultiTable table={scheduleTable}/>
        </Tab.Pane>
        )
      }
    }, {
      menuItem: '工资查询',
      render: () => {
        return (
          <Tab.Pane>
        <Search size='mini'/>
        <MultiTable table={staffSalaryTable}/>
      </Tab.Pane>
        )
      }
    }, {
      menuItem: '人员管理',
      render: () => {
        return (
          <Tab.Pane>
          <Button size='small' content='员工' color='teal' icon='add' onClick={()=>onStaffModal({staff:true})}/>
          <Modal open={staffModal.staff}>
                <Modal.Header>添加员工</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="姓名" name='staffName' onChange={(e)=>onStaffChange(e.target)}/>
                      <Form.Input label="电话号码" name='staffPhone' onChange={(e)=>onStaffChange(e.target)}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onStaffModal({staff:false})}> 取消 </Button>
                  <Button color='blue' onClick={()=>onAddStaff(staffModal)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
          <MultiTable table={staffTable}/>
        </Tab.Pane>
        )
      }
    }]

    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>员工管理</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Tab panes={panes}/>
      </Container>
    )
  }

}

const mapStateToProps = (state) => ({
  staffModal: state.staffmanage.staffModal,
  staffTable: state.staffmanage.staffInfoTable,
  scheduleTable: state.staffmanage.staffScheduleTable,
  staffSalaryTable: state.staffmanage.staffSalaryTable
})

const mapDispatchToProps = {
  onStaffModal: operateStaffModal,
  onAddStaff: addStaff,
  onStaffChange: changeInputStaff,
  initStaffManage: initStaffManage
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffManage)