import {
	call,
	put
} from 'redux-saga/effects'
import {
	authAPI
} from '../api/BaihuiServerAPI'
import {
	createBrowserHistory
} from 'history';

import {
	portalTrig,
	delayTime
} from './portal'

const history = createBrowserHistory();

export function* login(action) {

	try {

		// 发送请求
		let body = {
			username: action.user.username,
			password: action.user.password
		}

		let result = yield call(authAPI, body);

		// 存储 token
		localStorage.setItem('token', result)

		yield put({
			type: 'LOGIN_LOGINCHANGE',
			data: {
				loggedIn: true,
				redirectToReferrer: true,
				user: action.user
			}
		})

		history.push('/')

	} catch (error) {

		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}


export function* logout() {

	localStorage.removeItem('token')

	yield put({
		type: 'LOGIN_LOGINCHANGE',
		data: {
			loggedIn: false,
			redirectToReferrer: false,
		}
	})
}