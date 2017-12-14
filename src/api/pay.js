import axios from 'axios'

export const getEmployee = (page, size) => {
	return axios.get('/pay/employee', {
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