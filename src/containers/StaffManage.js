import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Header,
  Container,
  Icon,
  Divider,
  Button,
  Modal,
  Form,
  Tab,
  Input
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'
import {
  addStaff,
  operateStaffModal,
  changeInputStaff,
  initStaffManage,
  activeStaffPage,
  searchStaff,
  searchSchedule,
  activeSchedulePage
} from '../actions/staffmanage'

class StaffManage extends Component {
  componentDidMount = () => {
    const {
      initStaffManage,
      staffTable,
      scheduleTable
    } = this.props

    initStaffManage(staffTable.size, scheduleTable.size)
  }

  render = () => {

    const {
      staffTable,
      staffModal,
      onStaffModal,
      onStaffChange,
      onAddStaff,
      scheduleTable,
      staffSalaryTable,
      onActiveStaffPage,
      onSearchStaff,
      onSearchSchedule,
      onActiveSchedulePage
    } = this.props

    const panes = [{
      menuItem: '排产查询',
      render: () => {
        return (
          <Tab.Pane>
          <Input placeholder="员工" name="staff" icon='search' onChange={(e)=>onSearchSchedule(e.target, scheduleTable)}/>
          <MultiTable table={scheduleTable} onActivePage={onActiveSchedulePage}/>
        </Tab.Pane>
        )
      }
    }, {
      menuItem: '工资查询',
      render: () => {
        return (
          <Tab.Pane>
            <MultiTable table={staffSalaryTable}/>
          </Tab.Pane>
        )
      }
    }, {
      menuItem: '人员管理',
      render: () => {
        return (
          <Tab.Pane>
          <Form size='large'>
          <Form.Group inline>
            <Form.Field>
            <Button content='员工' color='teal' icon='add' onClick={()=>onStaffModal({staff:true})}/>
            </Form.Field>
            <Form.Field>
            <Input placeholder='姓名' icon='search' name='name' onChange={(e)=>onSearchStaff(e.target, staffTable)}/>
            </Form.Field>
          </Form.Group>
          </Form>
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
                  <Button color='blue' onClick={()=>onAddStaff(staffModal, staffTable)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
          <MultiTable table={staffTable} onActivePage={onActiveStaffPage}/>
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
  initStaffManage: initStaffManage,
  onActiveStaffPage: activeStaffPage,
  onSearchStaff: searchStaff,
  onSearchSchedule: searchSchedule,
  onActiveSchedulePage: activeSchedulePage
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffManage)