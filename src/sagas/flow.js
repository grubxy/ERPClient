import {
	call,
	put
} from 'redux-saga/effects'
import {
	postFlowApi,
	getFlowApi,
	getFlowSeqInfoApi,
	getProductApi,
	getSeqByFlowIdApi
} from '../api/BaihuiServerAPI'


export function* initFlow() {
	try {
		// 获取生产流程
		let result = yield call(getFlowApi, 0, 0)
		// 更新生产流程表
		let flowTableList = []
		for (let tmp of result) {
			flowTableList.push({
				id: tmp.idProduction,
				name: tmp.product.productName,
				dst: tmp.dstCounts,
				cmp: tmp.cmplCounts,
				err: tmp.errCounts,
				owner: '',
				time: '',
				button_list: [{
					method: 'add',
					icon: 'add',
					color: 'teal'
				}]
			})
		}
		yield put({
			type: 'UPDATE_PRODUCTION_TABLE',
			data: flowTableList
		})
		// 
	} catch (error) {

	}
}

export function* initSeqInfo(id) {

	// 获取工序详情
	try {
		let result = yield call(getFlowSeqInfoApi, id)
		let seqinfoTable = []

		for (let tmp of result) {
			seqinfoTable.push({
				index: tmp.seq.seqIndex,
				name: tmp.seq.seqName,
				seqCost: tmp.seq.seqCost,
				dst: tmp.dstCounts,
				doing: tmp.doingCounts,
				cmpl: tmp.cmplCounts,
				err: tmp.errCounts
			})
		}
		// 更新工序详情表
		yield put({
			type: 'UPDATE_SEQINOF_TABLE',
			data: seqinfoTable
		})
	} catch (error) {

	}
}

export function* initConstruction(id) {

	// 获取生产流程对应施工单

	// 更新表格

}

export function* selectFlow(action) {

	// 获取工序详情
	let id = action.data.id

	// 更新工序详情
	try {
		yield call(initSeqInfo, id)
	} catch (error) {}

}

export function* actionFlow(action) {

	// 保存行数据并打开模态框
	if (action.method === 'add') {
		yield put({
			type: 'FLOW_MODAL_OPERATE',
			data: {
				construction: true,
				flowRow: action.row
			}
		})
	}
	// 获取员工，工序下拉框
	try {
		let result = yield call(getSeqByFlowIdApi, action.row.id, 0, 0)
		let seqDropdown = []
		for (let tmp of result) {
			seqDropdown.push({
				key: tmp.idSeq,
				text: tmp.seqName,
				value: tmp.idSeq
			})
		}
		//
		yield put({
			type: 'FLOW_MODAL_OPERATE',
			dropDownSeq: seqDropdown
		})

	} catch (error) {}


}

export function* openProductionModal(action) {

	// 获取所有产品列表
	try {
		let result = yield call(getProductApi, 0, 0)
		let dropDown = []
		for (let tmp of result) {
			dropDown.push({
				key: tmp.idProduct,
				text: tmp.productName,
				value: tmp.idProduct
			})
		}
		// 打开模态框
		yield put({
			type: 'FLOW_MODAL_OPERATE',
			data: {
				flow: true,
				dropDownProduct: dropDown
			}
		})
	} catch (error) {

	}

}

export function* addProduction(action) {

	// 组装消息体
	let body = {
		product: {
			idProduct: action.data.productId
		},
		dstCounts: action.data.flowDst,
	}

	try {
		// 发送请求
		yield call(postFlowApi, body)

		// 清空模态框
		yield put({
			type: 'FLOW_MODAL_CLEAR'
		})

		// 更新生产工序表单
		yield call(initFlow)

		// 置空后续关联表单
		yield put({
			type: 'UPDATE_SEQINOF_TABLE',
			data: []
		})

		yield put({
			type: 'UPDATE_CONSTRUCTION_TABLE',
			data: []
		})

	} catch (error) {

	}
}