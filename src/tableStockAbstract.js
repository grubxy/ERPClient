import React from 'react'
import {Table } from 'semantic-ui-react'

const  TableStockAbstract = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>持有数量</Table.HeaderCell>
        <Table.HeaderCell>操作次数</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>100</Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )

  export default TableStockAbstract