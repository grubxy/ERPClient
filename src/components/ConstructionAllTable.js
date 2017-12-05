import React from 'react'
import {
  Table,
  Menu,
  Icon
} from 'semantic-ui-react'

const ConstructionAllTable = ({
  title,
  content,
  onForword,
  onBack
}) => {
  let header = title.map(title => (
    <Table.HeaderCell>{title.title}</Table.HeaderCell>
  ))

  let body = content.map(content => (
    <Table.Row>
      <Table.Cell>{content.ccode}</Table.Cell>
      <Table.Cell>{content.pcode}</Table.Cell>
      <Table.Cell>{content.oper}</Table.Cell>
      <Table.Cell>{content.cname}</Table.Cell>
      <Table.Cell>{content.price}</Table.Cell>
      <Table.Cell>{content.stime}</Table.Cell>
      <Table.Cell>{content.scounts}</Table.Cell>
      <Table.Cell>{content.etime}</Table.Cell>
      <Table.Cell>{content.ecounts}</Table.Cell>
      <Table.Cell>{content.error}</Table.Cell>
      <Table.Cell>{content.nmat}</Table.Cell>
      <Table.Cell>{content.omat}</Table.Cell>
      <Table.Cell>{content.state}</Table.Cell>
    </Table.Row>
  ))

  let footer = (
    <Table.HeaderCell colSpan={title.length}>
      <Menu floated='right' pagination>
        <Menu.Item as='a' icon>
        <Icon name='left chevron'/>
        </Menu.Item>
        <Menu.Item as='a' icon>
        <Icon name='right chevron'/>
        </Menu.Item>
      </Menu>
    </Table.HeaderCell>
  )

  return (
    <Table celled>
      <Table.Header>
          <Table.Row>
          {header}
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

export default ConstructionAllTable