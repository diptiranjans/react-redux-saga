import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";

import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import rootSaga from "../sagas/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
