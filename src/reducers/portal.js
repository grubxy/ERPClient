const defaultPortal = {
	open: false,
	msgheader: '出错',
	msgbody: '返回消息错误'
}

export const globalPortal = (state = defaultPortal, action) => {
	switch (action.type) {
		case 'GLOBAL_PORTAL':
			return { ...state,
				...action.data
			}
		default:
			return state
	}
}