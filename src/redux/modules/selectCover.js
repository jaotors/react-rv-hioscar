const initialState = {
  coverInput: 0,
}

const selectCoverReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SELECT_COVER_CHANGE':
      return {
        ...state,
        coverInput: action.value
      }
    default:
      return state
  }
}

export default selectCoverReducer