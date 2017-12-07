const pay = (state = {
	content: [{
		name: '小王',
		pay: '200'
	}, {
		name: '小李',
		pay: '300'
	}],
	headers: {
		name: {
			title: '姓名'
		},
		pay: {
			title: '工资'
		}
	},
	number: 0,
	size: 10,
	totalPages: 0
}, action) => {
	switch (action.type) {
		case 'PAY_TABLE_UPDATE':
			return {...action.data,
				headers: state.headers
			}
		default:
			return state
	}
}

export default pay