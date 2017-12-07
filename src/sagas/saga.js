import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'
import {
  getEmployee
} from '../api/pay'


function* fetchRecordModel(action) {
  console.log("xddfsdfsdf");
}

function* login(action) {
  console.log("log start password: " + action.user.password + " username: " + action.user.username)
  axios.post('/auth', {
      username: action.user.username,
      password: action.user.password
    })
    .then(function(response) {
      console.log(response)
      console.log(response.data.token)
    })
    .catch(function(error) {
      console.log(error)
    })

}

function* recordTableBack(action) {
  console.log("back..." + action.page)
}

function* recordTableForword(action) {
  console.log("forword..." + action.page)
}

function* productionTableSelect(action) {
  console.log("bread action get id:" + action.id)
    // 关闭主目录，打开子目录
  yield put({
    type: "PRODUCTION_BREAD",
    subActive: true
  })
}

function* payTableSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page:" + page + " size:" + size + " method: " + action.method + ' total:' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getEmployee, 0, size)
        break
      case 'goPrev':
        data = yield call(getEmployee, Math.max(0, page - 1), size)
        break
      case 'goNext':
        data = yield call(getEmployee, Math.min(page + 1, totalPages - 1), size)
        break
      case 'goLast':
        data = yield call(getEmployee, totalPages - 1, size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'PAY_TABLE_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }
}

function* mySaga() {
  yield takeEvery("RECORD_MODEL_CLOSE", fetchRecordModel)
  yield takeEvery("LOGIN_LOG", login)
  yield takeEvery("RECORD_TABLE_BACK", recordTableBack)
  yield takeEvery("RECORD_TABLE_FORWORD", recordTableForword)
  yield takeEvery("PRODUCTION_TABLE_SELECT", productionTableSelect)
  yield takeEvery("PAY_TABLE_SEACH", payTableSelect)
}

export default mySaga