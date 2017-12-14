import {
	combineReducers
} from 'redux'
import loginModels from './login'
import {
	production,
	productionModel
} from './production'
import {
	construction,
	technics
} from './construction'
import breadp from './breadp'
import pay from './pay'
import {
	material,
	model
} from './material'

let productionAll = combineReducers({
	production,
	productionModel,
	construction,
	technics
})

let manageAll = combineReducers({
	material,
	model
})

const app = combineReducers({
	loginModels,
	productionAll,
	breadp,
	pay,
	manageAll
})

export default app