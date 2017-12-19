import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  paitentResultsRequest: ['paitentId'],
  paitentResultsSuccess: ['paitentData'],
  paitentResultsFailure: null
})

export const PaitentResultsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    paitentId: null,
  paitentResult: null,
  fetching: null,
  error: null,
})

/* ------------- Reducers ------------- */

// request for Paitent
export const request = (state, { paitentId }) =>
    state.merge({ fetching: true, paitentId, paitentResult: null })

// successful Paitent data
export const success = (state, action) => {
  const { paitentResult } = action
    // console.error(paitentResult)
    return state.merge({ fetching: false, error: null, paitentResult: paitentResult })
}

// failed to get paitent data
export const failure = (state) =>
  state.merge({ fetching: false, error: true, paitentResult: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAITENT_RESULTS_REQUEST]: request,
  [Types.PAITENT_RESULTS_SUCCESS]: success,
  [Types.PAITENT_RESULTS_FAILURE]: failure
})
