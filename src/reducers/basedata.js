const defaultModal = {
  product: false,
  seq: false,
  staff: false,
  productDel: false,
  seqDel: false,
  staffDel: false,
  productRow: {},
  seqRow: {},
  staffRow: {},
  dropDown: {}
}

export const basedataModal = (state =
  defaultModal, action) => {
  switch (action.type) {
    case 'BASEDATA_MODAL_OPERATE':
      return {
        ...state,
        ...action.data
      }
    case 'BASEDATA_MODAL_CLEAR':
      return defaultModal
    case 'BASEDATA_MODAL_CHANGE':
      return { ...state,
        [action.name]: action.value
      }
    case 'BASEDATA_MODAL_STAFFDROPDOWN':
      return { ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const productTable = (state = {
  content: [],
  headers: {
    id: {
      title: '产品编号'
    },
    name: {
      title: '产品名称'
    },
    button_list: {
      title: ''
    }
  },
  selectable: true,
  showFooter: true,
  search: {},
  totalPages: 0,
  activePage: 0,
  size: 20
}, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_TABLE':
      return { ...state,
        content: action.data
      }
    case 'UPDATE_PRODUCT_TABLE_CHANGE':
      return { ...state,
        [action.name]: action.value
      }
    case 'UPDATE_PRODUCT_TABLE_SEARCH_CHANGE':
      return { ...state,
        search: { ...state.search,
          [action.name]: action.value
        }
      }
    default:
      return state
  }
}

export const seqTable = (state = {
  content: [],
  headers: {
    index: {
      title: '序号'
    },
    name: {
      title: '工序名'
    },
    cost: {
      title: '制作单价'
    },
    button_list: {
      title: ''
    }
  },
  selectable: true,
  showFooter: false,
}, action) => {
  switch (action.type) {
    case 'UPDATE_SEQ_TABLE':
      return { ...state,
        content: action.data
      }
    default:
      return state
  }
}

export const staffTable = (state = {
  content: [],
  headers: {
    name: {
      title: '员工'
    },
    button_list: {
      title: ''
    }
  },
  selectable: false,
  showFooter: false,
}, action) => {
  switch (action.type) {
    case 'UPDATE_STAFF_TABLE':
      return { ...state,
        content: action.data
      }
    default:
      return state
  }
}