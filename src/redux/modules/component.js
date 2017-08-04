const initialState = {
  checkComponent: false,
  waitingComponent: false,
  doneComponent: false
}

const componentReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CHANGE_CHECK_COMPONENT':
      return {
        ...state,
        checkComponent: action.value
      }
    case 'CHANGE_WAITING_COMPONENT':
      return {
        ...state,
        waitingComponent: action.value
      }
    case 'CHANGE_DONE_COMPONENT':
      return {
        ...state,
        doneComponent: action.value
      }
    default:
      return state

  }
}

export default componentReducer