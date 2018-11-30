import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {reducers} from "./reducers";
import {watchGetSliderData} from "./saga";

function configureStore() {
  let sagaMiddleware = createSagaMiddleware();
  let store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(watchGetSliderData);

  return store;
}

export const store = configureStore();
