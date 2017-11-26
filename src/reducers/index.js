import {
  combineReducers
} from 'redux'
import loginModels from './login'
import production from './production'

const app = combineReducers({
  loginModels,
  production
})

export default app