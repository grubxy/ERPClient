// 生产模态框表格
export const productionModelClose = () => ({
  type: 'PRODUCTION_MODEL_CLOSE'
})

export const productionModelOpen = () => ({
  type: 'PRODUCTION_MODEL_OPEN'
})

export const productionModelConfirm = (data) => ({
  type: 'PRODUCTION_MODEL_CONFIRM',
  data
})

export const productionInputChange = (target) => ({
  type: 'PRODUCTION_FORM_CHANGE',
  name: target.name,
  value: target.value
})

// 生产面包条
export const productionBreadActive = () => ({})

// 生产表格
export const recordTableBack = (page) => ({
  type: 'RECORD_TABLE_BACK',
  page: page
})

export const recordTableForword = (page) => ({
  type: 'RECORD_TABLE_FORWORD',
  page: page
})


// 登录
export const loginLogin = (user) => ({
  type: 'LOGIN_LOG',
  user
})

export const loginOnChange = (target) => ({
  type: 'LOGIN_CHANGE',
  name: target.name,
  value: target.value
})

export const loginOnRegister = () => ({})