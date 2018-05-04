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

const construction = {
  content: [],
  headers: {
    mcode: {
      title: '姓名'
    },
    constructionid: {
      title: '施工单号'
    },
    productionid: {
      title: '生产批次'
    },
    product: {
      title: '产品名'
    },
    seq: {
      title: '工序'
    },
    dstCounts: {
      title: '待生产'
    },
    doingCounts: {
      title: '在生产'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

const salary = {
  content: [],
  headers: {
    mcode: {
      title: '姓名'
    },
    staff: {
      title: '工资'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}


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
      onAddStaff
    } = this.props

    const panes = [{
      menuItem: '排产查询',
      render: () => {
        return (
          <Tab.Pane>
          <MultiTable table={construction}/>
        </Tab.Pane>
        )
      }
    }, {
      menuItem: '工资查询',
      render: () => {
        return (
          <Tab.Pane>
        <Search size='mini'/>
        <MultiTable table={salary}/>
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
  staffTable: state.staffmanage.staffInfoTable
})

const mapDispatchToProps = {
  onStaffModal: operateStaffModal,
  onAddStaff: addStaff,
  onStaffChange: changeInputStaff,
  initStaffManage: initStaffManage
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffManage)