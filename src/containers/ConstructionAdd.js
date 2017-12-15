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

const option = [{
	key: 1,
	text: '小王',
	value: '小王'
}]

const ConstructionAdd = ({
	onClose,
	onOpen,
	onConfirm,
	onChange,
	onSelect,
	data
}) => {
	return (
		<div>
		<Modal open={data.open}>
			<Modal.Header>添加施工单</Modal.Header>
			<Modal.Content>
			  <Form size='large'>
			    <Form.Group>
			      <Form.Dropdown placeholder='操作员' name='employee' search selection options={option} onChange={(e, {name, value})=>onSelect(name, value)}/>
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
		emplyee: PropTypes.string,
		material: PropTypes.string,
		technics: PropTypes.bool
	}),
	onClose: PropTypes.func,
	onOpen: PropTypes.func,
	onConfirm: PropTypes.func,
	onChange: PropTypes.func,
	onSelect: PropTypes.func,
}

const mapStateToProps = (state) => ({
	data: state.productionAll.addConstructionModel
})

const mapDispatchToProps = {
	onClose: constructionModelClose,
	onOpen: constructionModelOpen,
	onConfirm: constructionModelConfirm,
	onChange: constructionModelChange,
	onSelect: constructionModelSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructionAdd)