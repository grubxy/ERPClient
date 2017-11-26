import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'


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
    .then(function(error) {
      console.log(error)
    })

}

function* recordTableBack(action) {
  console.log("back..." + action.page)
}

function* recordTableForword(action) {
  console.log("forword..." + action.page)
}

function* mySaga() {
  yield takeEvery("RECORD_MODEL_CLOSE", fetchRecordModel);
  yield takeEvery("LOGIN_LOG", login)
  yield takeEvery("RECORD_TABLE_BACK", recordTableBack)
  yield takeEvery("RECORD_TABLE_FORWORD", recordTableForword)
}

export default mySaga