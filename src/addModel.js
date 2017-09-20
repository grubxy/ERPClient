import React, {Component} from 'react'
import {Modal, Button} from 'semantic-ui-react'
import FormAddRecord from './formAddRecord.js'

export default class AddModel extends Component {

	constructor(props) {
		super(props)
		this.state = {open: false}
		this.show = this.show.bind(this)
		this.close = this.close.bind(this)
	}

	show() {
		this.setState({open: true})
	}

	close() {
		this.setState({open: false})
	}

	render() {
		const {open} = this.state
		return (
		<div> 
			<Button content='添加记录' icon='add' labelPosition='left'onClick={this.show} />
			<Modal open={open} onClose={this.close}>
				<Modal.Header>添加一条交易记录</Modal.Header>
				<Modal.Content>
					<FormAddRecord/>
				</Modal.Content>
				<Modal.Actions>
					<Button color='black' onClick={this.close}>
					取消
					</Button>
					<Button positive icon='checkmark' onClick={this.close}>
					确定
					</Button>
				</Modal.Actions>
			</Modal>
		</div>
		)
	}
}