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

const item = {
	code: "12345",
	plan: "1000",
	remain: 20,
	over: 500,
	error: 2
}

const tabletitle = [{
	title: '施工单号'
}, {
	title: '操作工'
}, {
	title: '单价'
}, {
	title: '开工日期'
}, {
	title: '开工数量'
}, {
	title: '完工日期'
}, {
	title: '完工数量'
}, {
	title: '报废数量'
}]

const tablecontent = [{
	code: "00001",
	worker: "小王",
	price: "100",
	sdate: "2017:11:29",
	scounts: "200",
	edate: "2017:12:01",
	ecounts: "50",
	error: "2"
}]

const accord = [{
	title: '工序号:line-1 工序名: 工序名1',
	content: <ProductionAccordTable/>
}, {
	title: '工序号:line-2 工序名: 工序名2',
	content: <ProductionAccordTable/>
}]

const ProductionDetail = ({
	show,
	onClose,
	onOpen,
	onConfirm,
	onChange
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
	show: state.breadp.subActive
})

const mapDispatchToProps = {}

const ProductionListDetail = connect(mapStateToProps, mapDispatchToProps)(ProductionDetail)

export default ProductionListDetail