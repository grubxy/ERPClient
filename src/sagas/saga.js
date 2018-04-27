import {
  takeEvery
} from 'redux-saga/effects'

import {
  initUser,
  delUser,
  addUser
} from './user'

import {
  initBaseData,
  selectPro,
  selectSeq,
  addProduct,
  addSeq,
  addDefaultStaff,
  productAction,
  seqAction,
  delDefaultStaff
} from './basedata'

import {
  initFlow,
  selectFlow,
  actionFlow,
  openProductionModal,
  addProduction
} from './flow'

// 生产流程
// 生产单
// function* productinoTablePage(action) {
//   let page = action.table.number
//   let size = action.table.size
//   let totalPages = action.table.totalPages
//   let data = ''

//   console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
//   try {
//     switch (action.method) {
//       case 'goFirst':
//         data = yield call(getProduction, 0, size)
//         break
//       case 'goPrev':
//         data = yield call(getProduction, Math.max(0, Math.max(0, page - 1)), size)
//         break
//       case 'goNext':
//         data = yield call(getProduction, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
//         break
//       case 'goLast':
//         data = yield call(getProduction, Math.max(0, totalPages - 1), size)
//         break
//       default:
//         console.log("error method")
//         break
//     }
//     yield put({
//       type: 'PRODUCTION_UPDATE',
//       data: data
//     })
//   } catch (error) {
//     console.log("error");
//   }
// }


function* mySaga() {

  // 账户
  yield takeEvery('USER_ADD', addUser)
  yield takeEvery('USER_INIT', initUser)
  yield takeEvery('USER_DEL', delUser)

  // 基础 生产数据配置
  yield takeEvery('BASEDATA_INIT', initBaseData)
  yield takeEvery('PRODUCT_SELECT', selectPro)
  yield takeEvery('SEQ_SELECT', selectSeq)
  yield takeEvery('PRODUCT_ADD', addProduct)
  yield takeEvery('SEQ_ADD', addSeq)
  yield takeEvery('DEFAULT_STAFF_ADD', addDefaultStaff)
  yield takeEvery('PRODUCT_ACTION', productAction)
  yield takeEvery('SEQ_ACTION', seqAction)
  yield takeEvery('DEFAULT_STAFF_DEL', delDefaultStaff)

  // 生产流程 
  yield takeEvery('FLOW_INIT', initFlow)
  yield takeEvery('PRODUCTION_SELECT', selectFlow)
  yield takeEvery('PRODUCTION_ACTION', actionFlow)
  yield takeEvery('PRODUCTION_MODAL_OPEN', openProductionModal)
  yield takeEvery('PRODUCTION_ADD', addProduction)

}

export default mySaga