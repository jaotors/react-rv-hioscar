const initialState = {
  checkPlan: false,
  plan1: false,
  plan2: false,
  plan3: false,
  plan4: false,
}

const checkPlanReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CHECK_PLAN_CHANGE':
      return {
        ...state,
        checkPlan: action.value
      }
    case 'SET_PLAN':
      return {
        ...state,
        [action.plan]: action.value
      }
    default:
      return state
  }
}

export default checkPlanReducer