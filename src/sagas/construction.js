import {
	getConstructionByStatusApi,
	patchConstructionStatusApi
} from '../api/BaihuiServerAPI'
import {
	call,
	put
} from 'redux-saga/effects'
import {
	portalTrig,
	delayTime
} from './portal'

// 更新施工单表格
function* updateConstructionTable(result) {
	try {
		let constructionTable = []
		for (let tmp of result.content) {
			let method;
			let content;
			let enumValue = tmp.enumConstructStatus.value;
			if (enumValue === 2) {
				method = 'complete'
				content = '完工'
			} else if (enumValue === 4) {
				method = 'view'
				content = '通过'
			}
			if (enumValue === 2 || enumValue === 4) {
				constructionTable.push({
					cid: tmp.idConstruct,
					productName: tmp.production.product.productName,
					seq: tmp.seqInfo.seq.seqName,
					dstCounts: tmp.dstCount,
					cmplCounts: tmp.cmplCount,
					errCounts: tmp.errCount,
					staff: tmp.staff.staffName,
					status: tmp.enumConstructStatus.desc,
					srcMaterial: tmp.seqInfo.seq.srcMaterial.name,
					dstMaterial: tmp.seqInfo.seq.dstMaterial.name,
					managerName: tmp.production.owner,
					time: new Date(tmp.sdate).toLocaleString(),
					button_list: [{
						method: method,
						color: 'teal',
						content: content
					}]
				})
			} else {
				constructionTable.push({
					cid: tmp.idConstruct,
					productName: tmp.production.product.productName,
					seq: tmp.seqInfo.seq.seqName,
					dstCounts: tmp.dstCount,
					cmplCounts: tmp.cmplCount,
					errCounts: tmp.errCount,
					staff: tmp.staff.staffName,
					status: tmp.enumConstructStatus.desc,
					srcMaterial: tmp.seqInfo.seq.srcMaterial.name,
					dstMaterial: tmp.seqInfo.seq.dstMaterial.name,
					managerName: tmp.production.owner,
					time: new Date(tmp.sdate).toLocaleString()
				})
			}
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

	} catch (error) {
		yield call(portalTrig, 400, '更新表单失败', delayTime)
	}
}

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
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 搜索时间
export function* timeConstruction(action) {
	console.log('time:' + JSON.stringify(action.moment[0]))
	console.log('search:' + JSON.stringify(action.data.search))

	try {

		// 更新表信息
		yield put({
			type: 'CONSTRUCTION_UPDATE_SEARCH_CHANGE',
			name: 'moment',
			value: action.moment
		})

		let param = { ...action.data.search,
			moment: action.moment,
			page: 0,
			size: action.data.size
		}

		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateConstructionTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 处理action
export function* actionConstructionAll(action) {
	console.log('method' + action.method + 'row' + JSON.stringify(action.row))
	// 清空模态框
	try {
		yield put({
			type: 'CONSTRUCTON_ALL_MODAL_CLEAR'
		})

		// 如果是完工
		if (action.method === 'complete') {
			// 打开模态框
			yield put({
				type: 'CONSTRUCTION_ALL_MODAL_OPERATE',
				data: {
					complete: true,
					constructionRow: action.row
				}
			})
		} else if (action.method === 'view') {

			// patch状态
			let param = {
				status: 5 // 审批完毕
			}
			yield call(patchConstructionStatusApi, action.row.cid, param)

			let param1 = {
				...action.table.search,
				page: 0,
				size: action.table.size
			}

			let result = yield call(getConstructionByStatusApi, param1)

			// 更新结果
			yield call(updateConstructionTable, result)

			yield put({
				type: 'GLOBAL_PORTAL',
				data: {
					open: true,
					msgheader: '审批完成！',
					msgbody: '工单：' + action.row.cid
				}
			})
		}

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 完工
export function* actionConstructionAllComplete(action) {
	try {
		// 校验数据
		if (isNaN(action.data.constructionCmpl) ||
			isNaN(action.data.constructionErr)) {
			yield call(portalTrig, 400, '正品数和次品数必须为数字', delayTime)
			return
		}

		// 设置施工单状态
		let body = {
			status: 3, // 3-完工待入库
			idHouse: 0,
			cmpl: action.data.constructionCmpl,
			error: action.data.constructionErr
		}

		// patch状态
		yield call(patchConstructionStatusApi, action.data.constructionRow.cid, body)

		// 更新表单
		let param = { ...action.table.search,
			// 默认第0页开始 
			page: 0,
			size: action.table.size
		}

		let result = yield call(getConstructionByStatusApi, param)

		// 更新结果
		yield call(updateConstructionTable, result)

		// 清空模态框
		yield put({
			type: 'CONSTRUCTON_ALL_MODAL_CLEAR'
		})

		yield put({
			type: 'GLOBAL_PORTAL',
			data: {
				open: true,
				msgheader: '完工！',
				msgbody: '工单：' + action.data.constructionRow.cid
			}
		})
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}