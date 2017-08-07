import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

function* sagaChangeDoneComponent(payload) {
  const { seconds } = payload
  yield delay(seconds * 1000)
  yield put({ type: 'CHANGE_DONE_COMPONENT', value: true })
}

function* rootSaga() {
  yield takeEvery('ASYNC_DONE_COMPONENT', sagaChangeDoneComponent)
}

export default rootSaga