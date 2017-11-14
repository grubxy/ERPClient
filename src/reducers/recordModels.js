const recordModels = (state={}, action)=> {
  switch(action.type) {
    case 'RECORD_MODEL_CLOSE':
     return {
     	modelvisible: false
     }
    case 'RECORD_MODEL_OPEN':
     return {
     	modelvisible: true
     }
    case 'RECORD_MODEL_CANCLE':
     return {
     	modelvisible: false
     }
    case 'RECORD_MODEL_CONFIRM':
     return {
     	modelvisible: false
     }
    default:
     return state
  }
}
export default recordModels