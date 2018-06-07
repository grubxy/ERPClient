const defaultModal = {
  flow: false,
  construction: false,
  compl: false,
  flowRow: {},
  constructionRow: {},
  dropDownProduct: [],
  dropDownSeq: [],
  dropDownStaff: []
}

export const flowModal = (state = defaultModal, action) => {
  switch (action.type) {
    case 'FLOW_MODAL_OPERATE':
      return { ...state,
        ...action.data
      }
    case 'FLOW_MODAL_CHANGE':
      return { ...state,
        [action.name]: action.value
      }
    case 'FLOW_MODAL_CLEAR':
      return defaultModal
    default:
      return state
  }
}

const defaultFlowTable = {
  content: [],
  headers: {
    id: {
      title: '生产批次'
    },
    name: {
      title: '产品名称'
    },
    dst: {
      title: '计划数目'
    },
    cmp: {
      title: '完成数目'
    },
    err: {
      title: '次品数目'
    },
    owner: {
      title: '制单人'
    },
    time: {
      title: '制单时间'
    },
    button_list: {
      title: ''
    }
  },
  selectable: true,
  showFooter: true,
  totalPages: 1
}

export const flowTable = (state = defaultFlowTable, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTION_TABLE':
      return { ...state,
        content: action.data
      }
    case 'UPDATE_PRODUCTION_TABLE_CHANGE':
      return { ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}


const defaultSeqinfoTable = {
  content: [],
  headers: {
    index: {
      title: '工序序号'
    },
    name: {
      title: '工序名称'
    },
    seqCost: {
      title: '单价'
    },
    dst: {
      title: '待生产'

    },
    doing: {
      title: '在生产'
    },
    cmpl: {
      title: '完工'
    },
    err: {
      title: '次品'
    }
  },
  selectable: false,
  showFooter: false
}

export const seqinfoTable = (state = defaultSeqinfoTable, action) => {
  switch (action.type) {
    case 'UPDATE_SEQINOF_TABLE':
      return { ...state,
        content: action.data
      }
    default:
      return state
  }
}

const defaultConstruction = {
  content: [],
  headers: {
    id: {
      title: '施工单号'
    },
    dst: {
      title: '计划'
    },
    cmpl: {
      title: '完工'
    },
    err: {
      title: '次品'
    },
    staff: {
      title: '工人'
    },
    status: {
      title: '工单状态'
    },
    stime: {
      title: '派单时间'
    },
    button_list: {
      title: ''
    }
  },
  selectable: false,
  showFooter: false
}

export const constructionTable = (state = defaultConstruction, action) => {
  switch (action.type) {
    case 'UPDATE_CONSTRUCTION_TABLE':
      return { ...state,
        content: action.data
      }
    default:
      return state
  }
}