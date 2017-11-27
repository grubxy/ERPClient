import React from 'react';
import {
  Header,
  Container,
  Icon,
  Divider
} from 'semantic-ui-react'
import RecordTable from './containers/RecordTable'
import ProductionAdd from './containers/ProductionAdd'
import ProductionChangeBread from './containers/ProductionChangeBread'

const App = () => (
  <Container style={{marginTop:'3em'}}>
    <Header as='h2'>
    <Icon name='settings'/>
    <Header.Content>生产批次总览</Header.Content>
    </Header>
    <Divider section/>
    <ProductionChangeBread/>
    <Divider clearing/>
      <ProductionAdd/>
      <RecordTable/>
  </Container>
)

export default App