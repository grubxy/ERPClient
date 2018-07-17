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
  Calendar
} from '../components/Calendar'
import {
  addStaff,
  operateStaffModal,
  changeInputStaff,
  initStaffManage,
  activeStaffPage,
  searchStaff,
  searchSchedule,
  activeSchedulePage,
  searchTimeSalary,
  searchStaffSalary,
  activePageSalary
} from '../actions/staffmanage'

class StaffManage extends Component {
  componentDidMount = () => {
    const {
      initStaffManage,
      staffTable,
      scheduleTable,
      staffSalaryTable
    } = this.props

    initStaffManage(staffTable.size, scheduleTable.size, staffSalaryTable.size)
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
      onActiveSchedulePage,
      onStaffSalarySearchTime,
      onSalarySearch,
      onActiveSalaryPage
    } = this.props

    const panes = [{
      menuItem: '排产查询',
      render: () => {
        return (
          <Tab.Pane>
            <Input placeholder="员工" name='staff' icon='search' onChange={(e)=>onSearchSchedule(e.target, scheduleTable)}/>
          <MultiTable table={scheduleTable} onActivePage={onActiveSchedulePage}/>
        </Tab.Pane>
        )
      }
    }, {
      menuItem: '工资查询',
      render: () => {
        return (
          <Tab.Pane>
            <Form size='large'>
              <Form.Group>
                <Form.Field>
                    <Input placeholder='姓名' name='name' icon='search' onChange={(e)=>onSalarySearch(e.target, staffSalaryTable)}/>
                </Form.Field>
                <Form.Field>
                  <Calendar onChange={onStaffSalarySearchTime} moment={staffSalaryTable.search.moment} data={staffSalaryTable}/>
                </Form.Field>
            </Form.Group>
          </Form>
            <MultiTable table={staffSalaryTable} onActivePage={onActiveSalaryPage}/>
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
                  <Button color='teal' onClick={()=>onAddStaff(staffModal, staffTable)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
          <MultiTable table={staffTable} onActivePage={onActiveStaffPage}/>
        </Tab.Pane>
        )
      }
    }]

    return (
      <Container fluid style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>员工管理</Header.Content>
        </Header>
        <Divider hidden/>
        <Tab menu={{ color:'teal',secondary: true, pointing: true }} panes={panes}/>
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
  onActiveSchedulePage: activeSchedulePage,
  onStaffSalarySearchTime: searchTimeSalary,
  onSalarySearch: searchStaffSalary,
  onActiveSalaryPage: activePageSalary
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffManage)