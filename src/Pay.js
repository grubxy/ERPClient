import React from 'react';
import {
    Header,
    Container,
    Divider,
    Icon
} from 'semantic-ui-react'

const Pay = () => (
    <Container style={{marginTop:'3em'}}>
    <Header as='h2'>
    <Icon name='money'/>
    <Header.Content>工资总览</Header.Content>
    </Header>
    <Divider section/>
  </Container>
)

export default Pay