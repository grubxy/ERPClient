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
  Dropdown,
  Form
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'
import {
  actionStoreHouseConstTable,
  storeHouseConstrConfirm,
  initStoreHouse,
  operateConstructionModal,
  selectStoreHouseConstTable,
  storeHouseConstrDropdown,
  operateHouseOriginModal,
  inputHouseOrigin,
  dropDownHouseOrigin,
  dropDownSelectHouseOrigin,
  operateHouseOriginModalOpen,
  confirmHouseOriginModal
} from '../actions/storehouse'


class StoreHouse extends Component {
  componentWillMount = () => {
    const {
      initStoreHouse
    } = this.props

    initStoreHouse()
  }

  render = () => {

    const {
      onConstructionAction,
      storeHouseConstrConfirm,
      constructionTable,
      operateConstructionModal,
      constructionModal,
      selectConstruction,
      storeHouseConstrDropdown,
      houseOriginTable,
      houseOriginModal,
      operateHouseOriginModal,
      inputHouseOrigin,
      dropDownHouseOrigin,
      dropDownSelectHouseOrigin,
      operateHouseOriginModalOpen,
      confirmHouseOriginModal,
      dropDowns
    } = this.props

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
        <Grid>
          <Grid.Row columns={6}>
          <Grid.Column>
            <Search size='mini'/>
          </Grid.Column>
          <Grid.Column>
            <Button.Group>
              <Button size='small' color='teal'onClick={()=>selectConstruction(1)}>等待材料出库</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(3)}>完工待入库</Button>
            </Button.Group>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal open={constructionModal.constructionOut}>
          <Modal.Header>确认已出库</Modal.Header>
          <Modal.Content>是否确认该工单已出库?</Modal.Content>
          <Modal.Actions>
          <Button onClick={()=>operateConstructionModal({constructionOut:false})}> 取消 </Button>
          <Button color='blue' onClick={()=>storeHouseConstrConfirm(constructionModal, 'out')}> 确定 </Button>
          </Modal.Actions>
        </Modal>
        <Modal open={constructionModal.constructionIn}>
          <Modal.Header>确认已入库</Modal.Header>
          {/*
          <Modal.Content>是否确认该工单已入库?</Modal.Content>
        */}
          <Modal.Content>
              <Dropdown placeholder='入库仓库' name='idHouse' search selection options={constructionModal.houseDropDown} onChange={(e, {name, value})=>storeHouseConstrDropdown(name, value)}/>
          </Modal.Content>
          <Modal.Actions>
          <Button onClick={()=>operateConstructionModal({constructionIn:false})}> 取消 </Button>
          <Button color='blue' onClick={()=>storeHouseConstrConfirm(constructionModal, 'in')}> 确定 </Button>
          </Modal.Actions>
        </Modal>
        <MultiTable table={constructionTable} onAction={onConstructionAction}/>
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
            <Button.Group>
                <Button size='small' content='入库' color='teal' icon='add' onClick={()=>operateHouseOriginModalOpen('input')}/>
                <Button size='small' content='出库' color='orange' icon='minus' onClick={()=>operateHouseOriginModalOpen('output')}/>
            </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal open={houseOriginModal.input}>
        <Modal.Header>入库</Modal.Header>
        <Modal.Content>
          <Form size='large'>
            <Form.Group>
              <Form.Dropdown placeholder='仓库' label="仓库" name='idHouseInput' search selection options={dropDowns.house} onChange={(e, {name, value})=>dropDownHouseOrigin(name, value)}/>
              <Form.Input label="物料名称" name='materialName' onChange={(e)=>inputHouseOrigin(e.target)}/>
              <Form.Input label="入库数量" name='inputCounts' onChange={(e)=>inputHouseOrigin(e.target)}/>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
        <Button onClick={()=>operateHouseOriginModal({input:false})}> 取消 </Button>
        <Button color='blue' onClick={()=>confirmHouseOriginModal('input', houseOriginModal)}> 确定 </Button>
        </Modal.Actions>
        </Modal>
         <Modal open={houseOriginModal.output}>
        <Modal.Header>出库</Modal.Header>
        <Modal.Content>
          <Form size='large'>
            <Form.Group>
              <Form.Dropdown placeholder='仓库' label="仓库" name='idHouseOutput' search selection options={dropDowns.house} onChange={(e, {name, value})=>dropDownSelectHouseOrigin(name, value)}/>
              <Form.Dropdown placeholder='物料' label="物料" name='idOrigin' search selection options={dropDowns.origins} onChange={(e, {name, value})=>dropDownHouseOrigin(name, value)}/>
              <Form.Input label="出库数量" name='outCounts' onChange={(e)=>inputHouseOrigin(e.target)}/>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
        <Button onClick={()=>operateHouseOriginModal({output:false})}> 取消 </Button>
        <Button color='blue' onClick={()=>confirmHouseOriginModal('output', houseOriginModal)}> 确定 </Button>
        </Modal.Actions>
        </Modal>
        <MultiTable table={houseOriginTable}/>
      </Container>
    )
  }
}


const mapStateToProps = (state) => ({
  constructionModal: state.storehouse.storeConstrModal,
  constructionTable: state.storehouse.storeConstrTable,
  houseOriginTable: state.storehouse.houseOriginTable,
  houseOriginModal: state.storehouse.houseOriginModal,
  dropDowns: state.storehouse.dropDowns
})

const mapDispatchToProps = {
  initStoreHouse: initStoreHouse,
  selectConstruction: selectStoreHouseConstTable,
  onConstructionAction: actionStoreHouseConstTable,
  storeHouseConstrConfirm: storeHouseConstrConfirm,
  operateConstructionModal: operateConstructionModal,
  storeHouseConstrDropdown: storeHouseConstrDropdown,
  operateHouseOriginModal: operateHouseOriginModal,
  dropDownHouseOrigin: dropDownHouseOrigin,
  dropDownSelectHouseOrigin: dropDownSelectHouseOrigin,
  inputHouseOrigin: inputHouseOrigin,
  operateHouseOriginModalOpen: operateHouseOriginModalOpen,
  confirmHouseOriginModal: confirmHouseOriginModal
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHouse)