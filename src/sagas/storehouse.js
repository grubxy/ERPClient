import {
	call,
	put
} from 'redux-saga/effects'
import {
	getConstructionByStatusApi,
	patchConstructionStatusApi
} from '../api/BaihuiServerAPI'

// 初始化整个页面
export function* initStoreHouse() {

	yield call(updateStoreConstrTable, 1)
}

export function* updateStoreConstrTable(state) {
	try {

		// 获取数据
		let result = yield call(getConstructionByStatusApi, 0, 0, state)

		let constructionTable = []

		/***  工单状态枚举 ***/

		// ALL(0, "所有状态"),

		// WAITING(1, "等待材料出库"),

		// WORKING(2, "制作过程中"),

		// COMPLETE(3, "完工待入库"),

		// STORED(4, "入库完毕"),

		// APPROVING(5, "审批中"),

		// APPROVED(6, "审批完成");

		for (let tmp of result) {

			let method = ''
			let content = ''

			if (tmp.enumConstructStatus.value === 1) {
				// 待出库
				method = 'out'
				content = '已出库'

			} else if (tmp.enumConstructStatus.value === 3) {
				// 待入库
				method = 'in'
				content = '入库'

			} else {
				throw "类型不匹配"
			}

			constructionTable.push({
				cid: tmp.idConstruct,
				productName: tmp.production.product.productName,
				staff: tmp.staff.staffName,
				status: tmp.enumConstructStatus.desc,
				srcMaterial: tmp.seq.srcMaterial.name,
				dstMaterial: tmp.seq.dstMaterial.name,
				managerName: tmp.production.owner,
				time: new Date(tmp.sdate).toLocaleString(),
				button_list: [{
					color: 'teal',
					method: method,
					content: content
				}]
			})
		}
		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE',
			data: constructionTable
		})

	} catch (error) {
		console.log(error)
	}

}

export function* storeConstrAction(action) {

	// 清空模态框内容
	yield put({
		type: 'STOREHOUSE_CONSTRUCTION_MODAL_CLEAR'
	})

	// 判断处理类型 待入库or待出库
	if (action.method === 'out') {
		// 入库
		// 拷贝行内容并打开模态框
		yield put({
			type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
			data: {
				constructionOut: true,
				constructionRow: action.row
			}
		})

	} else if (action.method === 'in') {
		// 出库

		// 拷贝行内容并打开模态框
		yield put({
			type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
			data: {
				constructionOut: true,
				constructionRow: action.row
			}
		})

	}
}

export function* storeConstrSelect(action) {

	// 根据状态更新
	yield call(updateStoreConstrTable, action.data)
}


export function* storeConstrConfirm(action) {

	try {

		// 判断模态框确认类型 出库 or 入库
		if (action.method === 'in') {
			console.log('入库')
		} else if (action.method === 'out') {
			console.log('出库')
			// 构造请求，设置工单状态
			let body = {
				status: 2, // 制作过程中
				idHouse: 0,
				error: 0,
				cmpl: 0
			}

			yield call(patchConstructionStatusApi, action.data.constructionRow.cid, body)

			// 更新等出库表
			yield call(updateStoreConstrTable, 1)

			// 关闭模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionOut: false
				}
			})
		}
	} catch (error) {
		console.log(error)
	}
	// 构造请求

	// 发送请求，设置工单状态

	// 更新工单表

	// 更新仓库表

}