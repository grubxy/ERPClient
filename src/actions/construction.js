// 施工新增模态框
export const constructionModelClose = () => ({
	type: 'CONSTRUCTION_MODEL_CLOSE'
})

export const constructionModelOpen = (match, pid) => ({
	type: 'CONSTRUCTION_MODEL_OPEN',
	tcode: match,
	pid: pid
})

export const constructionModelConfirm = (data) => ({
	type: 'CONSTRUCTION_MODEL_CONFIRM',
	data
})

export const constructionModelChange = (target) => ({
	type: 'CONSTRUCTION_MODEL_CHANGE',
	name: target.name,
	value: target.value
})

export const constructionModelSelect = (name, value) => ({
	type: 'CONSTRUCTION_MODEL_SELECT',
	name: name,
	value: value
})

export const constructionTableModify = () => ({})

export const constructionTableInBound = () => ({})

export const constructionTableComplete = () => ({})

export const constructionTableOnOpen = () => ({})