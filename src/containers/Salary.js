import React, {
  Component
} from 'react'
import {
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Search,
  Button,
  Modal,
  Form
} from 'semantic-ui-react'
import TableWithAction from '../components/TableWithAction'

const salary = {
  content: [],
  headers: {
    mcode: {
      title: '姓名'
    },
    staff: {
      title: '工资'
    }
  },
  number: 0,
  size: 10,
  totalPages: 0
}

export default class Salary extends Component {
  componentWillMount = () => {}

  render = () => {
    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>工资总览</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Search size='mini'/>
        <TableWithAction table={salary}/>
      </Container>
    )
  }

}