const defaultPortal = {
	open: false,
	msgheader: '出错',
	msgbody: '返回消息错误'
}

export const globalPortal = (state = defaultPortal, action) => {
	switch (action.type) {
		case 'GLOBAL_PORTAL':
			if (action.data.msgheader === 403) {
				return { ...state,
					...action.data,
					msgheader: 100,
					msgbody: '你没有权限'
				}
			} else if (action.data.msgheader === 500) {
				return { ...state,
					...action.data,
					msgheader: 500,
					msgbody: '链接不上网络'
				}
			} else {
				return { ...state,
					...action.data
				}
			}
		default:
			return state
	}
}