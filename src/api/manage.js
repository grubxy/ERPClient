import axios from 'axios'

export const addMaterial = (name, spec) => {
	return axios.post('/manage/add', {
			name: name,
			spec: spec
		})
		.then((resp) => {
			return resp.data
		})
		.catch(error => {
			throw error
		})
}

export const delMaterial = (data) => {
	return axios.post('/manage/del', data)
		.then((resp) => {
			return resp.data
		})
		.catch(error => {
			throw error
		})
}

export const getMaterial = (page, size) => {
	return axios.get('/manage/material', {
			params: {
				page: page,
				size: size
			}
		})
		.then((resp) => {
			return resp.data
		})
		.catch((error) => {
			return error
		})
}