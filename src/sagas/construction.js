import {
	getConstructionByStatus
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
		let result = yield call(getConstructionByStatus, 0, 0, state)

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