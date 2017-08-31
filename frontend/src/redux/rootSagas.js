import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getMessage } from './modules/api'

function* sagaChangeDoneComponent(payload) {
  const { caseNum, seconds } = payload
  
  const response = yield call(getMessage, caseNum)
  yield delay(seconds * 1000)
  yield put({ type: 'GET_MESSAGE', value: response.message })
  yield put({ type: 'CHANGE_DONE_COMPONENT', value: true })
}

function* rootSaga() {
  yield takeEvery('ASYNC_DONE_COMPONENT', sagaChangeDoneComponent)
}

export default rootSaga