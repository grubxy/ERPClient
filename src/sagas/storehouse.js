import React from 'react'
import {
	call,
	put
} from 'redux-saga/effects'
import {
	getConstructionByStatusApi,
	patchConstructionStatusApi,
	postHouseApi,
	getHouseApi,
	getHouseOrigin,
	postHouseOrigin,
	deleteHouseOrigin
} from '../api/BaihuiServerAPI'
import {
	portalTrig,
	delayTime
} from './portal'

function* updateStoreConstrTable(result) {

	try {
		let constructionTable = []

		for (let tmp of result.content) {

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
				yield call(portalTrig, 400, '系统状态错误', delayTime)
			}

			constructionTable.push({
				cid: tmp.idConstruct,
				productName: tmp.production.product.productName,
				staff: tmp.staff.staffName,
				status: tmp.enumConstructStatus.desc,
				srcMaterial: tmp.seq.srcMaterial.name,
				dstMaterial: tmp.seq.dstMaterial.name,
				dstCount: tmp.dstCount,
				managerName: tmp.production.owner,
				time: new Date(tmp.sdate).toLocaleString(),
				button_list: [{
					color: 'teal',
					method: method,
					content: content
				}]
			})
		}

		// 更新表单
		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE',
			data: constructionTable
		})

		// 更新activepage total size
		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})


	} catch (error) {
		yield call(portalTrig, 400, '更新表单失败', delayTime)
	}
}

// 初始化整个页面
export function* initStoreHouse(action) {

	try {
		let param = {
			page: 0,
			status: 1,
			size: action.sizeC
		}

		console.log(JSON.stringify(action))

		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateStoreConstrTable, result)

		result = yield call(getHouseApi, {
			page: 0,
			size: action.sizeO
		})

		yield call(updateHouseOriginTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}

// 工单搜索
export function* searchStoreHouseConst(action) {
	try {
		// 更新表单信息
		yield put({
			type: 'STORE_UPDATE_CONSTRUCTION_TABLE_SEARCH_CHANGE',
			name: action.name,
			value: action.value
		})

		let param = { ...action.table.search,
			[action.name]: action.value,
			page: 0,
			size: action.table.size
		}

		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateStoreConstrTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 工单状态选择
export function* selectStoreHouseConstr(action) {
	try {
		let param = { ...action.table.search,
			status: action.status,
			page: 0,
			size: action.table.size
		}

		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateStoreConstrTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 工单分页
export function* activePageStoreHouseConst(action) {
	try {
		let param = { ...action.table.search,
			page: action.activePage,
			size: action.table.size
		}
		let result = yield call(getConstructionByStatusApi, param)

		yield call(updateStoreConstrTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

export function* storeConstrAction(action) {

	try {
		// 清空模态框内容
		yield put({
			type: 'STOREHOUSE_CONSTRUCTION_MODAL_CLEAR'
		})

		// 判断处理类型 待入库or待出库
		if (action.method === 'out') {
			// 出库

			// 拷贝行内容并打开模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionOut: true,
					constructionRow: action.row
				}
			})

		} else if (action.method === 'in') {
			// 入库

			// 仓库下拉dropdown内容设置
			let result = yield call(getHouseApi, {
				page: 0,
				size: 0
			})

			let dropDown = []
			for (let tmp of result.content) {
				dropDown.push({
					key: tmp.idHouse,
					text: tmp.houseName,
					value: tmp.idHouse
				})
			}

			// 拷贝行内容并打开模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionIn: true,
					constructionRow: action.row,
					houseDropDown: dropDown
				}
			})

		}
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
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

			// 关闭模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionIn: false
				}
			})

			let body = {
				status: 4, // 入库完毕
				idHouse: action.data.idHouse,
				error: 0,
				cmpl: 0
			}

			// 发送入库请求
			yield call(patchConstructionStatusApi, action.data.constructionRow.cid, body)

			// 更新入库表
			let result = yield call(getConstructionByStatusApi, { ...action.tableC.search,
				status: 3,
				page: 0,
				size: action.tableC.size
			})

			yield call(updateStoreConstrTable, result)

		} else if (action.method === 'out') {

			console.log('出库')

			// 关闭模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionOut: false
				}
			})

			// 构造请求，设置工单状态
			let body = {
				status: 2, // 制作过程中
				idHouse: 0,
				error: 0,
				cmpl: 0
			}

			yield call(patchConstructionStatusApi, action.data.constructionRow.cid, body)

			// 更新等出库表
			let result = yield call(getConstructionByStatusApi, { ...action.tableC.search,
				page: 0,
				size: action.tableC.size,
				status: 1
			})
			yield call(updateStoreConstrTable, result)
		}

		let result = yield call(getHouseApi, {
			page: 0,
			size: action.tableO.size
		})

		yield call(updateHouseOriginTable, result)


	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
	// 构造请求

	// 发送请求，设置工单状态

	// 更新工单表

	// 更新仓库表

}

/*** 仓库配置 ***/

function* updateHouseInfoTable(result) {

	try {
		let houseTableList = []
		for (let tmp of result.content) {
			houseTableList.push({
				id: tmp.idHouse,
				name: tmp.houseName,
				desc: tmp.houseDesc,
				button_list: [{
					method: 'delete',
					icon: 'delete',
					color: 'gray'
				}]
			})
		}

		// 更新表格
		yield put({
			type: 'STOREHOUSE_UPDATE_HOUSEINFO_TABLE',
			data: houseTableList
		})

		// 更新activepage total size
		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})
	} catch (error) {
		yield call(portalTrig, 400, '更新仓库表单失败', delayTime)
	}
}

// 初始化
export function* initHouseInfo(action) {
	try {
		let result = yield call(getHouseApi, {
			page: 0,
			size: action.size
		})

		yield call(updateHouseInfoTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 分页
export function* activeHouseInfoPage(action) {
	try {
		let param = { ...action.table.search,
			page: action.activePage,
			size: action.table.size
		}

		let result = yield call(getHouseApi, param)

		yield call(updateHouseInfoTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}

// 增加
export function* addHouseInfo(action) {
	console.log('add house')
	try {
		let body = {
			houseName: action.data.houseName,
			houseDesc: action.data.houseDesc
		}
		yield call(postHouseApi, body)

		// 清空模态框
		yield put({
			type: 'STOREHOUSE_HOUSEINFO_MODAL_CLEAR'
		})

		let result = yield call(getHouseApi, {
			page: 0,
			size: action.table.size
		})

		yield call(updateHouseInfoTable, result)

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}

// action弹出
export function* actionHouseInfo(action) {
	if (action.method === 'delete') {
		yield put({
			type: 'STOREHOUSE_HOUSEINFO_MODAL_OPERATE',
			data: {
				houseConfirm: true,
				houseRow: action.row
			}
		})
	}
}

// action确认
export function* confirmHouseInfoAction(action) {

	// 删除请求 

	// 清空
	yield put({
		type: 'STOREHOUSE_HOUSEINFO_MODAL_CLEAR'
	})
}

/*** 仓库物料 ***/
function* updateHouseOriginTable(result) {

	try {
		let houseOriginTable = []

		for (let tmp of result.content) {
			let rOrigins = yield call(getHouseOrigin, tmp.idHouse)
			let detail = []
			for (let tmpOrigin of rOrigins) {
				let name = tmpOrigin.material.name
				let counts = tmpOrigin.counts
				// 通过 array push的方式加上<br/>渲染！！！
				detail.push(`${name} : ${counts}`)
				detail.push(<br />)
			}
			houseOriginTable.push({
				id: tmp.idHouse,
				hname: tmp.houseName,
				detail: detail
			})
		}

		// 更新表格
		yield put({
			type: 'STOREHOUSE_UPDATE_HOUSEORIGIN_TABLE',
			data: houseOriginTable
		})

		// 更新activepage total size
		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'totalPages',
			value: result.totalPages
		})

		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'activePage',
			value: result.number
		})

		yield put({
			type: 'STOREHOUSE_HOUSEINFO_TABLE_CHANGE',
			name: 'size',
			value: result.size
		})
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}


// 分页
export function* activeHouseOriginPage(action) {}


// 打开modal
export function* openHouseOriginModal(action) {
	console.log('open :' + action.method)
	try {
		// 如果是输入框
		if (action.method === 'input') {

			// 获取仓库下拉信息 
			let result = yield call(getHouseApi, {
				page: 0,
				size: 0
			})

			if (result.content.length === 0) {
				yield call(portalTrig, 400, '没有仓库信息', delayTime)
				return
			}

			let dropDown = []
			for (let tmp of result.content) {
				dropDown.push({
					key: tmp.idHouse,
					text: tmp.houseName,
					value: tmp.idHouse
				})
			}

			yield put({
				type: 'STOREHOUSE_DROPDOWN_UPDATE',
				data: {
					house: dropDown
				}
			})

			yield put({
				type: 'STOREHOUSE_HOUSEORIGIN_MODAL_OPERATE',
				data: {
					input: true
				}
			})

		} else if (action.method === 'output') {

			// 获取仓库下拉信息 
			let result = yield call(getHouseApi, {
				page: 0,
				size: 0
			})
			if (result.content.length === 0) {
				yield call(portalTrig, 400, '没有仓库信息', delayTime)
				return
			}
			let dropDown = []
			for (let tmp of result.content) {
				dropDown.push({
					key: tmp.idHouse,
					text: tmp.houseName,
					value: tmp.idHouse
				})
			}

			yield put({
				type: 'STOREHOUSE_DROPDOWN_UPDATE',
				data: {
					house: dropDown
				}
			})

			yield put({
				type: 'STOREHOUSE_HOUSEORIGIN_MODAL_OPERATE',
				data: {
					output: true
				}
			})

		} else {

		}
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}
}

// 选中
export function* selectHouseOrigin(action) {
	console.log('select house origin:' + action.value)

	try {
		// 获取物料
		let result = yield call(getHouseOrigin, action.value)

		if (result.length === 0) {
			yield call(portalTrig, 400, '该仓库没有物料', delayTime)
			return
		}

		let dropDown = []
		for (let tmp of result) {
			dropDown.push({
				key: tmp.idOrigin,
				text: tmp.material.name,
				value: tmp.idOrigin
			})
		}

		yield put({
			type: 'STOREHOUSE_DROPDOWN_UPDATE',
			data: {
				origins: dropDown
			}
		})

		yield put({
			type: 'STOREHOUSE_HOUSEORIGIN_INPUTCHANGE',
			name: 'idHouse',
			value: action.value
		})

	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}

// 确认模态框
export function* confirmHouseOrigin(action) {
	console.log('house origin confirm:' + action.data.outCounts)
	try {

		if (action.method === 'input') {
			// 校验类型
			if (isNaN(action.data.inputCounts)) {
				// 提示 
				yield call(portalTrig, 400, '提交的入库数必须为数字', delayTime)
				return
			}
			let body = {
				name: action.data.materialName,
				counts: action.data.inputCounts
			}
			yield call(postHouseOrigin, action.data.idHouseInput, body)

		} else if (action.method === 'output') {
			// 校验类型
			if (isNaN(action.data.outCounts)) {
				// 提示 
				yield call(portalTrig, 400, '提交的出库数必须为数字', delayTime)
				return
			}

			yield call(deleteHouseOrigin, action.data.idHouse, action.data.idOrigin, action.data.outCounts)
		}
		yield put({
			type: 'STOREHOUSE_HOUSEORIGIN_MODAL_CLEAR'
		})

		let result = yield call(getHouseApi, {
			page: 0,
			size: action.tableO.size
		})

		yield call(updateHouseOriginTable, result)
	} catch (error) {
		yield call(portalTrig, error.status, error.data.content, delayTime)
	}

}