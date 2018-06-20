// 账户管理

// 初始化加载
export const initUser = (size) => ({
  type: 'USER_INIT',
  size
})

// 提交新增用户
export const addUser = (data, table) => ({
  type: 'USER_ADD',
  data,
  table
})

// 提交删除用户
export const delUser = (row, method, table) => ({
  type: 'USER_DEL',
  method,
  row,
  table
})

// 分页
export const activeUserPage = (activePage, table) => ({
  type: 'USER_ACTIVEPAGE',
  activePage,
  table
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