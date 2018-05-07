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
export const storeHouseConstrConfirm = (data, method) => ({
	type: 'STOREHOUSE_CONSTRUCTION_CONFIRM',
	data,
	method
})

export const storeHouseConstrDropdown = (name, value) => ({
	type: 'STOREHOUSE_CONSTRUCTION_INPUTCHANGE',
	name,
	value
})


// 仓库配置
export const initHouse = () => ({
	type: 'STOREHOUSE_HOUSEINFO_INIT'
})

// 仓库模态框
export const operateHouseInfoModal = (data) => ({
	type: 'STOREHOUSE_HOUSEINFO_MODAL_OPERATE',
	data
})

export const houseInfoInputChange = (target) => ({
	type: 'STOREHOUSE_HOUSEINFO_INPUTCHANGE',
	name: target.name,
	value: target.value
})

// 仓库新增
export const addHouseInfo = (data) => ({
	type: 'STOREHOUSE_HOUSEINFO_ADD',
	data
})

// 仓库弹框确认
export const confirmHouseInfo = (data) => ({
	type: 'STOREHOUSE_HOUSEINFO_CONFIRM',
	data
})

// 仓库Action
export const actionHouseInfo = (row, method) => ({
	type: 'STOREHOUSE_HOUSEINFO_ACTION',
	row,
	method
})