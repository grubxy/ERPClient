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
  Form
} from 'semantic-ui-react'
import TableWithAction from '../components/TableWithAction'

const construction = {
  content: [],
  headers: {
    mcode: {
      title: '施工单号'
    },
    dstCounts: {
      title: '计划'
    },
    cmplCounts: {
      title: '完工'
    },
    errCounts: {
      title: '次品'
    },
    staff: {
      title: '工人'
    },
    status: {
      title: '工单状态'
    },
    srcMaterial: {
      title: '需要物料'
    },
    dstMaterial: {
      title: '生成物料'
    },
    managerName: {
      title: '制单人'
    },
    time: {
      title: '制单时间'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

export default class Construction extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>工单总览</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Search size='mini'/>
        <TableWithAction table={construction}/>
      </Container>
    )
  }

}