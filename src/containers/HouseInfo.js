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
	Form
} from 'semantic-ui-react'
import {
	MultiTable
} from '../components/MultiTable'
import {
	operateHouseInfoModal,
	addHouseInfo,
	confirmHouseInfo,
	actionHouseInfo,
	houseInfoInputChange,
	initHouse,
	activeHouseInfoPage
} from '../actions/storehouse'

class HouseInof extends Component {
	componentDidMount = () => {
		const {
			onInit,
			table
		} = this.props

		onInit(table.size);

	}

	render = () => {
		const {
			table,
			modal,
			onActionHouseInfo,
			onModal,
			inputChange,
			onConfirm,
			onAddHouseInfo,
			onActiveHouseInfoPage
		} = this.props

		return (
			<Container style={{marginTop:'3em'}}>
	        <Header as='h3'>
	          <Icon name='settings'/>
	        <Header.Content>仓库配置</Header.Content>
	        </Header>
	        <Divider hidden/>
	        <Divider clearing/>
	        <Button content='仓库配置' color='teal' icon='add' onClick={()=>onModal({houseInfo:true})}/>
            <Modal open={modal.houseInfo}>
            <Modal.Header>添加账户</Modal.Header>
            <Modal.Content>
              <Form>
	              <Form.Input label='仓库名' name='houseName' onChange={(e)=>inputChange(e.target)}/>
	              <Form.TextArea label='仓库描述' name='houseDesc' onChange={(e)=>inputChange(e.target)}/>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={()=>onModal({houseInfo:false})}> 取消 </Button>
              <Button color='blue' onClick={()=>onAddHouseInfo(modal, table)}> 确定 </Button>
            </Modal.Actions>
            </Modal>	  
						<Modal open={modal.houseConfirm}>
							<Modal.Header>确认删除仓库</Modal.Header>
							<Modal.Content>是否确认删除该仓库?</Modal.Content>
							<Modal.Actions>
							<Button onClick={()=>onModal({houseConfirm:false})}> 取消 </Button>
							<Button color='blue' onClick={()=>onConfirm(modal)}> 确定 </Button>
							</Modal.Actions>
						</Modal>      
	        <MultiTable table = {table} onAction={onActionHouseInfo} onActivePage={onActiveHouseInfoPage}/>
	        </Container>
		)
	}
}

const mapStateToProps = (state) => ({
	modal: state.storehouse.houseModal,
	table: state.storehouse.houseTable
})

const mapDispatchToProps = {
	inputChange: houseInfoInputChange,
	onModal: operateHouseInfoModal,
	onAddHouseInfo: addHouseInfo,
	onActionHouseInfo: actionHouseInfo,
	onConfirm: confirmHouseInfo,
	onInit: initHouse,
	onActiveHouseInfoPage: activeHouseInfoPage
}


export default connect(mapStateToProps, mapDispatchToProps)(HouseInof)