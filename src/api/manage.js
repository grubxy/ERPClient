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