export const technics = (state = {
	content: [],
	headers: {
		tcode: {
			title: '工艺号'
		},
		name: {
			title: '工艺名称'
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
		case 'TECHNICS_UPDATE':
			return { ...action.data,
				headers: state.headers
			}
		default:
			return state
	}
}

export const technicsModel = (state = {
	open: false
}, action) => {
	switch (action.type) {
		case 'TECHNICS_MODEL_CLOSE':
			return {
				open: false
			}
		case 'TECHNICS_FORM_CHANGE':
			return {
				...state,
				[action.name]: action.value
			}
		case 'TECHNICS_MODEL_OPEN':
			return {
				open: true
			}
		default:
			return state
	}
}