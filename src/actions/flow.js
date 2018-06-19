// 生产流程


// 初始化界面
export const initFlow = (size) => ({
  type: 'FLOW_INIT',
  size
})

// 添加生产流程
export const addProduction = (data, table) => ({
  type: 'PRODUCTION_ADD',
  data,
  table
})

// 选中某个生产流程
export const selectProduction = (data) => ({
  type: 'PRODUCTION_SELECT',
  data
})

// 产品搜索按钮变化
export const searchProduction = (target, table) => ({
  type: 'PRODUCTION_SEARCH',
  name: target.name,
  value: target.value,
  table
})

// 打开生产流程模态框
export const openProductionModal = (data) => ({
  type: 'PRODUCTION_MODAL_OPEN',
  data
})

// 生产流程按键
export const actionProduction = (row, method) => ({
  type: 'PRODUCTION_ACTION',
  row,
  method
})

// 生产流程表单选择
export const activeProductionPage = (activePage, table) => ({
  type: 'PRODUCTION_ACTIVEPAGE',
  activePage,
  table
})

// 提交工单
export const addConstruction = (data) => ({
  type: 'CONSTRUCTION_ADD',
  data
})

// 工单完工按钮
export const actionConstruction = (row, method) => ({
  type: 'CONSTRUCTION_ACTION',
  row,
  method
})

// 工单完工模态框确认
export const completeConstruction = (data) => ({
  type: 'CONSTRUCTION_COMPLETE',
  data
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
  name: name,
  value: value
})

// 生产流程工序下拉菜单
export const dropDownSeq = (name, value) => ({
  type: 'FLOW_MODAL_SEQDROPDOWN',
  name: name,
  value: value
})