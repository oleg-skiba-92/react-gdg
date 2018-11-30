import {handleActions} from 'redux-actions';

import {
  GET_SLIDER_DATA_FAILED,
  GET_SLIDER_DATA_REQUEST,
  GET_SLIDER_DATA_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  fetching: false,
  error: '',
};

const handler = {
  [GET_SLIDER_DATA_REQUEST]: (state, action) => ({
    ...state,
    fetching: true,
    error: '',
  }),
  [GET_SLIDER_DATA_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
    fetching: false,
    error: '',
  }),
  [GET_SLIDER_DATA_FAILED]: (state, action) => ({
    ...state,
    fetching: false,
    error: action.payload,
  }),
};

export const reducers = handleActions(handler, initialState);