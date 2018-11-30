import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_SLIDER_DATA_REQUEST, getSliderDataFailed, getSliderDataSuccess} from "./actions";

function fetchData(){
  return fetch('assets/data.json')
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw err;
    })
}

function* getSliderData() {
  try {
    let data = yield call(fetchData);
    yield put(getSliderDataSuccess(data))
  } catch (e) {
    yield put(getSliderDataFailed(e))
  }
}


export function* watchGetSliderData() {
  yield takeLatest(GET_SLIDER_DATA_REQUEST, getSliderData)
}