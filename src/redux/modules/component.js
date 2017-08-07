const initialState = {
  checkComponent: false,
  waitingComponent: false,
  doneComponent: false
}

const CHANGE_CHECK_COMPONENT = 'CHANGE_CHECK_COMPONENT'
const CHANGE_WAITING_COMPONENT = 'CHANGE_WAITING_COMPONENT'
const CHANGE_DONE_COMPONENT = 'CHANGE_DONE_COMPONENT'
export const changeCheck = value => ({ type: CHANGE_CHECK_COMPONENT, value: value })
export const changeWaiting = value => ({ type: CHANGE_WAITING_COMPONENT, value: value })
export const changeDone = value => ({ type: CHANGE_DONE_COMPONENT, value: value })

const componentReducer = (state=initialState, action) => {
  switch(action.type) {
    case CHANGE_CHECK_COMPONENT:
      return {
        ...state,
        checkComponent: action.value
      }
    case CHANGE_WAITING_COMPONENT:
      return {
        ...state,
        waitingComponent: action.value
      }
    case CHANGE_DONE_COMPONENT:
      return {
        ...state,
        doneComponent: action.value
      }
    default:
      return state

  }
}

export default componentReducer