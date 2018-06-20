import {
	getUserAPI,
	deleteUserAPI,
	postUserAPI
} from '../api/BaihuiServerAPI'
import {
	call,
	put
} from 'redux-saga/effects'

// 角色枚举
const roles = ['系统管理员', '流程管理员',
	'仓库管理员'
]

function* updateUser(result) {
	let userTableList = []
	for (let tmp of result.content) {

		// 显示字符转换
		let roleString = ''
		for (let role of tmp.roles) {
			roleString += roles[role.rid - 1] + ' '
		}
		// 列表数据
		userTableList.push({
			id: tmp.uid,
			username: tmp.username,
			owner: tmp.owner,
			role: roleString,
			button_list: [{
				method: 'delete',
				icon: 'delete',
				color: 'grey'
			}]
		})
	}

	// 更新表单 
	yield put({
		type: 'UPDATE_USER_TABLE',
		data: userTableList
	})

	// 更新page和totalsize size
	yield put({
		type: 'UPDATE_USER_TABLE_CHANGE',
		name: 'totalPages',
		value: result.totalPages
	})

	yield put({
		type: 'UPDATE_USER_TABLE_CHANGE',
		name: 'activePage',
		value: result.number
	})

	yield put({
		type: 'UPDATE_USER_TABLE_CHANGE',
		name: 'size',
		value: result.size
	})

}


export function* initUser(action) {
	try {

		// 获取新列表
		let result = yield call(getUserAPI, {
			page: 0,
			size: action.size
		})

		yield call(updateUser, result)

	} catch (error) {
		// 提示 
	}
}

export function* delUser(action) {
	try {
		if (action.method === 'delete') {
			yield call(deleteUserAPI, action.row.id)
		} else {
			//
			console.log("按钮错误!")
		}

		//更新表格数据
		let result = yield call(getUserAPI, {
			page: 0,
			size: action.table.size
		})

		yield call(updateUser, result)

	} catch (error) {

	}
}

export function* addUser(action) {
	// 发送消息体
	let data = {
		username: action.data.username,
		owner: action.data.owner,
		password: action.data.password,
		roles: [{
			rid: action.data.role
		}]
	}

	try {
		// 发送请求
		yield call(postUserAPI, data)

		// 关闭modal
		yield put({
			type: 'USER_MODAL_OPERATE',
			open: false
		})

		//更新表格数据
		let result = yield call(getUserAPI, {
			page: 0,
			size: action.table.size
		})

		yield call(updateUser, result)

	} catch (error) {

		// 关闭modal
		yield put({
			type: 'USER_MODAL_OPERATE',
			open: false
		})
	}
}

export function* activePageUser(action) {

	try {
		let param = { ...action.table.search,
			page: action.activePage,
			size: action.table.size
		}
		let result = yield call(getUserAPI, param)

		yield call(updateUser, result)

	} catch (error) {}
}