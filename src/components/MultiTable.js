import React, {
  Component
} from 'react'
import {
  Table,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'

const MultiTableCell = ({
  key,
  value,
  tableSize,
  onAction
}) => {
  return (
    <Table.Cell key={key}>
          <Button size='tiny' color='gray'>{value}</Button>
        </Table.Cell>
  )
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
      onSelect
    } = this.props


    let header = (
      <Table.Header>
    <Table.Row>
      {Object.keys(table.headers).map((key, i) => (
        <Table.HeaderCell key={i}>{table.headers[key].title}</Table.HeaderCell>
     ))}
    </Table.Row>
    </Table.Header>
    )

    let footer = (
      <Table.Footer>
      <Table.HeaderCell>总页数:</Table.HeaderCell>
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

    let body = (
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
                  return <MultiTableCell key={key}/>
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
                return <MultiTableCell/>
              })
            }
            </Table.Row>
            )
        }
        })
    }
    </Table.Body>
    )

    return (
      <Table compact='very' color='teal' size='small' selectable={table.selectable}>
        {header}
        {body}
        {footer}
      </Table>
    )
  }
}