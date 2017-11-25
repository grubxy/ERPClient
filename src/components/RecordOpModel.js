import {
	Modal,
	Button,
	Form,
	Icon,
	Dropdown
} from 'semantic-ui-react'
import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'

const options = [{
	key: 'buy',
	text: '买入',
	value: 'buy'
}, {
	key: 'sell',
	text: '卖出',
	value: 'sell'
}, ]

const RecordOpModel = ({
	modelvisible,
	onClose,
	onOpen,
	onCancle,
	onConfirm
}) => (
	<div>
		<Button content='添加记录' icon='add' lablePosition='left' onClick={()=>onOpen()} />
		<Modal open={modelvisible} onClose={()=>onClose()}>
			<Modal.Header>添加一条交易记录</Modal.Header>
			<Modal.Content>
				<Form>
				<Form.Group>
					<Form.Input icon={<Icon name='search' inverted circular link />} label='股票名称或代码' />
				</Form.Group>
				<Form.Group>
					<Form.Input label='价格' action={<Dropdown button options={options} defaultValue='buy' />} />
					<Form.Input label='数量'/>
				</Form.Group>
			 </Form>
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
	onOpen: PropTypes.func.isRequired,
	onCancle: PropTypes.func.isRequired
}

export default RecordOpModel