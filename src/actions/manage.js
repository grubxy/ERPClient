// 账户管理

// 初始化加载
export const initUser = () => ({
  type: 'USER_INIT'
})

// 提交新增用户
export const addUser = (data) => ({
  type: 'USER_ADD',
  data
})

// 提交删除用户
export const delUser = (row, x) => ({
  type: 'USER_DEL',
  row,
  icon: x
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