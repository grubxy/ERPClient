import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {user:'', password:''}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }


  handleSubmit(event) {
    console.log('user: ' + this.state.user + 'password:' + this.state.password)
    event.preventDefault()
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]:value})
  }

  render() {
    return (
    <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
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
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                name='user'
                value={this.state.user}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
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
  }
}

export default LoginForm