import {
  productionInputChange,
  productionModelClose,
  productionModelOpen,
  productionModelConfirm
} from '../actions/production'
import {
  connect
} from 'react-redux'
import {
  Modal,
  Button,
  Form
} from 'semantic-ui-react'
import React from 'react'
import PropTypes from 'prop-types'

const ProductionAdd = ({
  onClose,
  onOpen,
  onConfirm,
  onChange,
  data,
  tableSize,
  show
}) => {
  return (show &&
    <div>
        <Button content='添加生产批次' color='blue' icon='add' onClick={()=>onOpen()}/>
        <Modal open={data.open}>
          <Modal.Header>添加一条生产批次</Modal.Header>
          <Modal.Content>
            <Form size='large'>
              <Form.Group>
                <Form.Input label='批次名称' name='name' onChange={(e)=>onChange(e.target)}/>
              </Form.Group>
              <Form.Group>
                <Form.Input label='计划数量' name='dst_counts' onChange={e=>onChange(e.target)}/>
                <Form.Input label='开始日期' name='date' onChange={e=>onChange(e.target)}/>
              </Form.Group>
              <Form.TextArea label='备注' placeholder='添加备注' rows={2} name='detail' onChange={e=>onChange(e.target)}/>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={()=>onClose()}> 取消 </Button>
            <Button color='blue' onClick={()=>onConfirm(data, tableSize)}> 确定 </Button>
          </Modal.Actions>
        </Modal>
      </div>)
}

const mapStateToProps = (state) => {
  return ({
    data: state.productionAll.productionModel,
    show: !state.breadp.subActive,
    tableSize: state.productionAll.production.size
  })
}

const mapDispatchToProps = {
  onClose: productionModelClose,
  onOpen: productionModelOpen,
  onConfirm: productionModelConfirm,
  onChange: productionInputChange
}


ProductionAdd.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.number.isRequired,
    dst_counts: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    detail: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductionAdd)