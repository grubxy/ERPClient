import { combineReducers} from 'redux'
import recordModels from './recordModels'
import loginModels from './login'

const app = combineReducers({
  recordModels,
  loginModels
})

export default app