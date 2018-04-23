import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'

import {
  addUserAPI,
  getUserListAPI,
  delUserAPI
} from '../api/BaihuiServerAPI'


// 生产流程
// 生产单
// function* productinoTablePage(action) {
//   let page = action.table.number
//   let size = action.table.size
//   let totalPages = action.table.totalPages
//   let data = ''

//   console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
//   try {
//     switch (action.method) {
//       case 'goFirst':
//         data = yield call(getProduction, 0, size)
//         break
//       case 'goPrev':
//         data = yield call(getProduction, Math.max(0, Math.max(0, page - 1)), size)
//         break
//       case 'goNext':
//         data = yield call(getProduction, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
//         break
//       case 'goLast':
//         data = yield call(getProduction, Math.max(0, totalPages - 1), size)
//         break
//       default:
//         console.log("error method")
//         break
//     }
//     yield put({
//       type: 'PRODUCTION_UPDATE',
//       data: data
//     })
//   } catch (error) {
//     console.log("error");
//   }
// }



// 角色枚举
const roles = ['系统管理员', '流程管理员',
  '仓库管理员'
]

function* initUser() {
  try {
    // 获取新列表
    let result = yield call(getUserListAPI)
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
        single_button: 'delete'
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

function* delUser(action) {
  console.log(JSON.stringify(action.row))
  try {
    yield call(delUserAPI, action.row.id)
    yield call(initUser)
  } catch (error) {

  }
}

function* addUser(action) {
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
    yield call(addUserAPI, data)
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

function* mySaga() {
  yield takeEvery("USER_ADD", addUser)
  yield takeEvery("USER_INIT", initUser)
  yield takeEvery("USER_DEL", delUser)
}

export default mySaga