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
	} else if (method === 'DELETE') {
		return axios.delete(url, {
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

/*** 账户 ***/

// 添加账户 
export const postUserAPI = (data) => {
	return fetch('/user', {
		data: data
	})
}

// 获取账户列表
export const getUserAPI = () => {
	return fetch('/user?page=0&size=0', {
		method: 'GET'
	})
}

// 删除账户列表 
export const deleteUserAPI = (id) => {
	return fetch(`/user/${id}`, {
		method: 'DELETE'
	})
}

/*** 基础数据 ***/

// 增加产品
export const postProductAPI = (data) => {
	return fetch('/product', {
		data
	})
}

// 删除产品
export const deleteProductAPI = (id) => {
	return fetch(`/product/${id}`, {
		method: 'DELETE'
	})
}

// 获取产品
export const getProductApi = (page, size) => {
	return fetch(`/product?page=${page}&size=${size}`, {
		method: 'GET'
	})
}

// 给某产品添加工序
export const postSeqByProductIdApi = (id, data) => {
	return fetch(`/product/${id}/seq`, {
		data
	})
}


// 获取某个产品工序
export const getSeqByProductIdApi = (id, page, size) => {
	return fetch(`/product/${id}/seq?page=${page}&size=${size}`, {
		method: 'GET'
	})
}

// 给工序添加默认员工
export const postStaffBySeqIdApi = (id, data) => {
	return fetch(`/seq/${id}/staff`, {
		data
	})
}

// 获取工序默认员工
export const getStaffBySeqIdApi = (id, page, size) => {
	return fetch(`/seq/${id}/staff?page=${page}&size=${size}`, {
		method: 'GET'
	})
}

// 获取员工下拉
export const getStaffDropDownApi = (page, size, status) => {
	return fetch(`/staff?page=${page}&size=${size}&status=${status}`, {
		method: 'GET'
	})
}