import React from 'react';
import {
    Header,
    Container,
    Divider,
    Icon
} from 'semantic-ui-react'
import PayListTable from './containers/PayListTable'

const Pay = () => (
    <Container style={{marginTop:'3em'}}>
    <Header as='h3'>
    <Icon name='money'/>
    <Header.Content>工资总览</Header.Content>
    </Header>
    <Divider section/>
    <PayListTable/>
  </Container>
)

export default Pay