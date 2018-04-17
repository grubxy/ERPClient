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

const store = {
  content: [],
  headers: {
    mcode: {
      title: '仓库名'
    },
    name: {
      title: '物料名'
    },
    counts: {
      title: '数量'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

const construction = {
  content: [],
  headers: {
    mcode: {
      title: '施工单号'
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
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}


export default class StoreHouse extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>仓储管理</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Header as='h4'>
        <Header.Content>待处理工单</Header.Content>
        </Header>
        <Search size='mini'/>
        <TableWithAction table={construction}/>
        <Divider hidden/>
        <Divider clearing/>
        <Header as='h4'>
          <Header.Content>仓储详情</Header.Content>
        </Header>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
               <Search size='mini'/>
            </Grid.Column>
            <Grid.Column>
                <Button size='small' content='入库' color='teal' icon='add'/>
                <Button size='small' content='出库' color='orange' icon='minus'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <TableWithAction table={store}/>
      </Container>
    )
  }

}