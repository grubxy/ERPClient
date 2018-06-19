import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'

import {
  initFlow,
  addProduction,
  selectProduction,
  actionProduction,
  addConstruction,
  actionConstruction,
  completeConstruction,
  operateModal,
  openProductionModal,
  changeInput,
  dropDown,
  dropDownSeq,
  activeProductionPage,
  searchProduction
} from '../actions/flow'

import {
  Container,
  Grid,
  Header,
  Icon,
  Button,
  Divider,
  Search,
  Modal,
  Input,
  Form
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'

class Flow extends Component {
  componentWillMount = () => {
    const {
      initFlow,
      flowTable
    } = this.props

    initFlow(flowTable.size)
  }

  render = () => {
    const {
      modal,
      flowTable,
      seqinfoTable,
      constructionTable,
      addProduction,
      selectProduction,
      actionProduction,
      onSearchProduction,
      onActivePageProduction,
      addConstruction,
      actionConstruction,
      completeConstruction,
      operateModal,
      openProductionModal,
      dropDown,
      changeInput,
      dropDownSeq,
      onActivePage
    } = this.props

    return (
      <Container style={{marginTop:'3em'}}>
			    <Header as='h3'>
          			<Icon name='settings'/>
        		<Header.Content>生产流程</Header.Content>
        		</Header>
        		<Divider hidden/>
        		<Divider clearing/>
        		<Grid>
        			<Grid.Row>
              <Grid.Column>
                <Modal open={modal.flow}>
                <Modal.Header>添加生产流程</Modal.Header>
                <Modal.Content>
                  <Form size='large'>
                    <Form.Group>
                      <Form.Dropdown placeholder='产品' label="产品" name='productId' search selection options={modal.dropDownProduct} onChange={(e, {name, value})=>dropDown(name, value)}/>
                      <Form.Input label="计划生产数" name='flowDst' onChange={(e)=>changeInput(e.target)}/>
                    </Form.Group>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={()=>operateModal({flow:false})}> 取消 </Button>
                  <Button color='blue' onClick={()=>addProduction(modal, flowTable)}> 确定 </Button>
                </Modal.Actions>
              </Modal>
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <Button content='流程' color='teal' icon='add' onClick={()=>openProductionModal(modal)}/>
                  </Form.Field>
                  <Form.Field>
        					 <Input placeholder='生产批次' name='id' onChange={(e)=>onSearchProduction(e.target, flowTable)}/>
        			    </Form.Field>
                  <Form.Field>
                    <Input icon='search' iconPosition='right' placeholder='产品名称' name='name' onChange={(e)=>onSearchProduction(e.target, flowTable)}/>
                  </Form.Field>
                </Form.Group>
              </Form>
              </Grid.Column>
              </Grid.Row>
        				
        			<Grid.Row>
              <Grid.Column>
   						<MultiTable table={flowTable} onSelect={selectProduction} onAction={actionProduction} onActivePage={onActivePageProduction}/>
        			</Grid.Column>
              </Grid.Row>

        			<Grid.Row columns={2}>
        				<Grid.Column>
        					<MultiTable table={seqinfoTable}/>
        				</Grid.Column>
        				<Grid.Column>
                <Modal open={modal.construction}>
                  <Modal.Header>添加施工单</Modal.Header>
                  <Modal.Content>
                    <Form size='large'>
                      <Form.Group>
                        <Form.Dropdown placeholder='工序' label="工序" name='seqId' search selection options={modal.dropDownSeq} onChange={(e, {name, value})=>dropDownSeq(name, value)}/>
                        <Form.Dropdown placeholder='默认员工' label="默认员工" name='staffId' search selection options={modal.dropDownStaff} onChange={(e, {name, value})=>dropDown(name, value)}/>
                        <Form.Input label="计划生产数" name='constructionDst' onChange={(e)=>changeInput(e.target)}/>
                      </Form.Group>
                    </Form>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={()=>operateModal({construction:false})}> 取消 </Button>
                    <Button color='blue' onClick={()=>addConstruction(modal)}> 确定 </Button>
                  </Modal.Actions>
                </Modal>
                <Modal open={modal.compl}>
                  <Modal.Header>完工信息</Modal.Header>
                  <Modal.Content>
                    <Form size='large'>
                      <Form.Group>
                        <Form.Input label="正品数" name='constructionCmpl' onChange={(e)=>changeInput(e.target)}/>
                        <Form.Input label="次品数" name='constructionErr' onChange={(e)=>changeInput(e.target)}/>
                      </Form.Group>
                    </Form>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={()=>operateModal({compl:false})}> 取消 </Button>
                    <Button color='blue' onClick={()=>completeConstruction(modal)}> 确定 </Button>
                  </Modal.Actions>
                </Modal>
        					<MultiTable table={constructionTable} onAction={actionConstruction}/>
        				</Grid.Column>
        			</Grid.Row>

        		</Grid>
			</Container>
    )
  }
}

const mapStateToProps = (state) => ({
  modal: state.flow.flowModal,
  flowTable: state.flow.flowTable,
  seqinfoTable: state.flow.seqinfoTable,
  constructionTable: state.flow.constructionTable
})

const mapDispatchToProps = {
  initFlow: initFlow,
  addProduction: addProduction,
  selectProduction: selectProduction,
  actionProduction: actionProduction,
  onSearchProduction: searchProduction,
  addConstruction: addConstruction,
  actionConstruction: actionConstruction,
  completeConstruction: completeConstruction,
  operateModal: operateModal,
  openProductionModal: openProductionModal,
  changeInput: changeInput,
  dropDown: dropDown,
  dropDownSeq: dropDownSeq,
  onActivePageProduction: activeProductionPage,
}


export default connect(mapStateToProps, mapDispatchToProps)(Flow)