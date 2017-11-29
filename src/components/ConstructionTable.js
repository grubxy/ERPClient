import React from 'react'
import {
  Table,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'

const ConstructionTable = ({
  title,
  content,
  paging,
  onForword,
  onBack
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
      <Button primary>修改</Button>
      </Table.Cell>
    </Table.Row>
  ))
  const footer = (
    <Table.HeaderCell colSpan={title.length + 1}>
      <Button floated='right' icon labelPosition='left' primary size='small'>
        <Icon name='configure' /> 新增施工单
      </Button>
    </Table.HeaderCell>
  )

  return (
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
  )

}

export default ConstructionTable