import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react'
import {
	loginChanged,
	loginSubmit
} from '../actions/login'

class Login extends Component {
	componentWillMount = () => {

	}

	render = () => {
		const {
			onChange,
			onLogin,
			user
		} = this.props

		return (
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
	    </Grid.Column>
	    </Grid>
  </div>)
	}
}

const mapStateToProps = (state) => ({
	user: state.authentication.user
})

const mapDispatchToProps = {
	onChange: loginChanged,
	onLogin: loginSubmit
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)