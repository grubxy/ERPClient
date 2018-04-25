import {
  postProductAPI,
  getProductApi,
  postSeqByProductIdApi,
  postStaffBySeqIdApi,
  getSeqByProductIdApi,
  getStaffBySeqIdApi,
  getStaffDropDownApi
} from '../api/BaihuiServerAPI'
import {
  call,
  put
} from 'redux-saga/effects'

export function* initBaseData() {

  try {
    // 获取产品数据
    let result = yield call(getProductApi, 0, 0)

    let productTableList = []
    for (let tmp of result) {
      productTableList.push({
        id: tmp.idProduct,
        name: tmp.productName,
        button_list: [{
          method: 'delete',
          icon: 'delete',
          color: 'grey'
        }, {
          method: 'add',
          icon: 'add',
          color: 'teal'
        }]
      })
    }

    // 更新产品界面 
    yield put({
      type: 'UPDATE_PRODUCT_TABLE',
      data: productTableList
    })
  } catch (error) {
    // 提示 
  }

}

export function* initSeq(id) {
  // 获取结果
  let result = yield call(getSeqByProductIdApi, id, 0, 0)

  // 更新工序列表
  let seqList = []
  for (let tmp of result) {
    seqList.push({
      id: tmp.idSeq,
      index: tmp.seqIndex,
      name: tmp.seqName,
      cost: tmp.seqCost,
      button_list: [{
        method: 'delete',
        icon: 'delete',
        color: 'grey'
      }, {
        method: 'add',
        icon: 'add',
        color: 'teal'
      }]
    })
  }
  try {
    yield put({
      type: 'UPDATE_SEQ_TABLE',
      data: seqList
    })
  } catch (error) {}
}

export function* initDefaultStaff(id) {
  // 获取结果
  let result = yield call(getStaffBySeqIdApi, id, 0, 0)

  // 更新默认员工列表
  let defaultStaff = []
  for (let tmp of result) {
    defaultStaff.push({
      id: tmp.idStaff,
      name: tmp.staffName,
      button_list: [{
        method: 'delete',
        icon: 'delete',
        color: 'grey'
      }]
    })
  }
  try {
    yield put({
      type: 'UPDATE_STAFF_TABLE',
      data: defaultStaff
    })

  } catch (error) {

  }
}


export function* selectPro(action) {

  // 获取对应类型数据
  console.log('id:' + action.data.id)

  // 更新后一级列表数据
  yield call(initSeq, action.data.id)

  // 清空员工
  yield put({
    type: 'UPDATE_STAFF_TABLE',
    data: []
  })
}

export function* selectSeq(action) {

  // 获取对应id
  yield call(initDefaultStaff, action.data.id)

}

export function* addProduct(action) {

  // 组装请求体
  let body = {
    productName: action.data.productName
  }
  try {
    // 发送请求
    yield call(postProductAPI, body)

    // 关闭模态框
    yield put({
      type: 'BASEDATA_MODAL_CLEAR'
    })

    // 更新产品数据
    yield call(initBaseData)

    // 更新产品对应工序数据(理论新增后为空)}
    yield put({
      type: 'UPDATE_SEQ_TABLE',
      data: []
    })

    yield put({
      type: 'UPDATE_STAFF_TABLE',
      data: []
    })

  } catch (error) {

  }
}
export function* addSeq(action) {

  // 组装请求体
  let id = action.data.productRow.id
  let body = {
    seqName: action.data.seqName,
    seqCost: action.data.seqPrice
  }
  try {
    // 发送请求
    yield call(postSeqByProductIdApi, id, body)

    // 更新工序
    yield call(initSeq, id)

    // 关闭模态框
    yield put({
      type: 'BASEDATA_MODAL_CLEAR'
    })
    // 后一级置空
    yield put({
      type: 'UPDATE_STAFF_TABLE',
      data: []
    })

  } catch (error) {

  }
}

export function* addDefaultStaff(action) {

  // 组装请求体
  let id = action.data.seqRow.id
  let body = {
    idStaff: action.data.staffId
  }

  try {
    // 发送请求
    yield call(postStaffBySeqIdApi, id, body)

    // 更新员工 
    yield call(initDefaultStaff, id)

    // 关闭模态框
    yield put({
      type: 'BASEDATA_MODAL_CLEAR'
    })

  } catch (error) {

  }


}

export function* productAction(action) {

  // 判断是哪个action
  if (action.method === 'add') {
    // 清空模态框数据
    yield put({
      type: 'BASEDATA_MODAL_CLEAR'
    })
    //打开工序模态框
    yield put({
      type: 'BASEDATA_MODAL_OPERATE',
      data: {
        seq: true,
        productRow: action.row
      }
    })

  } else if (action.method === 'delete') {

  }

  // 删除按钮 

  // 添加按钮，打开模态框，并复制row数据

}

export function* seqAction(action) {

  // 判断是哪个action
  if (action.method === 'add') {
    // 清空模态框数据
    yield put({
      type: 'BASEDATA_MODAL_CLEAR'
    })
    // 获取员工下拉菜单列表(在职员工)
    let result = yield call(getStaffDropDownApi, 0, 0, 0)
    let dropDown = []
    for (let tmp of result) {
      dropDown.push({
        key: tmp.idStaff,
        text: tmp.staffName,
        value: tmp.idStaff
      })
    }
    // 更新数据
    yield put({
      type: 'BASEDATA_MODAL_STAFFDROPDOWN',
      data: {
        dropDown: dropDown
      }
    })

    // 打开默认员工模态框
    yield put({
      type: 'BASEDATA_MODAL_OPERATE',
      data: {
        staff: true,
        seqRow: action.row
      }
    })
  } else if (action.method === 'delete') {

  }

  // 删除按钮 

  // 添加按钮，打开模态框，并复制row数据
}

export function* delDefaultStaff(action) {

  //发送请求
}