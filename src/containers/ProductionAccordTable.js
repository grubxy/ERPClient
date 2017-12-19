import {
	connect
} from 'react-redux'
import React, {
	Component
} from 'react'

import {
	constructionTableModify,
	constructionTableInBound,
	constructionTableComplete,
	constructionTableOnOpen
} from '../actions/construction'
import TableWithButton from '../components/TableWithButton'

class ProductionAccordTable extends Component {
	render = () => {
		const {
			table,
			onOpen,
			onModify,
			onComplete,
			onInBound
		} = this.props
		return <TableWithButton table={table} onOpen={onOpen} onModify={onModify} onInBound={onInBound} onComplete={onComplete}/>
	}
}

const mapStateToProps = (state) => ({
	table: state.productionAll.constructionAll
})

const mapDispatchToProps = {
	onOpen: constructionTableOnOpen,
	onModify: constructionTableModify,
	onInBound: constructionTableInBound,
	onComplete: constructionTableComplete
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionAccordTable)