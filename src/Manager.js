import React from 'react';
import {
    Header,
    Container,
    Divider,
    Icon
} from 'semantic-ui-react'
import ManageMaterialTable from './containers/ManageMaterialTable'
import ManageMaterialAdd from './containers/ManageMaterialAdd'

const Manager = () => (
    <Container style={{marginTop:'3em'}}>
    <Header as='h3'>
    <Icon name='spy'/>
    <Header.Content>管理信息</Header.Content>
    </Header>
    <Divider section/>
    <ManageMaterialAdd/>
    <ManageMaterialTable/>
  </Container>
)

export default Manager