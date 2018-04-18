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
import {
  MultiTable
} from '../components/MultiTable'

const productTable = {
  content: [{
    mcode: '00000001',
    name: '小刀',
    single_button: 'delete'
  }],
  headers: {
    mcode: {
      title: '产品编号'
    },
    name: {
      title: '产品名称'
    },
    single_button: {
      title: ''
    }
  },
  selectable: true,
  showFooter: true,
  number: 0,
  size: 10,
  totalPages: 0
}

const seqTable = {
  content: [{
    mcode: 1,
    name: '洗',
    cost: 0.0002,
    single_button: 'delete'
  }, {
    mcode: 2,
    name: '刷',
    cost: 0.0001,
    single_button: 'delete'
  }],
  headers: {
    mcode: {
      title: '序号'
    },
    name: {
      title: '工序名'
    },
    cost: {
      title: '制作单价'
    },
    single_button: {
      title: ''
    }
  },
  selectable: true,
  showFooter: false,
  number: 0,
  size: 10,
  totalPages: 0
}

const staffTable = {
  content: [{
    mcode: '小王',
    single_button: 'delete'
  }],
  headers: {
    mcode: {
      title: '员工'
    },
    single_button: {
      title: ''
    }
  },
  selectable: true,
  showFooter: false,
  number: 0,
  size: 10,
  totalPages: 0
}

const staff = [{
  key: '1',
  text: '小王',
  value: '1'
}, {
  key: '2',
  text: '小陈',
  value: '2'
}]

export default class BaseFlowData extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>生产配置</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column>
            <Search size='mini'/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Button size='small' content='产品' color='teal' icon='add'/>
              <Modal open={false}>
                <Modal.Header>添加产品</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="产品名" name='productName'/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button> 取消 </Button>
                  <Button color='blue'> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={productTable}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Button size='small' content='工序' color='teal' icon='add'/>
              <Modal open={false}>
                <Modal.Header>添加工序</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="工序名" name='seqName'/>
                      <Form.Input label="工序单价" name='seqPrice'/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button> 取消 </Button>
                  <Button color='blue'> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={seqTable}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Button size='small' content='员工' color='teal' icon='add'/>
              <Modal open={false}>
                <Modal.Header>添加默认员工</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Dropdown placeholder='员工' name='staffId' search selection options={staff}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button> 取消 </Button>
                  <Button color='blue'> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={staffTable}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}