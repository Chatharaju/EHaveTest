import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import PaitentResultsActions from '../Redux/PaitentResultsRedux'

export function * getPaitentResultData (api, action) {
  const { paitentId } = action
  // make the call to the api
  const response = yield call(api.getPaitentResult)

  if (response.ok) {

    yield put(PaitentResultsActions.paitentResultsRequest(response.data))
  } else {
    yield put(PaitentResultsActions.paitentResultsFailure())
  }
}
