// 账户管理

// 提交新增用户
export const addUser = (data) => ({
  type: 'USER_ADD',
  data
})

// 提交删除用户
export const delUser = (data) => ({
  type: 'USER_DEL',
  data
})

// 模态框操作
export const operateUserModal = (data) => ({
  type: 'USER_MODAL_OPERATE',
  open: data
})

// 输入框变化
export const changeUserInput = (target) => ({
  type: 'USER_MODAL_CHANGE',
  name: target.name,
  value: target.value
})

// 下拉框变化
export const dropdownUserInput = (name, value) => ({
  type: 'USER_MODAL_CHANGE',
  name: name,
  value: value
})


// 管理页面----材料分页
export const materialgoToPage = (table, method) => ({
  type: 'MATERIAL_TABLE_PAGE',
  table,
  method
})

export const materialDel = (data, size) => ({
  type: 'MATERIAL_TABLE_DEL',
  data,
  size
})

// 材料模态框表格
export const materialClose = () => ({
  type: 'MATERIAL_MODEL_CLOSE'
})

export const materialOpen = () => ({
  type: 'MATERIAL_MODEL_OPEN'
})

export const materialConfirm = (data, size) => ({
  type: 'MATERIAL_MODEL_CONFIRM',
  data,
  size
})

export const materialInputChange = (target) => ({
  type: 'MATERIAL_FORM_CHANGE',
  name: target.name,
  value: target.value
})

// 管理页面-----工艺分页
export const technicsgoToPage = (table, method) => ({
  type: 'TECHNICS_TABLE_PAGE',
  table,
  method
})

export const technicsDel = (data, size) => ({
  type: 'TECHNICS_TABLE_DEL',
  data,
  size
})

// 管理页面------工艺模态框 
export const technicsClose = () => ({
  type: 'TECHNICS_MODEL_CLOSE'
})

export const technicsOpen = () => ({
  type: 'TECHNICS_MODEL_OPEN'
})

export const technicsConfirm = (data, size) => ({
  type: 'TECHNICS_MODEL_CONFIRM',
  data,
  size
})

export const technicsInputChange = (target) => ({
  type: 'TECHNICS_FORM_CHANGE',
  name: target.name,
  value: target.value
})



// 管理页面-----员工
export const employeegoToPage = (table, method) => ({
  type: 'EMPLOYEE_TABLE_PAGE',
  table,
  method
})

export const employeeDel = (data, size) => ({
  type: 'EMPLOYEE_TABLE_DEL',
  data,
  size
})

// 员工 模态框
export const employeeClose = () => ({
  type: 'EMPLOYEE_MODEL_CLOSE'
})

export const employeeOpen = () => ({
  type: 'EMPLOYEE_MODEL_OPEN'
})

export const employeeConfirm = (data, size) => ({
  type: 'EMPLOYEE_MODEL_CONFIRM',
  data,
  size
})

export const employeeInputChange = (target) => ({
  type: 'EMPLOYEE_FORM_CHANGE',
  name: target.name,
  value: target.value
})