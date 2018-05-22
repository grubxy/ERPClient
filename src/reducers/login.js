const initialState = {
	loggedIn: false,
	redirectToReferrer: false
}

export const authentication = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_CHANGED':
			return { ...state,
				user: {
					...state.user,
					[action.name]: action.value

				}
			}
		case 'LOGIN_LOGINCHANGE':
			return { ...state,
				...action.data
			}
		default:
			return state
	}
}