const defaultStaffModal = {
	staff: false
}

export const staffModal = (state = defaultStaffModal, action) => {
	switch (action.type) {
		case 'STAFF_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STAFF_MODAL_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'STAFF_MODAL_CLEAR':
			return defaultStaffModal
		default:
			return state
	}
}

const defaultStaffTable = {
	content: [],
	headers: {
		name: {
			title: '员工'
		},
		phone: {
			title: '电话号码'
		},
		status: {
			title: '在职状态'
		}
	},
	selectable: false,
	showFooter: true
}

export const staffInfoTable = (state = defaultStaffTable, action) => {
	switch (action.type) {
		case 'UPDATE_STAFF_TABLE':
			return { ...state,
				content: action.data
			}
		default:
			return state
	}
}