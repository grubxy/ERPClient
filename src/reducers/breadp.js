const breadp = (state = {
	subActive: false
}, action) => {
	switch (action.type) {
		case 'PRODUCTION_BREAD':
			return {
				subActive: action.subActive
			}
		default:
			return state
	}
}

export default breadp