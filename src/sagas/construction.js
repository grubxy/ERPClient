import {
	getConstructionByStatusApi
} from '../api/BaihuiServerAPI'
import {
	call,
	put
} from 'redux-saga/effects'

// 更新施工单表格
function* updateConstructionTable(result) {
	try {
		let constructionTable = []
		for (let tmp of result.content) {
			constructionTable.push({
				cid: tmp.idConstruct,
				productName: tmp.production.product.productName,
				seq: tmp.seq.seqName,
				dstCounts: tmp.dstCount,
				cmplCounts: tmp.cmplCount,
				errCounts: tmp.errCount,
				staff: tmp.staff.staffName,
				status: tmp.enumConstructStatus.desc,
				srcMaterial: tmp.seq.srcMaterial.name,
				dstMaterial: tmp.seq.dstMaterial.name,
				managerName: tmp.production.owner,
				time: new Date(tmp.sdate).toLocaleString()
			})
		}
		yield put({
			type: 'CONSTRUCTION_UPDATE_TABLE',
			data: constructionTable
		})

		// 更新page 和 total size
		// 更新 page与totalsize
		yield put({
			type: 'CONSTRUCTION_UPDATE_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'CONSTRUCTION_UPDATE_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'CONSTRUCTION_UPDATE_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})

	} catch (error) {}
}


/***  工单状态枚举 ***/

// ALL(0, "所有状态"),

// WAITING(1, "等待材料出库"),

// WORKING(2, "制作过程中"),

// COMPLETE(3, "完工待入库"),

// STORED(4, "入库完毕"),

// APPROVING(5, "审批中"),

// APPROVED(6, "审批完成");

// 加载初始化
export function* initConstruction(action) {

	try {
		let param = {
			page: 0,
			status: 0,
			size: action.size
		}
		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateConstructionTable, result)

	} catch (error) {}
}

// 选择状态 
export function* selectConstruction(action) {
	try {

		// 更新表搜索信息
		yield put({
			type: 'CONSTRUCTION_UPDATE_SEARCH_CHANGE',
			name: 'status',
			value: action.status
		})

		let param = { ...action.table.search,
			status: action.status,
			// 默认第0页开始 
			page: 0,
			size: action.table.size
		}

		console.log(param)

		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateConstructionTable, result)

	} catch (error) {}
}

// 搜索
export function* searchConstruction(action) {
	try {
		// 更新表信息
		yield put({
			type: 'CONSTRUCTION_UPDATE_SEARCH_CHANGE',
			name: action.name,
			value: action.value
		})

		let searchParam = { ...action.table.search,
			[action.name]: action.value,
			page: 0,
			size: action.table.size
		}

		// 调用api
		let result = yield call(getConstructionByStatusApi, searchParam)

		yield call(updateConstructionTable, result)

	} catch (error) {}
}

// 分页
export function* activePageConstruction(action) {
	try {
		let searchParam = { ...action.table.search,
			page: action.activePage,
			size: action.table.size,
			status: action.table.search.status
		}

		let result = yield call(getConstructionByStatusApi, searchParam)

		yield call(updateConstructionTable, result)

	} catch (error) {}

}