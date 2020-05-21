import { combineReducers } from "redux";
// import userReducer from "./userReducer";
import buttonReducer from "./buttonReducer";
const rootReducer = combineReducers({
  // users: userReducer
  news: buttonReducer
});

export default rootReducer;
