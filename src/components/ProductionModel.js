import {
	Modal,
	Button,
	Form
} from 'semantic-ui-react'
import React from 'react'
import PropTypes from 'prop-types'

const ProductionModel = ({
	onClose,
	onOpen,
	onConfirm,
	onChange,
	data,
	show
}) => {
	if (!show)
		return <div/>
	return (
		<div>
	<Button content='添加生产批次' color='blue' icon='add' onClick={()=>onOpen()}/>
	<Modal open={data.open}>
		<Modal.Header>添加一条生产批次</Modal.Header>
		<Modal.Content>
		  <Form size='large'>
		    <Form.Group>
		      <Form.Input label='名称' name='name' onChange={(e)=>onChange(e.target)}/>
		    </Form.Group>
		    <Form.Group>
		      <Form.Input label='计划数量' name='account' onChange={e=>onChange(e.target)}/>
		      <Form.Input label='开始日期' name='date' onChange={e=>onChange(e.target)}/>
		    </Form.Group>
		    <Form.TextArea label='备注' placeholder='添加备注' rows={2} name='detail' onChange={e=>onChange(e.target)}/>
		  </Form>
		</Modal.Content>
		<Modal.Actions>
			<Button onClick={()=>onClose()}> 取消 </Button>
			<Button color='blue' onClick={()=>onConfirm({data})}> 确定 </Button>
		</Modal.Actions>
	</Modal>
	</div>
	)
}


ProductionModel.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		account: PropTypes.string,
		date: PropTypes.string,
		open: PropTypes.bool
	}),
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onConfirm: PropTypes.func,
	onChange: PropTypes.func
}

export default ProductionModel