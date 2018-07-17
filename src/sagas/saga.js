import {
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

import {
  initUser,
  delUser,
  addUser,
  activePageUser
} from './user'

import {
  initBaseData,
  searchProduct,
  activePageProduct,
  selectPro,
  selectSeq,
  addProduct,
  addSeq,
  addDefaultStaff,
  productAction,
  seqAction,
  delDefaultStaff,
  delBaseConfirm,
  staffAction
} from './basedata'

import {
  initFlow,
  selectFlow,
  actionFlow,
  searchFlow,
  activePageFlow,
  openProductionModal,
  addProduction,
  selectSeqDropDown,
  actionConstruction,
  completeConstruction,
  addConstructionByFlowId
} from './flow'

import {
  addStaff,
  initStaffManage,
  activePageStaff,
  searchStaff,
  searchSchedule,
  activePageSchedule,
  timeSalary,
  activePageSalary,
  searchSalary
} from './staffmanage'

import {
  initConstruction,
  selectConstruction,
  searchConstruction,
  activePageConstruction,
  timeConstruction,
  actionConstructionAll,
  actionConstructionAllComplete
} from './construction'

import {
  initStoreHouse,
  storeConstrAction,
  storeConstrConfirm,
  selectStoreHouseConstr,
  searchStoreHouseConst,
  activePageStoreHouseConst,
  initHouseInfo,
  addHouseInfo,
  actionHouseInfo,
  confirmHouseInfoAction,
  openHouseOriginModal,
  selectHouseOrigin,
  confirmHouseOrigin,
  activeHouseInfoPage,
  activeHouseOriginPage
} from './storehouse'

import {
  login,
  logout
} from './login'

function* mySaga() {

  // 登陆
  yield takeEvery('LOGIN_SUBMIT', login)
  yield takeEvery('LOGIN_OUT', logout)

  // 账户
  yield takeEvery('USER_ADD', addUser)
  yield takeEvery('USER_INIT', initUser)
  yield takeEvery('USER_DEL', delUser)
  yield takeEvery('USER_ACTIVEPAGE', activePageUser)

  // 基础 生产数据配置
  yield takeEvery('BASEDATA_INIT', initBaseData)
  yield takeEvery('PRODUCT_SEARCH', searchProduct)
  yield takeEvery('PRODUCT_ACTIVEPAGE', activePageProduct)
  yield takeEvery('PRODUCT_SELECT', selectPro)
  yield takeEvery('SEQ_SELECT', selectSeq)
  yield takeEvery('PRODUCT_ADD', addProduct)
  yield takeEvery('SEQ_ADD', addSeq)
  yield takeEvery('DEFAULT_STAFF_ADD', addDefaultStaff)
  yield takeEvery('PRODUCT_ACTION', productAction)
  yield takeEvery('SEQ_ACTION', seqAction)
  yield takeEvery('BASEDATE_DELETE', delBaseConfirm)
  yield takeEvery('DEFAULT_STAFF_ACTION', staffAction)

  // 生产流程 
  yield takeEvery('FLOW_INIT', initFlow)
  yield takeEvery('PRODUCTION_SELECT', selectFlow)
  yield takeEvery('PRODUCTION_ACTION', actionFlow)
  yield takeEvery('PRODUCTION_SEARCH', searchFlow)
  yield takeEvery('PRODUCTION_ACTIVEPAGE', activePageFlow)
  yield takeEvery('PRODUCTION_MODAL_OPEN', openProductionModal)
  yield takeEvery('PRODUCTION_ADD', addProduction)
  yield takeEvery('FLOW_MODAL_SEQDROPDOWN', selectSeqDropDown)
  yield takeEvery('CONSTRUCTION_ACTION', actionConstruction)
  yield takeEvery('CONSTRUCTION_COMPLETE', completeConstruction)
  yield takeEvery('CONSTRUCTION_ADD', addConstructionByFlowId)

  // 员工管理
  yield takeEvery('STAFF_MANAGE_INIT', initStaffManage)
  yield takeEvery('STAFF_ADD', addStaff)
  yield takeEvery('STAFF_ACTIVEPAGE', activePageStaff)
  yield takeEvery('STAFF_SEARCH', searchStaff)
  yield takeEvery('SCHEDULE_SEARCH', searchSchedule)
  yield takeEvery('SCHEDULE_ACTIVEPAGE', activePageSchedule)
  yield takeEvery('STAFF_SALARY_SEARCH_TIME', timeSalary)
  yield takeEvery('STAFF_SALARY_ACTIVEPAGE', activePageSalary)
  yield takeEvery('STAFF_SALARY_SEARCH', searchSalary)

  // 工单总览
  yield takeEvery('CONSTRUCTION_INIT', initConstruction)
  yield takeEvery('CONSTRUCTION_SELECT', selectConstruction)
  yield takeEvery('CONSTRUCTION_SEARCH', searchConstruction)
  yield takeEvery('CONSTRUCTION_ACTIVEPAGE', activePageConstruction)
  yield takeEvery('CONSTRUCTION_TIME', timeConstruction)
  yield takeEvery('CONSTRUCTION_ACTION', actionConstructionAll)
  yield takeEvery('CONSTRUCTION_ALL_COMPLETE', actionConstructionAllComplete)

  // 仓库管理
  yield takeEvery('STOREHOUSE_INIT', initStoreHouse)
  yield takeEvery('STOREHOUSE_CONSTRUCTION_ACTION', storeConstrAction)
  yield takeEvery('STOREHOUSE_CONSTRUCTION_CONFIRM', storeConstrConfirm)
  yield takeEvery('STOREHOUSE_CONSTRUCTION_SELECT', selectStoreHouseConstr)
  yield takeEvery('STOREHOUSE_CONSTRUCTION_ACTIVEPAGE', activePageStoreHouseConst)
  yield takeEvery('STOREHOUSE_HOUSEORIGIN_ACTIVEPAGE', activeHouseOriginPage)
  yield takeEvery('STOREHOUSE_CONSTRUCTION_SEARCH', searchStoreHouseConst)
  yield takeEvery('STOREHOUSE_HOUSEINFO_ADD', addHouseInfo)
  yield takeEvery('STOREHOUSE_HOUSEINFO_INIT', initHouseInfo)
  yield takeEvery('STOREHOUSE_HOUSEINFO_ACTIVEPAGE', activeHouseInfoPage)
  yield takeEvery('STOREHOUSE_HOUSEINFO_CONFIRM', confirmHouseInfoAction)
  yield takeEvery('STOREHOUSE_HOUSEINFO_ACTION', actionHouseInfo)
  yield takeEvery('STOREHOUSE_HOUSEORIGIN_MODAL_OPEN', openHouseOriginModal)
  yield takeEvery('STOREHOUSE_HOUSEORIGIN_DROPDOWN_SELECT', selectHouseOrigin)
  yield takeEvery('STOREHOUSE_HOUSEORIGIN_MODAL_CONFIRM', confirmHouseOrigin)

}

export default mySaga