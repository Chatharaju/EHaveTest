import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import PaitentActions from '../Redux/PaitentRedux'

export function * getPaitentData (api) {
  // make the call to the api
  const response = yield call(api.getPaitent)

  if (response.ok) {

    yield put(PaitentActions.paitentSuccess(response.data))
  } else {
    yield put(PaitentActions.paitentFailure())
  }
}
