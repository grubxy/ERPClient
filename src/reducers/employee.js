export const employee = (state = {
	content: [],
	headers: {
		eid: {
			title: '工号'
		},
		name: {
			title: '姓名'
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
		case 'EMPLOYEE_UPDATE':
			return { ...action.data,
				headers: state.headers
			}
		default:
			return state
	}
}

export const employeeModel = (state = {
	open: false
}, action) => {
	switch (action.type) {
		case 'EMPLOYEE_MODEL_CLOSE':
			return {
				open: false
			}
		case 'EMPLOYEE_FORM_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'EMPLOYEE_MODEL_OPEN':
			return {
				open: true
			}
		default:
			return state
	}
}