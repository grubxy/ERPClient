import {
	call,
	put
} from 'redux-saga/effects'
import {
	postStaffApi,
	getStaffApi
} from '../api/BaihuiServerAPI'

export function* initStaffManage() {
	yield call(initStaff)
}


export function* initStaff() {

	try {

		// 获取结果
		let result = yield call(getStaffApi, 0, 0, 0)

		// 更新表格
		let staffList = []
		for (let tmp of result) {
			staffList.push({
				id: tmp.idStaff,
				name: tmp.staffName,
				phone: tmp.staffPhone,
				status: tmp.enumStaffStatus
			})
		}

		yield put({
			type: 'UPDATE_STAFF_TABLE',
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