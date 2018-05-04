// 仓储管理

// 初始化
export const initStoreHouse = () => ({
	type: 'STOREHOUSE_INIT'
})

// 选择筛选按钮
export const selectStoreHouseConstTable = (data) => ({
	type: 'STOREHOUSE_CONSTRUCTION_SELECT',
	data
})

// 施工单操作
export const actionStoreHouseConstTable = (row, method) => ({
	type: 'STOREHOUSE_CONSTRUCTION_ACTION',
	row,
	method
})

// 工单模态框处理
export const operateConstructionModal = (data) => ({
	type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
	data
})

// 模态框确认操作
export const StoreHouseConstrConfirm = (data, method) => ({
	type: 'STOREHOUSE_CONSTRUCTION_CONFIRM',
	data,
	method
})