import LoginForm from '../components/LoginForm'
import PropTypes from 'prop-types'
import {
  loginLogin,
  loginOnChange,
  loginOnRegister
} from '../actions'
import {
  connect
} from 'react-redux'
import React, {
  Component
} from 'react'

const Login = ({
  user,
  onChange,
  onLogin,
  onRegister
}) => (

  <LoginForm user={user} onChange={onChange} onLogin={onLogin}/>

)

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.loginModels
})

const mapDispatchToProps = {
  onLogin: loginLogin,
  onChange: loginOnChange,
  onRegister: loginOnRegister
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginPage