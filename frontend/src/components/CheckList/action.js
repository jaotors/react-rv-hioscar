export const checkChange = value => ({type: 'CHECK_PLAN_CHANGE', value: value})
export const setPlan = (id, value) => ({type: 'SET_PLAN', plan: id, value: value})
export const asyncDoneChange = (caseNum, seconds) => ({type: 'ASYNC_DONE_COMPONENT', caseNum, seconds})