// 员工管理

// 初始化
export const initStaffManage = () => ({
  type: 'STAFF_MANAGE_INIT'
})

// 添加员工信息
export const addStaff = (data) => ({
  type: 'STAFF_ADD',
  data
})

// 处理模态框
export const operateStaffModal = (data) => ({
  type: 'STAFF_MODAL_OPERATE',
  data
})

// 处理输入变化
export const changeInputStaff = (target) => ({
  type: 'STAFF_MODAL_CHANGE',
  name: target.name,
  value: target.value
})