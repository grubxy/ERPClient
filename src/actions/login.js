// 登陆设置

export const loginChanged = (target) => ({
	type: 'LOGIN_CHANGED',
	name: target.name,
	value: target.value
})

export const loginSubmit = (user) => ({
	type: 'LOGIN_SUBMIT',
	user
})