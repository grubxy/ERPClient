// 管理页面----材料分页
export const materialgoToPage = (table, method) => ({
  type: 'MANAGE_TABLE_PAGE',
  table,
  method
})

export const materialDel = (data) => ({
  type: 'MANAGE_TABLE_DEL',
  data
})

// 材料模态框表格
export const materialClose = () => ({
  type: 'MANAGE_MODEL_CLOSE'
})

export const materialOpen = () => ({
  type: 'MANAGER_MODEL_OPEN'
})

export const materialConfirm = (data) => ({
  type: 'MANAGER_MODEL_CONFIRM',
  data
})

export const materialInputChange = (target) => ({
  type: 'MANAGER_FORM_CHANGE',
  name: target.name,
  value: target.value
})