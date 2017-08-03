const initialState = {
  zipcode: '',
  hasError: true
}

const zipCodeReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ZIP_CODE_CHANGE':
      return {
        ...state,
        zipcode: action.zipcode
      }
    case 'HAS_ERROR_CHANGE':
      return {
        ...state,
        hasError: false
      }
    default:
      return state
  }
}

export default zipCodeReducer