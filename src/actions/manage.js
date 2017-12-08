// 管理页面----材料分页
export const materialgoToPage = (table, method) => ({
  type: 'MANAGE_TABLE_PAGE',
  table,
  method
})

export const materialDel = (data, size) => ({
  type: 'MANAGE_TABLE_DEL',
  data,
  size
})

// 材料模态框表格
export const materialClose = () => ({
  type: 'MANAGE_MODEL_CLOSE'
})

export const materialOpen = () => ({
  type: 'MANAGER_MODEL_OPEN'
})

export const materialConfirm = (data, size) => ({
  type: 'MANAGER_MODEL_CONFIRM',
  data,
  size
})

export const materialInputChange = (target) => ({
  type: 'MANAGER_FORM_CHANGE',
  name: target.name,
  value: target.value
})