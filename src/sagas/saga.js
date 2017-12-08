import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'
import {
  getEmployee
} from '../api/pay'
import {
  addMaterial,
  delMaterial,
  getMaterial
} from '../api/manage'


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
        data = yield call(getEmployee, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getEmployee, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getEmployee, Math.max(0, totalPages - 1), size)
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

function* materialSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getMaterial, 0, size)
        break
      case 'goPrev':
        data = yield call(getMaterial, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getMaterial, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getMaterial, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'MATERIAL_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }

}


function* manageDel(action) {
  console.log("manage del:" + action.data.code + action.data.name + action.data.spec + 'size: ' + action.size)
  let data = ''
  try {
    yield call(delMaterial, action.data)
    data = yield call(getMaterial, 0, action.size)
  } catch (error) {
    console.log(error)
  }
  yield put({
    type: 'MATERIAL_UPDATE',
    data
  })
}

function* manageAdd(action) {
  let data = ''
  console.log("manage add:" + action.data.name + action.data.spec + 'size: ' + action.size)
  try {
    yield call(addMaterial, action.data.name, action.data.spec)
    data = yield call(getMaterial, 0, action.size)
  } catch (error) {
    console.log(error)
  }
  yield put({
    type: 'MANAGE_MODEL_CLOSE'
  })
  yield put({
    type: 'MATERIAL_UPDATE',
    data
  })
}

function* mySaga() {
  yield takeEvery("RECORD_MODEL_CLOSE", fetchRecordModel)
  yield takeEvery("LOGIN_LOG", login)
  yield takeEvery("RECORD_TABLE_BACK", recordTableBack)
  yield takeEvery("RECORD_TABLE_FORWORD", recordTableForword)
  yield takeEvery("PRODUCTION_TABLE_SELECT", productionTableSelect)
  yield takeEvery("PAY_TABLE_SEACH", payTableSelect)
  yield takeEvery("MANAGE_TABLE_DEL", manageDel)
  yield takeEvery("MANAGER_MODEL_CONFIRM", manageAdd)
  yield takeEvery("MANAGE_TABLE_PAGE", materialSelect)
}

export default mySaga