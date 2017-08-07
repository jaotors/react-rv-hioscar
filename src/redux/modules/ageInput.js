const initialState = {
  ages: {
    myAge: '',
    spouseAge: undefined,
    kidsAge: undefined
  },
  kidsInput: 0,
  hasError: false
}

const ageInputReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'AGES_CHAGE':
      return {
        ...state,
        ages: action.ages
      }
    case 'HAS_ERROR_CHANGE':
      return {
        ...state,
        hasError: action.value
      }
    case 'KIDS_INPUT_CHANGE':
      return {
        ...state,
        kidsInput: action.input
      }
    default:
      return state
  }
}

export default ageInputReducer