import React, {
  Component
} from 'react'

import {
  Container,
  Grid,
  Header,
  Icon,
  Button,
  Divider,
  Search,
  Modal,
  Form
} from 'semantic-ui-react'
import TableWithAction from '../components/TableWithAction'

const flows = {
  content: [],
  headers: {
    idProduction: {
      title: '生产批次'
    },
    productName: {
      title: '产品名称'
    },
    dstCounts: {
      title: '计划数目'
    },
    cmplCounts: {
      title: '完成数目'
    },
    errCounts: {
      title: '次品数目'
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

const seqInfo = {
  content: [],
  headers: {
    seqIndex: {
      title: '工序序号'
    },
    seqName: {
      title: '工序名称'
    },
    seqCost: {
      title: '单价'
    },
    dstCounts: {
      title: '待生产'

    },
    doingCounts: {
      title: '在生产'
    },
    cmplCounts: {
      title: '完工'
    },
    errCounts: {
      title: '次品'
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
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

export default class Flow extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
			    <Header as='h3'>
          			<Icon name='settings'/>
        		<Header.Content>生产流程</Header.Content>
        		</Header>
        		<Divider hidden/>
        		<Divider clearing/>
        		<Grid>
        			<Grid.Row columns={10}>
        			    <Grid.Column>
        					<Button size='small' content='流程' color='teal' icon='add'/>
        				</Grid.Column>
        				<Grid.Column>
        					<Search size='mini'/>
        				</Grid.Column>
        			</Grid.Row>
        				
        			<Grid.Row columns={1}>
   						<TableWithAction table={flows}/>
        			</Grid.Row>

        			<Grid.Row columns={2}>
        				<Grid.Column floated='right'>
        					<Button size='small' content='工单' color='teal' icon='add'/>
        				</Grid.Column>
        			</Grid.Row>

        			<Grid.Row columns={2}>
        				<Grid.Column>
        					<TableWithAction table={seqInfo}/>
        				</Grid.Column>
        				<Grid.Column>
        					<TableWithAction table={construction}/>
        				</Grid.Column>
        			</Grid.Row>

        		</Grid>
			</Container>
    )
  }
}