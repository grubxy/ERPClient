export const construction = (state = {}, action) => {
  switch (action.type) {
    case 'CONSTRUCTION_SET':
      return {...action.data
      }
    default:
      return state
  }
}

export const technics = (state = [], action) => {
  switch (action.type) {
    case 'TECHNICS_UPDATE':
      return {...state,
        ...action.data
      }
    default:
      return state
  }
}