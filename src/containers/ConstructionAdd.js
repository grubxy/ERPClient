import {
	Modal,
	Button,
	Form
} from 'semantic-ui-react'
import React from 'react'
import {
	connect
} from 'react-redux'
import PropTypes from 'prop-types'
import {
	constructionModelClose,
	constructionModelOpen,
	constructionModelConfirm,
	constructionModelChange,
	constructionModelSelect
} from '../actions/construction'

let getEmploy = (em) => {
	let data = []
	console.log("em:" + JSON.stringify(em))
	for (let [index, elem] of em.entries()) {
		data.push({
			'key': index,
			'text': elem.name,
			'value': elem.name
		})
	}
	return data
}

let getMaterial = (mt) => {
	let data = []
	if (mt.length <= 0)
		return data
	for (let [index, elem] of mt.entries()) {
		data.push({
			'key': index,
			'text': elem.name,
			'value': elem.name
		})
	}
	return data
}

let getTechnics = (tc) => {
	if (tc.length <= 0)
		return data
	let data = []
	for (let [index, elem] of tc.entries()) {
		data.push({
			'key': index,
			'text': elem.name,
			'value': elem.name
		})
	}
	return data
}

const ConstructionAdd = ({
	onClose,
	onOpen,
	onConfirm,
	onChange,
	onSelect,
	data,
	employee,
	technics,
	material
}) => {
	return (
		<div>
		<Modal open={data.open}>
			<Modal.Header>添加施工单</Modal.Header>
			<Modal.Content>
			  <Form size='large'>
			    <Form.Group>
			      <Form.Dropdown placeholder='操作员' name='employee' search selection options={employee} onChange={(e, {name, value})=>onSelect(name, value)}/>
			      <Form.Dropdown placeholder='物料' name='material' search selection  onChange={(e, {name, value})=>onSelect(name, value)}/>
			      <Form.Dropdown placeholder='工艺' name='technics' search selection  onChange={(e, {name, value})=>onSelect(name, value)}/>
			    </Form.Group>
			    <Form.Group>
			      <Form.Input label='生产数量' name='dst_counts' onChange={e=>onChange(e.target)}/>
			      <Form.Input label='已完成数量' name='cmpl_counts' onChange={e=>onChange(e.target)}/>
			      <Form.Input label='报废数量' name='err_counts' onChange={e=>onChange(e.target)}/>
			    </Form.Group>
			    <Form.Group>
			      <Form.Input label='开始时间' name='sdate' onChange={e=>onChange(e.target)}/>
			    </Form.Group>
			  </Form>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={()=>onClose()}> 取消 </Button>
				<Button color='blue' onClick={()=>onConfirm(data)}> 确定 </Button>
			</Modal.Actions>
		</Modal>
		</div>
	)
}

ConstructionAdd.propTypes = {
	data: PropTypes.shape({
		emplyee: PropTypes.string.isRequired,
		material: PropTypes.string.isRequired,
		technics: PropTypes.bool.isRequired
	}),
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onConfirm: PropTypes.func,
	onChange: PropTypes.func,
	onSelect: PropTypes.func,
	employee: PropTypes.array.isRequired,
	technics: PropTypes.array.isRequired,
	material: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	data: state.productionAll.addConstructionModel,
	employee: getEmploy(state.productionAll.employeeAll),
	technics: getTechnics(state.productionAll.technicsAll),
	material: getMaterial(state.productionAll.materialAll)
})

const mapDispatchToProps = {
	onClose: constructionModelClose,
	onOpen: constructionModelOpen,
	onConfirm: constructionModelConfirm,
	onChange: constructionModelChange,
	onSelect: constructionModelSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructionAdd)