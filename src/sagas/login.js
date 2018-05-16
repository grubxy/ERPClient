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
		console.log('result:' + JSON.stringify(result))

		localStorage.setItem("token", result)

		yield put({
			type: 'LOGIN_LOGINCHANGE',
			data: {
				loggedIn: true,
				user: action.user
			}
		})

		history.push('/')

	} catch (error) {

	}
}

export function* logout() {
	localStorage.removeItem('token')
}