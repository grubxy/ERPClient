import axios from 'axios'

function fetch(url, {
	params = {},
	data,
	method = 'POST'
}) {
	if (method === 'POST') {
		return axios.post(url, data)
			.then((resp) => {
				if (resp.status === 200) {
					// 正常结果
					return resp.data.content
				} else if (resp.status === 400) {
					// 用户层异常
					throw resp.data
				} else {
					// 其他异常
					throw resp.status
				}
			})
			.catch(error => {
				throw error
			})
	} else if (method === 'GET') {
		return axios.get(url, {
				params: params
			})
			.then((resp) => {
				if (resp.status === 200) {
					// 正常结果
					return resp.data.content
				} else if (resp.status === 400) {
					// 用户层异常
					throw resp.data
				} else {
					// 其他异常
					throw resp.status
				}
			})
			.catch(error => {
				throw error
			})
	}
}

/*** 用户 ***/

export const addUserAPI = (data) => {
	return fetch('/auth/register', {
		data: data
	})
}

export const getUserListAPI = () => {
	return fetch('/userlist', {
		method: 'GET'
	})
}

export const delUserAPI = (id) => {
	return fetch(`/delUser/${id}`, {
		method: 'GET'
	})
}