import {
  combineReducers
} from 'redux'
import {
  userTable,
  userModal
} from './manage'

import {
  basedataModal,
  productTable,
  seqTable,
  staffTable
} from './basedata'
import {
  globalPortal
} from './portal'
import {
  flowModal,
  flowTable,
  seqinfoTable,
  constructionTable
} from './flow'
import {
  staffModal,
  staffInfoTable,
  staffScheduleTable,
  staffSalaryTable
} from './staffmanage'
import {
  constructionAllTable
} from './construction'
import {
  storeConstrTable,
  storeConstrModal,
  houseTable,
  houseModal,
  houseOriginModal,
  houseOriginTable,
  dropDowns
} from './storehouse'

import {
  authentication
} from './login'


let storehouse = combineReducers({
  storeConstrTable,
  storeConstrModal,
  houseModal,
  houseTable,
  houseOriginTable,
  houseOriginModal,
  dropDowns
})

let construction = combineReducers({
  constructionAllTable
})

let staffmanage = combineReducers({
  staffModal,
  staffInfoTable,
  staffScheduleTable,
  staffSalaryTable
})

let manage = combineReducers({
  userTable,
  userModal
})

let basedata = combineReducers({
  basedataModal,
  productTable,
  seqTable,
  staffTable
})

let flow = combineReducers({
  flowModal,
  flowTable,
  seqinfoTable,
  constructionTable
})

const app = combineReducers({
  authentication,
  manage,
  basedata,
  flow,
  globalPortal,
  staffmanage,
  construction,
  storehouse
})

export default app