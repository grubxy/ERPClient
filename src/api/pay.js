import axios from 'axios'

export const getEmployee = (page, size) => {
	return axios.get('/pay/employee', {
			params: {
				page: page,
				size: size
			}
		})
		.then((resp) => {
			return resp.data
		})
		.catch((error) => {
			throw error
		})
}