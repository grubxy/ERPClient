const pay = (state = {
	table: {
		data: [{
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
		}
	}
}, action) => {
	switch (action.type) {
		case 'PAY_TABLE_SEACH':
			return state
		default:
			return state
	}
}

export default pay