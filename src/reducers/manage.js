export const userTable = (state = {
	content: [],
	headers: {
		username: {
			title: '账户名'
		},
		owner: {
			title: '所有者'
		},
		role: {
			title: '账户类型'
		},
		button_list: {
			title: ''
		}
	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 2
}, action) => {
	switch (action.type) {
		case 'UPDATE_USER_TABLE':
			return { ...state,
				content: action.data
			}
		case 'UPDATE_USER_TABLE_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		default:
			return state
	}
}

export const userModal = (state = {
	open: false
}, action) => {
	switch (action.type) {
		case 'USER_MODAL_OPERATE':
			return {
				open: action.open
			}
		case 'USER_MODAL_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		default:
			return state
	}
}