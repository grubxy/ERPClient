import React, {
  Component
} from 'react';
import {
  Header,
  Container
} from 'semantic-ui-react'
import RecordTable from './containers/RecordTable'
import AddProduction from './containers/AddProduction'

const App = () => (
  <Container style={{marginTop:'3em'}}>
    <Header as='h1'>生产批次总览</Header>
      <AddProduction/>
      <RecordTable/>
  </Container>
)

export default App