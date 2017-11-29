import {
	combineReducers
} from 'redux'
import loginModels from './login'
import production from './production'
import construction from './construction'
import breadp from './breadp'

const productionAll = combineReducers({
	production,
	construction
})

const app = combineReducers({
	loginModels,
	productionAll,
	breadp
})

export default app