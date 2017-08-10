const initialState = {
  income: '',
  selectIncomePass: false,
  incomePass: false,
}

const incomeReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SELECT_INCOME_PASS':
      return {
        ...state,
        selectIncomePass: action.value
      }
    case 'INCOME_PASS':
      return {
        ...state,
        incomePass: action.value
      }
    case 'INCOME':
      return {
        ...state,
        income: action.value
      }
    default:
      return state
  }
}

export default incomeReducer
