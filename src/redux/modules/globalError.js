const initialState = {
  error: []
}

const ADD_GLOBAL_ERROR = 'ADD_GLOBAL_ERROR'
const REMOVE_GLOBAL_ERROR = 'REMOVE_GLOBAL_ERROR'
export const addGlobalErr = error => ({ type: ADD_GLOBAL_ERROR, error: error })
export const removeGlobalErr = error => ({ type: REMOVE_GLOBAL_ERROR, error: error })

const globalErrorReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_GLOBAL_ERROR:
      return {
        ...state,
        error: state.error.concat(action.error)
      }
    case REMOVE_GLOBAL_ERROR:
      return {
        ...state,
        error: state.error.filter(err => {
          return err !== action.error
        })
      }
    default:
      return state
  }
}

export default globalErrorReducer