// 施工单

// 界面初始化
export const initConstruction = () => ({
	type: 'CONSTRUCTION_INIT'
})

// 查看
export const selectConstruction = (data) => ({
	type: 'CONSTRUCTION_SELECT',
	data
})