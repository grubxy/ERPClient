import {
  postProductAPI,
  getProductApi,
  postSeqByProductIdApi,
  getSeqByProductIdApi,
  getStaffBySeqId
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

export function* selectPro(action) {

  // 判断选中类型 

  // 获取对应类型数据 

  // 更新后一级列表数据

  // 再之后几级数据置为空 
}

export function* selectSeq(action) {

}

export function* addProduct(action) {

  // 组装请求体

  // 发送请求

  // 更新产品数据

  // 更新产品对应工序数据(理论新增后为空)


}

export function* addSeq(action) {

  // 组装请求体

  // 发送请求

  // 更新工序

  // 后一级置空 

}

export function* addDefaultStaff(action) {

  // 组装请求体

  // 发送请求

  // 更新员工 


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
        seqRow: action.row
      }
    })

  } else if (action.method === 'delete') {

  }

  // 删除按钮 

  // 添加按钮，打开模态框，并复制row数据

}

export function* seqAction(action) {

  // 判断是哪个action

  // 删除按钮 

  // 添加按钮，打开模态框，并复制row数据
}

export function* delDefaultStaff(action) {

  //发送请求
}