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
	materialClose,
	materialOpen,
	materialConfirm,
	materialInputChange
} from '../actions/manage'

const ManageMaterialAdd = ({
	onClose,
	onOpen,
	onConfirm,
	onChange,
	data
}) => {
	return (
		<div>
	<Button content='添加物料' color='blue' icon='add' onClick={()=>onOpen()}/>
	<Modal open={data.open}>
		<Modal.Header>添加一条生产批次</Modal.Header>
		<Modal.Content>
		  <Form size='large'>
		    <Form.Group>
		      <Form.Input label='物料名称' name='name' onChange={(e)=>onChange(e.target)}/>
		    </Form.Group>
		    <Form.Group>
		      <Form.Input label='物料规格' name='spec' onChange={e=>onChange(e.target)}/>
		    </Form.Group>
		  </Form>
		</Modal.Content>
		<Modal.Actions>
			<Button onClick={()=>onClose()}> 取消 </Button>
			<Button color='blue' onClick={()=>onConfirm(data)}> 确定 </Button>
		</Modal.Actions>
	</Modal>
	</div>
	)
}

ManageMaterialAdd.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		spec: PropTypes.string,
		open: PropTypes.bool
	}),
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onConfirm: PropTypes.func,
	onChange: PropTypes.func
}

const mapStateToProps = (state) => ({
	data: state.manageAll.model
})

const mapDispatchToProps = {
	onClose: materialClose,
	onOpen: materialOpen,
	onConfirm: materialConfirm,
	onChange: materialInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMaterialAdd)