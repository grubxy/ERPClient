export const basedataModal = (state = {
  product: false,
  seq: false,
  staff: false
}, action) => {
  switch (action.type) {
    case 'BASEDATA_MODAL_OPERATE':
      if (action.which === 'product') {
        return { ...state,
          product: action.data
        }
      } else if (action.which === 'seq') {
        return { ...state,
          seq: action.data
        }
      } else if (action.which === 'staff') {
        return { ...state,
          staff: action.data
        }
      } else {
        return state
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
    },
    selectable: true,
    showFooter: true
  }
}, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_TABLE':
      return { ...state,
        content: action.data
      }
    default:
      return state
  }
}

export const seqTable = (state = {
  content: [],
  headers: {
    id: {
      title: '序号'
    },
    name: {
      title: '工序名'
    },
    cost: {
      title: '制作单价'
    },
    selectable: true,
    showFooter: false,
  }
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
    }
  },
  selectable: true,
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