import React from 'react'
import {Table, Menu, Icon, Button} from 'semantic-ui-react'

const ConstructionTable = ({title, content, paging, onForword, onBack})=>{
  
  const header = title.map(item => (
    <Table.HeaderCell>{item.title}</Table.HeaderCell>
  ))
 
  const footer = (
    <Table.HeaderCell colSpan={title.length}>
      <Button floated='right' icon labelPosition='left' primary size='small'>
        <Icon name='configure' /> 新增施工单
      </Button>
    </Table.HeaderCell>
  )

  return (
    <Table selectable celled>
      <Table.Header>
        <Table.Row>
          {header}
        </Table.Row>
      </Table.Header>
      <Table.Body>
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