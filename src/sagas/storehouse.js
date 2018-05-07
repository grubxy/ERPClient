import {
	call,
	put
} from 'redux-saga/effects'
import {
	getConstructionByStatusApi,
	patchConstructionStatusApi,
	postHouseApi,
	getHouseApi
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
				cmplCount: tmp.cmplCount,
				errCount: tmp.errCount,
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
		let result = yield call(getHouseApi, 0, 0)

		let dropDown = []
		for (let tmp of result) {
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

			let body = {
				status: 4, // 入库完毕
				idHouse: action.data.idHouse,
				error: 0,
				cmpl: 0
			}

			// 发送入库请求
			yield call(patchConstructionStatusApi, action.data.constructionRow.cid, body)

			// // 更新入库表

			yield call(updateStoreConstrTable, 3)

			// 关闭模态框
			yield put({
				type: 'STOREHOUSE_CONSTRUCTION_MODAL_OPERATE',
				data: {
					constructionIn: false
				}
			})

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

/*** 仓库配置 ***/

// 初始化
export function* initHouseInfo() {
	console.log('init house info')
	yield call(updateHouseInfoTable)
}

// 更新仓库信息
export function* updateHouseInfoTable() {
	try {
		// 获取数据 
		let result = yield call(getHouseApi, 0, 0)

		let houseTableList = []
		for (let tmp of result) {
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

	} catch (error) {

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

		// 更新
		yield call(updateHouseInfoTable)
	} catch (error) {

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