// 生产表格
export const productiongoToPage = (table, method) => ({
	type: 'PRODUCTION_TABLE_PAGE',
	table,
	method
})

// 生产选择表格
export const productiononSelect = (data) => ({
	type: 'PRODUCTION_TABLE_SELECT',
	data
})

// 生产模态框表格
export const productionModelClose = () => ({
	type: 'PRODUCTION_MODEL_CLOSE'
})

export const productionModelOpen = () => ({
	type: 'PRODUCTION_MODEL_OPEN'
})

export const productionModelConfirm = (data, size) => ({
	type: 'PRODUCTION_MODEL_CONFIRM',
	data,
	size
})

export const productionInputChange = (target) => ({
	type: 'PRODUCTION_FORM_CHANGE',
	name: target.name,
	value: target.value
})