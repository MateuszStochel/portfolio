import asyncReducer from "./reducers/asyncReducer";
import { combineReducers } from "redux";

export default combineReducers({
  async: asyncReducer,
});
