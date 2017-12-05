import {
	combineReducers
} from 'redux'
import loginModels from './login'
import production from './production'
import construction from './construction'
import breadp from './breadp'
import pay from './pay'

const productionAll = combineReducers({
	production,
	construction
})

const app = combineReducers({
	loginModels,
	productionAll,
	breadp,
	pay
})

export default app