import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/index";
import mySaga from "../Sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
),applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
