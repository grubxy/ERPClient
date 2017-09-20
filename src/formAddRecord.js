import React, {Component} from 'react'
import {Form, Icon, Dropdown} from 'semantic-ui-react'

export default class FormAddRecord extends Component {

	render() {

		const options = [
		  { key: 'buy', text: '买入', value: 'buy' },
		  { key: 'sell', text: '卖出', value: 'sell' },
		]

		return (
			<Form>
				<Form.Group>
					<Form.Input icon={<Icon name='search' inverted circular link />} label='股票名称或代码' />
				</Form.Group>
				<Form.Group>
					<Form.Input label='价格' action={<Dropdown button options={options} defaultValue='buy' />} />
					<Form.Input label='数量'/>
				</Form.Group>
			</Form>
		)
	}
}