// 施工单

// 界面初始化
export const initConstruction = (size) => ({
  type: 'CONSTRUCTION_INIT',
  size
})

// 查看
export const selectConstruction = (status, table) => ({
  type: 'CONSTRUCTION_SELECT',
  status,
  table
})

// 搜索
export const searchConstruction = (target, table) => ({
  type: 'CONSTRUCTION_SEARCH',
  name: target.name,
  value: target.value,
  table
})

// 表单按钮
export const actionConstruction = (row, method, table) => ({
  type: 'CONSTRUCTION_ACTION',
  row,
  method,
  table
})

// 表单选中行
// export const selectRowConstruction = (data) => ({
//   type: 'CONSTRUCTION_SELECT_ROW',
//   data
// })
// 完工模态框
export const operateModal = (data) => ({
  type: 'CONSTRUCTION_ALL_MODAL_OPERATE',
  data
})

// 清空模态框
export const clearModal = () => ({
  type: 'CONSTRUCTON_ALL_MODAL_CLEAR'
})

// 输入变化
export const changeInput = (target) => ({
  type: 'CONSTRUCTON_ALL_MODAL_CHANGE',
  name: target.name,
  value: target.value
})

// 工单完工操作
export const completeConstruction = (data, table) => ({
  type: 'CONSTRUCTION_ALL_COMPLETE',
  data,
  table
})

// 分页
export const activeConstructionPage = (activePage, table) => ({
  type: 'CONSTRUCTION_ACTIVEPAGE',
  activePage,
  table
})

// 设置时间
export const searchTime = (moment, data) => ({
  type: 'CONSTRUCTION_TIME',
  moment,
  data
})