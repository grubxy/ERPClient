import {
	call,
	put
} from 'redux-saga/effects'
import {
	postStaffApi,
	getStaffApi,
	getConstructionByStatusApi
} from '../api/BaihuiServerAPI'

export function* initStaffManage() {
	try {
		yield call(initStaff)
		yield call(initStaffSchedule)
	} catch (error) {
		console.log(error)
	}
}


export function* initStaff() {

	try {

		// 更新表格
		let staffList = []
		// 在职 离职
		let status = [1, 2]
		for (let tmpstatus of status) {
			// 获取结果
			let result = yield call(getStaffApi, 0, 0, tmpstatus)
			for (let tmp of result) {
				staffList.push({
					id: tmp.idStaff,
					name: tmp.staffName,
					phone: tmp.staffPhone,
					status: tmp.enumStaffStatus.desc
				})
			}
		}
		yield put({
			type: 'UPDATE_STAFFINFO_TABLE',
			data: staffList
		})
	} catch (error) {

	}
}

export function* addStaff(action) {

	let body = {
		staffName: action.data.staffName,
		staffPhone: action.data.staffPhone
	}

	try {
		// 发送请求
		yield call(postStaffApi, body)

		// 关闭模态框
		yield put({
			type: 'STAFF_MODAL_CLEAR'
		})

		// 更新表格
		yield call(initStaff)

	} catch (error) {
		console.log(error)
	}
}

function* initStaffSchedule() {
	// 等待材料出库，制作中 两种状态
	let status = [1, 2]
	try {
		let staffScheduleList = []
		for (let tmp of status) {
			let result = yield call(getConstructionByStatusApi, 0, 0, tmp)
			for (let tmpList of result) {
				staffScheduleList.push({
					staffName: tmpList.staff.staffName,
					idConstr: tmpList.idConstruct,
					stateConstr: tmpList.enumConstructStatus.desc,
					dstConstr: tmpList.dstCount,
					idProduction: tmpList.production.idProduction,
					productName: tmpList.production.product.productName,
					dstProduct: tmpList.production.dstCounts
				})
			}
		}
		// 更新
		yield put({
			type: 'UPDATE_STAFFSCHEDULE_TABLE',
			data: staffScheduleList
		})

	} catch (error) {
		console.log(error)
	}
}