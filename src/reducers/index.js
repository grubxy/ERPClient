import {
  combineReducers
} from 'redux'
import recordModels from './recordModels'
import loginModels from './login'
import recordTable from './recordTable'

const app = combineReducers({
  recordModels,
  loginModels
})

export default app