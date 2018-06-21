const defaultStoreConstrTable = {
	content: [],
	headers: {
		cid: {
			title: '施工单号'
		},
		productName: {
			title: '产品'
		},
		staff: {
			title: '工人'
		},
		status: {
			title: '工单状态'
		},
		cmplCount: {
			title: '完成入库数量'
		},
		errCount: {
			title: '次品数量'
		},
		srcMaterial: {
			title: '需要物料'
		},
		dstMaterial: {
			title: '生成物料'
		},
		time: {
			title: '制单时间'
		},
		button_list: {
			title: ''
		}
	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 2
}

export const storeConstrTable = (state = defaultStoreConstrTable, action) => {
	switch (action.type) {
		case 'STORE_UPDATE_CONSTRUCTION_TABLE':
			return { ...state,
				content: action.data
			}
		case 'STORE_UPDATE_CONSTRUCTION_TABLE_CHANGE':
			return {
				...state,
				[action.name]: action.value
			}
		case 'STORE_UPDATE_CONSTRUCTION_TABLE_SEARCH_CHANGE':
			return { ...state,
				search: { ...state.search,
					[action.name]: action.value
				}
			}
		default:
			return state
	}
}

const defaultStoreConstrModal = {
	constructionIn: false,
	constructionOut: false,
	constructionRow: {},
	houseDropDown: {}
}

export const storeConstrModal = (state = defaultStoreConstrModal, action) => {
	switch (action.type) {
		case 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STOREHOUSE_CONSTRUCTION_MODAL_CLEAR':
			return defaultStoreConstrModal
		case 'STOREHOUSE_CONSTRUCTION_INPUTCHANGE':
			return { ...state,
				[action.name]: action.value
			}
		default:
			return state
	}
}

const defaultHouseInfo = {
	content: [],
	headers: {
		name: {
			title: '仓库名'
		},
		desc: {
			title: '仓库表述'
		},
		button_list: {
			title: ''
		}
	},
	selectable: false,
	showFooter: true,
	search: {},
	totalPages: 0,
	activePage: 0,
	size: 2
}

export const houseTable = (state = defaultHouseInfo, action) => {
	switch (action.type) {
		case 'STOREHOUSE_UPDATE_HOUSEINFO_TABLE':
			return { ...state,
				content: action.data
			}
		case 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE':
			return { ...state,
				[action.name]: action.value
			}
		default:
			return state
	}
}

const defaultHouseInfoModal = {
	houseInfo: false,
	houseConfirm: false,
	houseRow: {}
}

export const houseModal = (state = defaultHouseInfoModal, action) => {
	switch (action.type) {
		case 'STOREHOUSE_HOUSEINFO_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STOREHOUSE_HOUSEINFO_INPUTCHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'STOREHOUSE_HOUSEINFO_MODAL_CLEAR':
			return defaultHouseInfoModal
		default:
			return state
	}
}

const defaultHouseOriginModal = {
	input: false,
	output: false
}

export const houseOriginModal = (state = defaultHouseOriginModal, action) => {
	switch (action.type) {
		case 'STOREHOUSE_HOUSEORIGIN_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STOREHOUSE_HOUSEORIGIN_INPUTCHANGE':
			return { ...state,
				[action.name]: action.value
			}
		case 'STOREHOUSE_HOUSEORIGIN_MODAL_CLEAR':
			return defaultHouseOriginModal
		default:
			return state
	}
}

const defaultHouseOriginTable = {
	content: [],
	headers: {
		hname: {
			title: '仓库名'
		},
		detail: {
			title: '物料详情'
		}
	}
}

export const houseOriginTable = (state = defaultHouseOriginTable, action) => {
	switch (action.type) {
		case 'STOREHOUSE_UPDATE_HOUSEORIGIN_TABLE':
			return { ...state,
				content: action.data
			}
		default:
			return state
	}
}

const defaultHouseDropDown = {
	house: [],
	origins: []
}

export const dropDowns = (state = defaultHouseDropDown, action) => {
	switch (action.type) {
		case 'STOREHOUSE_DROPDOWN_UPDATE':
			return { ...state,
				...action.data
			}
		default:
			return state
	}
}