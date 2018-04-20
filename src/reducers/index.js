import {
	combineReducers
} from 'redux'
import {
	userTable,
	userModal
} from './manage'

let manage = combineReducers({
	userTable,
	userModal
})

const app = combineReducers({
	manage
})

export default app