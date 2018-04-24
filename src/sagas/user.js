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

export function* initUser() {
	try {
		// 获取新列表
		let result = yield call(getUserAPI)
		let userTableList = []
		for (let tmp of result) {

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
				button_list: ['delete', 'add']
			})
		}
		// 更新表单 
		yield put({
			type: 'UPDATE_USER_TABLE',
			data: {
				content: userTableList
			}
		})
	} catch (error) {
		// 提示 
	}
}

export function* delUser(action) {
	console.log(JSON.stringify(action.row))
	try {
		if (action.row.icon === 'delete') {
			yield call(deleteUserAPI, action.row.id)
		} else {
			throw '按键不对应'
		}

		yield call(initUser)
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
		yield call(initUser)
	} catch (error) {
		// 关闭modal
		yield put({
			type: 'USER_MODAL_OPERATE',
			open: false
		})
	}
}