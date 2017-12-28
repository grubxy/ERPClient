import {
	combineReducers
} from 'redux'
import loginModels from './login'
import {
	production,
	productionModel
} from './production'
import {
	constructionAll,
	technicsAll,
	employeeAll,
	materialAll,
	addConstructionModel
} from './construction'
import breadp from './breadp'
import pay from './pay'
import {
	material,
	materialModel
} from './material'
import {
	technics,
	technicsModel
} from './technics'
import {
	employee,
	employeeModel
} from './employee'

let productionAll = combineReducers({
	production,
	productionModel,
	constructionAll,
	addConstructionModel,
	technicsAll,
	employeeAll,
	materialAll
})

let manageAll = combineReducers({
	material,
	materialModel,
	technics,
	technicsModel,
	employee,
	employeeModel
})

const app = combineReducers({
	loginModels,
	productionAll,
	breadp,
	pay,
	manageAll
})

export default app