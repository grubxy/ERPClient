import {
  takeEvery
} from 'redux-saga/effects'


import {
  initUser,
  delUser,
  addUser
} from './user'

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
  yield takeEvery("USER_ADD", addUser)
  yield takeEvery("USER_INIT", initUser)
  yield takeEvery("USER_DEL", delUser)
}

export default mySaga