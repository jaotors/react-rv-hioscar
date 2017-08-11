const initialState = {
  checkPlan: false
}

const checkPlanReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CHECK_PLAN_CHANGE':
      return {
        checkPlan: action.value
      }
    default:
      return state
  }
}

export default checkPlanReducer