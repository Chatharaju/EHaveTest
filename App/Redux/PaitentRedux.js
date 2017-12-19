import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  paitentRequest: ['MRN'],
  paitentSuccess: ['paitentData'],
  paitentFailure: null
})

export const PaitentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  MRN: null,
  paitentData: null,
  fetching: null,
  error: null,
})

/* ------------- Reducers ------------- */

// request for Paitent
export const request = (state, { MRN }) =>
    state.merge({ fetching: true, MRN, paitentData: null })

// successful Paitent data
export const success = (state, action) => {
  const { paitentData } = action
  return state.merge({ fetching: false, error: null, paitentData })
}

// failed to get paitent data
export const failure = (state) =>
  state.merge({ fetching: false, error: true, paitentData: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAITENT_REQUEST]: request,
  [Types.PAITENT_SUCCESS]: success,
  [Types.PAITENT_FAILURE]: failure
})
