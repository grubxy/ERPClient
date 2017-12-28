import {
	connect
} from 'react-redux'
import React, {
	Component
} from 'react'
import {
	employeegoToPage,
	employeeDel
} from '../actions/manage'
import TableWithAction from '../components/TableWithAction'

class ManageEmployeeTable extends Component {
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
	table: state.manageAll.employee
})

const mapDispatchToProps = {
	goToPage: employeegoToPage,
	onAction: employeeDel

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeeTable)