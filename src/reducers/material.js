export const material = (state = {
	content: [],
	headers: {
		mcode: {
			title: '物料代码'
		},
		name: {
			title: '物料名称'
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
			return { ...action.data,
				headers: state.headers
			}
		default:
			return state
	}
}

export const materialModel = (state = {
		open: false
	},
	action) => {
	switch (action.type) {
		case 'MATERIAL_MODEL_CLOSE':
			return {
				open: false
			}
		case 'MATERIAL_FORM_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'MATERIAL_MODEL_OPEN':
			return {
				open: true
			}
		default:
			return state
	}
}