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

const app = combineReducers({
  manage,
  basedata
})

export default app