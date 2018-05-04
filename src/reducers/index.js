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
  staffInfoTable
} from './staffmanage'
import {
  constructionAllTable
} from './construction'


let construction = combineReducers({
  constructionAllTable
})

let staffmanage = combineReducers({
  staffModal,
  staffInfoTable
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
  manage,
  basedata,
  flow,
  globalPortal,
  staffmanage,
  construction
})

export default app