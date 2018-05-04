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