import axios from 'axios'

export const getEmployee = (page, size) => {
	return axios.get('/employeeAll/employee', {
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

export const getAllEmployee = ()=>{
	return axios.get('/manage/employeeAll')
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