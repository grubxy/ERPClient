import {
	call,
	put
} from 'redux-saga/effects'
import {
	postStaffApi,
	getStaffApi,
	getConstructionByStatusApi,
	getStaffSalaryApi,
	patchStaffStatusApi
} from '../api/BaihuiServerAPI'
import {
	portalTrig,
	delayTime
} from './portal'

function* updateStaffInfoTable(result) {
	try {

		let staffList = []
		for (let tmp of result.content) {

			let method = 'release'
			let color = 'grey'
			let content = '离职'

			if (tmp.enumStaffStatus.value === 2) {
				method = 'deploy'
				color = 'teal'
				content = '重新入职'
			}

			staffList.push({
				id: tmp.idStaff,
				name: tmp.staffName,
				phone: tmp.staffPhone,
				status: tmp.enumStaffStatus.desc,
				button_list: [{
					method: method,
					color: color,
					content: content
				}]
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
		yield call(portalTrig, 400, '更新表单失败', delayTime)
	}
}


export function* initStaffManage(action) {
	try {

		yield call(initStaff, action.size)

		yield call(initStaffSchedule, action.sizeSchedule)

		let result = yield call(getStaffSalaryApi, {
			page: 0,
			size: action.sizeSalary
		})

		yield call(updateSalaryTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
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
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

export function* addStaff(action) {

	let body = {
		staffName: action.data.staffName,
		staffPhone: action.data.staffPhone
	}

	// 校验内容
	if (action.data.staffName === '' ||
		action.data.staffName === undefined ||
		action.data.staffName === null) {
		// 提示 
		yield call(portalTrig, 400, "请输入员工姓名", delayTime)
		return
	}

	if (action.data.staffPhone === '' ||
		action.data.staffPhone === undefined ||
		action.data.staffPhone === null) {
		// 提示 
		yield call(portalTrig, 400, "请输入电话号码", delayTime)
		return
	}

	if (isNaN(action.data.staffPhone)) {
		// 提示 
		yield call(portalTrig, 400, "电话号码为数字", delayTime)
		return
	}

	// 校验电话号码
	let reg = /^\d{11}$/;
	let reg8 = /^\d{8}$/;
	if (!reg.test(action.data.staffPhone) &&
		!reg8.test(action.data.staffPhone)) {
		yield call(portalTrig, 400, '号码位数不对', delayTime)
		return
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
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

export function* actionStaff(action) {
	console.log(JSON.stringify(action))
	try {
		if (action.method === 'release') {
			yield call(patchStaffStatusApi, action.row.id, {
				status: 2
			})
		} else if (action.method === 'deploy') {
			yield call(patchStaffStatusApi, action.row.id, {
				status: 1
			})
		} else {
			yield call(portalTrig, 400, '系统错误', delayTime)
		}

		// 更新表单
		let result = yield call(getStaffApi, { ...action.table.search,
			page: 0,
			size: action.table.size
		})

		yield call(updateStaffInfoTable, result)
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
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

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 
function* updateSalaryTable(result) {
	try {
		let salaryTable = []
		for (let tmp of result.content) {
			salaryTable.push({
				name: tmp.name,
				pay: tmp.sumCost
			})
		}
		// 更新表格
		yield put({
			type: 'UPDATE_STAFFSALARY_TABLE',
			data: salaryTable
		})

		// 更新 page与totalsize
		yield put({
			type: 'UPDATE_STAFFSALARY_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'UPDATE_STAFFSALARY_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'UPDATE_STAFFSALARY_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})

	} catch (error) {
		yield call(portalTrig, 400, '更新表单失败', delayTime)
	}
}

// 工资搜索
export function* searchSalary(action) {
	try {
		// 更新表格信息
		yield put({
			type: 'UPDATE_STAFFSALARY_SEARCH_CHANGE',
			name: action.name,
			value: action.value
		})

		let param = { ...action.table.search,
			[action.name]: action.value,
			page: 0,
			size: action.table.size
		}

		let result = yield call(getStaffSalaryApi, param)

		yield call(updateSalaryTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 工资分页
export function* activePageSalary(action) {

	try {
		let param = { ...action.table.search,
			page: action.activePage,
			size: action.table.size
		}

		let result = yield call(getStaffSalaryApi, param)

		yield call(updateSalaryTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}

// 工资时间
export function* timeSalary(action) {
	try {
		// 更新表信息
		yield put({
			type: 'UPDATE_STAFFSALARY_SEARCH_CHANGE',
			name: 'moment',
			value: action.moment
		})

		let param = { ...action.data.search,
			moment: action.moment,
			page: 0,
			size: action.data.size
		}

		let result = yield call(getStaffSalaryApi, param)

		yield call(updateSalaryTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}