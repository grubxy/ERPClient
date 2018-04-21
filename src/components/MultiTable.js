import React, {
  Component
} from 'react'
import {
  Table,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'

const MultiTableHeader = ({
  table
}) => {
  return (
    <Table.Header>
    <Table.Row>
      {Object.keys(table.headers).map((key, i) => (
        <Table.HeaderCell key={i}>{table.headers[key].title}</Table.HeaderCell>
     ))}
    </Table.Row>
    </Table.Header>
  )
}

const MultiTableCell = ({
  headkey,
  value,
  row,
  onAction,
  table,
}) => {
  if (headkey === 'single_button') {
    return <Table.Cell key={headkey}>
      <Button size='tiny' color='gray' icon={value} floated='right' onClick={()=>onAction(row, table.size)}/>
    </Table.Cell>
  } else {
    return (
      <Table.Cell key={headkey}>
          {value}
    </Table.Cell>
    )
  }
}

const MultiTableBody = ({
  table,
  onSelect,
  onAction
}) => {
  return (
    <Table.Body>
    {
      table.content.map((row, i) => {
        if (table.selectable===true) {
          return (
              <Table.Row key={i} onClick={()=>onSelect(row)}>
              {
                Object.keys(table.headers).map((_, j)=>{
                  let key = Object.keys(table.headers)[j]
                  let value = row[key]
                  return <MultiTableCell headkey={key} value={value} row={row} onAction={onAction} table={table}/>
                })
              }
              </Table.Row>
            )
        } else {
          return (
            <Table.Row key={i}>
            {
              Object.keys(table.headers).map((_, j)=>{
                let key = Object.keys(table.headers)[j]
                let value = row[key]
                return <MultiTableCell headkey={key} value={value} row={row} onAction={onAction} table={table}/>
              })
            }
            </Table.Row>
            )
        }
        })
    }
    </Table.Body>)
}

const MultiTableFooter = ({
  goToPage,
  table
}) => {
  if (!table.showFooter) {
    return (
      <Table.Footer>
      </Table.Footer>
    )
  } else {
    return (
      <Table.Footer>
      <Table.HeaderCell>页:</Table.HeaderCell>
      <Table.HeaderCell colSpan={Object.keys(table.headers).length}>
        <Menu floated='right' pagination>
          <Menu.Item as='a' onClick={()=>goToPage(table,'goFirst')} icon>
          <Icon size='mini' name='angle double left'/>
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>goToPage(table,'goPrev')} icon>
          <Icon size='mini' name='angle left'/>
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>goToPage(table,'goNext')} icon>
          <Icon size='mini' name='angle right'/>
          </Menu.Item>
         <Menu.Item as='a' onClick={()=>goToPage(table, 'goLast')} icon>
          <Icon size='mini' name='angle double right'/>
          </Menu.Item>
        </Menu>
      </Table.HeaderCell>
    </Table.Footer>
    )
  }
}

export class MultiTable extends Component {

  classomponentWillMount = () => {}

  render = () => {
    const {
      emptyMsg,
      table,
      search,
      loading,
      onSearch,
      goToPage,
      onAction,
      onSelect,
      showFooter
    } = this.props

    return (
      <Table compact='very' color='teal' size='small' selectable={table.selectable}>
        <MultiTableHeader table={table}/>
        <MultiTableBody table={table} onAction={onAction}/>
        <MultiTableFooter table={table}/>
      </Table>
    )
  }
}