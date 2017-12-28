import {
	connect
} from 'react-redux'
import React, {
	Component
} from 'react'
import {
	technicsgoToPage,
	technicsDel
} from '../actions/manage'
import TableWithAction from '../components/TableWithAction'

class ManageTechnicsTable extends Component {
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
			onAction
		} = this.props
		return (
			<TableWithAction goToPage={goToPage} table={table} onAction={onAction}/>
		)
	}
}

const mapStateToProps = (state) => ({
	table: state.manageAll.technics
})

const mapDispatchToProps = {
	goToPage: technicsgoToPage,
	onAction: technicsDel
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTechnicsTable)