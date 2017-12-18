export const constructionAll = (state = {}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_SET':
      return { ...action.data
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
      return {
        open: true
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