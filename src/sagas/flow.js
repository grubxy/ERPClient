import {
	call,
	put
} from 'redux-saga/effects'
import {
	postFlowApi,
	getFlowApi,
	getFlowSeqInfoApi,
	getProductApi,
	getSeqByFlowIdApi,
	getStaffBySeqIdApi,
	postConstructionByFlowIdApi,
	getConstructionByFlowIdApi
} from '../api/BaihuiServerAPI'

// 初始化生产流程表
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

// 初始化工序表
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

// 初始化施工单
export function* initConstruction(id) {

	try {
		// 获取生产流程对应施工单
		let result = yield call(getConstructionByFlowIdApi, id)
		let constructonTable = []
		for (let tmp of result) {
			// 判断状态选择是否可用
			let disabled = (tmp.status === 'WORKING') ? true : false
			constructonTable.push({
				id: tmp.idConstruct,
				dst: tmp.dstCount,
				cmpl: tmp.cmpl,
				err: tmp.errCount,
				staff: tmp.staff.staffName,
				status: tmp.enumConstructStatus,
				stime: new Date(tmp.sdate).toLocaleString(),
				button_list: [{
					method: 'check',
					icon: 'checkmark',
					color: 'teal',
					disabled: disabled
				}]
			})
		}
		// 更新表格数据
		yield put({
			type: 'UPDATE_CONSTRUCTION_TABLE',
			data: constructonTable
		})
	} catch (error) {

	}
}

// 选择生产流程
export function* selectFlow(action) {

	// 获取工序详情
	let id = action.data.id

	try {
		// 更新工序详情
		yield call(initSeqInfo, id)

		// 更新工单
		yield call(initConstruction, id)

	} catch (error) {}

}

// 生产流程列表按钮action
export function* actionFlow(action) {

	// 清空模态框
	yield put({
		type: 'FLOW_MODAL_CLEAR'
	})

	if (action.method === 'add') {
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
				data: {
					dropDownSeq: seqDropdown
				}
			})

			// 保存行数据并打开模态框
			yield put({
				type: 'FLOW_MODAL_OPERATE',
				data: {
					construction: true,
					flowRow: action.row
				}
			})
		} catch (error) {}
	}

}

// 施工单action
export function* actionConstruction(action) {

	// 打开模态框 并保存选中行数据
	if (action.method === 'check')
		try {
			yield put({
				type: 'FLOW_MODAL_OPERATE',
				data: {
					compl: true,
					constructionRow: action.row
				}
			})
		} catch (error) {

		}
}

// 完成施工单
export function* completeConstruction(action) {



	// 设置施工单状态

	// 清空模态框
	yield put({
		type: 'FLOW_MODAL_CLEAR'
	})

	yield put({
		type: 'GLOBAL_PORTAL',
		data: {
			open: true,
			msgheader: '完工！',
			msgbody: '工单：'
		}
	})

}

// 添加施工单弹框中的工序下拉菜单选中
export function* selectSeqDropDown(action) {

	// 保存选中工序值
	yield put({
		type: 'FLOW_MODAL_CHANGE',
		name: action.name,
		value: action.value
	})
	// 获取工序默认员工
	console.log(action.value)
	try {
		let result = yield call(getStaffBySeqIdApi, action.value, 0, 0)
		let dropDown = []
		for (let tmp of result) {
			dropDown.push({
				key: tmp.idStaff,
				text: tmp.staffName,
				value: tmp.idStaff,
			})
		}
		// 更新默认员工下拉框
		yield put({
			type: 'FLOW_MODAL_OPERATE',
			data: {
				dropDownStaff: dropDown
			}
		})
	} catch (error) {}
}

// 打开生产流程模态框 需要获取所有产品信息
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

// 添加产品
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

// 添加施工单
export function* addConstructionByFlowId(action) {

	// 组装消息体
	let body = {
		dstCount: action.data.constructionDst,
		seq: {
			idSeq: action.data.seqId
		},
		staff: {
			idStaff: action.data.staffId
		}
	}
	try {
		// 添加工单
		yield call(postConstructionByFlowIdApi, action.flowRow.id, body)
		// 清空模态框
		yield put({
			type: 'FLOW_MODAL_CLEAR'
		})
		//更新施工表
		yield call(initConstruction, action.flowRow.id)
	} catch (error) {

	}
}