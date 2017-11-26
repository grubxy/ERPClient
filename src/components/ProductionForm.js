import {
  Form,
  Button
} from 'semantic-ui-react'
import React from 'react'

const ProductionForm = ({
  prodc,
  onChange,
  onAdd
}) => (
  <Form size='large' onSubmit={()=>onAdd(prodc)}>
    <Form.Group>
      <Form.Input label='名称' name='name' onChange={(e)=>onChange(e.target)}/>
    </Form.Group>
    <Form.Group>
      <Form.Input label='计划数量' name='account' onChange={e=>onChange(e.target)}/>
      <Form.Input label='开始日期' name='date' onChange={e=>onChange(e.target)}/>
    </Form.Group>
    <Form.TextArea label='备注' placeholder='添加备注' />
    <Form.Checkbox label='确认添加' />
    <Button>新增</Button>
  </Form>
)

export default ProductionForm