import {
	getConstructionByStatusApi
} from '../api/BaihuiServerAPI'
import {
	call,
	put
} from 'redux-saga/effects'


export function* initConstruction() {
	yield call(updateConstruction, 0)
}

export function* selectConstruction(action) {
	yield call(updateConstruction, action.data)
}


export function* updateConstruction(state) {

	try {

		// 获取数据
		let result = yield call(getConstructionByStatusApi, 0, 0, state)

		/***  工单状态枚举 ***/

		// ALL(0, "所有状态"),

		// WAITING(1, "等待材料出库"),

		// WORKING(2, "制作过程中"),

		// COMPLETE(3, "完工待入库"),

		// STORED(4, "入库完毕"),

		// APPROVING(5, "审批中"),

		// APPROVED(6, "审批完成");

		let constructionTable = []
		for (let tmp of result) {
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

	} catch (error) {
		console.log(error)
	}
}