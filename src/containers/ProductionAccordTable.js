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
	constructionModelOpen
} from '../actions/construction'
import TableWithButton from '../components/TableWithButton'

class ProductionAccordTable extends Component {
	render = () => {
		const {
			table,
			match,
			onOpen,
			onModify,
			onComplete,
			onInBound
		} = this.props
		return <TableWithButton table={table} match={match} onOpen={onOpen} onModify={onModify} onInBound={onInBound} onComplete={onComplete}/>
	}
}

const mapStateToProps = (state) => ({
	table: state.productionAll.constructionAll
})

const mapDispatchToProps = {
	onOpen: constructionModelOpen,
	onModify: constructionTableModify,
	onInBound: constructionTableInBound,
	onComplete: constructionTableComplete
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionAccordTable)