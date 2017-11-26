const production = (state = {
  open: false
}, action) => {
  switch (action.type) {
    case 'PRODUCTION_FORM_CHANGE':
      return Object.assign({}, state, {
        [action.name]: action.value
      })
    case 'PRODUCTION_MODEL_CLOSE':
      return {
        open: false
      }
    case 'PRODUCTION_MODEL_OPEN':
      return {
        open: true
      }
    case 'PRODUCTION_MODEL_CONFIRM':
      return {
        open: false
      }
    default:
      return state
  }
}

export default production