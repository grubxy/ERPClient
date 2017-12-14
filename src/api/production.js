import axios from 'axios'

export const delProduction = () => {

}

export const getProduction = (page, size) => {
	return axios.get('/workflow/production', {
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

export const addProduction = (name, counts, date, detail) => {
	return axios.post('/workflow/production/add', {
			name: name,
			dst_counts: counts,
			date: date,
			detail: detail
		})
		.then((resp) => {
			if (resp.status === 200) {
				return resp.data
			} else {
				throw resp.status
			}
		})
		.catch((error => {
			throw error
		}))
}