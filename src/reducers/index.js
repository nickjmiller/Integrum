import { combineReducers } from "redux";
import textFilter from "./textFilter";
import workout from "./workout";

export default combineReducers({
  textFilter,
  workout,
});