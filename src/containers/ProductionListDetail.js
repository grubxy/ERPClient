import {
	connect
} from 'react-redux'
import React from 'react'
import {
	Message,
	Divider,
	Accordion,
	Icon
} from 'semantic-ui-react'
import ConstructionTable from '../components/ConstructionTable'

import ProductionAccordTable from '../containers/ProductionAccordTable'

let getAccord = (accord) => {
	let data = []
	for (let elem of Object.values(accord)) {
		console.log(elem.tcode)
		console.log(elem.name)
		data.push({
			title: `工序号:${elem.tcode}|工序名:${elem.name}`,
			content: <ProductionAccordTable match={elem.tcode}/>
		})
	}
	return data
}

const ProductionDetail = ({
	show,
	onClose,
	onOpen,
	onConfirm,
	onChange,
	accord
}) => {
	if (!show)
		return <div/>
	return (
		<div>
	  <Divider clearing/>
	  <Accordion fluid styled defaultActiveIndex={0} panels={accord}/>
	 </div>
	)
}

const mapStateToProps = (state) => ({
	show: state.breadp.subActive,
	accord: getAccord(state.productionAll.technicsAll)
})

const mapDispatchToProps = {}

const ProductionListDetail = connect(mapStateToProps, mapDispatchToProps)(ProductionDetail)

export default ProductionListDetail