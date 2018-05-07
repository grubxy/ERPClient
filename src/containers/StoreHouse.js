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
  Dropdown
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
  storeHouseConstrDropdown
} from '../actions/storehouse'

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
      storeHouseConstrDropdown
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
                <Button size='small' content='入库' color='teal' icon='add'/>
                <Button size='small' content='出库' color='orange' icon='minus'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <MultiTable table={store}/>
      </Container>
    )
  }

}


const mapStateToProps = (state) => ({
  constructionModal: state.storehouse.storeConstrModal,
  constructionTable: state.storehouse.storeConstrTable,
})

const mapDispatchToProps = {
  initStoreHouse: initStoreHouse,
  selectConstruction: selectStoreHouseConstTable,
  onConstructionAction: actionStoreHouseConstTable,
  storeHouseConstrConfirm: storeHouseConstrConfirm,
  operateConstructionModal: operateConstructionModal,
  storeHouseConstrDropdown: storeHouseConstrDropdown
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHouse)