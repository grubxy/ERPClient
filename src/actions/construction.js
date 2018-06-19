// 施工单

// 界面初始化
export const initConstruction = () => ({
  type: 'CONSTRUCTION_INIT'
})

// 查看
export const selectConstruction = (data, table) => ({
  type: 'CONSTRUCTION_SELECT',
  data,
  table
})

// 搜索
export const searchConstruction = (target, table) => ({
  type: 'CONSTRUCTION_SEARCH',
  name: target.name,
  value: target.value,
  table
})

// 分页
export const activeConstructionPage = (activePage, table) => ({
  type: 'CONSTRUCTION_ACTIVEPAGE',
  activePage,
  table
})