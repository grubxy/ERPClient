// 生产面包条
export const productionBreadActive = (subActive) => ({
  type: 'PRODUCTION_BREAD',
  subActive
})

// 生产表格
export const recordTableBack = (page) => ({
  type: 'RECORD_TABLE_BACK',
  page: page
})

export const recordTableForword = (page) => ({
  type: 'RECORD_TABLE_FORWORD',
  page: page
})


// 工资表格分页
export const paygoToPage = (table, method) => ({
  type: 'PAY_TABLE_SEACH',
  table: table,
  method: method
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