import { combineReducers } from "redux";
import modal from "./modal";
import textFilter from "./textFilter";
import workout from "./workout";

export default combineReducers({
  textFilter,
  workout,
  modal,
});