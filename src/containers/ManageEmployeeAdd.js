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
	employeeClose,
	employeeOpen,
	employeeConfirm,
	employeeInputChange
} from '../actions/manage'

const ManageEmployeeAdd = ({
	onClose,
	onOpen,
	onConfirm,
	onChange,
	data,
	tableSize
}) => {
	return (
		<div>
		<Button content='添加员工' color='blue' icon='add' onClick={()=>onOpen()}/>
		<Modal open={data.open}>
			<Modal.Header>添加物料</Modal.Header>
			<Modal.Content>
			  <Form size='large'>
			    <Form.Group>
			      <Form.Input label='员工姓名' name='name' onChange={(e)=>onChange(e.target)}/>
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

ManageEmployeeAdd.propTypes = {
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
	data: state.manageAll.employeeModel,
	tableSize: state.manageAll.employee.size
})

const mapDispatchToProps = {
	onClose: employeeClose,
	onOpen: employeeOpen,
	onConfirm: employeeConfirm,
	onChange: employeeInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeeAdd)