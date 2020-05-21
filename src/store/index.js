import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
