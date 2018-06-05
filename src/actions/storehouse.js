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

/*** 仓库物料 ***/

// 仓库物料 初始化
// export const initHouseOrigin = () => ({
// 	type: 'STOREHOUSE_HOUSEORIGIN_INIT'
// })

// 仓库物料模态框处理
export const operateHouseOriginModal = (data) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_MODAL_OPERATE',
	data
})

// 仓库物料input框输入
export const inputHouseOrigin = (target) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_INPUTCHANGE',
	name: target.name,
	value: target.value
})

// 仓库物料下拉菜单
export const dropDownHouseOrigin = (name, value) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_INPUTCHANGE',
	name,
	value
})

// 仓库物料下拉选定
export const dropDownSelectHouseOrigin = (name, value) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_DROPDOWN_SELECT',
	name,
	value
})

// 仓库物料出入库案件
export const operateHouseOriginModalOpen = (method) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_MODAL_OPEN',
	method
})

// 确认
export const confirmHouseOriginModal = (method, data) => ({
	type: 'STOREHOUSE_HOUSEORIGIN_MODAL_CONFIRM',
	method,
	data
})


/*** 仓库 ***/

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