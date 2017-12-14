import {
	connect
} from 'react-redux'
import React, {
	Component
} from 'react'
import {
	productiongoToPage,
	productiononSelect
} from '../actions/production'

import TableWithAction from '../components/TableWithAction'

class ProductionListTable extends Component {
	componentWillMount = () => {
		const {
			goToPage,
			table
		} = this.props
		goToPage(table, 'goFirst')
	}

	render = () => {
		const {
			table,
			goToPage,
			onAction,
			onSelect,
			show
		} = this.props

		return (
			show && <TableWithAction goToPage={goToPage} table={table} onAction={onAction} onSelect={onSelect}/>
		)
	}
}

const mapStateToProps = (state) => ({
	table: state.productionAll.production,
	show: !state.breadp.subActive
})

const mapDispatchToProps = {
	goToPage: productiongoToPage,
	onSelect: productiononSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionListTable)