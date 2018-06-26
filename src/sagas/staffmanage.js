import {
	call,
	put
} from 'redux-saga/effects'
import {
	postStaffApi,
	getStaffApi,
	getConstructionByStatusApi
} from '../api/BaihuiServerAPI'


function* updateStaffInfoTable(result) {
	try {

		let staffList = []
		for (let tmp of result.content) {
			staffList.push({
				id: tmp.idStaff,
				name: tmp.staffName,
				phone: tmp.staffPhone,
				status: tmp.enumStaffStatus.desc
			})
		}

		// 更新表格
		yield put({
			type: 'UPDATE_STAFFINFO_TABLE',
			data: staffList
		})

		// 更新page和totalsize size
		yield put({
			type: 'UPDATE_STAFFINFO_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'UPDATE_STAFFINFO_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'UPDATE_STAFFINFO_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})

	} catch (error) {

	}
}


export function* initStaffManage(action) {
	try {
		yield call(initStaff, action.size)
		yield call(initStaffSchedule, action.sizeSchedule)
	} catch (error) {
		console.log(error)
	}
}


export function* initStaff(size) {

	try {

		// 获取结果
		let result = yield call(getStaffApi, {
			page: 0,
			size: size
		})

		yield call(updateStaffInfoTable, result)

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
		let result = yield call(getStaffApi, {
			page: 0,
			size: action.table.size
		})

		yield call(updateStaffInfoTable, result)

	} catch (error) {
		console.log(error)
	}
}

function* updateScheduleTable(result) {
	try {
		let staffScheduleList = []
		for (let tmpList of result.content) {
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

		// 更新
		yield put({
			type: 'UPDATE_STAFFSCHEDULE_TABLE',
			data: staffScheduleList
		})

		// 更新 page与totalsize
		yield put({
			type: 'UPDATE_STAFFSCHEDULE_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'UPDATE_STAFFSCHEDULE_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'UPDATE_STAFFSCHEDULE_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})

	} catch (error) {}
}

function* initStaffSchedule(size) {
	// 等待材料出库，制作中 两种状态
	try {

		let result = yield call(getConstructionByStatusApi, {
			page: 0,
			size: size,
			status: 6
		})

		yield call(updateScheduleTable, result)

	} catch (error) {
		console.log(error)
	}
}

//搜索
export function* searchStaff(action) {
	try {
		// 更新表信息
		yield put({
			type: 'UPDATE_STAFFINFO_SEARCH_CHANGE',
			name: action.name,
			value: action.value
		})

		let param = { ...action.table.search,
			[action.name]: action.value,
			page: 0,
			size: action.table.size
		}

		let result = yield call(getStaffApi, param)

		yield call(updateStaffInfoTable, result)

	} catch (error) {}
}

// 分页
export function* activePageStaff(action) {
	try {
		let param = { ...action.table.search,
			page: action.activePage,
			size: action.table.size
		}
		let result = yield call(getStaffApi, param)

		yield call(updateStaffInfoTable, result)

	} catch (error) {}
}

//搜索
export function* searchSchedule(action) {
	try {
		yield put({
			type: 'UPDATE_STAFFSCHEDULE_SEARCH_CHANGE',
			name: action.name,
			value: action.value
		})

		let result = yield call(getConstructionByStatusApi, { ...action.table.search,
			[action.name]: action.value,
			page: 0,
			size: action.table.size,
			status: 6
		})

		yield call(updateScheduleTable, result)

	} catch (error) {}
}

// 分页
export function* activePageSchedule(action) {
	try {
		let result = yield call(getConstructionByStatusApi, { ...action.table.search,
			page: action.activePage,
			size: action.table.size,
			status: 6
		})

		yield call(updateScheduleTable, result)

	} catch (error) {}

}