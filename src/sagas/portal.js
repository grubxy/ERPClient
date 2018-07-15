import {
  delay
} from 'redux-saga'
import {
  call,
  put
} from 'redux-saga/effects'

export const delayTime = 2000

export function* portalTrig(code, msg, time = 1000) {
  yield put({
    type: 'GLOBAL_PORTAL',
    data: {
      open: true,
      msgheader: code,
      msgbody: msg
    }
  })
  yield call(delay, time)

  yield put({
    type: 'GLOBAL_PORTAL_CLEAR'
  })
}