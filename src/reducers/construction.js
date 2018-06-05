const defaultConstructionTable = {
	content: [],
	headers: {
		cid: {
			title: '施工单号'
		},
		productName: {
			title: '产品名'
		},
		seq: {
			title: '工序'
		},
		dstCounts: {
			title: '计划'
		},
		cmplCounts: {
			title: '完工'
		},
		errCounts: {
			title: '次品'
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
		managerName: {
			title: '制单人'
		},
		time: {
			title: '制单时间'
		}
	},
	selectable: false,
	showFooter: true,
}

export const constructionAllTable = (state = defaultConstructionTable, action) => {
	switch (action.type) {
		case 'CONSTRUCTION_UPDATE_TABLE':
			return { ...state,
				content: action.data
			}
		default:
			return state
	}
}