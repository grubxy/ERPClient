export const material = (state = {
	content: [{
		name: '物料名1',
		code: '000001',
		spec: '规格名1'
	}],
	headers: {
		name: {
			title: '物料名称'
		},
		code: {
			title: '物料代码'
		},
		spec: {
			title: '规格'
		},
		action: {
			title: '操作'
		}
	},
	number: 0,
	size: 10,
	totalPages: 0
}, action) => {
	switch (action.type) {
		case 'MATERIAL_UPDATE':
			return state
		default:
			return state
	}
}

export const model = (state = {
		open: false
	},
	action) => {
	switch (action.type) {
		case 'MANAGE_MODEL_CLOSE':
			return {
				open: false
			}
			break
		case 'MANAGER_FORM_CHANGE':
			return {...state,
				[action.name]: action.value
			}
			break
		case 'MANAGER_MODEL_OPEN':
			return {
				open: true
			}
		default:
			return state
	}
}