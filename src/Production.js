import React from 'react';
import {
  Header,
  Container,
  Icon,
  Divider
} from 'semantic-ui-react'
import ProductionListTable from './containers/ProductionListTable'
import ProductionAdd from './containers/ProductionAdd'
import ProductionChangeBread from './containers/ProductionChangeBread'
import ProductionListDetail from './containers/ProductionListDetail'

const Production = () => (
  <Container style={{marginTop:'3em'}}>
    <Header as='h3'>
    <Icon name='settings'/>
    <Header.Content>生产批次总览</Header.Content>
    </Header>
    <Divider hidden/>
    <ProductionChangeBread/>
    <Divider clearing/>
      <ProductionListDetail/>
      <ProductionAdd/>
      <ProductionListTable/>
  </Container>
)

export default Production