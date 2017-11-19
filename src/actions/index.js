

export const recordModelClose = ()=>({
	type: 'RECORD_MODEL_CLOSE'
})

export const recordModelOpen = ()=>({
	type: 'RECORD_MODEL_OPEN'
})

export const recordModelCancle = ()=>({
	type: 'RECORD_MODEL_CANCLE'
})

export const recordModelConfirm = ()=>({
	type: 'RECORD_MODEL_CONFIRM'
})


export const loginLogin = (user) => ({
  type: 'LOGIN_LOG',
  user
})

export const loginOnChange = (target) => ({
  type: 'LOGIN_CHANGE',
  name: target.name,
  value: target.value
})

export const loginOnRegister = ()=> ({
})
