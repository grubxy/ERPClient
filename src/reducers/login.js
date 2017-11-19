const loginModel = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_CHANGE':
    state[action.name]=action.value
    return state
    default:
     return state
  }
}
export default loginModel