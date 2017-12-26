import axios from 'axios'

export const addConstruction = (data) => {

	return axios.post(`/workflow/construction/${data.pid}`, {
			dst_counts: Number(data.dst_counts),
			err_counts: Number(data.err_counts),
			cmpl_counts: Number(data.cmpl_counts),
			employee: {
				eid: data.employee
			},
			material: {
				mcode: data.material
			},
			technics: {
				tcode: data.tcode
			}
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

export const getAllConstruction = () => {

	return axios.get('/workflow/constructionAll')
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