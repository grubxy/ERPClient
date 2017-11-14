import {Modal, Button} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const RecordOpModel = ({modelvisible, onClose, onOpen, onCancle, onConfirm}) => (
	<div>
		<Button content='添加记录' icon='add' lablePosition='left' onClick={()=>onOpen()} />
		<Modal open={modelvisible} onClose={()=>onClose()}>
			<Modal.Header>添加一条交易记录</Modal.Header>
			<Modal.Content>
			</Modal.Content>
			<Modal.Actions>
				<Button color='black' onClick={()=>onCancle()}> 取消 </Button>
				<Button positive icon='checkmark' onClick={()=>onConfirm()}> 确定 </Button>
			</Modal.Actions>
		</Modal>

	</div>
)

RecordOpModel.propTypes = {
	modelvisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onOpen:PropTypes.func.isRequired,
	onCancle:PropTypes.func.isRequired
}

export default RecordOpModel