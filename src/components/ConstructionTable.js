import React from 'react'
import {
  Table,
  Icon,
  Button,
  Modal
} from 'semantic-ui-react'

const ConstructionTable = ({
  title,
  content,
  onOpen,
  onClose,
  onConfirm,
  onChange
}) => {

  const header = title.map(item => (
    <Table.HeaderCell>{item.title}</Table.HeaderCell>
  ))

  const body = content.map(item => (
    <Table.Row>
      <Table.Cell>{item.code}</Table.Cell>
      <Table.Cell>{item.worker}</Table.Cell>
      <Table.Cell>{item.price}</Table.Cell>
      <Table.Cell>{item.sdate}</Table.Cell>
      <Table.Cell>{item.scounts}</Table.Cell>
      <Table.Cell>{item.edate}</Table.Cell>
      <Table.Cell>{item.ecounts}</Table.Cell>
      <Table.Cell>{item.error}</Table.Cell>
      <Table.Cell>
      <Button primary onClick={()=>onOpen(item)}>修改</Button>
      </Table.Cell>
    </Table.Row>
  ))
  const footer = (
    <Table.HeaderCell colSpan={title.length + 1}>
      <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=>onOpen(null)}>
        <Icon name='configure' /> 新增施工单
      </Button>
    </Table.HeaderCell>
  )

  const model = (
    <Modal open={false}>
      <Modal.Header>{}</Modal.Header>
      <Modal.Content></Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>onClose()}> 取消 </Button>
        <Button color='blue' onClick={()=>onConfirm()}> 确定 </Button> 
      </Modal.Actions>
    </Modal>
  )

  return (
    <div>
    {model}
    <Table celled>
      <Table.Header>
        <Table.Row>
          {header}
          <Table.HeaderCell/>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {body}
      </Table.Body>   
      <Table.Footer>
        <Table.Row>
          {footer}
        </Table.Row>
      </Table.Footer>
    </Table>
    </div>
  )

}

export default ConstructionTable