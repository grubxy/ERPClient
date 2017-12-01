import React from 'react';
import {
    Header,
    Container,
    Divider,
    Icon
} from 'semantic-ui-react'

const StoreHouse = () => (
    <Container style={{marginTop:'3em'}}>
    <Header as='h2'>
    <Icon name='home'/>
    <Header.Content>仓库总览</Header.Content>
    </Header>
    <Divider section/>
  </Container>
)

export default StoreHouse