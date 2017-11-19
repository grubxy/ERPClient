import React, {Component,} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const LoginForm = ({user, onChange, onLogin})=>(
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {' '}登录
      </Header>
      <Form size='large' onSubmit={()=>onLogin(user)}>
        <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            name='username'
            onChange={e => onChange(e.target)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name='password'
            onChange={e => onChange(e.target)}
          />
          <Button color='teal' fluid size='large'>登录</Button>
        </Segment>
      </Form>
      <Message>
        新用户? <a href='#'>注册</a>
      </Message>
    </Grid.Column>
    </Grid>
  </div>
)

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  user: PropTypes.shape({
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired
}

export default LoginForm