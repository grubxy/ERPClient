import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'
import {
  getEmployee,
  getAllEmployee,
  delEmployee,
  addEmployee
} from '../api/employee'
import {
  addMaterial,
  delMaterial,
  getMaterial,
  getAllTechnics,
  getAllMaterial,
  getTechnics,
  addTechnics,
  delTechnics
} from '../api/manage'

import {
  addUserAPI,
  getUserListAPI
} from '../api/BaihuiServerAPI'

import {
  getProduction,
  addProduction
} from '../api/production'

import {
  addConstruction,
  getAllConstruction
} from '../api/construction'

function* fetchRecordModel(action) {
  console.log("xddfsdfsdf");
}

function* login(action) {
  console.log("log start password: " + action.user.password + " username: " + action.user.username)
  axios.post('/auth', {
      username: action.user.username,
      password: action.user.password
    })
    .then(function(response) {
      console.log(response)
      console.log(response.data.token)
    })
    .catch(function(error) {
      console.log(error)
    })

}

function* recordTableBack(action) {
  console.log("back..." + action.page)
}

function* recordTableForword(action) {
  console.log("forword..." + action.page)
}

function* productionTableSelect(action) {
  console.log("bread action get id:" + action.data.pid)
  // 设置选中工程信息
  yield put({
    type: 'CONSTRUCTION_SET',
    data: action.data
  })
  // 请求获取依赖信息
  let data = ''
  try {
    // 工艺
    data = yield call(getAllTechnics)
    yield put({
      type: 'CONSTRUCTION_TECHNICS_UPDATE',
      data
    })
    // 雇员
    data = yield call(getAllEmployee)
    yield put({
      type: 'CONSTRUCTION_EMPLOYEE_UPDATE',
      data
    })

    // 材料
    data = yield call(getAllMaterial)
    yield put({
      type: 'CONSTRUCTION_MATERIAL_UPDATE',
      data
    })

    // 关闭主目录，打开子目录
    yield put({
      type: 'PRODUCTION_BREAD',
      subActive: true
    })
  } catch (error) {
    console.log('productionTableSelect error')
  }
}

function* payTableSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page:" + page + " size:" + size + " method: " + action.method + ' total:' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getEmployee, 0, size)
        break
      case 'goPrev':
        data = yield call(getEmployee, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getEmployee, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getEmployee, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'PAY_TABLE_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }
}

// 物料分页
function* materialSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getMaterial, 0, size)
        break
      case 'goPrev':
        data = yield call(getMaterial, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getMaterial, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getMaterial, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'MATERIAL_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }

}

// 工艺分页 
function* technicsSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getTechnics, 0, size)
        break
      case 'goPrev':
        data = yield call(getTechnics, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getTechnics, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getTechnics, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'TECHNICS_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }
}

// 工艺 - 删除
function* technicsDel(action) {
  console.log("technics del:" + action.data.tcode + action.data.name)
  let data = ''
  try {
    yield call(delTechnics, action.data)
    data = yield call(getTechnics, 0, action.size)
  } catch (error) {
    console.log(error)
  }
  yield put({
    type: 'TECHNICS_UPDATE',
    data
  })
}

// 工艺 - 添加
function* technicsAdd(action) {
  let data = ''
  try {
    yield call(addTechnics, action.data.name, )
    data = yield call(getTechnics, 0, action.size)
    yield put({
      type: 'TECHNICS_MODEL_CLOSE'
    })
    yield put({
      type: 'TECHNICS_UPDATE',
      data
    })
  } catch (error) {
    console.log(error)
  }
}


// 雇员分页
function* employeeSelect(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getEmployee, 0, size)
        break
      case 'goPrev':
        data = yield call(getEmployee, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getEmployee, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getEmployee, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'EMPLOYEE_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }
}

//  物料 - 删除
function* materialDel(action) {
  console.log("manage del:" + action.data.code + action.data.name + action.data.spec + 'size: ' + action.size)
  let data = ''
  try {
    yield call(delMaterial, action.data)
    data = yield call(getMaterial, 0, action.size)
  } catch (error) {
    console.log(error)
  }
  yield put({
    type: 'MATERIAL_UPDATE',
    data
  })
}

// 物料 - 添加
function* materialAdd(action) {
  let data = ''
  console.log("manage add:" + action.data.name + action.data.spec + 'size: ' + action.size)
  try {
    yield call(addMaterial, action.data.name, action.data.spec)
    data = yield call(getMaterial, 0, action.size)
    yield put({
      type: 'MATERIAL_MODEL_CLOSE'
    })
    yield put({
      type: 'MATERIAL_UPDATE',
      data
    })
  } catch (error) {
    console.log(error)
  }
}

// 员工 - 新增
function* employeeAdd(action) {
  let data = ''
  console.log("emplyee add:" + action.data.name)
  try {
    yield call(addEmployee, action.data.name)
    data = yield call(getEmployee, 0, action.size)
    yield put({
      type: 'EMPLOYEE_MODEL_CLOSE'
    })
    yield put({
      type: 'EMPLOYEE_UPDATE',
      data
    })
  } catch (error) {
    console.log(error)
  }
}

//  员工 - 删除
function* employeeDel(action) {
  console.log("emplyee del:" + action.data.eid + action.data.name)
  let data = ''
  try {
    yield call(delEmployee, action.data)
    data = yield call(getEmployee, 0, action.size)
  } catch (error) {
    console.log(error)
  }
  yield put({
    type: 'EMPLOYEE_UPDATE',
    data
  })
}

// 生产流程
// 生产单
function* productinoTablePage(action) {
  let page = action.table.number
  let size = action.table.size
  let totalPages = action.table.totalPages
  let data = ''

  console.log("page: " + page + " size: " + size + " method: " + action.method + ' totalPages: ' + totalPages)
  try {
    switch (action.method) {
      case 'goFirst':
        data = yield call(getProduction, 0, size)
        break
      case 'goPrev':
        data = yield call(getProduction, Math.max(0, Math.max(0, page - 1)), size)
        break
      case 'goNext':
        data = yield call(getProduction, Math.min(page + 1, Math.max(0, totalPages - 1)), size)
        break
      case 'goLast':
        data = yield call(getProduction, Math.max(0, totalPages - 1), size)
        break
      default:
        console.log("error method")
        break
    }
    yield put({
      type: 'PRODUCTION_UPDATE',
      data: data
    })
  } catch (error) {
    console.log("error");
  }
}

// 新增生产流程
function* productionAdd(action) {
  let data = ''
  console.log("production add:" + action.data.name + 'size: ' + action.size)
  try {
    yield call(addProduction, action.data.name, action.data.dst_counts, action.data.date, action.data.detail)
    data = yield call(getProduction, 0, action.size)
    yield put({
      type: 'PRODUCTION_MODEL_CLOSE'
    })
    yield put({
      type: 'PRODUCTION_UPDATE',
      data
    })
  } catch (error) {
    console.log(error)
  }
}

// 新增施工单
function* constructionAdd(action) {
  console.log('construction:' + JSON.stringify(action.data))
  try {
    // 新增
    yield call(addConstruction, action.data)
    // 刷新列表
    let data = yield call(getAllConstruction)
    yield put({
      type: 'CONSTRUCTION_SET_CONSTRUCTS',
      data: data
    })
    yield put({
      type: 'CONSTRUCTION_MODEL_CLOSE'
    })
  } catch (error) {
    console.log(error)
  }
}

function* productionBread(action) {
  if (action.subActive == false) {
    try {
      let data = yield call(getProduction, 0, action.size)
      yield put({
        type: 'PRODUCTION_UPDATE',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }
  yield put({
    type: 'PRODUCTION_BREAD',
    subActive: action.subActive
  })
}

// 角色枚举
const roles = ['流程管理员',
  '仓库管理员'
]

function* initUser(action) {
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
    // 获取新表单
    let result = yield call(getUserListAPI)

    let userTableList = []

    for (let tmp of result) {
      userTableList.push({
        username: tmp.username,
        owner: tmp.owner,
        role: roles[tmp.rid - 1],
        single_button: 'del'
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
}

export default mySaga