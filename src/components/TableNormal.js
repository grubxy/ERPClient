import React from 'react'
import {
  Table,
  Menu,
  Icon
} from 'semantic-ui-react'


const TableNormal = ({
  title,
  content,
  paging,
  onForword,
  onBack
}) => {

  const header = title.map(item => (
    <Table.HeaderCell>{item.title}</Table.HeaderCell>
  ))

  const cont = content.map(item => (
    <Table.Row>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.code}</Table.Cell>
      <Table.Cell>{item.ope}</Table.Cell>
      <Table.Cell>{item.price}</Table.Cell>
      <Table.Cell>{item.counts}</Table.Cell>
    </Table.Row>
  ))

  const footer = (
    <Table.HeaderCell colSpan={title.length}>
      <Menu floated='right' pagination>
        <Menu.Item as='a' onClick={()=>onForword(3)} icon>
        <Icon name='left chevron'/>
        </Menu.Item>
        <Menu.Item as='a' onClick={()=>onBack(3)} icon>
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
        {cont}
      </Table.Body>   
      <Table.Footer>
        <Table.Row>
          {footer}
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default TableNormal