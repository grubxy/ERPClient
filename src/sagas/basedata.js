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

  //
  let data = yield call(getProductApi, 0, 0)

}

export function* selectBaseData(action) {

  // 判断选中类型 

  // 获取对应类型数据 

  // 更新后一级列表数据

  // 再之后几级数据置为空 
}

export function* addProduct(action) {
  // 组装请求体

  // 发送请求

  // 更新产品数据

  // 更新产品对应工序数据(理论新增后为空)


}

export function* addSeq(action) {

}

export function* addDefaultStaff(action) {

}

export function* productAction(action) {

}

export function* seqAction(action) {

}

export function* delDefaultStaff(action) {

}