import {createAction} from 'redux-actions';

export const GET_SLIDER_DATA_REQUEST = '[SLIDER_DATA] GET_SLIDER_DATA_REQUEST';
export const GET_SLIDER_DATA_SUCCESS = '[SLIDER_DATA] GET_SLIDER_DATA_SUCCESS';
export const GET_SLIDER_DATA_FAILED = '[SLIDER_DATA] GET_SLIDER_DATA_FAILED';


export const getSliderDataRequest = createAction(GET_SLIDER_DATA_REQUEST);
export const getSliderDataSuccess = createAction(GET_SLIDER_DATA_SUCCESS);
export const getSliderDataFailed = createAction(GET_SLIDER_DATA_FAILED);