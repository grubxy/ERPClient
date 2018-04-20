import axios from 'axios'


export const addMaterial = (name, spec) => {
	return axios.post('/manage/material/add', {
			name: name,
			spec: spec
		})
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch(error => {
			throw error
		})
}

export const delMaterial = (data) => {
	return axios.post('/manage/material/del', data)
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
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
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch((error) => {
			throw error
		})
}

export const getAllMaterial = () => {
	return axios.get('/manage/materialAll')
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch((error) => {
			throw error
		})
}

export const addTechnics = (name) => {
	return axios.post('/manage/technics/add', {
			name: name
		})
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch(error => {
			throw error
		})
}

export const delTechnics = (data) => {
	return axios.post('/manage/technics/del', data)
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch(error => {
			throw error
		})
}

export const getTechnics = (page, size) => {
	return axios.get('/manage/technics', {
			params: {
				page: page,
				size: size
			}
		})
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch((error) => {
			throw error
		})
}

export const getAllTechnics = () => {
	return axios.get('/manage/technicsAll')
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch((error) => {
			throw error
		})
}