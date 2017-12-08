import {
	connect
} from 'react-redux'
import {
	materialgoToPage,
	materialDel
} from '../actions/manage'
import React, {
	Component
} from 'react'
import TableWithAction from '../components/TableWithAction'

class ManageMaterialTable extends Component {
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
	table: state.manageAll.material
})

const mapDispatchToProps = {
	goToPage: materialgoToPage,
	onAction: materialDel

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMaterialTable)