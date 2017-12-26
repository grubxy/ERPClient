export const constructionAll = (state = {
  headers: {
    cid: {
      title: '施工单号'
    },
    employee: {
      title: '操作员'
    },
    price: {
      title: '单价'
    },
    sdate: {
      title: '开工日期'
    },
    edata: {
      title: '完工日期'
    },
    dst_counts: {
      title: '开工数量'
    },
    cmpl_counts: {
      title: '完工数量'
    },
    err_counts: {
      title: '报废数量'
    },
    material: {
      title: '物料'
    },
    technics: {
      title: '工艺'
    },
    button_group: {
      title: '处理'
    }
  }
}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_SET':
      return { ...state,
        ...action.data
      }
    case 'CONSTRUCTION_SET_CONSTRUCTS':
      return { ...state,
        constructs: action.data
      }
    default:
      return state
  }
}

export const technicsAll = (state = {}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_TECHNICS_UPDATE':
      return { ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const employeeAll = (state = {}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_EMPLOYEE_UPDATE':
      return { ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const materialAll = (state = {}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_MATERIAL_UPDATE':
      return { ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const addConstructionModel = (state = {
  open: false
}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_MODEL_CLOSE':
      return {
        open: false
      }
    case 'CONSTRUCTION_MODEL_OPEN':
      return { ...state,
        open: true,
        tcode: action.tcode,
        pid: action.pid
      }
    case 'CONSTRUCTION_MODEL_CHANGE':
      return { ...state,
        [action.name]: action.value
      }
    case 'CONSTRUCTION_MODEL_SELECT':
      return { ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}