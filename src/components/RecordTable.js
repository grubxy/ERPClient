import React from 'react'
import {
  Table,
  Menu,
  Icon
} from 'semantic-ui-react'

const title = [{
  title: 'name'
}, {
  title: 'code'
}, {
  title: 'ope'
}, {
  title: 'price'
}, {
  title: 'counts'
}]

const contenttest = [{
  name: '11',
  code: 'c',
  ope: 'sd',
  price: '222',
  counts: '100'
}, {
  name: '22',
  code: 'd',
  price: '3333',
  ope: 'by',
  counts: '200'
}]

const pageinfo = {
  size: '5'
}

const RecordTable = (content, paging) => {

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

  const footer = () => (
    <Menu.Item as='a' icon>
        <Icon name='left chevron'/>
    </Menu.Item>
  )

  return (
    <Table>
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
          <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
          {footer}
          </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default RecordTable