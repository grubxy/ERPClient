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
	}
}

export const storeConstrTable = (state = defaultStoreConstrTable, action) => {
	switch (action.type) {
		case 'STORE_UPDATE_CONSTRUCTION_TABLE':
			return { ...state,
				content: action.data
			}
		default:
			return state
	}
}

const defaultStoreConstrModal = {
	constructionIn: false,
	constructionOut: false,
	constructionRow: {}
}

export const storeConstrModal = (state = defaultStoreConstrModal, action) => {
	switch (action.type) {
		case 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE':
			return { ...state,
				...action.data
			}
		case 'STOREHOUSE_CONSTRUCTION_MODAL_CLEAR':
			return defaultStoreConstrModal
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
	}
}

export const houseTable = (state = defaultHouseInfo, action) => {
	switch (action.type) {
		case 'STOREHOUSE_UPDATE_HOUSEINFO_TABLE':
			return { ...state,
				content: action.data
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