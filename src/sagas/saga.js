import {call, put, takeEvery} from 'redux-saga/effects'

function* fetchRecordModel(action) {
  console.log("xddfsdfsdf");
}

function* login(action) {
  console.log("log start password: " + action.user.password + " username: " + action.user.username)
}

function* mySaga() {
  yield takeEvery("RECORD_MODEL_CLOSE", fetchRecordModel);
  yield takeEvery("LOGIN_LOG", login)
}

export default mySaga