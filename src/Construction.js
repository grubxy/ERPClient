import React from 'react';
import {
    Header,
    Container,
    Divider,
    Icon
} from 'semantic-ui-react'
import ConstructionShow from './containers/ConstructionShow'

const Construction = () => (
    <Container style={{marginTop:'3em'}}>
    <Header as='h3'>
    <Icon name='configure'/>
    <Header.Content>施工总览</Header.Content>
    </Header>
    <Divider section/>
    <ConstructionShow/>
  </Container>
)

export default Construction