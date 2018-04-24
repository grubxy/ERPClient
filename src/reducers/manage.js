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
	}
}, action) => {
	switch (action.type) {
		case 'UPDATE_USER_TABLE':
			// 将后端返回值转成表格需求数据
			return { ...action.data,
				headers: state.headers
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