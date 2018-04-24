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
  Form
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'
import {
  initBaseData,
  addProduct,
  actionProduct,
  addSeq,
  actionSeq,
  addStaff,
  delStaff,
  operateModal,
  changeInput,
  onSelect
} from '../actions/basedata'

const staff = [{
  key: '1',
  text: '小王',
  value: '1'
}, {
  key: '2',
  text: '小陈',
  value: '2'
}]

class BaseFlowData extends Component {
  componentWillMount = () => {
    const {
      initBaseData
    } = this.props

    initBaseData()
  }

  render = () => {

    const {
      modal,
      onModal,
      onProAdd,
      onSelect,
      onSeqAdd,
      onStaffAdd,
      onProAction,
      onSeqAction,
      onStaffDel,
      productTable,
      seqTable,
      staffTable
    } = this.props

    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>生产配置</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Grid divided='vertically'>
          <Grid.Row columns={6}>
            <Grid.Column>
            <Search size='mini'/>
            </Grid.Column>
            <Grid.Column>
            <Button size='small' content='产品' color='teal' icon='add' onClick={()=>onModal('product',true)}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Modal open={modal.product}>
                <Modal.Header>添加产品</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="产品名" name='productName'/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onModal('product', false)}> 取消 </Button>
                  <Button color='blue' onClick={()=>onProAdd(modal)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={productTable}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal open={modal.seq}>
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
                  <Button onClick={()=>onModal('seq', false)}> 取消 </Button>
                  <Button color='blue' onClick={()=>onSeqAction(modal)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={seqTable}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal open={modal.staff}>
                <Modal.Header>添加默认员工</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Dropdown placeholder='员工' name='staffId' search selection options={staff}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onModal('staff', false)}> 取消 </Button>
                  <Button color='blue' onClick={()=>onStaffAdd(modal)}> 确定 </Button>
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

const mapStateToProps = (state) => ({
  modal: state.basedata.basedataModal,
  productTable: state.basedata.productTable,
  seqTable: state.basedata.seqTable,
  staffTable: state.basedata.staffTable
})

const mapDispatchToProps = {
  initBaseData: initBaseData,
  onChange: changeInput,
  onSelect: onSelect,
  onProAdd: addProduct,
  onProAction: actionProduct,
  onSeqAdd: addSeq,
  onSeqAction: actionSeq,
  onStaffAdd: addStaff,
  onStaffDel: delStaff,
  onModal: operateModal
}


export default connect(mapStateToProps, mapDispatchToProps)(BaseFlowData)