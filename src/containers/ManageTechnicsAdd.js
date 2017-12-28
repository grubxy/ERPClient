import {
	Modal,
	Button,
	Form
} from 'semantic-ui-react'
import React from 'react'
import {
	connect
} from 'react-redux'
import PropTypes from 'prop-types'
import {
	technicsClose,
	technicsOpen,
	technicsConfirm,
	technicsInputChange
} from '../actions/manage'

const ManageTechnicsAdd = ({
	data,
	tableSize,
	onOpen,
	onClose,
	onChange,
	onConfirm
}) => {
	return (
		<div>
		<Button content='添加工艺' color='blue' icon='add' onClick={()=>onOpen()}/>
		<Modal open={data.open}>
			<Modal.Header>添加物料</Modal.Header>
			<Modal.Content>
			  <Form size='large'>
			    <Form.Group>
			      <Form.Input label='工艺名称' name='name' onChange={(e)=>onChange(e.target)}/>
			    </Form.Group>
			  </Form>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={()=>onClose()}> 取消 </Button>
				<Button color='blue' onClick={()=>onConfirm(data, tableSize)}> 确定 </Button>
			</Modal.Actions>
		</Modal>
		</div>
	)
}

ManageTechnicsAdd.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		open: PropTypes.bool
	}),
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onConfirm: PropTypes.func,
	onChange: PropTypes.func
}

const mapStateToProps = (state) => ({
	data: state.manageAll.technicsModel,
	tableSize: state.manageAll.technics.size
})

const mapDispatchToProps = {
	onClose: technicsClose,
	onOpen: technicsOpen,
	onConfirm: technicsConfirm,
	onChange: technicsInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTechnicsAdd)