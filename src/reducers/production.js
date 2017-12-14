export const production = (state = {
  content: [],
  headers: {
    pid: {
      title: '批次号'
    },
    name: {
      title: '批次名'
    },
    dst_counts: {
      title: '计划数量'
    },
    date: {
      title: '开始日期'
    },
    state: {
      title: '状态'
    },
    detail: {
      title: '详情'
    }
  },
  selectable: true,
  number: 0,
  size: 10,
  totalPages: 0
}, action) => {
  switch (action.type) {
    case 'PRODUCTION_UPDATE':
      return {...action.data,
        headers: state.headers,
        selectable: state.selectable
      }
    default:
      return state
  }
}

export const productionModel = (state = {
  open: false
}, action) => {
  switch (action.type) {
    case 'PRODUCTION_MODEL_CLOSE':
      return {
        open: false
      }
      break
    case 'PRODUCTION_MODEL_OPEN':
      return {
        open: true
      }
    case 'PRODUCTION_FORM_CHANGE':
      return {...state,
        [action.name]: action.value
      }
    default:
      return state
  }

}