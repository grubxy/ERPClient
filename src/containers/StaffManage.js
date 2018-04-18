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

const panes = [{
  menuItem: '排产查询',
  render: () => {
    return (
      <Tab.Pane>
          <TableWithAction table={construction}/>
        </Tab.Pane>
    )
  }
}, {
  menuItem: '工资查询',
  render: () => {
    return (
      <Tab.Pane>
        <Search size='mini'/>
        <TableWithAction table={salary}/>
      </Tab.Pane>
    )
  }
}, {
  menuItem: '人员管理',
  render: () => {
    return (
      <Tab.Pane>
          <Button size='small' content='员工' color='teal' icon='add'/>
          <TableWithAction table={staff}/>
        </Tab.Pane>
    )
  }
}]

export default class StaffManage extends Component {
  componentWillMount = () => {}

  render = () => {
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