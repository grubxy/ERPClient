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
  Button,
  Modal,
  Form,
  Input
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'
import {
  initBaseData,
  addProduct,
  searchProduct,
  activeProductPage,
  actionProduct,
  addSeq,
  actionSeq,
  addStaff,
  delStaff,
  operateModal,
  changeInput,
  selectProduct,
  selectSeq,
  dropdownStaff
} from '../actions/basedata'

class BaseFlowData extends Component {
  componentDidMount = () => {
    const {
      initBaseData,
      productTable
    } = this.props

    initBaseData(productTable.size)
  }

  render = () => {

    const {
      modal,
      onModal,
      onProAdd,
      onProSelect,
      onSeqSelect,
      onSeqAdd,
      onStaffAdd,
      onProAction,
      onSeqAction,
      productTable,
      seqTable,
      staffTable,
      onChange,
      onDropDown,
      onSearch,
      onActivePage
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
          <Grid.Row>
          <Grid.Column>
            <Button content='产品' color='teal' icon='add' onClick={()=>onModal({product:true})}/>
            <Input icon={<Icon name='search' color='teal' inverted circular link />} placeholder='产品名' name='name' onChange={(e)=>onSearch(e.target, productTable)}/>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Modal open={modal.product}>
                <Modal.Header>添加产品</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="产品名" name='productName' onChange={(e)=>onChange(e.target)}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onModal({product:false})}> 取消 </Button>
                  <Button color='blue' onClick={()=>onProAdd(modal, productTable)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={productTable} onAction={onProAction} onSelect={onProSelect} onActivePage={onActivePage}/>
            </Grid.Column>
            <Grid.Column>
              <Modal open={modal.seq}>
                <Modal.Header>添加工序</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Input label="工序名" name='seqName' onChange={(e)=>onChange(e.target)}/>
                      <Form.Input label="工序单价" name='seqPrice' onChange={(e)=>onChange(e.target)}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onModal({seq:false})}> 取消 </Button>
                  <Button color='blue' onClick={()=>onSeqAdd(modal)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <MultiTable table={seqTable} onAction={onSeqAction} onSelect={onSeqSelect}/>
            </Grid.Column>
            <Grid.Column>
              <Modal open={modal.staff}>
                <Modal.Header>添加默认员工</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Dropdown placeholder='员工' name='staffId' search selection options={modal.dropDown} onChange={(e, {name, value})=>onDropDown(name, value)}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>onModal({staff:false})}> 取消 </Button>
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
  onSearch: searchProduct,
  onActivePage: activeProductPage,
  onChange: changeInput,
  onProSelect: selectProduct,
  onSeqSelect: selectSeq,
  onProAdd: addProduct,
  onProAction: actionProduct,
  onSeqAdd: addSeq,
  onSeqAction: actionSeq,
  onStaffAdd: addStaff,
  onStaffDel: delStaff,
  onModal: operateModal,
  onDropDown: dropdownStaff
}


export default connect(mapStateToProps, mapDispatchToProps)(BaseFlowData)