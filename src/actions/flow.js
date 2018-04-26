// 生产流程


// 初始化界面
export const initFlow = () => ({
  type: 'FLOW_INIT'
})

// 添加生产流程
export const addProduction = (data) => ({
  type: 'PRODUCTION_ADD',
  data
})

// 选中某个生产流程
export const selectProduction = (data) => ({
  type: 'PRODUCTION_SELECT',
  data
})

// 生产流程按键
export const actionProduction = (row, method) => ({
  type: 'PRODUCTION_ACTION',
  row,
  method
})

// 提交工单
export const addConstruction = (data) => ({
  type: 'CONSTRUCTION_ADD',
  data
})

// 工单完工
export const actionConstruction = (row, method) => ({
  type: 'CONSTRUCTION_COMPLETE',
  row,
  method
})

// 模态框操作
export const operateModal = (data) => ({
  type: 'FLOW_MODAL_OPERATE',
  data
})

// 清空模态框内容
export const clearModal = () => ({
  type: 'FLOW_MODAL_CLEAR'
})

// 输入框变化
export const changeInput = (target) => ({
  type: 'FLOW_MODAL_CHANGE',
  name: target.name,
  value: target.value
})

// 产品下拉菜单
export const dropDown = (name, value) => ({
  type: 'FLOW_MODAL_CHANGE',
  name: target.name,
  value: target.value
})