import React from 'react'
import {Table } from 'semantic-ui-react'

const  TableStockDetails = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>股票名字</Table.HeaderCell>
        <Table.HeaderCell>股票代码</Table.HeaderCell>
        <Table.HeaderCell>操作</Table.HeaderCell>
        <Table.HeaderCell>价格</Table.HeaderCell>
        <Table.HeaderCell>数量</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row positive>
        <Table.Cell>海康威视</Table.Cell>
        <Table.Cell>000641</Table.Cell>
        <Table.Cell>买入</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>200</Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>海康威视</Table.Cell>
        <Table.Cell>000641</Table.Cell>
         <Table.Cell>卖出</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>200</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
export default TableStockDetails